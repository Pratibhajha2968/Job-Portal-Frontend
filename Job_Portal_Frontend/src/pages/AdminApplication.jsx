import React, { useEffect, useState } from "react";
import { getJobApplications, updateApplicationStatus, downloadResume } from "../services/JobApi";

const AdminApplications = ({ jobId }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    const res = await getJobApplications(jobId);
    setApplications(res.data);
  };

  const handleStatusChange = async (appId, status) => {
    await updateApplicationStatus(appId, status);
    fetchApplications();
  };

 const handleDownload = async (appId, fileName = "resume.pdf") => {
  try {
    const res = await downloadResume(appId);
    if (!res || !res.data) return alert("Resume not found");

    const blob = new Blob([res.data]);
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url); // clean up
  } catch (err) {
    console.error(err);
    alert("Error downloading resume");
  }
};


  return (
    <div>
      <h2>Admin Applications</h2>
      {applications.map((app) => (
        <div key={app.id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
          <p>User ID: {app.userId}</p>
          <p>Job ID: {app.jobId}</p>
          <p>
            Status:{" "}
            <select
              value={app.status}
              onChange={(e) => handleStatusChange(app.id, e.target.value)}
            >
              <option value="APPLIED">APPLIED</option>
              <option value="SHORTLISTED">SHORTLISTED</option>
              <option value="REJECTED">REJECTED</option>
            </select>
          </p>
        <button onClick={() => handleDownload(app.id, `${app.userId}_resume.pdf`)}>
      Download Resume
    </button>
        </div>
      ))}
    </div>
  );
};

export default AdminApplications;