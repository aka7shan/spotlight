import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaUserCircle } from "react-icons/fa";
import "../styles/navbar.css";
// import profileIcon from "../assets/profile-icon.png"; // Replace with actual path

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="left">
        {/* <h1 className="logo">MyApp</h1> */}
      </div>
      <div className="right">
        <DarkModeToggle />
        {/* {isLoggedIn ? (
          <img src={profileIcon} alt="Profile" className="profile-icon" />
        ) : (
          <button className="get-started" onClick={() => setIsLoggedIn(true)}>
            Get Started
          </button>
        )} */}
      
      <div className="profile-container">
          <FaUserCircle
            className="profile-icon"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>Login</li>
              <li>Sign Up</li>
              <li>About Us</li>
            </ul>
          )}
        </div>
        </div>
    </nav>
  );
}
