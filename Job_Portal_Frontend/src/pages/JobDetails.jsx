import { useParams } from "react-router-dom";
import "../styles/JobDetails.css";

const jobs = [

  {
    id: 1,
    postedDate: "2026-01-15",
    type: "Full-time",
    description:
      "Work on building responsive web UIs using React and TailwindCSS. Collaborate with backend developers.",
    responsibilities: [
      "Build reusable React components",
      "Implement responsive UI",
      "Collaborate with backend team",
    ],
    requirements: [
      "Knowledge of React and JavaScript",
      "Understanding of HTML & CSS",
      "Basic Git knowledge",
    ],
    skills: ["React", "JavaScript", "CSS", "Git"],
  },
  {
    id: 2,
    postedDate: "2026-01-18",
    type: "Full-time",
    description:
      "Develop APIs using Node.js or Spring Boot. Work with databases and cloud infrastructure. Ensure performance and security standards are met.",
    responsibilities: [
      "Develop RESTful APIs",
      "Database integration",
      "Performance optimization",
    ],
    requirements: [
      "Node.js or Java experience",
      "Database knowledge (SQL/NoSQL)",
      "Understanding of cloud services",
    ],
    skills: ["Node.js", "Express", "MongoDB", "SQL", "REST APIs"],
  },
  {
    id: 3,
     postedDate: "2026-01-20",
    type: "Full-time",
    description:
      "Build full stack applications using React, Node.js, and SQL/NoSQL databases.",
    responsibilities: [
      "Develop frontend using React",
      "Create backend APIs",
      "Integrate databases",
    ],
    requirements: [
      "Knowledge of React & Node.js",
      "Database skills",
      "Understanding of REST APIs",
    ],
    skills: ["React", "Node.js", "MongoDB", "SQL"],
  },

  {
    id: 4,
    postedDate: "2026-01-16",
    type: "Full-time",
    description:
      "Design creative user interfaces and experiences for web and mobile applications.",
    responsibilities: [
      "Design UI layouts",
      "Create wireframes",
      "Work with developers",
    ],
    requirements: [
      "UI design tools knowledge",
      "Basic UX principles",
      "Creativity",
    ],
    skills: ["Figma", "Adobe XD", "UI Design"],
  },

  {
    id: 5,
    postedDate: "2026-01-14",
    type: "Full-time",
    description:
      "Analyze business data, create dashboards and reports, and assist in data-driven decisions.",
    responsibilities: [
      "Analyze datasets",
      "Prepare reports",
      "Create dashboards",
    ],
    requirements: [
      "Excel & SQL knowledge",
      "Basic statistics",
      "Data visualization",
    ],
    skills: ["Excel", "SQL", "Power BI", "Tableau"],
  },

  {
    id: 6,
     postedDate: "2026-01-17",
    type: "Full-time",
    description:
      "Manage CI/CD pipelines, deployment, and monitoring of applications in cloud environments.",
    responsibilities: [
      "Maintain CI/CD pipelines",
      "Monitor servers",
      "Cloud deployment",
    ],
    requirements: [
      "Linux knowledge",
      "Cloud platforms",
      "CI/CD tools",
    ],
    skills: ["AWS", "Docker", "Jenkins", "Linux"],
  },

  {
    id: 7,
    postedDate: "2026-01-19",
    type: "Full-time",
    description:
      "Develop mobile applications using React Native or Flutter for Android and iOS platforms.",
    responsibilities: [
      "Develop mobile apps",
      "Test mobile UI",
      "Integrate APIs",
    ],
    requirements: [
      "React Native or Flutter",
      "JavaScript/Dart",
      "REST APIs",
    ],
    skills: ["React Native", "Flutter", "API Integration"],
  },

  {
    id: 8,
    postedDate: "2026-01-13",
    type: "Full-time",
    description:
      "Implement ML models, perform data preprocessing, and collaborate with data scientists.",
    responsibilities: [
      "Build ML models",
      "Clean data",
      "Model deployment",
    ],
    requirements: [
      "Python & ML knowledge",
      "Statistics",
      "Data handling",
    ],
    skills: ["Python", "TensorFlow", "Pandas", "ML"],
  },

  {
    id: 9,
     postedDate: "2026-01-12",
    type: "Full-time",
    description:
      "Test web and mobile applications, write test cases, and report bugs effectively.",
    responsibilities: [
      "Test applications",
      "Write test cases",
      "Report bugs",
    ],
    requirements: [
      "Testing basics",
      "Manual testing",
      "Attention to detail",
    ],
    skills: ["Manual Testing", "Selenium", "JIRA"],
  },

  {
    id: 10,
    postedDate: "2026-01-11",
    type: "Full-time",
    description:
      "Design and manage cloud infrastructure, optimize costs, and implement security best practices.",
    responsibilities: [
      "Manage cloud infra",
      "Security setup",
      "Cost optimization",
    ],
    requirements: [
      "Cloud platforms",
      "Networking",
      "Security",
    ],
    skills: ["GCP", "AWS", "Kubernetes"],
  },

  {
  id: 11,
  postedDate: "2026-01-10",
  type: "Full-time",
  description:
    "Develop responsive web applications using React, Redux, and modern UI libraries.",
  responsibilities: [
    "Build React components",
    "Manage application state",
    "Integrate APIs"
  ],
  requirements: [
    "Strong React knowledge",
    "JavaScript ES6",
    "REST API experience"
  ],
  skills: ["React", "Redux", "JavaScript", "CSS"]
},

{
  id: 12,
  postedDate: "2026-01-09",
  type: "Full-time",
  description:
    "Build RESTful APIs, integrate databases, and ensure application performance.",
  responsibilities: [
    "Develop APIs",
    "Connect databases",
    "Optimize backend"
  ],
  requirements: [
    "Node.js experience",
    "MongoDB or SQL",
    "API development"
  ],
  skills: ["Node.js", "MongoDB", "Express", "REST APIs"]
},

{
  id: 13,
  postedDate: "2026-01-08",
  type: "Full-time",
  description:
    "Develop backend services, scripts, and automation using Python and Django/Flask.",
  responsibilities: [
    "Write Python scripts",
    "Develop APIs",
    "Automate tasks"
  ],
  requirements: [
    "Python programming",
    "Django/Flask",
    "Database basics"
  ],
  skills: ["Python", "Django", "Flask", "SQL"]
},

{
  id: 14,
  postedDate: "2026-01-07",
  type: "Full-time",
  description:
    "Analyze data, build predictive models, and collaborate with cross-functional teams.",
  responsibilities: [
    "Analyze datasets",
    "Build ML models",
    "Present insights"
  ],
  requirements: [
    "Python & ML",
    "Statistics",
    "Data visualization"
  ],
  skills: ["Python", "Machine Learning", "Pandas", "Power BI"]
},

{
  id: 15,
  postedDate: "2026-01-06",
  type: "Internship",
  description:
    "Assist in software development tasks, bug fixing, and learning modern development tools.",
  responsibilities: [
    "Support development team",
    "Fix bugs",
    "Write simple code"
  ],
  requirements: [
    "Basic programming",
    "Willingness to learn",
    "Good communication"
  ],
  skills: ["Java", "JavaScript", "Git"]
},

{
  id: 16,
  postedDate: "2026-01-05",
  type: "Full-time",
  description:
    "Work on backend services using Java, Spring Boot, and RESTful APIs.",
  responsibilities: [
    "Develop APIs",
    "Fix bugs",
    "Maintain backend"
  ],
  requirements: [
    "Java",
    "Spring Boot",
    "SQL"
  ],
  skills: ["Java", "Spring Boot", "REST API", "MySQL"]
},

{
  id: 17,
  postedDate: "2026-01-04",
  type: "Full-time",
  description:
    "Develop native Android apps using Kotlin/Java and integrate with REST APIs.",
  responsibilities: [
    "Build Android apps",
    "UI integration",
    "API calls"
  ],
  requirements: [
    "Kotlin or Java",
    "Android Studio",
    "REST APIs"
  ],
  skills: ["Kotlin", "Java", "Android", "API"]
  },

  
{
  id: 18,
  postedDate: "2026-01-03",
  type: "Full-time",
  description:
    "Develop iOS applications using Swift and maintain app performance and quality.",
  responsibilities: [
    "Develop iOS apps",
    "Debug issues",
    "Improve performance"
  ],
  requirements: [
    "Swift",
    "Xcode",
    "REST APIs"
  ],
  skills: ["Swift", "iOS", "API"]
},

{
  id: 19,
  postedDate: "2026-01-02",
  type: "Full-time",
  description:
    "Implement web interfaces using HTML, CSS, JavaScript, and frontend frameworks.",
  responsibilities: [
    "Build UI",
    "Style pages",
    "Fix UI bugs"
  ],
  requirements: [
    "HTML CSS",
    "JavaScript",
    "Basic React"
  ],
  skills: ["HTML", "CSS", "JavaScript", "React"]
},

{
  id: 20,
  postedDate: "2026-01-01",
  type: "Full-time",
  description:
    "Gather business requirements, create reports, and assist in project management.",
  responsibilities: [
    "Gather requirements",
    "Prepare reports",
    "Work with stakeholders"
  ],
  requirements: [
    "Communication skills",
    "Excel",
    "Business knowledge"
  ],
  skills: ["Excel", "Analysis", "Communication"]
}

];

const JobDetails = () => {
  const { id } = useParams();

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <h2>Job not found</h2>;

  return (
    <div className="job-details">
      <p>📅 <b>Posted Date:</b> {job.postedDate}</p>
      <p>📝 <b>Job Type:</b> {job.type}</p>

      <h3>Description</h3>
      <p>{job.description}</p>

      <h3>Responsibilities</h3>
      <ul>
        {job.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <h3>Requirements</h3>
      <ul>
        {job.requirements.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <h3>Skills Required</h3>
      <p>{job.skills.join(", ")}</p>
    </div>
  );
};

export default JobDetails;
