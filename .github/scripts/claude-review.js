const fs = require("fs");
const https = require("https");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const diff = fs.readFileSync("pr_diff.txt", "utf-8");
const MAX_DIFF_CHARS = 30000;
const truncatedDiff =
  diff.length > MAX_DIFF_CHARS
    ? diff.slice(0, MAX_DIFF_CHARS) + "\n\n[...diff truncated...]"
    : diff;

async function callGemini(prompt) {
  const body = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.2, maxOutputTokens: 4096 }
  });

  const options = {
    hostname: "generativelanguage.googleapis.com",
    path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Gemini API error ${res.statusCode}: ${data}`));
        }
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function reviewCode() {
  console.log("Sending diff to Gemini for review...");

  const prTitle = process.env.PR_TITLE || "No title";
  const prBody = process.env.PR_BODY || "No description";

  const prompt = `You are a senior software engineer performing a thorough code review. Analyze the following pull request diff and provide a structured review.

PR Title: ${prTitle}
PR Description: ${prBody}

Git Diff:
\`\`\`diff
${truncatedDiff}
\`\`\`

Respond with ONLY valid JSON (no markdown fences, no explanation), in this exact format:
{
  "summary": "2-3 sentence overall summary of what this PR does",
  "verdict": "APPROVE | REQUEST_CHANGES | COMMENT",
  "scores": {
    "reliability": { "score": 0, "label": "Good|Needs Work|Critical", "notes": "brief explanation" },
    "security": { "score": 0, "label": "Good|Needs Work|Critical", "notes": "brief explanation" },
    "maintainability": { "score": 0, "label": "Good|Needs Work|Critical", "notes": "brief explanation" },
    "performance": { "score": 0, "label": "Good|Needs Work|Critical", "notes": "brief explanation" },
    "test_coverage": { "score": 0, "label": "Good|Needs Work|Critical", "notes": "brief explanation" }
  },
  "bugs": [
    { "severity": "critical|high|medium|low", "file": "filename", "line": "line number", "issue": "description", "fix": "suggested fix" }
  ],
  "security_issues": [
    { "severity": "critical|high|medium|low", "file": "filename", "issue": "description", "fix": "suggested fix" }
  ],
  "duplicates": [
    { "description": "duplicate/redundant code description", "files": ["file1"], "suggestion": "refactor suggestion" }
  ],
  "improvements": [
    { "type": "maintainability|performance|readability|best-practice", "description": "suggestion", "file": "filename" }
  ],
  "positive_highlights": ["good thing 1", "good thing 2"]
}

Score 10 = perfect, 0 = critical failures. Empty arrays if nothing found.`;

  const response = await callGemini(prompt);
  const text = response.candidates?.[0]?.content?.parts?.[0]?.text || "";

  let review;
  try {
    const cleaned = text.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
    review = JSON.parse(cleaned);
  } catch (e) {
    console.error("Failed to parse Gemini response:", text);
    throw new Error("Gemini returned invalid JSON");
  }

  return review;
}

function scoreEmoji(score) {
  if (score >= 8) return "🟢";
  if (score >= 5) return "🟡";
  return "🔴";
}

function severityEmoji(sev) {
  const map = { critical: "🚨", high: "🔴", medium: "🟠", low: "🟡" };
  return map[sev] || "⚪";
}

function verdictBadge(verdict) {
  if (verdict === "APPROVE")
    return "![APPROVE](https://img.shields.io/badge/AI%20Review-APPROVE-brightgreen)";
  if (verdict === "REQUEST_CHANGES")
    return "![REQUEST CHANGES](https://img.shields.io/badge/AI%20Review-REQUEST%20CHANGES-red)";
  return "![COMMENT](https://img.shields.io/badge/AI%20Review-COMMENT-blue)";
}

