"use client"
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../component/table";
import { LuPencilLine, LuEye } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";

export default function Report() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const limit = 10;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);
  const totalPages = Math.ceil(data.length / limit);
  const currentTodos = data.slice((page - 1) * limit, page * limit);
  const handleDelete = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };
  const handleEdit = (todo) => {
     setEditingId(todo.id);
     setEditTitle(todo.title);
  };
  const handleSave = (id) => {
    const updatedData = data.map((todo) =>
      todo.id === id ? { ...todo, title: editTitle } : todo
    );
    setData(updatedData);
    setEditingId(null);
    setEditTitle("");
  };
  const handlePreview = (id) => {
    const todo = data.find((t) => t.id === id);
    alert(`Preview Todo:\n\nID: ${todo.id}\nTitle: ${todo.title}\nCompleted: ${todo.completed}`);
  };
  if (loading) return <p className="p-4">Loading ...</p>;
  return (
    <div className="p-4 flex flex-col items-center w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">User  Report</h2>
      <div className="overflow-x-auto w-full">
        <Table className="border border-gray-300 border-collapse min-w-[800px] mx-auto">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="border p-2 text-center">ID</TableHead>
              <TableHead className="border p-2 text-center">User ID</TableHead>
              <TableHead className="border p-2">Title</TableHead>
              <TableHead className="border p-2 text-center">Completed</TableHead>
              <TableHead className="border p-2 text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTodos.map((todo) => (
              <TableRow key={todo.id} className="hover:bg-gray-50">
                <TableCell className="border p-2 text-center">{todo.id}</TableCell>
                <TableCell className="border p-2 text-center">{todo.userId}</TableCell>
                <TableCell className="border p-2">
                  {editingId === todo.id ? (
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    />
                  ) : (
                    todo.title
                  )}
                </TableCell>
                <TableCell className="border p-2 text-center">
                  <button
                    onClick={() => {
                      const updatedData = data.map((t) =>
                        t.id === todo.id ? { ...t, completed: !t.completed } : t
                      );
                      setData(updatedData);
                    }}
                    className={`w-32 py-1 rounded-full font-semibold text-primary transition
                      ${todo.completed ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
                  >
                    {todo.completed ? "Completed" : "Not Completed"}
                  </button>
                </TableCell>
<TableCell className="border p-2">
  <div className="flex justify-end items-center gap-2">
    {editingId === todo.id ? (
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700"
        onClick={() => handleSave(todo.id)}
      >
       <span className="text-lg font-bold">✓</span>
      </button>
    ) : (
      <button
        className="w-10 h-10 flex items-center justify-center ms-2 border hover:bg-gray-100"
        onClick={() => handleEdit(todo)}
        style={{borderRadius:"50px"}}
      >
        <LuPencilLine className="w-5 h-5" />
      </button>
    )}
    <button
      className="w-10 h-10 flex items-center justify-center border ms-2 hover:bg-gray-100"
      onClick={() => handleDelete(todo.id)}
      style={{borderRadius:"50px"}}
    >
      <AiOutlineDelete className="w-5 h-5" />
    </button>
       <button
      className="w-10 h-10 flex items-center justify-center ms-2  border hover:bg-gray-100"
      onClick={() => handlePreview(todo.id)}
      style={{borderRadius:"50px"}} >
      <LuEye className="w-5 h-5" />
    </button>
  </div>
   </TableCell>
  </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
