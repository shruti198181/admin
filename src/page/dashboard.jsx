import { useMemo, useState } from "react";
import Navbar from "../component/navbar";

const RoleMenu = {
  Admin: ["Users", "Setting", "Reports"],
  Manager: ["Projects", "Team", "Reports"],
  User: ["My Profile", "Task"],
};

export default function Dashboard({ role, onLogout }) {
  const [selectedMenu, setSelectedMenu] = useState("");

  // Correct useMemo dependency
  const menus = useMemo(() => RoleMenu[role] ?? [], [role]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        paddingTop: "10px",
      }}
    >
      <h2 style={{ margin: 0 }}>{role} Dashboard</h2>

      <Navbar menus={menus} onselect={setSelectedMenu} />

  
      {selectedMenu && <p style={{color:"green"}}>Selected Menu is {selectedMenu}</p>}

      <button style={{backgroundColor:"blue"}} onClick={onLogout}>Logout</button>
    </div>
  );
}
