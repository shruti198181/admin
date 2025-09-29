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

export default function AlbumPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const limit = 10;


  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const totalPages = Math.ceil(photos.length / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const currentItems = photos.slice((page - 1) * limit, page * limit);

  // PUT method to update photo title
  const handleUpdate = async (id) => {
    try {
      const updatedPhoto = { ...photos.find((p) => p.id === id), title: editTitle };

      const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPhoto),
      });

      const result = await res.json();
      console.log("Updated photo:", result);

    
      setPhotos((prev) => prev.map((p) => (p.id === id ? result : p)));
      setEditingId(null);
      setEditTitle("");
    } catch (err) {
      console.error("PUT error:", err);
    }
  };

  if (loading) {
    return <p className="p-4 text-center">Loading photos...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Album Photos</h2>

      <Table className="border border-gray-300 text-center border-collapse min-w-[700px] mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="border border-gray-300">ID</TableHead>
            <TableHead className="border border-gray-300">Title</TableHead>
            <TableHead className="border border-gray-300">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentItems.map((photo) => (
            <TableRow key={photo.id}>
              <TableCell className="border border-gray-300">{photo.id}</TableCell>
              <TableCell className="border border-gray-300">
                {editingId === photo.id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="border px-2 py-1 rounded w-full"
                  />
                ) : (
                  photo.title
                )}
              </TableCell>
              <TableCell className="border border-gray-300">
  {editingId === photo.id ? (
    <button
      onClick={() => handleUpdate(photo.id)}
      className="btn btn-success btn-sm"
    >
      Save
    </button>
  ) : (
    <button
      onClick={() => {
        setEditingId(photo.id);
        setEditTitle(photo.title);
      }}
      className="btn btn-primary btn-sm"
    >
      Edit
    </button>
  )}
</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 gap-2 text-center">
        <button
          className={`px-3 py-1 border rounded ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>

        {pages.map((p) => (
          <button
            key={p}
            className={`px-3 py-1 border rounded ${p === page ? "bg-gray-300" : ""}`}
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}

        <button
          className={`px-3 py-1 border rounded ${page === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        >
          Next
        </button>
      </div>
    </div>
  );
}
