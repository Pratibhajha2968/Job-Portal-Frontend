import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import ForgotPassword from "./pages/ForgotPassword";

// import Courses from "./pages/Courses";
import Courses from "./pages/Courses.jsx";
import Payment from "./pages/Payment";

import AdminApplication from "./pages/AdminApplication.jsx";
import ApplyJob from "./pages/ApplyJobs.jsx";
import JobDetails from "./pages/JobDetails";
import JobPost from "./pages/JobPost";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar remains the same */}
      <Navbar />

      <Routes>
        {/* Courses page route */}
        <Route path="/Courses" element={<Courses />} />

        {/* Existing routes */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/jobpost" element={<JobPost />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<div></div>} />

        <Route
          path="/admin/application/:jobId"
          element={<AdminApplication />}
        />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
