//  import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../component/table";

// export default function UsersData() {
//   return (
// <div style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',}}>
// <div style={{fontSize:'30px',fontWeight:'bold',color:'rgba(28, 22, 119, 1)'}}>User Admin</div>
//       <Table className="border border-gray-300 mt-5">
//         <TableHeader>
//           <TableRow className="border border-gray-300">
//             <TableHead className="border border-gray-300 w-[50px]">ID</TableHead>
//             <TableHead className="border border-gray-300">Name</TableHead>
//             <TableHead className="border border-gray-300">Email</TableHead>
//             <TableHead className="border border-gray-300">PhoneNumber</TableHead>
//             <TableHead className="border border-gray-300">City</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           <TableRow className="border border-gray-300">
//             <TableCell className="border border-gray-300 font-medium">1</TableCell>
//             <TableCell className="border border-gray-300">John Doe</TableCell>
//             <TableCell className="border border-gray-300">john@gmail.com</TableCell>
//             <TableCell className="border border-gray-300">9825369622</TableCell>
//             <TableCell className="border border-gray-300">Surat</TableCell>
//           </TableRow>
//           <TableRow className="border border-gray-300">
//             <TableCell className="border border-gray-300 font-medium">2</TableCell>
//             <TableCell className="border border-gray-300">Jane Smith</TableCell>
//             <TableCell className="border border-gray-300">jane@gmail.com</TableCell>
//             <TableCell className="border border-gray-300">9825396655</TableCell>
//             <TableCell className="border border-gray-300">Mumbai</TableCell>
//           </TableRow>
//           <TableRow className="border border-gray-300">
//             <TableCell className="border border-gray-300 font-medium">2</TableCell>
//             <TableCell className="border border-gray-300">Rahul Patel</TableCell>
//             <TableCell className="border border-gray-300">rp@gmail.com</TableCell>
//             <TableCell className="border border-gray-300">9825825515</TableCell>
//             <TableCell className="border border-gray-300">Pune</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../component/table";

// export default function UsersData() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const cities = ["Surat", "Mumbai", "Pune", "Ahmedabad", "Delhi"];

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts") 
//       .then((response) => response.json())
//       .then((data) => {
//         // Map API data to match table columns
//         const mappedUsers = data.slice(0, 10).map((item) => ({
//           id: item.id,
//           name: item.title.substring(0, 15), // fake short name
//           email: `user${item.userId}@example.com`,
//           phoneNumber: `98${Math.floor(10000000 + Math.random() * 90000000)}`, // fake phone
//           city: cities[Math.floor(Math.random() * cities.length)],
//         }));
//         setUsers(mappedUsers);
//         setLoading(false);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <div style={{ fontSize: "30px", fontWeight: "bold", color: "rgba(28, 22, 119, 1)" }}>
//         User Admin
//       </div>

//       {loading ? (
//         <div style={{ marginTop: "20px" }}>Loading users...</div>
//       ) : (
//         <Table className="border border-gray-300 mt-5">
//           <TableHeader>
//             <TableRow className="border border-gray-300">
//               <TableHead className="border border-gray-300 w-[50px]">ID</TableHead>
//               <TableHead className="border border-gray-300">Name</TableHead>
//               <TableHead className="border border-gray-300">Email</TableHead>
//               <TableHead className="border border-gray-300">PhoneNumber</TableHead>
//               <TableHead className="border border-gray-300">City</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id} className="border border-gray-300">
//                 <TableCell className="border border-gray-300 font-medium">{user.id}</TableCell>
//                 <TableCell className="border border-gray-300">{user.name}</TableCell>
//                 <TableCell className="border border-gray-300">{user.email}</TableCell>
//                 <TableCell className="border border-gray-300">{user.phoneNumber}</TableCell>
//                 <TableCell className="border border-gray-300">{user.city}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../component/table";

export default function UsersData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 10; // users per page
  const [totalUsers, setTotalUsers] = useState(0);

  const cities = ["Surat", "Mumbai", "Pune", "Ahmedabad", "Delhi"];

  // Fetch users
  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      setTotalUsers(data.length); // total users in API

      const start = (page - 1) * limit;
      const paginatedData = data.slice(start, start + limit);

      const mappedUsers = paginatedData.map((item) => ({
        id: item.id,
        name: item.title.substring(0, 15),
        email: `user${item.userId}@example.com`,
        phoneNumber: `98${Math.floor(10000000 + Math.random() * 90000000)}`,
        city: cities[Math.floor(Math.random() * cities.length)],
      }));

      setUsers(mappedUsers);
    } catch (error) {
      console.error(error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const totalPages = Math.ceil(totalUsers / limit);

  // Generate numbered page buttons
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ fontSize: "30px", fontWeight: "bold", color: "rgba(28, 22, 119, 1)" }}>
        User Admin
      </div>

      {loading ? (
        <div style={{ marginTop: "20px" }}>Loading users...</div>
      ) : (
        <>
          <Table className="border border-gray-300 mt-5">
            <TableHeader>
              <TableRow className="border border-gray-300">
                <TableHead className="border border-gray-300 w-[50px]">ID</TableHead>
                <TableHead className="border border-gray-300">Name</TableHead>
                <TableHead className="border border-gray-300">Email</TableHead>
                <TableHead className="border border-gray-300">PhoneNumber</TableHead>
                <TableHead className="border border-gray-300">City</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="border border-gray-300">
                  <TableCell className="border border-gray-300 font-medium">{user.id}</TableCell>
                  <TableCell className="border border-gray-300">{user.name}</TableCell>
                  <TableCell className="border border-gray-300">{user.email}</TableCell>
                  <TableCell className="border border-gray-300">{user.phoneNumber}</TableCell>
                  <TableCell className="border border-gray-300">{user.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-4 gap-2">
            <button
              className="btn btn-sm btn-primary"
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>

            {pages.map((p) => (
              <button
                key={p}
                className={`btn btn-sm ${p === page ? "btn-secondary" : "btn-outline"}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}

            <button
              className="btn btn-sm btn-primary"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
