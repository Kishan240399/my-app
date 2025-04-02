import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Register = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    username: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username or email already exists
    if (
      users.some(
        (u) => u.email === input.email || u.username === input.username
      )
    ) {
      setError("Username or email already exists.");
      return;
    }

    users.push(input);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! You can now log in.");
    navigate("/login");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button onClick={handleRegister}>REGISTER</button>
    </div>
  );
};

export default Register;
