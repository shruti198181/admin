import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validEmail() && validPassword()) {
      let role = "User"; 
      if (formData.email === "admin@gmail.com") role = "Admin";
      else if (formData.email === "manager@gmail.com") role = "Manager";
        else if(formData.email === "user@gmail.com") role ="User";
      onLogin(role);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "100vh", backgroundColor: "#453941" }}
    >
      <div
        className="p-4 rounded shadow"
        style={{ width: "400px", backgroundColor: "#DBDBE7" }}
      >
        <h2 className="text-center mb-4">Login Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-bold">Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={validEmail}
              className="form-control"
              placeholder="Enter Email"
            />
            {emailError && <p className="text-danger">{emailError}</p>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-bold">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={validPassword}
              className="form-control"
              placeholder="Enter Password"
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}
          </div>

          {/* Submit button */}
          <div className="d-grid mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
