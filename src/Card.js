import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "https://dummyjson.com/users";

const Card = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="col-md-4 mb-3">
      <div className="card border p-3">
        <div className="card-body">
          <h5>{user.firstName} {user.lastName}</h5>
          <p>{user.email}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </button>

          {showDetails && (
            <div className="mt-3">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Phone</th>
                    <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <th>Username</th>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <th>Company</th>
                    <td>{user.company.name}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{`${user.address.address}, ${user.address.city}, ${user.address.state}`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data.users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">User List</h2>
      <div className="row">
        {data.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container mt-4">
      <CardList />
    </div>
  );
};

export default App;
