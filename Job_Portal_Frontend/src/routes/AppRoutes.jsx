import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound"; // optional for 404

const AppRoutes = () => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<Home />} />
      {/* Jobs listing page */}
      <Route path="/jobs" element={<Jobs />} />
      {/* Individual job details page */}
      <Route path="/job/:id" element={<JobDetails />} />
      {/* Fallback page for unknown URLs */}
      <Route path="*" element={<NotFound />} />\
      <Route path="/login" element={<Login />} />

      <Route path="/apply/:jobId" element={<ApplyJob />} />

    </Routes>
  );
};

export default AppRoutes;
