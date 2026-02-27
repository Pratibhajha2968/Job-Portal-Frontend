import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Dashboard ✅</h1>
      <p>This is the page after login.</p>
      
      <div className="links">
        <Link to="/profile">Go to Profile</Link>
        <Link to="/jobs">View Jobs</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Dashboard;
