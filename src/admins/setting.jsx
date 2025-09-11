"use client";


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
