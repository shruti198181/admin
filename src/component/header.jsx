import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../page/loginform";

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

  return (
    <> 
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            My Dashboard
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown title="Admin" id="admin-dropdown">
                <NavDropdown.Item as={Link} to="/admin/users">Users</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/setting">Settings</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin/reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Manager" id="manager-dropdown">
                <NavDropdown.Item as={Link} to="/manager/project">Projects</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/manager/team">Team</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/manager/reports">Reports</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="User" id="user-dropdown">
                <NavDropdown.Item as={Link} to="/user/myprofile">My Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/user/task">Tasks</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              {!role ? (
                <Button variant="outline-light" onClick={handleLoginOpen}>
                  Login
                </Button>
              ) : (
                <Button
                  variant="outline-danger"
                  onClick={() => {
                    setRole(null);
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
