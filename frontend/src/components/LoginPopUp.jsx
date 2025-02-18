import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice"; // Import Redux action
import "../styles/LoginPopup.css";

export default function LoginPopUp({ isOpen, onClose }) {
  const dispatch = useDispatch();

  if (!isOpen) return null; // Don't render if not open

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    dispatch(login({ name: "User" })); // Dispatch Redux action to set isLoggedIn = true
    onClose(); // Close popup
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">Login</button> 
        </form>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
}
