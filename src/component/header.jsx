// import React from "react";
// import { Link } from "react-router-dom";

// export default function NavbarHeader({ role, setRole, setShowLogin }) {
//   const handleLogout = () => {
//     setRole(null);
//     setShowLogin(true);
//   };

//   return (
   
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           My Dashboard
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {/* Show login button if not logged in */}
//             {!role && (
//               <li className="nav-item">
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => setShowLogin(true)}
//                 >
//                   Login
//                 </button>
//               </li>
//             )}

//             {/* Admin links */}
//             {role === "admin" && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/admin/user">Users</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/admin/setting">Settings</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/admin/reports">Reports</Link>
//                 </li>
//               </>
//             )}

//             {/* Manager links */}
//             {role === "manager" && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/manager/project">Projects</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/manager/team">Team</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/manager/reports">Reports</Link>
//                 </li>
//               </>
//             )}
//             {role === "user" && (
//               <>
//                <li className="nav-item">
//                 <Link className="nav-link" to="/user/myprofile">My Profile</Link>
//                </li>
//                <li className="nav-item">
//                 <Link className="nav-link" to="/user/task">Task</Link>
//                </li>
//               </>
//             )}
//             {/* Logout button */}
//             {role && (
//               <li className="nav-item">
//                 <button className="btn btn-danger ms-2" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//     // </div>

//   );
// }
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
