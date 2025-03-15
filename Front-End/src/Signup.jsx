import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // Owner or Farmer

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userRole = params.get("role");
    if (userRole) setRole(userRole);
  }, [location]);

  async function fnSignup() {

    localStorage.setItem("EmailID" , email);

    let newUser = {
      Username: username,
      Email: email,
      Password: password,
      Role: role, // Store role in DB
    };

    try {
      const response = await fetch("http://localhost:2000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Signup Successful");
        navigate(role === "owner" ? "/landingOwner" : "/landingFarmer");
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server Problem.");
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>{role === "owner" ? "🚜 Owner Signup" : "🌱 Farmer Signup"}</h2>
        <label htmlFor="">UserName</label>
        <input type="text" placeholder="Full Name" onChange={(e) => setUsername(e.target.value)} required /> <br/>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /> <br/>
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />

        <button onClick={fnSignup}>Register as {role === "owner" ? "Owner" : "Farmer"}</button>
        
        <p style={{ marginTop: "30px", marginLeft: "50px" }}>
        Already have an account?

        <Link style={{ color: "rgb(72, 148, 255)", textDecoration: "underline" }} to="/login">Login</Link>
      </p>
      </div>
    </div>
  );
}

export default Signup;
