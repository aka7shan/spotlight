import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing FA icons

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      className="dark-mode-toggle"
      onClick={() => setIsDark(!isDark)}
      style={{
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: isDark ? "#1a202c" : "#87CEEB", // Dark sky / Light blue sky
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      {isDark ? <FaMoon size={20} /> : <FaSun size={24} />}
    </button>
  );
}
