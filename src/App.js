import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <div className="card shadow-lg p-4 text-center" style={{ width: "18rem" }}>
        <h3 className="mb-3">Counter: {count}</h3>
        <div>
          <button
            className="btn btn-success mx-2"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
