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

  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [showCommentBox, setShowCommentBox] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddComment = (postId) => {
    if (!newComment[postId]?.trim()) return;

    const comment = {
      id: comments[postId]?.length + 1 || 1,
      user: "Admin",
      content: newComment[postId],
      createdAt: new Date().toLocaleString(),
    };

    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), comment],
    });

    setNewComment({ ...newComment, [postId]: "" });
  };

  const toggleCommentBox = (postId) => {
    setShowCommentBox({
      ...showCommentBox,
      [postId]: !showCommentBox[postId],
    });
  };

  if (loading)
    return <p style={{ padding: "20px", textAlign: "center" }}>Loading posts...</p>;

  return (
    <div style={{ padding: "20px", overflowX: "auto" }}>
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        User Posts
      </h1>

      <Table className="border border-red-300 border-collapse min-w-[900px] mx-auto">
        <TableHeader style={{ backgroundColor: "#f0f0f0", color: "#d20217" }}>
          <TableRow className="border-b border-gray-300 text-center">
            <TableHead className="border border-gray-300">ID</TableHead>
            <TableHead className="border border-gray-300">User ID</TableHead>
            <TableHead className="border border-gray-300">Title</TableHead>
            <TableHead className="border border-gray-300">Body</TableHead>
            <TableHead className="border border-gray-300">Comments</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.id}
              style={{
                borderBottom: "1px solid #eee",
                transition: "background 0.2s",
                verticalAlign: "top",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <TableCell className="border border-gray-300">{post.id}</TableCell>
              <TableCell className="border border-gray-300">{post.userId}</TableCell>
              <TableCell className="border border-gray-300">{post.title}</TableCell>
              <TableCell className="border border-gray-300">{post.body}</TableCell>

              <TableCell className="border border-gray-300" style={{ verticalAlign: "top" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <button
                    onClick={() => toggleCommentBox(post.id)}
                    style={{
                      padding: "6px 12px",
                      marginBottom: "6px",
                      cursor: "pointer",
                      background: "inherit",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  >
                    {showCommentBox[post.id] ? "Hide" : "Comment"}
                  </button>

                  {showCommentBox[post.id] && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {/* Auto-growing textarea */}
                      <div style={{ display: "flex", gap: "6px" }}>
                        <textarea
                          placeholder="Add a comment..."
                          value={newComment[post.id] || ""}
                          onChange={(e) =>
                            setNewComment({ ...newComment, [post.id]: e.target.value })
                          }
                          style={{
                            flex: 1,
                            padding: "4px 6px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                            resize: "none",
                            overflow: "hidden",
                            backgroundColor: "inherit",
                            fontSize: "14px",
                          }}
                          rows={1}
                          onInput={(e) => {
                            e.target.style.height = "auto";
                            e.target.style.height = e.target.scrollHeight + "px";
                          }}
                        />
                        <button
                          onClick={() => handleAddComment(post.id)}
                          style={{
                            padding: "6px 12px",
                            cursor: "pointer",
                            borderRadius: "4px",
                            background: "inherit",
                            border: "1px solid #ccc",
                          }}
                        >
                          Add
                        </button>
                      </div>

                      {/* Comments list with hidden scrollbar */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "2px",
                          maxHeight: "none", // let it grow automatically
                          overflow: "hidden", // hide scrollbar
                        }}
                      >
                        {comments[post.id]?.length ? (
                          comments[post.id].map((c) => (
                            <div
                              key={c.id}
                              style={{
                                padding: "2px 0",
                                fontSize: "14px",
                              }}
                            >
                              <strong>{c.user}:</strong> {c.content}{" "}
                              <span style={{ color: "gray", fontSize: "12px" }}>
                                ({c.createdAt})
                              </span>
                            </div>
                          ))
                        ) : (
                          <div style={{ color: "gray" }}>No comments yet</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
