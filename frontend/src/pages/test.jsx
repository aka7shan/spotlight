import React from "react";
import MyLogo from "../assets/home.svg";
import "../styles/Home.css";


const Test = () => {
  return (
    <div className="home-container">
      {/* Fixed Top-Right SVG */}
      <img src={MyLogo} alt="Decorative Shape" className="home-image" />

      {/* Left Side - Text & CTA */}
      <div className="home-text">
        <h1>Testing out few things, <span>Spotlight!</span></h1>
        <p>Your journey to building an outstanding portfolio starts here.  
           Showcase your skills, experience, and projects in a beautiful way.</p>
        <button className="get-started-btn"
        
        >Get Started</button>
      </div>
    </div>
  );
};

export default Test;
