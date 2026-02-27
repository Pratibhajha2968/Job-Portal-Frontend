import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function ApplyJob() {
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const { jobId } = useParams(); // from /apply/:jobId
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      navigate("/login"); // redirect if not logged in
      return;
    }

    if (!file) {
      alert("Upload your resume");
      return;
    }

    const formData = new FormData();
    formData.append("jobId", jobId);
    formData.append("userId", user.id);
    formData.append("resume", file);

    await axios.post("http://localhost:8080/api/applications/apply", formData);
    alert("Applied successfully!");
  };

  return (
    <div className="apply-container">
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
}

export default ApplyJob;