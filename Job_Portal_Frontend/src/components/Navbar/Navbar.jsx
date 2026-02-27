import React from "react";
import { Link, useLocation } from "react-router-dom"; // import useLocation
import "./Navbar.css";

function Navbar() {
  const location = useLocation(); // get current URL

  return (
    <nav>
      <h2>Career Growth</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>


        {/* ✅ Show Login only on homepage */}
        {location.pathname === "/" && (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
