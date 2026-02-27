// import React from 'react'
// import {useState} from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/Register.css"
// const Register = () => {


//     const navigate = useNavigate();
//   const [form, setForm] = useState(
//       {
//         name: "",
//         email: "",
//         password: ""
//     });
  
//       const handleChange = (e) => {
//       setForm({ ...form, [e.target.name]: e.target.value });
//     };



//     const handleSubmit = async(e) => {
//       e.preventDefault();


//       try {
//         await axios.post("http://localhost:8080/api/auth/register", form);
//         alert("registration successfull");
//         navigate("/login");

//       }
//       catch (err) {
//         alert(err.response.message || "Registeration Failed");
//       }
//     };
//   return (
//          <div className="auth-container">
//        <h2>Register</h2>
//        <form onSubmit={handleSubmit}>
//          <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
//          <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
//          <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
//         <button type="submit">Register</button>
        
//         <p>Already have an account? <Link to="/login">Login</Link></p>
//       </form>

//        {/* <p>Already have an account? <Link to="/login">Login</Link></p> */}
//      </div>
//   )
// }

// export default Register;
import React from 'react'
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css"
const Register = () => {


    const navigate = useNavigate();
  const [form, setForm] = useState(
      {
        name: "",
        email: "",
        password: ""
    });
  
      const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };



    const handleSubmit = async(e) => {
      e.preventDefault();


      try {
        await axios.post("http://localhost:8080/api/auth/register", form);
        alert("registration successfull");
        navigate("/login");

      }
      catch (err) {
        alert(err.response.message || "Registeration Failed");
      }
    };
  return (
         <div className="auth-container">
       <h2>Register</h2>
       <form onSubmit={handleSubmit}>
         <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br /><br />
         <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br /><br />
         <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br /><br />
        <button type="submit">Register</button>
        
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>

       {/* <p>Already have an account? <Link to="/login">Login</Link></p> */}
     </div>
  )
}

export default Register;
