"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../component/table"; 

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
      <h1 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold", textAlign:"center"}}>User Posts</h1>
      <Table className="border border-red-300 border-collapse min-w-[700px] mx-auto scrollbar-none">
        <TableHeader style={{ backgroundColor: "#f0f0f0" ,color:"#d20217ff" }}>
          <TableRow className="border-b border-gray-300  text-center" >
            <TableHead className="border border-gray-300" >ID</TableHead>
            <TableHead className="border border-gray-300">User ID</TableHead>
            <TableHead className="border border-gray-300">Title</TableHead>
            <TableHead className="border border-gray-300">Body</TableHead>
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
              <TableCell className="border border-gray-300">{post.id}</TableCell>
              <TableCell className="border border-gray-300">{post.userId}</TableCell>
              <TableCell className="border border-gray-300">{post.title}</TableCell>
              <TableCell className="border border-gray-300">{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
