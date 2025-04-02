import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  const [input, setInput] = useState({ emailOrUsername: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        (u.email === input.emailOrUsername ||
          u.username === input.emailOrUsername) &&
        u.password === input.password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid username/email or password.");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="emailOrUsername"
        placeholder="Email or Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};

export default Login;
