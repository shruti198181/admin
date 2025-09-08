
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./page/loginform";
import Dashboard from "./page/dashboard";

export default function App() {
  const [role, setRole] = useState(null); // store logged-in role

  return (
    <Router>
      <Routes>
        {/* Login page */}
        <Route
          path="/login"
          element={!role ? <LoginForm setRole={setRole} /> : <Navigate to="/dashboard" />}
        />

        {/* Dashboard page */}
        <Route
          path="/dashboard"
          element={role ? <Dashboard role={role} onLogout={() => setRole(null)} /> : <Navigate to="/login" />}
        />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
