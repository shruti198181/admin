"use client";
import React, { useState } from "react";
import { Navbar, Container, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../page/loginform";
import "../App.css";

export default function NavbarHeader() {
  
  const [showLogin, setShowLogin] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const handleLoginOpen = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);
  const handleLoginSuccess = (selectedRole) => {
    setRole(selectedRole);
    setShowLogin(false);
   
    if (selectedRole === "admin") navigate("/admin");
    if (selectedRole === "manager") navigate("/manager");
    if (selectedRole === "user") navigate("/user");
  };
  
  const handleLogout = () => {
    setRole(null);
    navigate("/");
  };

  return (
    <>
      {/* Fixed Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_JMPBd5OhJOs07PIM0wfX5yhtTU38gjfUQ&s"
              alt="Logo"
              height="50"
              style={{ objectFit: "contain" }}
              className="ms-5"
            />
          </Navbar.Brand>

          {/* Login / Logout button */}
          {!role ? (
            <Button variant="outline-light" onClick={handleLoginOpen}>
              Login
            </Button>
          ) : (
            <Button variant="outline-danger" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Container>
      </Navbar>
      {/* Add spacing below navbar so page content is not hidden */}
      <div style={{ height: "70px" }}></div>
       
      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleLoginClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onLogin={handleLoginSuccess} />
        </Modal.Body>
      </Modal>
    </>
  );
}
