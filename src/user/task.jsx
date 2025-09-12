"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../component/table"; 
import "bootstrap/dist/css/bootstrap.min.css";

export default function Task() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  // ✅ Delete handler
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        alert(`User ID ${id} deleted (fake API, only UI updated)`);
        // Remove from UI
        setUsers((prev) => prev.filter((user) => user.id !== id));
      } else {
        console.error("Delete failed");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">My Task</h2>
      <Table className="border border-gray-300 text-center border-collapse min-w-[700px] mx-auto">
        <TableHeader>
          <TableRow className="border border-gray-300">
            <TableHead className="border border-gray-300">ID</TableHead>
            <TableHead className="border border-gray-300">Name</TableHead>
            <TableHead className="border border-gray-300">Email</TableHead>
            <TableHead className="border border-gray-300">Phone</TableHead>
            <TableHead className="border border-gray-300">City</TableHead>
            <TableHead className="border border-gray-300">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="border-b border-gray-300">
              <TableCell className="border border-gray-300">{user.id}</TableCell>
              <TableCell className="border border-gray-300">{user.name}</TableCell>
              <TableCell className="border border-gray-300">{user.email}</TableCell>
              <TableCell className="border border-gray-300">{user.phone}</TableCell>
              <TableCell className="border border-gray-300">{user.address?.city}</TableCell>
              <TableCell className="border border-gray-300">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