function buildComment(review) {
  const { summary, verdict, scores, bugs, security_issues, duplicates, improvements, positive_highlights } = review;

  const overallScore = Math.round(
    Object.values(scores).reduce((sum, s) => sum + s.score, 0) / Object.keys(scores).length
  );

  let md = `## 🤖 AI Code Review (Gemini)\n\n`;
  md += `${verdictBadge(verdict)}\n\n`;
  md += `> ${summary}\n\n`;

  md += `### 📊 Review Scores (Overall: ${scoreEmoji(overallScore)} ${overallScore}/10)\n\n`;
  md += `| Category | Score | Status | Notes |\n`;
  md += `|---|---|---|---|\n`;
  for (const [key, val] of Object.entries(scores)) {
    const name = key.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    md += `| ${name} | ${scoreEmoji(val.score)} ${val.score}/10 | ${val.label} | ${val.notes} |\n`;
  }
  md += `\n`;

  if (bugs && bugs.length > 0) {
    md += `### 🐛 Bugs Found (${bugs.length})\n\n`;
    for (const bug of bugs) {
      md += `<details>\n<summary>${severityEmoji(bug.severity)} <strong>[${bug.severity.toUpperCase()}]</strong> ${bug.issue} — <code>${bug.file}</code>${bug.line ? ` line ${bug.line}` : ""}</summary>\n\n`;
      md += `**Fix:** ${bug.fix}\n\n</details>\n\n`;
    }
  }

  if (security_issues && security_issues.length > 0) {
    md += `### 🔒 Security Issues (${security_issues.length})\n\n`;
    for (const issue of security_issues) {
      md += `<details>\n<summary>${severityEmoji(issue.severity)} <strong>[${issue.severity.toUpperCase()}]</strong> ${issue.issue} — <code>${issue.file}</code></summary>\n\n`;
      md += `**Fix:** ${issue.fix}\n\n</details>\n\n`;
    }
  }

  if (duplicates && duplicates.length > 0) {
    md += `### 🔁 Duplicates & Redundancy (${duplicates.length})\n\n`;
    for (const dup of duplicates) {
      md += `- **${dup.description}**`;
      if (dup.files?.length > 0) md += ` *(${dup.files.join(", ")})*`;
      md += `\n  - 💡 ${dup.suggestion}\n`;
    }
    md += `\n`;
  }

  if (improvements && improvements.length > 0) {
    md += `### 💡 Suggestions & Improvements\n\n`;
    const typeEmoji = { maintainability: "🧹", performance: "⚡", readability: "📖", "best-practice": "✅" };
    for (const imp of improvements) {
      md += `- ${typeEmoji[imp.type] || "💡"} **[${imp.type}]** ${imp.description}`;
      if (imp.file) md += ` *(${imp.file})*`;
      md += `\n`;
    }
    md += `\n`;
  }

  if (positive_highlights && positive_highlights.length > 0) {
    md += `### ✅ What's Done Well\n\n`;
    for (const p of positive_highlights) md += `- ${p}\n`;
    md += `\n`;
  }

  md += `---\n*🤖 Reviewed by Gemini 1.5 Flash (Free) • ${new Date().toUTCString()}*`;
  return md;
}

async function postComment(body) {
  const [owner, repo] = process.env.REPO.split("/");
  const prNumber = process.env.PR_NUMBER;
  const token = process.env.GITHUB_TOKEN;
  const data = JSON.stringify({ body });

  const options = {
    hostname: "api.github.com",
    path: `/repos/${owner}/${repo}/issues/${prNumber}/comments`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "Gemini-PR-Review-Bot",
      Accept: "application/vnd.github.v3+json",
      "Content-Length": Buffer.byteLength(data)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", chunk => body += chunk);
      res.on("end", () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log("✅ Review comment posted successfully!");
          resolve();
        } else {
          reject(new Error(`GitHub API error ${res.statusCode}: ${body}`));
        }
      });
    });
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  try {
    const review = await reviewCode();
    console.log("Review complete. Verdict:", review.verdict);
    const comment = buildComment(review);
    await postComment(comment);

    if (review.verdict === "REQUEST_CHANGES") {
      const criticalBugs = (review.bugs || []).filter(b => b.severity === "critical");
      const criticalSec = (review.security_issues || []).filter(b => b.severity === "critical");
      if (criticalBugs.length > 0 || criticalSec.length > 0) {
        console.error(`❌ Blocking merge: ${criticalBugs.length} critical bug(s), ${criticalSec.length} critical security issue(s)`);
        process.exit(1);
      }
    }
  } catch (err) {
    console.error("Review failed:", err);
    process.exit(1);
  }
}

main();
