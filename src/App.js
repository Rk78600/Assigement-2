import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const TimerApp = () => {
  const { initialTime } = useParams();
  const [time, setTime] = useState(Number(initialTime) || 0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(Number(initialTime) || 0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="container mt-4">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand mx-auto">React Timer</span>
      </nav>
      <div className="card shadow-lg p-4 text-center">
        <h1 className="display-4">{formatTime(time)}</h1>
        <div className="mt-3">
          <button className="btn btn-success mx-2" onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button className="btn btn-danger mx-2" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerApp;
