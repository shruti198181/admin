"use client"

import React, { useEffect, useState } from "react";
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
  const limit = 10; 
  const totalPages = Math.ceil(photos.length / limit);
  const currentItems = photos.slice( (page - 1) * limit, page * limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        setPhotos(data);
      })
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

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
            {/* <TableHead className="border border-gray-300">Image</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((photo) => (
            <TableRow key={photo.id}>
              <TableCell className="border border-gray-300">{photo.id}</TableCell>
              <TableCell className="border border-gray-300">{photo.title}</TableCell>
              {/* <TableCell className="border border-gray-300">
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  width={100}
                  height={100}
                  className="rounded border"
                />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>  
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
