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
//   const [page, setPage] = useState(1);
//   const limit = 10; // users per page
//   const [totalUsers, setTotalUsers] = useState(0);

//   const cities = ["Surat", "Mumbai", "Pune", "Ahmedabad", "Delhi"];

//   // Fetch users
//   const fetchUsers = async (page) => {
//     setLoading(true);
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await response.json();

//       setTotalUsers(data.length); // total users in API

//       const start = (page - 1) * limit;
//       const paginatedData = data.slice(start, start + limit);

//       const mappedUsers = paginatedData.map((item) => ({
//         id: item.id,
//         name: item.title.substring(0, 15),
//         email: `user${item.userId}@example.com`,
//         phoneNumber: `98${Math.floor(10000000 + Math.random() * 90000000)}`,
//         city: cities[Math.floor(Math.random() * cities.length)],
//       }));

//       setUsers(mappedUsers);
//     } catch (error) {
//       console.error(error);
//       setUsers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(page);
//   }, [page]);

//   const totalPages = Math.ceil(totalUsers / limit);

//   // Generate numbered page buttons
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <div style={{ fontSize: "30px", fontWeight: "bold", color: "rgba(28, 22, 119, 1)" }}>
//         User Admin
//       </div>

//       {loading ? (
//         <div style={{ marginTop: "20px" }}>Loading users...</div>
//       ) : (
//         <>
//           <Table className="border border-gray-300 mt-5">
//             <TableHeader>
//               <TableRow className="border border-gray-300">
//                 <TableHead className="border border-gray-300 w-[50px]">ID</TableHead>
//                 <TableHead className="border border-gray-300">Name</TableHead>
//                 <TableHead className="border border-gray-300">Email</TableHead>
//                 <TableHead className="border border-gray-300">PhoneNumber</TableHead>
//                 <TableHead className="border border-gray-300">City</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {users.map((user) => (
//                 <TableRow key={user.id} className="border border-gray-300">
//                   <TableCell className="border border-gray-300 font-medium">{user.id}</TableCell>
//                   <TableCell className="border border-gray-300">{user.name}</TableCell>
//                   <TableCell className="border border-gray-300">{user.email}</TableCell>
//                   <TableCell className="border border-gray-300">{user.phoneNumber}</TableCell>
//                   <TableCell className="border border-gray-300">{user.city}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           {/* Pagination */}
//           <div className="flex justify-center items-center mt-4 gap-2">
//             <button
//               className="btn btn-sm btn-primary"
//               disabled={page === 1}
//               onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//             >
//               Previous
//             </button>

//             {pages.map((p) => (
//               <button
//                 key={p}
//                 className={`btn btn-sm ${p === page ? "btn-secondary" : "btn-outline"}`}
//                 onClick={() => setPage(p)}
//               >
//                 {p}
//               </button>
//             ))}

//             <button
//               className="btn btn-sm btn-primary"
//               disabled={page === totalPages}
//               onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 7; // items per page
  const [totalUsers, setTotalUsers] = useState(0);

  // Fetch data from API
  const fetchUsers = async (page) => {
    try {
      setLoading(true);
      const start = (page - 1) * limit;
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
      );

      // API returns array directly
      setUsers(response.data);

      // JSONPlaceholder doesn't return total count, simulate it
      setTotalUsers(100); // total 100 posts in placeholder
    } catch (error) {
      console.error("Error fetching users:", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const totalPages = Math.ceil(totalUsers / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table className="border border-gray-300">
  <TableHeader>
    <TableRow className="border-b border-gray-300">
      <TableHead className="border border-gray-300">ID</TableHead>
      <TableHead className="border border-gray-300">Title</TableHead>
      <TableHead className="border border-gray-300">Body</TableHead>
      <TableHead className="border border-gray-300">User ID</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id} className="border-b border-gray-300">
        <TableCell className="border border-gray-300">{user.id}</TableCell>
        <TableCell className="border border-gray-300">{user.title}</TableCell>
        <TableCell className="border border-gray-300">{user.body}</TableCell>
        <TableCell className="border border-gray-300">{user.userId}</TableCell>
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
