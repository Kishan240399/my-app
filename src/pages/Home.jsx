import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <div className="button-container">
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="register-btn" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;
