import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Assignment 2</h1>
        <ul className="flex space-x-6 flex-row flex-nowrap">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/question1">Question 1</Link></li>
          <li><Link to="/question2/60">Question 2</Link></li> {/* Pass initial time */}
          <li><Link to="/question3">Question 3</Link></li>
          <li><Link to="/question4">Question 4</Link></li>
          <li><Link to="/question5">Question 5</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
