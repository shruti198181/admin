

"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../component/table"; // adjust import path
// ❌ removed lucide-react since you had errors

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manager Report</h2>
      <Table className="border border-gray-300">
        <TableHeader>
          <TableRow className="border-b border-gray-300">
            <TableHead className="border-r border-gray-300">ID</TableHead>
            <TableHead className="border-r border-gray-300">Name</TableHead>
            <TableHead className="border-r border-gray-300">Email</TableHead>
            <TableHead className="border-r border-gray-300">Phone</TableHead>
            <TableHead>City</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} className="border-b border-gray-300">
              <TableCell className="border-r border-gray-300">
                {user.id}
              </TableCell>
              <TableCell className="border-r border-gray-300">
                {user.name}
              </TableCell>
              <TableCell className="border-r border-gray-300">
                {user.email}
              </TableCell>
              <TableCell className="border-r border-gray-300">
                {user.phone}
              </TableCell>
              <TableCell>{user.address?.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
