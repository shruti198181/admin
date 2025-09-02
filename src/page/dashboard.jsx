
import { useMemo, useState } from "react";
import Navbar from "../component/navbar";

function AppSidebar({ currentRole, onSelectRole, onLogout }) {
  const roles = ["Admin", "Manager", "User"];
  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        backgroundColor: "#1F2937",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <div>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
          Dashboard
        </h2>
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => onSelectRole(role)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: currentRole === role ? "#374151" : "transparent",
              border: "none",
              borderRadius: "5px",
              color: "white",
              cursor: "pointer",
            }}
          >
            {role}
          </button>
        ))}
      </div>

         </div>
  );
}

const RoleMenu = {
  Admin: ["Users", "Setting", "Reports"],
  Manager: ["Projects", "Team", "Reports"],
  User: ["My Profile", "Task"],
};

export default function Dashboard({ role, onLogout }) {
  const [selectedMenu, setSelectedMenu] = useState("");
  const [currentRole, setCurrentRole] = useState(role);

  const menus = useMemo(() => RoleMenu[currentRole] ?? [], [currentRole]);

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AppSidebar currentRole={currentRole} onSelectRole={setCurrentRole} onLogout={onLogout} />

      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#F3F4F6",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ margin: 0 ,color: 'rgba(70, 12, 12, 1)'}}>{currentRole} Dashboard</h2>

     <div style={{backgroundColorolor:'rgba(222, 142, 22, 1)'}}> <Navbar menus={menus} onselect={setSelectedMenu} /></div>  

        {selectedMenu && <p style={{ color: "slategray",fontSize:'25px',fontWeight:'bold' }}>Selected Menu is {selectedMenu}</p>}

         <button
        onClick={onLogout}
        style={{
           width:'200px',
          padding: "10px",
          backgroundColor: "#EF4444",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          color: "white",
        }}
      >
        Logout
      </button>

      </div>
    </div>
  );
}
