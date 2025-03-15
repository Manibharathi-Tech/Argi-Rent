import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

 
  async function handleLogin() {

    localStorage.setItem("EmailID" , email);

    setLoading(true);

    try {
      const response = await fetch("http://localhost:2000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email: email, Password: password }),
      });

      const result = await response.json();
      console.log("Login Response:", result); // Debugging

      if (response.ok) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role); // Store role

        // alert("Login Successful");

        // Ensure role-based navigation works correctly
        if (result.role === "owner") {
          // alert("Your Recognized as a Owner")
          setTimeout(() => {
            navigate("/landingOwner");
          }, 3000)

        } else if (result.role === "farmer") {
          // alert("Your Recognized as a Farmer")
          setTimeout(() => {
            setLoading(false); 
            navigate("/landingFarmer");
          }, 3000)

        } else {

          alert("Unknown role. Please contact support.");

        }
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server Problem.");
    }

  }


  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Agri-Rent Login</h2>
        <form action="">
          <label >Email</label>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /> <br />
          <label >Password</label>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /> <br />
        </form>

        <button className="btnl" onClick={handleLogin} disabled={loading}>{loading ? <div className="loading-spinner"></div> : "Login"}
        </button>

        <p style={{ marginTop: "30px", marginLeft: "50px" }}>
          Don't have an account?<Link style={{ color: "rgb(72, 148, 255)", textDecoration: "underline" }} to="/" >SignUp</Link>
        </p>
      </div>
    </div>

  );
}

export default Login;
