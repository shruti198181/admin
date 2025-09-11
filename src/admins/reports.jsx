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

  if (loading) return <p style={{ padding: "20px" }}>Loading todos...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Todos Report</h2>

      <Table className="border border-gray-300 border-collapse w-full">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="border border-gray-300 p-2 text-center">ID</TableHead>
            <TableHead className="border border-gray-300 p-2 text-center">User ID</TableHead>
            <TableHead className="border border-gray-300 p-2 text-left">Title</TableHead>
            <TableHead className="border border-gray-300 p-2 text-center">Completed</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentTodos.map((todo) => (
            <TableRow key={todo.id} className="hover:bg-gray-50">
              <TableCell className="border border-gray-300 p-2 text-center">{todo.id}</TableCell>
              <TableCell className="border border-gray-300 p-2 text-center">{todo.userId}</TableCell>
              <TableCell className="border border-gray-300 p-2">{todo.title}</TableCell>
              <TableCell className="border border-gray-300 p-2 text-center">
                <button
                  onClick={() => {
                    const updatedData = data.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    );
                    setData(updatedData);
                  }}
                  style={{
                    padding: "5px 15px",
                    borderRadius: "9999px",
                    fontWeight: "600",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: todo.completed ? "#28a745" : "#dc3545",
                    transition: "background-color 0.2s",
                  }}
                >
                  {todo.completed ? "Completed" : "Not Completed"}
                </button>
              </TableCell>
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
    </div>
  );
}
