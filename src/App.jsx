import React, { useState } from "react";
import Login from "./page/login";
import Dashboard from "./page/dashboard";

export default function App() {
  const [role, setRole] = useState(null);

  const handleLogin = (selectedRole) => setRole(selectedRole);
  const handleLogout = () => setRole(null);

  return (
    <div>
      {!role ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard role={role} onLogout={handleLogout} />
      )}
    </div>
      );
}
