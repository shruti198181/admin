"use client";
// import React, { useState } from "react";

// const Setting = () => {
//   const [siteName, setSiteName] = useState("My Admin Dashboard");
//   const [adminEmail, setAdminEmail] = useState("admin@gmail.com");

//   const handleSave = () => {
//     alert(`Settings saved:\nSite Name: ${siteName}\nAdmin Email: ${adminEmail}`);
//     // You can call API here to save settings
//   };

//   return (
//     <div className="p-4" style={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center',}}>
//       <h2 className="text-xl font-bold mb-4" >Admin Settings</h2>
//       <div className="mb-3 mt-5">
// <label className=" mb-1 text-danger fs-5">Admin SiteName:</label>

//         <input
//           type="text"
//           value={siteName}
//           onChange={(e) => setSiteName(e.target.value)}
//           className="border p-2 w-full ms-2"
//         />
//       </div>
//       <div className="mb-3">
//           <label className="mb-1 fs-5` text-danger">Admin Email:</label>

//         <input
//           type="email"
//           value={adminEmail}
//           onChange={(e) => setAdminEmail(e.target.value)}
//           className="border p-2 w-full ms-2"
//         />
//       </div>
//       <button
//         onClick={handleSave}
//         className="bg-blue-500 text-blue-600 px-4 py-2 rounded"
//       >
//         Save Settings
//       </button>
//     </div>
//   );
// };

// export default Setting;
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
//   const limit = 7; // items per page
//   const [totalUsers, setTotalUsers] = useState(0);
//     const totalPages = Math.ceil(totalUsers / limit);
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   // Fetch data from API
//   const fetchUsers = async (page) => {
//     try {
//       setLoading(true);
//       const start = (page - 1) * limit;
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/albums/1/photos"
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
//       <h2 className="text-2xl font-bold mb-4">Users</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <>
//           <Table className="border border-gray-300">
//   <TableHeader>
//     <TableRow className="border-b border-gray-300 text-primary text-center">
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
// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../component/table";

// export default function Setting() {
//   const [photos, setPhotos] = useState([]); // no <Photo[]>
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
//       .then((response) => response.json())
//       .then((data) => {
//         setPhotos(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching photos:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Album Photos</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>ID</TableHead>
//               <TableHead>Thumbnail</TableHead>
//               <TableHead>Title</TableHead>
//             </TableRow>
//           </TableHeader>
//          <TableBody>
//   {photos.map((photo) => (
//     <TableRow key={photo.id}>
//       <TableCell>{photo.id}</TableCell>
//       <TableCell>
//         <img
//           src={photo.thumbnailUrl}   // 👈 Use thumbnailUrl here
//           alt={photo.title}
//           className="w-16 h-16 rounded-md border object-cover"
//         />
//       </TableCell>
//       <TableCell className="max-w-xs truncate">
//         {photo.title}
//       </TableCell>
//     </TableRow>
//   ))}
// </TableBody>

//         </Table>
//       )}
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
// } from "../component/table"; // 👈 make sure this is your ShadCN table path

// export default function Setting() {
//   const [photos, setPhotos] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
//       .then((response) => response.json())
//       .then((data) => {
//         setPhotos(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching photos:", err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">Album Photos</h1>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>ID</TableHead>
//               <TableHead>Thumbnail</TableHead>
//               <TableHead>Title</TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {photos.map((photo) => (
//               <TableRow key={photo.id}>
//                 <TableCell>{photo.id}</TableCell>
//                 <TableCell>
//                   <img
//                     src={photo.thumbnailUrl} // ✅ use thumbnailUrl (small image)
//                     alt={photo.title}
//                     className="w-16 h-16 rounded-md border object-cover"
//                   />
//                 </TableCell>
//                 <TableCell className="max-w-xs truncate">
//                   {photo.title}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       )}
//     </div>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../component/table"; // adjust path if needed

// export default function AlbumPhotos() {
//   const [photos, setPhotos] = useState([]); // no interface

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
//       .then((res) => res.json())
//       .then((data) => setPhotos(data));
//   }, []);

//   return (
//     <div className="overflow-x-auto">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>ID</TableHead>
//             <TableHead>Thumbnail</TableHead>
//             <TableHead>Title</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {photos.map((photo) => (
//             <TableRow key={photo.id}>
//               <TableCell>{photo.id}</TableCell>
//               <TableCell>
//                 <img
//                   src={photo.thumbnailUrl}
//                   alt={photo.title}
//                   className="w-16 h-16 rounded"
//                 />
//               </TableCell>
//               <TableCell>{photo.title}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../component/table"; // adjust path if needed

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: "20px" }}>Loading posts...</p>;

  return (
    <div style={{ padding: "20px", overflowX: "auto" }}>
      <h1 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>User Posts</h1>
      <Table style={{ minWidth: "700px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <TableHeader style={{ backgroundColor: "#f0f0f0" }}>
          <TableRow>
            <TableHead style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>ID</TableHead>
            <TableHead style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>User ID</TableHead>
            <TableHead style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Title</TableHead>
            <TableHead style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>Body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.id}
              style={{
                borderBottom: "1px solid #eee",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <TableCell style={{ padding: "10px" }}>{post.id}</TableCell>
              <TableCell style={{ padding: "10px" }}>{post.userId}</TableCell>
              <TableCell style={{ padding: "10px" }}>{post.title}</TableCell>
              <TableCell style={{ padding: "10px" }}>{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
