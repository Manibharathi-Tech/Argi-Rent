import React from 'react'
import { useNavigate } from "react-router-dom";
import './Welcome.css';

export default function () {

    const navigate = useNavigate();

  return (
    <>
    <div className="welcome-container">
            <div className="overlay"></div>
            <div className="content">
                <h1>🌿 Welcome to AgriRent 🌾</h1>
                <p>Your one-stop platform for renting and lending farm equipment.</p>
                <div className="buttons">
                    <button className="owner-btn" onClick={() => navigate("/signup?role=owner")}>🚜 I am an Owner</button>
                    <button className="farmer-btn" onClick={() => navigate("/signup?role=farmer")}>🌱 I am a Farmer</button>
                </div>
            </div>
            {/* <img src="https://c1.wallpaperflare.com/preview/825/623/772/rice-nature-food-plant.jpg" alt="" className="background-image" /> */}
        </div>
    </>
  )
}
