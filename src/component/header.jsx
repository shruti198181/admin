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

  return (
   
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Dashboard
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Show login button if not logged in */}
            {!role && (
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </button>
              </li>
            )}

            {/* Admin links */}
            {role === "admin" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/user">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/setting">Settings</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/reports">Reports</Link>
                </li>
              </>
            )}

            {/* Manager links */}
            {role === "manager" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/manager/project">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manager/team">Team</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/manager/reports">Reports</Link>
                </li>
              </>
            )}

            {/* Logout button */}
            {role && (
              <li className="nav-item">
                <button className="btn btn-danger ms-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
    // </div>

  );
}