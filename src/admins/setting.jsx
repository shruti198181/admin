// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableHeader,
//   TableBody,
//   TableRow,
//   TableHead,
//   TableCell,
// } from "../component/table";

// export default function PostsPage() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [comments, setComments] = useState({});
//   const [newComment, setNewComment] = useState({});
//   const [showCommentBox, setShowCommentBox] = useState({});

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleAddComment = (postId) => {
//     if (!newComment[postId]?.trim()) return;

//     const comment = {
//       id: comments[postId]?.length + 1 || 1,
//       user: "Admin",
//       content: newComment[postId],
//       createdAt: new Date().toLocaleString(),
//     };

//     setComments({
//       ...comments,
//       [postId]: [...(comments[postId] || []), comment],
//     });

//     setNewComment({ ...newComment, [postId]: "" });
//   };

//   const toggleCommentBox = (postId) => {
//     setShowCommentBox({
//       ...showCommentBox,
//       [postId]: !showCommentBox[postId],
//     });
//   };

//   if (loading)
//     return <p style={{ padding: "20px", textAlign: "center" }}>Loading posts...</p>;

//   return (
//     <div style={{ padding: "20px", overflowX: "auto" }}>
//       <h1
//         style={{
//           marginBottom: "20px",
//           fontSize: "24px",
//           fontWeight: "bold",
//           textAlign: "center",
//         }}
//       >
//         User Posts
//       </h1>

//       <Table className="border border-red-300 border-collapse min-w-[900px] mx-auto">
//         <TableHeader style={{ backgroundColor: "#f0f0f0", color: "#d20217" }}>
//           <TableRow className="border-b border-gray-300 text-center">
//             <TableHead className="border border-gray-300">ID</TableHead>
//             <TableHead className="border border-gray-300">User ID</TableHead>
//             <TableHead className="border border-gray-300">Title</TableHead>
//             <TableHead className="border border-gray-300">Body</TableHead>
//             <TableHead className="border border-gray-300">Comments</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {posts.map((post) => (
//             <TableRow
//               key={post.id}
//               style={{
//                 borderBottom: "1px solid #eee",
//                 transition: "background 0.2s",
//                 verticalAlign: "top",
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
//               onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
//             >
//               <TableCell className="border border-gray-300">{post.id}</TableCell>
//               <TableCell className="border border-gray-300">{post.userId}</TableCell>
//               <TableCell className="border border-gray-300">{post.title}</TableCell>
//               <TableCell className="border border-gray-300">{post.body}</TableCell>

//               <TableCell className="border border-gray-300" style={{ verticalAlign: "top" }}>
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <button
//                     onClick={() => toggleCommentBox(post.id)}
//                     style={{
//                       padding: "6px 12px",
//                       marginBottom: "6px",
//                       cursor: "pointer",
//                       background: "inherit",
//                       border: "1px solid #ccc",
//                       borderRadius: "4px",
//                     }}
//                   >
//                     {showCommentBox[post.id] ? "Hide" : "Comment"}
//                   </button>

//                   {showCommentBox[post.id] && (
//                     <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
//                       <div style={{ display: "flex", gap: "6px" }}>
//                         <textarea
//                           placeholder="Add a comment..."
//                           value={newComment[post.id] || ""}
//                           onChange={(e) =>
//                             setNewComment({ ...newComment, [post.id]: e.target.value })
//                           }
//                           style={{
//                             flex: 1,
//                             padding: "4px 6px",
//                             borderRadius: "4px",
//                             border: "1px solid #ccc",
//                             resize: "none",
//                             overflow: "hidden",
//                             backgroundColor: "inherit",
//                             fontSize: "14px",
//                           }}
//                           rows={1}
//                           onInput={(e) => {
//                             e.target.style.height = "auto";
//                             e.target.style.height = e.target.scrollHeight + "px";
//                           }}
//                         />
//                         <button
//                           onClick={() => handleAddComment(post.id)}
//                           style={{
//                             padding: "6px 12px",
//                             cursor: "pointer",
//                             borderRadius: "4px",
//                             background: "inherit",
//                             border: "1px solid #ccc",
//                           }}
//                         >
//                           Add
//                         </button>
//                       </div>

                     
//                       <div
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           gap: "2px",
//                           maxHeight: "none",
//                           overflow: "hidden", 
//                         }}
//                       >
//                         {comments[post.id]?.length ? (
//                           comments[post.id].map((c) => (
//                             <div
//                               key={c.id}
//                               style={{
//                                 padding: "2px 0",
//                                 fontSize: "14px",
//                               }}
//                             >
//                               <strong>{c.user}:</strong> {c.content}{" "}
//                               <span style={{ color: "gray", fontSize: "12px" }}>
//                                 ({c.createdAt})
//                               </span>
//                             </div>
//                           ))
//                         ) : (
//                           <div style={{ color: "gray" }}>No comments yet</div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
// "use client";
// import React, { useEffect, useState } from "react";

// export default function PostsPage() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [comments, setComments] = useState({});
//   const [newComment, setNewComment] = useState({});
//   const [showCommentBox, setShowCommentBox] = useState({});

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleAddComment = (postId) => {
//     if (!newComment[postId]?.trim()) return;

//     const comment = {
//       id: comments[postId]?.length + 1 || 1,
//       user: "Admin",
//       content: newComment[postId],
//       createdAt: new Date().toLocaleString(),
//     };

//     setComments({
//       ...comments,
//       [postId]: [...(comments[postId] || []), comment],
//     });

//     setNewComment({ ...newComment, [postId]: "" });
//   };

//   const toggleCommentBox = (postId) => {
//     setShowCommentBox({
//       ...showCommentBox,
//       [postId]: !showCommentBox[postId],
//     });
//   };

//   if (loading)
//     return (
//       <p style={{ padding: "20px", textAlign: "center" }}>Loading posts...</p>
//     );

//   return (
//     <div
//       style={{
//         minHeight: "100%",
//         padding: "20px",
//         fontFamily: "Arial, sans-serif",
//         backgroundImage: `url('/your-background.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <h1
//         style={{
//           textAlign: "center",
//           color: "#d20217",
//           fontSize: "32px",
//           marginBottom: "30px",
//           fontWeight: "bold",
//           textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
//         }}
//       >
//         User Posts
//       </h1>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//           maxWidth: "900px",
//           margin: "0 auto",
//         }}
//       >
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             style={{
//               backgroundColor: "rgba(255,255,255,0.95)",
//               borderRadius: "10px",
//               boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//               padding: "20px",
//               position: "relative",
//             }}
//           >
//             {/* Add Comment button top-right */}
//             <button
//               onClick={() => toggleCommentBox(post.id)}
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 right: "20px",
//                 padding: "8px 14px",
//                 borderRadius: "5px",
//                 border: "none",
//                 backgroundColor: "#0070f3",
//                 color: "white",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//               }}
//             >
//               {showCommentBox[post.id] ? "Hide" : "Comment"}
//             </button>

//             {/* Post content */}
//             <h2 style={{ margin: "0 0 10px 0", color: "#333" }}>{post.title}</h2>
//             <p style={{ color: "#555", lineHeight: "1.5" }}>{post.body}</p>

//             {/* Comment box */}
//             {showCommentBox[post.id] && (
//               <div style={{ marginTop: "15px", display: "flex", flexDirection: "column", gap: "10px" }}>
//                 <textarea
//                   placeholder="Write a comment..."
//                   value={newComment[post.id] || ""}
//                   onChange={(e) =>
//                     setNewComment({ ...newComment, [post.id]: e.target.value })
//                   }
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     borderRadius: "6px",
//                     border: "1px solid #ccc",
//                     resize: "none",
//                     fontSize: "14px",
//                   }}
//                   rows={2}
//                   onInput={(e) => {
//                     e.target.style.height = "auto";
//                     e.target.style.height = e.target.scrollHeight + "px";
//                   }}
//                 />
//                 <button
//                   onClick={() => handleAddComment(post.id)}
//                   style={{
//                     padding: "8px 16px",
//                     borderRadius: "5px",
//                     border: "none",
//                     backgroundColor: "#28a745",
//                     color: "white",
//                     cursor: "pointer",
//                     alignSelf: "flex-end",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Submit
//                 </button>
//               </div>
//             )}

//             {/* Display comments */}
//             {comments[post.id]?.length > 0 && (
//               <div style={{ marginTop: "15px", display: "flex", flexDirection: "column", gap: "8px" }}>
//                 {comments[post.id].map((c) => (
//                   <div
//                     key={c.id}
//                     style={{
//                       padding: "8px",
//                       borderRadius: "6px",
//                       backgroundColor: "#f0f0f0",
//                       fontSize: "13px",
//                       lineHeight: "1.4",
//                     }}
//                   >
//                     <strong>{c.user}:</strong> {c.content}{" "}
//                     <span style={{ color: "gray", fontSize: "11px" }}>
//                       ({c.createdAt})
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";
// import React, { useEffect, useState } from "react";

// export default function PostsPage() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [comments, setComments] = useState({});
//   const [newComment, setNewComment] = useState({});
//   const [showCommentBox, setShowCommentBox] = useState({});
//   const [likes, setLikes] = useState({});
//   const [likedPosts, setLikedPosts] = useState({});
//   const [animateLike, setAnimateLike] = useState({});

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleAddComment = (postId) => {
//     if (!newComment[postId]?.trim()) return;

//     const comment = {
//       id: comments[postId]?.length + 1 || 1,
//       user: "Admin",
//       content: newComment[postId],
//       createdAt: new Date().toLocaleString(),
//     };

//     setComments({
//       ...comments,
//       [postId]: [...(comments[postId] || []), comment],
//     });

//     setNewComment({ ...newComment, [postId]: "" });
//   };

//   const toggleCommentBox = (postId) => {
//     setShowCommentBox({
//       ...showCommentBox,
//       [postId]: !showCommentBox[postId],
//     });
//   };

//   const handleLike = (postId) => {
//     const isLiked = likedPosts[postId];
//     setLikedPosts({ ...likedPosts, [postId]: !isLiked });
//     setLikes({
//       ...likes,
//       [postId]: isLiked ? likes[postId] - 1 || 0 : (likes[postId] || 0) + 1,
//     });

//     setAnimateLike({ ...animateLike, [postId]: true });
//     setTimeout(() => {
//       setAnimateLike({ ...animateLike, [postId]: false });
//     }, 300);
//   };

//   if (loading)
//     return (
//       <p style={{ padding: "20px", textAlign: "center" }}>Loading posts...</p>
//     );

//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100%",
//         minHeight: "100vh",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       {/* Full-page background */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           backgroundImage: `url('/your-background.jpg')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           zIndex: -1, // behind content
//         }}
//       ></div>

//       <h1
//         style={{
//           textAlign: "center",
//           color: "#d20217",
//           fontSize: "32px",
//           marginBottom: "30px",
//           fontWeight: "bold",
//           textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
//         }}
//       >
//         Social Feed
//       </h1>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//           maxWidth: "700px",
//           margin: "0 auto",
//           paddingBottom: "50px",
//         }}
//       >
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             style={{
//               backgroundColor: "rgba(255,255,255,0.95)",
//               borderRadius: "12px",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//               padding: "20px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "10px",
//             }}
//           >
//             {/* Post Header */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                 <img
//                   src="https://i.pravatar.cc/40"
//                   alt="avatar"
//                   style={{ width: "40px", height: "40px", borderRadius: "50%" }}
//                 />
//                 <div style={{ display: "flex", flexDirection: "column" }}>
//                   <span style={{ fontWeight: "bold", color: "#333" }}>Admin</span>
//                   <span style={{ fontSize: "12px", color: "gray" }}>
//                     {new Date().toLocaleString()}
//                   </span>
//                 </div>
//               </div>

//               <button
//                 onClick={() => toggleCommentBox(post.id)}
//                 style={{
//                   padding: "6px 12px",
//                   borderRadius: "5px",
//                   border: "none",
//                   backgroundColor: "#0070f3",
//                   color: "white",
//                   cursor: "pointer",
//                   fontWeight: "bold",
//                   fontSize: "14px",
//                 }}
//               >
//                 {showCommentBox[post.id] ? "Hide" : "Comment"}
//               </button>
//             </div>

//             {/* Post content */}
//             <h2 style={{ margin: "0 0 10px 0", color: "#333" }}>{post.title}</h2>
//             <p style={{ color: "#555", lineHeight: "1.5" }}>{post.body}</p>

//             {/* Like / Comment */}
//             <div style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#555" }}>
//               <span
//                 style={{
//                   cursor: "pointer",
//                   fontWeight: "bold",
//                   color: likedPosts[post.id] ? "#d20217" : "#555",
//                   display: "inline-block",
//                   transform: animateLike[post.id] ? "scale(1.3)" : "scale(1)",
//                   transition: "transform 0.3s ease",
//                 }}
//                 onClick={() => handleLike(post.id)}
//               >
//                 {likedPosts[post.id] ? "❤️ Liked" : "👍 Like"} ({likes[post.id] || 0})
//               </span>
//               <span
//                 style={{ cursor: "pointer", fontWeight: "bold" }}
//                 onClick={() => toggleCommentBox(post.id)}
//               >
//                 💬 Comment
//               </span>
//             </div>

//             {/* Comment box */}
//             {showCommentBox[post.id] && (
//               <div
//                 style={{
//                   marginTop: "10px",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "10px",
//                 }}
//               >
//                 <textarea
//                   placeholder="Write a comment..."
//                   value={newComment[post.id] || ""}
//                   onChange={(e) =>
//                     setNewComment({ ...newComment, [post.id]: e.target.value })
//                   }
//                   style={{
//                     width: "100%",
//                     padding: "10px",
//                     borderRadius: "6px",
//                     border: "1px solid #ccc",
//                     resize: "none",
//                     fontSize: "14px",
//                   }}
//                   rows={2}
//                   onInput={(e) => {
//                     e.target.style.height = "auto";
//                     e.target.style.height = e.target.scrollHeight + "px";
//                   }}
//                 />
//                 <button
//                   onClick={() => handleAddComment(post.id)}
//                   style={{
//                     padding: "8px 16px",
//                     borderRadius: "5px",
//                     border: "none",
//                     backgroundColor: "#28a745",
//                     color: "white",
//                     cursor: "pointer",
//                     alignSelf: "flex-end",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Submit
//                 </button>
//               </div>
//             )}

//             {/* Display comments */}
//             {comments[post.id]?.length > 0 && (
//               <div
//                 style={{
//                   marginTop: "10px",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "8px",
//                 }}
//               >
//                 {comments[post.id].map((c) => (
//                   <div
//                     key={c.id}
//                     style={{
//                       display: "flex",
//                       gap: "10px",
//                       alignItems: "flex-start",
//                       padding: "8px",
//                       borderRadius: "6px",
//                       backgroundColor: "#f0f0f0",
//                       fontSize: "13px",
//                     }}
//                   >
//                     <img
//                       src="https://i.pravatar.cc/30"
//                       alt="avatar"
//                       style={{ width: "30px", height: "30px", borderRadius: "50%" }}
//                     />
//                     <div style={{ flex: 1 }}>
//                       <strong>{c.user}</strong>{" "}
//                       <span style={{ color: "gray", fontSize: "11px" }}>
//                         ({c.createdAt})
//                       </span>
//                       <p style={{ margin: "2px 0 0 0" }}>{c.content}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [showCommentBox, setShowCommentBox] = useState({});
  const [likes, setLikes] = useState({});
  const [likedPosts, setLikedPosts] = useState({});
  const [animateLike, setAnimateLike] = useState({});
  const [scrollY, setScrollY] = useState(0); // For parallax

  // Fetch posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Scroll listener for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const handleLike = (postId) => {
    const isLiked = likedPosts[postId];
    setLikedPosts({ ...likedPosts, [postId]: !isLiked });
    setLikes({
      ...likes,
      [postId]: isLiked ? likes[postId] - 1 || 0 : (likes[postId] || 0) + 1,
    });

    setAnimateLike({ ...animateLike, [postId]: true });
    setTimeout(() => {
      setAnimateLike({ ...animateLike, [postId]: false });
    }, 300);
  };

  if (loading)
    return (
      <p style={{ padding: "20px", textAlign: "center" }}>Loading posts...</p>
    );

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "150%",
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CuyvM3w4mcCBPjh7L4wHkRqFZkRxZ-scpQ&s)`,
          backgroundSize: "cover",
       
          backgroundRepeat: "no-repeat",
          zIndex: -1,
          transition: "background-position 0.1s ease-out",
        }}
      ></div>

      <h1
        style={{
          textAlign: "center",
          color: "#d20217",
          fontSize: "32px",
          marginBottom: "30px",
          fontWeight: "bold",
          textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        Social Feed
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "700px",
          margin: "0 auto",
          paddingBottom: "50px",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img
                  src="https://i.pravatar.cc/40"
                  alt="avatar"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: "bold", color: "#333" }}>Admin</span>
                  <span style={{ fontSize: "12px", color: "gray" }}>
                    {new Date().toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={() => toggleCommentBox(post.id)}
                style={{
                  padding: "6px 12px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#0070f3",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                {showCommentBox[post.id] ? "Hide" : "Comment"}
              </button>
            </div>
            <h2 style={{ margin: "0 0 10px 0", color: "#333" }}>{post.title}</h2>
            <p style={{ color: "#555", lineHeight: "1.5" }}>{post.body}</p>
            <div style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#555" }}>      
      <span
  style={{
    cursor: "pointer",
    fontWeight: "bold",
    color: "#d20217",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    transform: animateLike[post.id] ? "scale(1.3)" : "scale(1)",
    transition: "transform 0.3s ease, color 0.3s ease",
    userSelect: "none",
  }}
  onClick={() => {
    setLikes({
      ...likes,
      [post.id]: (likes[post.id] || 0) + 1,
    });

    setAnimateLike({ ...animateLike, [post.id]: true });
    setTimeout(() => {
      setAnimateLike({ ...animateLike, [post.id]: false });
    }, 300);
  }}
>
  ❤️ {likes[post.id] || 0}
</span>


           
              <span
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => toggleCommentBox(post.id)}
              >
                💬 Comment
              </span>
            </div>

            {/* Comment box */}
            {showCommentBox[post.id] && (
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <textarea
                  placeholder="Write a comment..."
                  value={newComment[post.id] || ""}
                  onChange={(e) =>
                    setNewComment({ ...newComment, [post.id]: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    resize: "none",
                    fontSize: "14px",
                  }}
                  rows={2}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = e.target.scrollHeight + "px";
                  }}
                />
                <button
                  onClick={() => handleAddComment(post.id)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#28a745",
                    color: "white",
                    cursor: "pointer",
                    alignSelf: "flex-end",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </button>
              </div>
            )}

            {/* Display comments */}
            {comments[post.id]?.length > 0 && (
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {comments[post.id].map((c) => (
                  <div
                    key={c.id}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                      padding: "8px",
                      borderRadius: "6px",
                      backgroundColor: "#f0f0f0",
                      fontSize: "13px",
                    }}
                  >
                    <img
                      src="https://i.pravatar.cc/30"
                      alt="avatar"
                      style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                    />
                    <div style={{ flex: 1 }}>
                      <strong>{c.user}</strong>{" "}
                      <span style={{ color: "gray", fontSize: "11px" }}>
                        ({c.createdAt})
                      </span>
                      <p style={{ margin: "2px 0 0 0" }}>{c.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
