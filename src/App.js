import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileCard = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !age.trim() || !location.trim()) {
      setError("All fields are required");
      return;
    }
    if (isNaN(age) || age <= 0) {
      setError("Age must be a valid positive number");
      return;
    }
    setError("");
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <div className="card shadow-lg p-4" style={{ width: "22rem", borderRadius: "10px" }}>
        <h5 className="text-center fw-bold">Profile Details</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileCard;
