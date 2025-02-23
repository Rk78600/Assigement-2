import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Timer from "./Timer"; 
import ProfileCard from "./ProfileCard";
import Counter from "./Counter";
import DarkLight from "./DarkLight"
import Card from "./Card"

function App() {
  return (
    <Router>
      <Nav/>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<h2>Welcome to Assignment 2</h2>} />
          <Route path="/question1/" element={<Card/>}/>
          <Route path="/question2/:initialTime" element={<Timer/>} />
          <Route path="/question3/" element={<ProfileCard/>} />
          <Route path="/question4/" element={<Counter/>} />
          <Route path="/question5/" element={<DarkLight/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
