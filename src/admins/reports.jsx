"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../component/table";

export default function Report() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(data.length / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const currentTodos = data.slice((page - 1) * limit, page * limit);

  if (loading) return <p className="p-4">Loading todos...</p>;

  return (
    <div className="p-4 flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">User Todos Report</h2>

      {/* Table wrapper with responsive scrolling */}
      <div className="overflow-x-auto w-full">
        <Table className="border border-gray-300 border-collapse min-w-[700px] mx-auto scrollbar-none">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="border p-2 text-center whitespace-nowrap">ID</TableHead>
              <TableHead className="border p-2 text-center whitespace-nowrap">User ID</TableHead>
              <TableHead className="border p-2 text-left">Title</TableHead>
              <TableHead className="border p-2 text-center whitespace-nowrap">Completed</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {currentTodos.map((todo) => (
              <TableRow key={todo.id} className="hover:bg-gray-50">
                <TableCell className="border p-2 text-center">{todo.id}</TableCell>
                <TableCell className="border p-2 text-center">{todo.userId}</TableCell>
                <TableCell className="border p-2">{todo.title}</TableCell>
               <TableCell className="border p-2 text-center">
  <button
    onClick={() => {
      const updatedData = data.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      );
      setData(updatedData);
    }}
    className={`w-40 py-1 rounded-full font-semibold text-primary text-center transition-colors
      ${todo.completed ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
  >
    {todo.completed ? "Completed" : "Not Completed"}
  </button>
</TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center mt-2  gap-2 text-center">
        <button
          className={`btn btn-sm btn-primary ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
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
          className={`btn btn-sm btn-primary ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
