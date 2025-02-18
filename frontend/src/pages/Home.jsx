import React from "react";
import { useState } from "react";
import MyLogo from "../assets/home.svg";
import "../styles/Home.css";
import LoginPopUp from "../components/loginPopUp";
import { useSelector} from "react-redux";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Redux state
  return (
    <div className="home-container">
      {/* Fixed Top-Right SVG */}
      <img src={MyLogo} alt="Decorative Shape" className="home-image" />

      {/* Left Side - Text & CTA */}
      <div className="home-text">
        <h1>Hello, <span>Spotlight!</span></h1>
        <p>Your journey to building an outstanding portfolio starts here.  
           Showcase your skills, experience, and projects in a beautiful way.</p>
        
        <div>{!isLoggedIn && <button className="get-started-btn" onClick={() => setIsPopupOpen(true)}>Get Started</button>}
        <LoginPopUp 
              isOpen={isPopupOpen} 
              onClose={() => setIsPopupOpen(false)} 
            />
        </div>     
      </div>
    </div>
  );
};

export default Home;
