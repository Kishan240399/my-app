import React from "react";
import Sidebar from "./Sidebar"; // Import Sidebar component
import "./Dashboard.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="dashboard-container">
      <Sidebar /> {/* Sidebar Component */}
      <div className="main-content">
        <h1>Welcome, {user?.username || "User"}!</h1>
      </div>
    </div>
  );
};

export default Dashboard;
