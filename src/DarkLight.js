import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-dark text-white vh-100" : "bg-light text-dark vh-100"}>
      <div className="container py-4 text-center">
        <button className="btn btn-primary mb-3" onClick={toggleTheme}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
        <div className="card shadow-lg p-4 text-center" style={{ width: "18rem" }}>
          <p>The theme changes dynamically when toggled.</p>
          <h1>Dark/light Project </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
