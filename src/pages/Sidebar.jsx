import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css"; // Separate CSS for Sidebar styling

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <ul>
        <li
          onClick={() => navigate("/dashboard")}
          className={window.location.pathname === "/dashboard" ? "active" : ""}
        >
          Dashboard
        </li>
        <li
          onClick={() => navigate("/list")}
          className={window.location.pathname === "/list" ? "active" : ""}
        >
          List
        </li>
        <li
          onClick={() => {
            localStorage.removeItem("loggedInUser");
            navigate("/");
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
