import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaUserCircle } from "react-icons/fa";
import "../styles/navbar.css";
import LoginPopUp from "./loginPopUp";
import { logout } from "../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Redux state
  const dispatch = useDispatch();
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Auto-close popup when the user logs in
  useEffect(() => {
    if (isLoggedIn) {
      setIsPopupOpen(false);
    }
  }, [isLoggedIn]); 

  return (
    <nav className="navbar">
      <div className="left">
        {/* <h1 className="logo">MyApp</h1> */}
      </div>
      <div className="right">
        <DarkModeToggle />

        {isLoggedIn ? (
          <div className="profile-container">
            <FaUserCircle
              className="profile-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => dispatch(logout())}>Log Out</li>
                <li>Sign Up</li>
                <li>About Us</li>
              </ul>
            )}
          </div>
        ) : (
          <div>
            <button className="get-started" onClick={() => setIsPopupOpen(true)}>
              Login
            </button>
            <LoginPopUp 
              isOpen={isPopupOpen} 
              onClose={() => setIsPopupOpen(false)} 
            />
          </div>
        )}
      </div>
    </nav>
  );
}
