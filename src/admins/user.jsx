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
    const totalPages = Math.ceil(totalUsers / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Fetch data from API
  const fetchUsers = async (page) => {
    try {
      setLoading(true);
      const start = (page - 1) * limit;
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`
      );

    
      setUsers(response.data);

      
      setTotalUsers(100);
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



  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table className="border border-gray-300">
  <TableHeader>
    <TableRow className="border-b border-gray-300 text-primary text-center">
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
