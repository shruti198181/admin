import { useState, useMemo } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import UsersData from "../admins/user";
import Setting from "../admins/setting";
import Reports from '../admins/reports';
import Projects from "../manager/project";
import Team from '../manager/team';
import ManagerReport from "../manager/mreport";
import NavbarHeader from '../component/header'

function AppSidebar({ currentRole, menus, onLogout, onSelectMenu }) {
   const [open, setOpen] = useState(true);

  return (
    
    <div
      style={{
        width: "220px",
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
      <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Dashboard
        </h2>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "15px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(!open)}
        >
          {currentRole} ▾
        </h3>
        {open &&
          menus.map((menu) => (
            <button
              key={menu}
              onClick={() => onSelectMenu(menu)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "10px",
                marginBottom: "8px",
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "5px",
                color: "white",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#374151")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              {menu}
            </button>
          ))}
      </div>

      <button
        onClick={onLogout}
        style={{
          width: "150px",
          backgroundColor: "#EF4444",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "8px",
        }}
      >
        <BsBoxArrowUpRight />
        Logout
      </button>
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
           <AppSidebar
        currentRole={currentRole}
        menus={menus}
        onLogout={onLogout}
        onSelectMenu={setSelectedMenu}
        onSelectRole={role => {
          setCurrentRole(role);
          setSelectedMenu(""); // reset menu when role changes
        }}
      />

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
        <h2 style={{ margin: 0, color: "rgba(70, 12, 12, 1)" }}>
          {currentRole} Dashboard
        </h2>

        {selectedMenu === "Users" && <UsersData/> }
         {selectedMenu === "Setting" && <Setting/>}
        {selectedMenu === "Reports" && currentRole === "Admin" && <Reports/>}

        {selectedMenu === "Projects" && <Projects/>}
        {selectedMenu === "Team" && <Team/>}
        {selectedMenu === "Reports"   && currentRole === "Manager"&& <ManagerReport/>}

        {selectedMenu === "My Profile" && <p>🙋 My Profile Info</p>}
        {selectedMenu === "Task" && <p>✅ Task Table</p>}
                  </div>
    </div>
  );
}
