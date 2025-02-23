import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Timer = () => {
  const [time, setTime] = useState(0);
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
    setTime(0);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 text-center border-primary" style={{ width: "22rem", borderRadius: "10px" }}>
        <h2 className="mb-3">Timer</h2>
        <h1 className="display-4 border border-2 border-dark rounded p-3">{time} sec</h1>
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

export default Timer;