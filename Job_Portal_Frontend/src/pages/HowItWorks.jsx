import React from "react";
import "../styles/HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-container">
      <h1 className="how-title">How It Works</h1>
      <p className="how-subtitle">
        Find your dream job in 3 simple steps
      </p>

      <div className="how-steps">
        <div className="how-card">
          <span className="step-number">1</span>
          <h3>Create an Account</h3>
          <p>
            Sign up using your email and create your professional profile.
          </p>
        </div>

        <div className="how-card">
          <span className="step-number">2</span>
          <h3>Search Jobs</h3>
          <p>
            Browse jobs based on skills, location, and experience.
          </p>
        </div>

        <div className="how-card">
          <span className="step-number">3</span>
          <h3>Apply & Get Hired</h3>
          <p>
            Apply for jobs and connect directly with recruiters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
