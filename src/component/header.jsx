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
import React from "react";
import { Link } from "react-router-dom";

export default function NavbarHeader({ role, setRole, setShowLogin }) {
  const handleLogout = () => {
    setRole(null);
    setShowLogin(true);
  };

  const menuItems = {
    admin: [
      { label: "Users", path: "/admin/user" },
      { label: "Settings", path: "/admin/setting" },
      { label: "Reports", path: "/admin/reports" },
    ],
    manager: [
      { label: "Projects", path: "/manager/project" },
      { label: "Team", path: "/manager/team" },
      { label: "Reports", path: "/manager/reports" },
    ],
    user: [
      { label: "My Profile", path: "/user/myprofile" },
      { label: "Task", path: "/user/task" },
    ],
  };

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">

        <Link className="navbar-brand" to="/">
  <img
 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntpCWJJ3vBRfCGc1-CoX7-VtGDlVX5xQqSA&s"
alt="My Dashboard Logo"
    height="70"               // adjust height as needed
    className="d-inline-block align-text-top "
    
  />
</Link>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">

            {/* Admin dropdown */}
            <li className="nav-item dropdown mx-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                id="adminDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </button>
              <ul className="dropdown-menu" aria-labelledby="adminDropdown">
                {menuItems.admin.map((item) => (
                  <li key={item.path}>
                    <Link className="dropdown-item" to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Manager dropdown */}
            <li className="nav-item dropdown mx-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                id="managerDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manager
              </button>
              <ul className="dropdown-menu" aria-labelledby="managerDropdown">
                {menuItems.manager.map((item) => (
                  <li key={item.path}>
                    <Link className="dropdown-item" to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* User dropdown */}
            <li className="nav-item dropdown mx-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </button>
              <ul className="dropdown-menu" aria-labelledby="userDropdown">
                {menuItems.user.map((item) => (
                  <li key={item.path}>
                    <Link className="dropdown-item" to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

          </ul>
        </div>

        {/* Login / Logout on right */}
        <ul className="navbar-nav ms-auto">
          {!role && (
            <li className="nav-item">
              <button className="btn btn-primary" onClick={() => setShowLogin(true)}>
                Login
              </button>
            </li>
          )}

          {role && (
            <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>

  );
}
