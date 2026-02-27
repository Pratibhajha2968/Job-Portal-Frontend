import React from "react";
// import "../styles/JobPost.css";

const JobPost = ({ title, company, location, salary, description }) => {
  return (
    <div className="job-post">
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Salary:</strong> {salary}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};

export default JobPost;
