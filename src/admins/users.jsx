// import React, { useEffect, useState } from "react";
// import axios from "axios";
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
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const limit = 7;
//   const [totalUsers, setTotalUsers] = useState(0);
//     const totalPages = Math.ceil(totalUsers / limit);
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   const fetchUsers = async (page) => {
//     try {
//       setLoading(true);
//       const start = (page - 1) * limit;
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
//       );

    
//       setUsers(response.data);      
//       setTotalUsers(100);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//       setUsers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(page);
//   }, [page]);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Users</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <Table className="border border-gray-300 border-collapse min-w-[700px] mx-auto scrollbar-none">
//   <TableHeader>
//     <TableRow className="border-b border-gray-300  text-center  c">
//       <TableHead className="border border-gray-300">ID</TableHead>
//       <TableHead className="border border-gray-300">Title</TableHead>
//       <TableHead className="border border-gray-300">Body</TableHead>
//       <TableHead className="border border-gray-300">User ID</TableHead>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     {users.map((user) => (
//       <TableRow key={user.id} className="border-b border-gray-300">
//         <TableCell className="border border-gray-300">{user.id}</TableCell>
//         <TableCell className="border border-gray-300">{user.title}</TableCell>
//         <TableCell className="border border-gray-300">{user.body}</TableCell>
//         <TableCell className="border border-gray-300">{user.userId}</TableCell>
//       </TableRow>
//     ))}
//   </TableBody>
// </Table>
//           <div className="flex justify-center items-center  mt-4  gap-2">
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
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuEye, LuPencilLine } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";
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
  const limit = 7;
  const [totalUsers, setTotalUsers] = useState(0);
  const totalPages = Math.ceil(totalUsers / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Edit state
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  // Modal / Preview state
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async (page) => {
    try {
      setLoading(true);
      const start = (page - 1) * limit;
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
      );
      setUsers(response.data);
      setTotalUsers(100); // mock total
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

  // Action Handlers
  const handleEdit = (user) => {
    setEditingId(user.id);
    setEditTitle(user.title);
  };

  const handleSave = (id) => {
    const updatedUsers = users.map((u) =>
      u.id === id ? { ...u, title: editTitle } : u
    );
    setUsers(updatedUsers);
    setEditingId(null);
    setEditTitle("");
  };

  const handleDelete = (user) => {
    if (window.confirm(`Are you sure you want to delete user ${user.id}?`)) {
      setUsers(users.filter((u) => u.id !== user.id));
    }
  };

  const handlePreview = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  if (loading) return <p className="p-4">Loading ...</p>;

  return (
    <div className="p-4 flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Users</h2>

      <div className="overflow-x-auto w-full">
        <Table className="border border-gray-300 border-collapse min-w-[800px] mx-auto">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="border p-2 text-center">ID</TableHead>
              <TableHead className="border p-2 text-center">Title</TableHead>
              <TableHead className="border p-2 text-center">Body</TableHead>
              <TableHead className="border p-2 text-center">User ID</TableHead>
              <TableHead className="border p-2 text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-50">
                <TableCell className="border p-2 text-center">{user.id}</TableCell>
                <TableCell className="border p-2">
                  {editingId === user.id ? (
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    user.title
                  )}
                </TableCell>
                <TableCell className="border p-2">{user.body}</TableCell>
                <TableCell className="border p-2 text-center">{user.userId}</TableCell>
                <TableCell className="border p-2">
                  <div className="flex justify-end items-center gap-2">
                   
                    {editingId === user.id ? (
                      <button
                        onClick={() => handleSave(user.id)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700"
                      >
                        ✓
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(user)}
                        className="w-10 h-10 flex items-center justify-center ms-2  border hover:bg-gray-100 "
                        style={{borderRadius:"50px"}}
                      >
                        <LuPencilLine className="w-5 h-5" />
                      </button>
                    )}

                 
                    <button
                      onClick={() => handleDelete(user)}
                      className="w-10 h-10 flex items-center justify-center ms-2 border hover:bg-gray-100"
                      style={{borderRadius:"50px"}}
                    >
                      <AiOutlineDelete className="w-5 h-5" />
                    </button>

              
                    <button
                      onClick={() => handlePreview(user)}
                      className="w-10 h-10 flex items-center justify-center border hover:bg-gray-100 ms-2 mt-2"
                      style={{borderRadius:"50px"}}
                    >
                      <LuEye className="w-5 h-5" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

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

      {/* Preview Modal */}
      {open && selectedUser && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center overflow-y-auto">

          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-white rounded-lg shadow-lg max-w-md w-[90%] p-6 z-50">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {selectedUser.id}</p>
              <p><strong>Title:</strong> {selectedUser.title}</p>
              <p><strong>Body:</strong> {selectedUser.body}</p>
              <p><strong>User ID:</strong> {selectedUser.userId}</p>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setOpen(false)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
