import React from "react";
import MyLogo from "../assets/home.svg";
import "../styles/Home.css";
// import { useNavigate } from "react-router-dom";

const Home = () => {
    // const navigate = useNavigate();

// const handleNavigate = () => {
//     console.log("Navigating to Test Page");
//     navigate("/test"); 
// };
  return (
    <div className="home-container">
      {/* Fixed Top-Right SVG */}
      <img src={MyLogo} alt="Decorative Shape" className="home-image" />

      {/* Left Side - Text & CTA */}
      <div className="home-text">
        <h1>Hello, <span>Spotlight!</span></h1>
        <p>Your journey to building an outstanding portfolio starts here.  
           Showcase your skills, experience, and projects in a beautiful way.</p>
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
