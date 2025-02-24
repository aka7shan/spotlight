import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import Navbar
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar /> {/* Place Navbar here so it appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
