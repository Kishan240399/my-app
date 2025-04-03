import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import CSS file for styling

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li className="active">Dashboard</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome, {user?.username || "User"}!</h1>
      </div>
    </div>
  );
};

export default Dashboard;
