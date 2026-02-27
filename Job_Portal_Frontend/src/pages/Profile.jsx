// import { useEffect, useState } from "react";
// import axios from "axios";
// import "../styles/Profile.css";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         // ✅ Get token from localStorage
//         const token = localStorage.getItem("token");
//               if (!token) {
//                 setError("No token found. Please login first.");
//               return;
//                 }


//         // ✅ GET request to /profile endpoint
//         const res = await axios.get("http://localhost:8080/api/users/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         console.log("Profile data:", res.data);

//         // ✅ Save user data in state
//         setUser(res.data);
//       } catch (err) {
//         console.error(err);
//         setError(err.response?.data?.message || "Failed to load Profile. Please try again.");
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (error)
//     return (
//       <h3 style={{ textAlign: "center", marginTop: "50px" }}>{error}</h3>
//     );

//   if (!user)
//     return (
//       <h3 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h3>
//     );

//   return (
//     <div className="profile-container">
//       <div className="profile-card">
//         <div className="profile-header">
//           <img
//             src={
//               user.profilePic ||
//               "https://cdn-icons-png.flaticon.com/512/149/149071.png"
//             }
//             alt="profile"
//             className="profile-img"
//           />
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>

//         <div className="profile-body">
//           <h3>Skills</h3>
//           <p>{user.skills || "No skills added yet"}</p>

//           <h3>Resume</h3>
//           {user.resume ? (
//             <a href={user.resume} target="_blank" rel="noreferrer">
//               View Resume
//             </a>
//           ) : (
//             <p>No resume uploaded</p>
//           )}
//         </div>

//         <button className="edit-btn">Edit Profile</button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      // ✅ Get token from localStorage
      const token = localStorage.getItem("token");
      console.log("Profile token:", token);

      if (!token) {
        setError("You are not logged in. Please login first.");
        return; // stop execution, don't send request
      }

      try {
        // ✅ GET request to backend profile endpoint with valid token
        const res = await axios.get("http://localhost:8080/api/users/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Profile data:", res.data);
        setUser(res.data); // save user data
      } catch (err) {
        console.error("Profile fetch error:", err);
        setError(
          err.response?.data?.message || "Failed to load profile. Please try again."
        );
      }
    };

    fetchProfile();
  }, []);

  if (error)
    return (
      <h3 style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        {error}
      </h3>
    );

  if (!user)
    return (
      <h3 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h3>
    );

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src={
              user.profilePic ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
            className="profile-img"
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>

        <div className="profile-body">
          <h3>Skills</h3>
          <p>{user.skills || "No skills added yet"}</p>

          <h3>Resume</h3>
          {user.resume ? (
            <a href={user.resume} target="_blank" rel="noreferrer">
              View Resume
            </a>
          ) : (
            <p>No resume uploaded</p>
          )}
        </div>

        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
