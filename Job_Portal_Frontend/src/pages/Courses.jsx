// src/pages/Courses.js
import React from "react";
import "../styles/Courses.css"; // Existing styling
import { useNavigate } from "react-router-dom"; // NEW import for navigation

const coursesData = [
  { id: 1, name: "Frontend Development", price: 5000, description: "Learn HTML, CSS, JavaScript, React." },
  { id: 2, name: "Backend Development", price: 6000, description: "Learn Node.js, Express, Databases." },
  { id: 3, name: "Data Analysis", price: 5500, description: "Learn Python, Pandas, Visualization." },
  { id: 4, name: "UI/UX Design", price: 4500, description: "Learn Figma, Adobe XD, Design Principles." },
  { id: 5, name: "Python Programming", price: 5000, description: "Learn Python basics to advanced projects." },
  { id: 6, name: "Java Programming", price: 5000, description: "Learn Java basics, OOP, and projects." },
  { id: 7, name: "Fullstack Development", price: 8000, description: "Combine frontend & backend skills." },
  { id: 8, name: "Machine Learning", price: 9000, description: "Learn ML algorithms & projects." },
  { id: 9, name: "Digital Marketing", price: 4000, description: "SEO, Social Media, Google Ads." },
  { id: 10, name: "Cyber Security", price: 7000, description: "Learn network security, ethical hacking." }
];

const Courses = () => {
  const navigate = useNavigate(); // NEW: navigation hook

  // UPDATED handlePayment
  const handlePayment = (course) => {
    // Navigate to payment page, passing course info as state
    navigate("/payment", {
      state: {
        name: course.name,
        price: course.price
      }
    });
  };

  return (
    <div className="courses-page">
      <h1>Our Courses</h1>
      <div className="courses-container">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p><strong>Price:</strong> ₹{course.price}</p>
            {/* Only change: handlePayment navigates */}
            <button onClick={() => handlePayment(course)}>Enroll & Pay</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
