import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgetPasswordModel from './model';

export default function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email,setEmail] = useState("");
  const [showModel,setShowModel] = useState(false);

const handleForgotPassword = () => {
  setEmail(formData.email); 
  setShowModel(true);       
};

  const handleClose = () => setShowModel(false);

  const handleClick = () => {
    alert(`Password Reset Link to ${email}`)
      setFormData({ ...formData, email }); // 👈 Set the login page email

    setShowModel(false)
  }



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
      else if (formData.email === "user@gmail.com") role = "User";
      else {
        role="Admin";
      }
      onLogin(role);
    }
  };

  return (
    <div
      className="d-flex justify-content-end align-items-top"
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, #6D5BBA, #8D58BF)",
      }}
    >
      <div
        className="p-5 rounded-4 shadow-lg"
        style={{
          width: "400px",
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#a82729ff" }}>
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
              className="form-control shadow-sm"
              placeholder="Enter your email"
              style={{ borderRadius: "10px" }}
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
              className="form-control shadow-sm"
              placeholder="Enter your password"
              style={{ borderRadius: "10px" }}
            />
            {passwordError && <p className="text-danger mt-1">{passwordError}</p>}
          </div>
            <p className="mt-5 fs-6"><input type="checkbox"/><span className="ms-2">Remember Me</span><span className="text-danger ms-3" style={{ cursor: "pointer" }}
              onClick={handleForgotPassword}>Forget Password?</span></p>

          {/* Submit button */}
          <div className="d-grid mt-4">
            <button
              type="submit"
              className="btn btn-gradient btn-lg fw-bold"
              style={{
                background: "linear-gradient(90deg, #6D5BBA, #8D58BF)",
                color: "white",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                transition: "0.3s",
              }}
            >
              Login
            </button>
          </div>
        </form>
           <ForgetPasswordModel 
            show={showModel}
            handleClose={handleClose}
            email={email}
            setEmail={setEmail}
            handleClick={handleClick}/>
      </div>
    </div>
  );
}

