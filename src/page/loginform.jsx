"use client"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setRole }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email === "admin@gmail.com" && password === "admin123") {
      setRole("admin");
      navigate("/admins"); 
        } else if (email === "manager@gmail.com" && password === "manager123") {
      setRole("manager");
      navigate("/manager"); 
        } else if (email === "user@gmail.com" && password === "user123") {
      setRole("user");
      navigate("/user"); 
    } 
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px", background: "#007bff", color: "#fff", border: "none" }}>
          Login
        </button>
      </form>
    </div>
  );
}
