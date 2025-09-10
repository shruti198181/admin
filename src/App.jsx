import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import NavbarHeader from "./component/header";
import LoginForm from "./page/loginform";
import Dashboard from "./page/dashboard";
import UsersData from "./admins/user";
import Setting from "./admins/setting";
import Reports from "./admins/reports";
import Projects from "./manager/project";
import Team from "./manager/team";
import ManagerReport from "./manager/mreport";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [role, setRole] = useState(null);
  const [showLogin, setShowLogin] = useState(true); // show login on first load

  const handleLogout = () => {
    setRole(null);
    setShowLogin(true);
  };

  return (
    <>
      {/* Header always visible */}
      <NavbarHeader role={role} setRole={setRole} setShowLogin={setShowLogin} />

      {/* Login Modal */}
      <Modal
        show={showLogin && !role}
        onHide={() => setShowLogin(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm
            setRole={(r) => {
              setRole(r);
              setShowLogin(false);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogin(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Routes */}
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={
            role ? (
              <Navigate to="/dashboard" />
            ) : (
              <div className="text-center mt-5">
                <h2>Welcome! Please login to continue.</h2>
              </div>
            )
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard/*"
          element={
            role ? (
              <Dashboard role={role} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Admin routes */}
        <Route
          path="/admin/user"
          element={role === "admin" ? <UsersData /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/setting"
          element={role === "admin" ? <Setting /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/reports"
          element={role === "admin" ? <Reports /> : <Navigate to="/" />}
        />

        {/* Manager routes */}
        <Route
          path="/manager/project"
          element={role === "manager" ? <Projects /> : <Navigate to="/" />}
        />
        <Route
          path="/manager/team"
          element={role === "manager" ? <Team /> : <Navigate to="/" />}
        />
        <Route
          path="/manager/reports"
          element={role === "manager" ? <ManagerReport /> : <Navigate to="/" />}
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
