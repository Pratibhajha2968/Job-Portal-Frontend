import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/MultiMedia/Logo.png";
import JobCard from "../components/JobCard/JobCard";
import "../styles/Home.css";
import "../pages/Search";

// ✅ Font Awesome imports
import {
  faAmazon,
  faFacebook,
  faGoogle,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    navigate(`/search?title=${title}&location=${location}`);
  };

  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logoImg} alt="CareerGate" width="150" height="60" />
        </div>

        {/* Nav links */}
        <nav>
          <Link to="/Jobs">Jobs</Link>
          {/* <Link to="/JobDetails">JobDetails</Link> */}
          <Link to="/Companies">Companies</Link>
          <Link to="/how-it-works">How It Works</Link>
          {/* <Link to="/login">Login</Link> */}
          {/* <Link to="/register">Register</Link> */}
          <Link to="/profile">Profile</Link>
          <Link to="/applyjob">ApplyJob</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Find Your Dream Job</h1>
        <p>Search jobs, apply instantly, and get hired fast!</p>

        {/* for searching jobs */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Job title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <h2>Featured Jobs</h2>
        <div className="job-cards">
          <JobCard
            title="Frontend Developer"
            company="Google"
            location="Remote"
          />
          <JobCard
            title="Backend Developer"
            company="Amazon"
            location="Bangalore"
          />
          <JobCard
            title="Fullstack Developer"
            company="Microsoft"
            location="Hyderabad"
          />
          <JobCard
            title="Data Scientist"
            company="Facebook"
            location="Mumbai"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="icon">🔍</div>
            <p>Search Jobs</p>
          </div>
          <div className="step">
            <div className="icon">📝</div>
            <p>Apply Instantly</p>
          </div>
          <div className="step">
            <div className="icon">🎯</div>
            <p>Get Hired</p>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="companies">
        <h2>Trusted By Companies</h2>
        <div className="company-logos">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGoogle} size="2x" />
          </a>
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faAmazon} size="2x" />
          </a>
          <a
            href="https://www.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMicrosoft} size="2x" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
