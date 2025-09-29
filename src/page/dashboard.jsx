
"use client";
import React, { useState, useMemo } from "react";
import { BsBoxArrowUpRight, BsList } from "react-icons/bs";
import UsersData from "../admins/users";
import Setting from "../admins/setting";
import Reports from "../admins/reports";
import Projects from "../manager/project";
import Team from "../manager/team";
import ManagerReport from "../manager/mreport";
import MyProfile from "../user/myprofile";
import Task from "../user/task";

// Role-based menus
const RoleMenu = {
  admin: ["Users", "Setting", "Reports"],
  manager: ["Projects", "Team", "Reports"],
  user: ["My Profile", "Task"],
};

// Sidebar Component
function AppSidebar({ currentRole, menus, onLogout, onSelectMenu, mobileOpen, closeMobile }) {
  const [open, setOpen] = useState(true);

  const handleMenuClick = (menu) => {
    onSelectMenu(menu);
    if (closeMobile) closeMobile();
  };

  return (
    <>
      <div className={`sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="menu-container">
          <h3 className="role-toggle" onClick={() => setOpen(!open)}>
            {currentRole} ▾
          </h3>
          {open &&
            menus.map((menu) => (
              <button
                key={menu}
                onClick={() => handleMenuClick(menu)}
                className="sidebar-menu"
              >
                {menu}
              </button>
            ))}
        </div>

        <div className="logout-container">
          <button onClick={onLogout} className="logout-btn">
            <BsBoxArrowUpRight /> Logout
          </button>
        </div>
      </div>

      {mobileOpen && <div className="sidebar-overlay" onClick={closeMobile}></div>}

      <style jsx>{`
        .sidebar {
          width: 220px;
          height: 100vh;
          background-color: #1f2937;
          color: white;
          display: flex;
          flex-direction: column;
          padding-top: 80px;
          justify-content: space-between;
          position: fixed; /* FIXED always */
          top: 0;
          left: 0;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 50;
        }

        .sidebar.open {
          transform: translateX(0);
        }

        .menu-container {
          flex: 1;
          padding: 20px 10px;
        }

        .role-toggle {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 15px;
          cursor: pointer;
        }

        .sidebar-menu {
          width: 100%;
          text-align: left;
          padding: 10px;
          margin-bottom: 8px;
          background-color: transparent;
          border: none;
          border-radius: 5px;
          color: white;
          cursor: pointer;
        }

        .sidebar-menu:hover {
          background-color: #374151;
        }

        .logout-container {
          padding: 15px;
          margin-top: 200px;
          border-top: 1px solid #374151;
          display: flex;
          justify-content: center;
          padding-bottom: 50px;
        }

        .logout-btn {
          width: 100%;
          background-color: #ef4444;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 10px;
          font-size: 14px;
        }

        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 40;
        }

        @media (min-width: 768px) {
          .sidebar {
            transform: translateX(0); /* always visible on desktop */
          }
          .sidebar-overlay {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

// Main Dashboard Component
export default function Dashboard({ role, onLogout }) {
  const [currentRole] = useState(role);
  const menus = useMemo(() => RoleMenu[currentRole] ?? [], [currentRole]);
  const [selectedMenu, setSelectedMenu] = useState(menus[0] || "");
  const [mobileOpen, setMobileOpen] = useState(false);

  const roleComponents = {
    admin: { Users: <UsersData />, Setting: <Setting />, Reports: <Reports /> },
    manager: { Projects: <Projects />, Team: <Team />, Reports: <ManagerReport /> },
    user: { "My Profile": <MyProfile />, Task: <Task /> },
  };

  return (
    <div className="dashboard-container">
      {/* Mobile toggle button */}
      <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
        <BsList size={24} />
      </button>

      {/* Sidebar */}
      <AppSidebar
        currentRole={currentRole}
        menus={menus}
        onLogout={onLogout}
        onSelectMenu={setSelectedMenu}
        mobileOpen={mobileOpen}
        closeMobile={() => setMobileOpen(false)}
      />

      {/* Main content */}
      <div className="dashboard-content">
        <h2>{currentRole} Dashboard</h2>
        <div className="dashboard-inner">
          {roleComponents[currentRole]?.[selectedMenu] || <p>Select a menu</p>}
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          width: 100%;
          background-color: #f3f4f6;
        }

        .mobile-toggle {
          display: inline-block;
          position: fixed;
          top: 10px;
          left: 10px;
          z-index: 60;
          background-color: #1f2937;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 8px;
          cursor: pointer;
        }

        @media (min-width: 768px) {
          .mobile-toggle {
            display: none;
          }
        }

        .dashboard-content {
          flex: 1;
          margin-left: 0;
          padding: 20px;
          background-color: #f3f4f6;
          width: 100%;
          transition: margin-left 0.3s;
        }

        @media (min-width: 768px) {
          .dashboard-content {
            margin-left: 220px; /* space for fixed sidebar */
          }
        }

        .dashboard-inner {
          width: 100%;
          min-height: calc(100vh - 60px);
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
}
