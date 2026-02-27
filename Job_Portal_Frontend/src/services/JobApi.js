import axios from "axios";

const BASE_URL = "http://localhost:8080/api/applications";

export const applyJob = (jobId, resumeFile) => {
  const formData = new FormData();
  formData.append("jobId", jobId);
  formData.append("resume", resumeFile);

  return axios.post(`${BASE_URL}/apply`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getUserApplications = (userId) => {
  return axios.get(`${BASE_URL}/user/${userId}`);
};

export const getJobApplications = (jobId) => {
  return axios.get(`${BASE_URL}/job/${jobId}`);
};

export const updateApplicationStatus = (applicationId, status) => {
  return axios.put(`${BASE_URL}/${applicationId}/status?status=${status}`);
};

export const downloadResume = (applicationId) => {
  return axios.get(`${BASE_URL}/download/${applicationId}`, {
    responseType: "blob",
  });
};
