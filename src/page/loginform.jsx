import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();
    let role = null;

    if (trimmedEmail === "admin@gmail.com") role = "admin";
    else if (trimmedEmail === "manager@gmail.com") role = "manager";
    else if (trimmedEmail === "user@gmail.com") role = "user";

    if (role) {
      onLogin(role); // Pass role to parent
    } else {
      alert("Invalid email. Use admin@gmail.com, manager@gmail.com, or user@gmail.com");
    }
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}
