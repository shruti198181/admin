"use client";

import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarHeader from "./component/header";
import LoginForm from "./page/loginform";
import Dashboard from "./page/dashboard";
import UsersData from "./admins/users";
import Setting from "./admins/setting";
import Reports from "./admins/reports";
import Projects from "./manager/project";
import Team from "./manager/team";
import ManagerReport from "./manager/mreport";
import MyProfile from "./user/myprofile";
import Task from "./user/task";

const ROLE_ADMIN = "admin";
const ROLE_MANAGER = "manager";
const ROLE_USER = "user";

export default function App() {
  const [role, setRole] = useState(null); 
  const [showLogin, setShowLogin] = useState(false); 

  const handleLogout = () => {
    setRole(null);
    setShowLogin(false); 
  };

  return (
    <>
    <div style={{
      backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpUfs6PnxZm7WFayf7ytEeCgYevcfVBoVNQ&s')",
      backgroundPosition:"center",
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      
      minHeight :"100vh"
    }}>
      
      <NavbarHeader
        role={role}
        setRole={setRole}
        setShowLogin={setShowLogin}
        onLogout={handleLogout}
      />

      
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
      </Modal>
      
            <Routes>
        

        <Route
          path="/dashboard/*"
          element={role ? <Dashboard role={role} onLogout={handleLogout} /> : <Navigate to="/" />}
        />

        
        <Route path="/admin/users" element={role === ROLE_ADMIN ? <UsersData /> : <Navigate to="/" />} />
        <Route path="/admin/setting" element={role === ROLE_ADMIN ? <Setting /> : <Navigate to="/" />} />
        <Route path="/admin/reports" element={role === ROLE_ADMIN ? <Reports /> : <Navigate to="/" />} />

        
        <Route path="/manager/project" element={role === ROLE_MANAGER ? <Projects /> : <Navigate to="/" />} />
        <Route path="/manager/team" element={role === ROLE_MANAGER ? <Team /> : <Navigate to="/" />} />
        <Route path="/manager/reports" element={role === ROLE_MANAGER ? <ManagerReport /> : <Navigate to="/" />} />

        
        <Route path="/user/myprofile" element={role === ROLE_USER ? <MyProfile /> : <Navigate to="/" />} />
        <Route path="/user/task" element={role === ROLE_USER ? <Task /> : <Navigate to="/" />} />

        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </div>
    </>
  );
}

