import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setRole }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Email validation
  const validEmail = () => {
    if (!formData.email) {
      setEmailError("Email is required");
      return false;
    } else if (formData.email.includes("@") && formData.email.endsWith(".com")) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Please enter a valid email");
      return false;
    }
  };

  // Password validation
  const validPassword = () => {
    if (!formData.password) {
      setPasswordError("Password is required");
      return false;
    } else if (formData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError("");
    return true;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail() && validPassword()) {
      // Determine role
      let role = null;
      if (formData.email === "admin@gmail.com") role = "admin";
      else if (formData.email === "manager@gmail.com") role = "manager";
      else if (formData.email === "user@gmail.com") role = "user";

      if (role) {
        setRole(role); // update role in App.jsx
      } else {
        alert("Invalid email. Use admin@gmail.com, manager@gmail.com or user@gmail.com");
      }
    }
  };

  return (
    // <div
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     backgroundImage:
    //       "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CuyvM3w4mcCBPjh7L4wHkRqFZkRxZ-scpQ&s')",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
      <div>
        <h2
          style={{
            color: "#a82729ff",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={validEmail}
              className="form-control"
              placeholder="Enter your email"
            />
            {emailError && <p className="text-danger mt-1">{emailError}</p>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={validPassword}
              className="form-control"
              placeholder="Enter your password"
            />
            {passwordError && <p className="text-danger mt-1">{passwordError}</p>}
          </div>

          {/* Submit */}
          <div className="d-grid mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ borderRadius: "10px", padding: "10px", fontWeight: "bold" }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    // </div>
  );
}
