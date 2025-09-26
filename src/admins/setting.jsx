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
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
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
      
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "150%",
//           backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CuyvM3w4mcCBPjh7L4wHkRqFZkRxZ-scpQ&s)`,
//           backgroundSize: "cover",
       
//           backgroundRepeat: "no-repeat",
//           zIndex: -1,
//           transition: "background-position 0.1s ease-out",
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
//             <h2 style={{ margin: "0 0 10px 0", color: "#333" }}>{post.title}</h2>
//             <p style={{ color: "#555", lineHeight: "1.5" }}>{post.body}</p>
//             <div style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#555" }}>      
//       <span
//   style={{
//     cursor: "pointer",
//     fontWeight: "bold",
//     color: "#d20217",
//     display: "inline-flex",
//     alignItems: "center",
//     gap: "6px",
//     transform: animateLike[post.id] ? "scale(1.3)" : "scale(1)",
//     transition: "transform 0.3s ease, color 0.3s ease",
//     userSelect: "none",
//   }}
//   onClick={() => {
//     setLikes({
//       ...likes,
//       [post.id]: (likes[post.id] || 0) + 1,
//     });

//     setAnimateLike({ ...animateLike, [post.id]: true });
//     setTimeout(() => {
//       setAnimateLike({ ...animateLike, [post.id]: false });
//     }, 300);
//   }}
// >
//   ❤️ {likes[post.id] || 0}
// </span>


           
//               <span
//                 style={{ cursor: "pointer", fontWeight: "bold" }}
//                 onClick={() => toggleCommentBox(post.id)}
//               >
//                 💬 Comment
//               </span>
//             </div>

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
// "use client";
// import React, { useEffect, useState } from "react";

// export default function PostsPage() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [comments, setComments] = useState({});
//   const [newComment, setNewComment] = useState({});
//   const [showCommentBox, setShowCommentBox] = useState({});
//   const [likes, setLikes] = useState({});
//   const [animateLike, setAnimateLike] = useState({});

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   const toggleCommentBox = (postId) => {
//     setShowCommentBox({
//       ...showCommentBox,
//       [postId]: !showCommentBox[postId],
//     });
//   };

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

//   const handleLike = (postId) => {
//     // increment likes
//     setLikes({
//       ...likes,
//       [postId]: (likes[postId] || 0) + 1,
//     });

//     // animate like
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
//     <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
//       {posts.map((post) => (
//         <div
//           key={post.id}
//           style={{
//             backgroundColor: "rgba(255,255,255,0.95)",
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//             padding: "20px",
//             marginBottom: "20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//           }}
//         >
//           {/* Post Header */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               <img
//                 src="https://i.pravatar.cc/40"
//                 alt="avatar"
//                 style={{ width: "40px", height: "40px", borderRadius: "50%" }}
//               />
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <span style={{ fontWeight: "bold", color: "#333" }}>Admin</span>
//                 <span style={{ fontSize: "12px", color: "gray" }}>
//                   {new Date().toLocaleString()}
//                 </span>
//               </div>
//             </div>

//             <button
//               onClick={() => toggleCommentBox(post.id)}
//               style={{
//                 padding: "6px 12px",
//                 borderRadius: "5px",
//                 border: "none",
//                 backgroundColor: "#0070f3",
//                 color: "white",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 fontSize: "14px",
//               }}
//             >
//               {showCommentBox[post.id] ? "Hide" : "Comment"}
//             </button>
//           </div>

//           {/* Post Content */}
//           <h2 style={{ margin: "0 0 10px 0", color: "#333" }}>{post.title}</h2>
//           <p style={{ color: "#555", lineHeight: "1.5" }}>{post.body}</p>

//           {/* Like & Comment */}
//           <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
//             <span
//               style={{
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 color: "#d20217",
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "6px",
//                 transform: animateLike[post.id] ? "scale(1.3)" : "scale(1)",
//                 transition: "transform 0.3s ease",
//                 userSelect: "none",
//               }}
//               onClick={() => handleLike(post.id)}
//             >
//               ❤️ {likes[post.id] || 0}
//             </span>

//             <span
//               style={{ cursor: "pointer", fontWeight: "bold" }}
//               onClick={() => toggleCommentBox(post.id)}
//             >
//               💬 Comment
//             </span>
//           </div>

//           {/* Comment Box */}
//           {showCommentBox[post.id] && (
//             <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
//               <textarea
//                 placeholder="Write a comment..."
//                 value={newComment[post.id] || ""}
//                 onChange={(e) =>
//                   setNewComment({ ...newComment, [post.id]: e.target.value })
//                 }
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "6px",
//                   border: "1px solid #ccc",
//                   resize: "none",
//                   fontSize: "14px",
//                 }}
//                 rows={2}
//               />
//               <button
//                 onClick={() => handleAddComment(post.id)}
//                 style={{
//                   padding: "8px 16px",
//                   borderRadius: "5px",
//                   border: "none",
//                   backgroundColor: "#28a745",
//                   color: "white",
//                   cursor: "pointer",
//                   alignSelf: "flex-end",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           )}

//           {/* Display Comments */}
//           {comments[post.id]?.length > 0 && (
//             <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
//               {comments[post.id].map((c) => (
//                 <div
//                   key={c.id}
//                   style={{
//                     display: "flex",
//                     gap: "10px",
//                     alignItems: "flex-start",
//                     padding: "8px",
//                     borderRadius: "6px",
//                     backgroundColor: "#f0f0f0",
//                     fontSize: "13px",
//                   }}
//                 >
//                   <img
//                     src="https://i.pravatar.cc/30"
//                     alt="avatar"
//                     style={{ width: "30px", height: "30px", borderRadius: "50%" }}
//                   />
//                   <div style={{ flex: 1 }}>
//                     <strong>{c.user}</strong>{" "}
//                     <span style={{ color: "gray", fontSize: "11px" }}>
//                       ({c.createdAt})
//                     </span>
//                     <p style={{ margin: "2px 0 0 0" }}>{c.content}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
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
//   const [animateLike, setAnimateLike] = useState({});

//   const [loggedIn, setLoggedIn] = useState(false);
//   const [loginModal, setLoginModal] = useState(false);
//   const [loginEmail, setLoginEmail] = useState("");
//   const [actionPending, setActionPending] = useState(null); // {type, postId}

//   // Fetch posts
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleLogin = () => {
//     if (!loginEmail.trim()) return alert("Enter your email!");
//     setLoggedIn(true);
//     setLoginModal(false);

//     // Perform pending action
//     if (actionPending) {
//       if (actionPending.type === "like") handleLike(actionPending.postId, true);
//       if (actionPending.type === "comment") toggleCommentBox(actionPending.postId, true);
//       setActionPending(null);
//     }
//   };

//   const toggleCommentBox = (postId, skipLoginCheck = false) => {
//     if (!loggedIn && !skipLoginCheck) {
//       setLoginModal(true);
//       setActionPending({ type: "comment", postId });
//       return;
//     }
//     setShowCommentBox({
//       ...showCommentBox,
//       [postId]: !showCommentBox[postId],
//     });
//   };

//   const handleAddComment = (postId) => {
//     if (!loggedIn) {
//       setLoginModal(true);
//       setActionPending({ type: "comment", postId });
//       return;
//     }
//     if (!newComment[postId]?.trim()) return;

//     const comment = {
//       id: comments[postId]?.length + 1 || 1,
//       user: loginEmail,
//       content: newComment[postId],
//       createdAt: new Date().toLocaleString(),
//     };

//     setComments({
//       ...comments,
//       [postId]: [...(comments[postId] || []), comment],
//     });

//     setNewComment({ ...newComment, [postId]: "" });
//   };

//   const handleLike = (postId, skipLoginCheck = false) => {
//     if (!loggedIn && !skipLoginCheck) {
//       setLoginModal(true);
//       setActionPending({ type: "like", postId });
//       return;
//     }

//     setLikes({
//       ...likes,
//       [postId]: (likes[postId] || 0) + 1,
//     });

//     setAnimateLike({ ...animateLike, [postId]: true });
//     setTimeout(() => {
//       setAnimateLike({ ...animateLike, [postId]: false });
//     }, 300);
//   };

//   if (loading)
//     return <p style={{ padding: "20px", textAlign: "center" }}>Loading posts...</p>;

//   return (
//     <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#d20217" }}>
//         Social Feed
//       </h1>

//       {posts.map((post) => (
//         <div
//           key={post.id}
//           style={{
//             backgroundColor: "rgba(255,255,255,0.95)",
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//             padding: "20px",
//             marginBottom: "20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//           }}
//         >
//           {/* Header */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               <img
//                 src="https://i.pravatar.cc/40"
//                 alt="avatar"
//                 style={{ width: "40px", height: "40px", borderRadius: "50%" }}
//               />
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <span style={{ fontWeight: "bold", color: "#333" }}>Admin</span>
//                 <span style={{ fontSize: "12px", color: "gray" }}>
//                   {new Date().toLocaleString()}
//                 </span>
//               </div>
//             </div>

//             <button
//               onClick={() => toggleCommentBox(post.id)}
//               style={{
//                 padding: "6px 12px",
//                 borderRadius: "5px",
//                 border: "none",
//                 backgroundColor: "#0070f3",
//                 color: "white",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 fontSize: "14px",
//               }}
//             >
//               {showCommentBox[post.id] ? "Hide" : "Comment"}
//             </button>
//           </div>

//           {/* Content */}
//           <h2 style={{ margin: "0 0 10px 0", color: "#333" }}>{post.title}</h2>
//           <p style={{ color: "#555", lineHeight: "1.5" }}>{post.body}</p>

//           {/* Like & Comment Buttons */}
//           <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
//             <span
//               style={{
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 color: "#d20217",
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "6px",
//                 transform: animateLike[post.id] ? "scale(1.3)" : "scale(1)",
//                 transition: "transform 0.3s ease",
//               }}
//               onClick={() => handleLike(post.id)}
//             >
//               ❤️ {likes[post.id] || 0}
//             </span>

//             <span
//               style={{ cursor: "pointer", fontWeight: "bold" }}
//               onClick={() => toggleCommentBox(post.id)}
//             >
//               💬 Comment
//             </span>
//           </div>

//           {/* Comment Box */}
//           {showCommentBox[post.id] && (
//             <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
//               <textarea
//                 placeholder="Write a comment..."
//                 value={newComment[post.id] || ""}
//                 onChange={(e) =>
//                   setNewComment({ ...newComment, [post.id]: e.target.value })
//                 }
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "6px",
//                   border: "1px solid #ccc",
//                   resize: "none",
//                   fontSize: "14px",
//                 }}
//                 rows={2}
//               />
//               <button
//                 onClick={() => handleAddComment(post.id)}
//                 style={{
//                   padding: "8px 16px",
//                   borderRadius: "5px",
//                   border: "none",
//                   backgroundColor: "#28a745",
//                   color: "white",
//                   cursor: "pointer",
//                   alignSelf: "flex-end",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           )}

//           {/* Display Comments */}
//           {comments[post.id]?.length > 0 && (
//             <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
//               {comments[post.id].map((c) => (
//                 <div
//                   key={c.id}
//                   style={{
//                     display: "flex",
//                     gap: "10px",
//                     alignItems: "flex-start",
//                     padding: "8px",
//                     borderRadius: "6px",
//                     backgroundColor: "#f0f0f0",
//                     fontSize: "13px",
//                   }}
//                 >
//                   <img
//                     src="https://i.pravatar.cc/30"
//                     alt="avatar"
//                     style={{ width: "30px", height: "30px", borderRadius: "50%" }}
//                   />
//                   <div style={{ flex: 1 }}>
//                     {/* <strong>{c.user}</strong>{" "} */}
//                     <span style={{ color: "gray", fontSize: "11px" }}>
//                       ({c.createdAt})
//                     </span>
//                     <p style={{ margin: "2px 0 0 0" }}>{c.content}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}

//       {/* Login Modal */}
//       {loginModal && (
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "white",
//               padding: "20px",
//               borderRadius: "10px",
//               width: "300px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "15px",
//             }}
//           >
//             <h2 style={{ textAlign: "center" }}>Login</h2>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.target.value)}
//               style={{
//                 padding: "8px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//                 fontSize: "14px",
//               }}
//             />
//             <button
//               onClick={handleLogin}
//               style={{
//                 padding: "8px",
//                 borderRadius: "5px",
//                 border: "none",
//                 backgroundColor: "#0070f3",
//                 color: "white",
//                 fontWeight: "bold",
//                 cursor: "pointer",
//               }}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setLoginModal(false)}
//               style={{
//                 padding: "8px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//                 backgroundColor: "white",
//                 cursor: "pointer",
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
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
//   const [animateLike, setAnimateLike] = useState({});

//   const [loggedIn, setLoggedIn] = useState(false);
//   const [loginModal, setLoginModal] = useState(false);
//   const [loginEmail, setLoginEmail] = useState("");
//   const [actionPending, setActionPending] = useState(null); // {type, postId}

//   // Fetch posts
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//       .then((res) => res.json())
//       .then((data) => setPosts(data))
//       .catch((err) => console.error(err))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleLogin = () => {
//     if (!loginEmail.trim()) return alert("Enter your email!");
//     setLoggedIn(true);
//     setLoginModal(false);

//     // Perform pending action
//     if (actionPending) {
//       if (actionPending.type === "like") handleLike(actionPending.postId, true);
//       if (actionPending.type === "comment") toggleCommentBox(actionPending.postId, true);
//       setActionPending(null);
//     }
//   };

//   const toggleCommentBox = (postId, skipLoginCheck = false) => {
//     if (!loggedIn && !skipLoginCheck) {
//       setLoginModal(true);
//       setActionPending({ type: "comment", postId });
//       return;
//     }
//     setShowCommentBox({
//       ...showCommentBox,
//       [postId]: !showCommentBox[postId],
//     });
//   };

//   const handleAddComment = (postId) => {
//     if (!loggedIn) {
//       setLoginModal(true);
//       setActionPending({ type: "comment", postId });
//       return;
//     }
//     if (!newComment[postId]?.trim()) return;

//     const comment = {
//       id: comments[postId]?.length + 1 || 1,
//       content: newComment[postId],
//       createdAt: new Date().toLocaleString(),
//     };

//     setComments({
//       ...comments,
//       [postId]: [...(comments[postId] || []), comment],
//     });

//     setNewComment({ ...newComment, [postId]: "" });
//   };

//   const handleLike = (postId, skipLoginCheck = false) => {
//     if (!loggedIn && !skipLoginCheck) {
//       setLoginModal(true);
//       setActionPending({ type: "like", postId });
//       return;
//     }

//     setLikes({
//       ...likes,
//       [postId]: (likes[postId] || 0) + 1,
//     });

//     setAnimateLike({ ...animateLike, [postId]: true });
//     setTimeout(() => {
//       setAnimateLike({ ...animateLike, [postId]: false });
//     }, 300);
//   };

//   if (loading)
//     return <p style={{ padding: "20px", textAlign: "center" }}>Loading posts...</p>;

//   return (
//     <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
//       <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#d20217" }}>
//         Social Feed
//       </h1>

//       {posts.map((post) => (
//         <div
//           key={post.id}
//           style={{
//             backgroundColor: "rgba(255,255,255,0.95)",
//             borderRadius: "12px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//             padding: "20px",
//             marginBottom: "20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//           }}
//         >
//           {/* Header */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//               <img
//                 src="https://i.pravatar.cc/40"
//                 alt="avatar"
//                 style={{ width: "40px", height: "40px", borderRadius: "50%" }}
//               />
//               <div style={{ display: "flex", flexDirection: "column" }}>
//                 <span style={{ fontWeight: "bold", color: "#333" }}>Admin</span>
//                 <span style={{ fontSize: "12px", color: "gray" }}>
//                   {new Date().toLocaleString()}
//                 </span>
//               </div>
//             </div>

//             <button
//               onClick={() => toggleCommentBox(post.id)}
//               style={{
//                 padding: "6px 12px",
//                 borderRadius: "5px",
//                 border: "none",
//                 backgroundColor: "#0070f3",
//                 color: "white",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 fontSize: "14px",
//               }}
//             >
//               {showCommentBox[post.id] ? "Hide" : "Comment"}
//             </button>
//           </div>

//           {/* Content */}
//           <h2 style={{ margin: "0 0 10px 0", color: "#333" }}>{post.title}</h2>
//           <p style={{ color: "#555", lineHeight: "1.5" }}>{post.body}</p>

//           {/* Like & Comment Buttons */}
//           <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
//             <span
//               style={{
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 color: "#d20217",
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "6px",
//                 transform: animateLike[post.id] ? "scale(1.3)" : "scale(1)",
//                 transition: "transform 0.3s ease",
//               }}
//               onClick={() => handleLike(post.id)}
//             >
//               ❤️ {likes[post.id] || 0}
//             </span>

//             <span
//               style={{ cursor: "pointer", fontWeight: "bold" }}
//               onClick={() => toggleCommentBox(post.id)}
//             >
//               💬 Comment
//             </span>
//           </div>

//           {/* Comment Box */}
//           {showCommentBox[post.id] && (
//             <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
//               <textarea
//                 placeholder="Write a comment..."
//                 value={newComment[post.id] || ""}
//                 onChange={(e) =>
//                   setNewComment({ ...newComment, [post.id]: e.target.value })
//                 }
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   borderRadius: "6px",
//                   border: "1px solid #ccc",
//                   resize: "none",
//                   fontSize: "14px",
//                 }}
//                 rows={2}
//               />
//               <button
//                 onClick={() => handleAddComment(post.id)}
//                 style={{
//                   padding: "8px 16px",
//                   borderRadius: "5px",
//                   border: "none",
//                   backgroundColor: "#28a745",
//                   color: "white",
//                   cursor: "pointer",
//                   alignSelf: "flex-end",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Submit
//               </button>
//             </div>
//           )}

//           {/* Display Comments */}
//           {comments[post.id]?.length > 0 && (
//             <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
//               {comments[post.id].map((c) => (
//                 <div
//                   key={c.id}
//                   style={{
//                     display: "flex",
//                     gap: "10px",
//                     alignItems: "flex-start",
//                     padding: "8px",
//                     borderRadius: "6px",
//                     backgroundColor: "#f0f0f0",
//                     fontSize: "13px",
//                   }}
//                 >
//                   <img
//                     src="https://i.pravatar.cc/30"
//                     alt="avatar"
//                     style={{ width: "30px", height: "30px", borderRadius: "50%" }}
//                   />
//                   <div style={{ flex: 1 }}>
//                     <span style={{ color: "gray", fontSize: "11px" }}>
//                       ({c.createdAt})
//                     </span>
//                     <p style={{ margin: "2px 0 0 0" }}>{c.content}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}

//       {/* Login Modal */}
//       {loginModal && (
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "white",
//               padding: "20px",
//               borderRadius: "10px",
//               width: "300px",
//               display: "flex",
//               flexDirection: "column",
//               gap: "15px",
//             }}
//           >
//             <h2 style={{ textAlign: "center" }}>Login</h2>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.target.value)}
//               style={{
//                 padding: "8px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//                 fontSize: "14px",
//               }}
//             />
//             <button
//               onClick={handleLogin}
//               style={{
//                 padding: "8px",
//                 borderRadius: "5px",
//                 border: "none",
//                 backgroundColor: "#0070f3",
//                 color: "white",
//                 fontWeight: "bold",
//                 cursor: "pointer",
//               }}
//             >
//               Login
//             </button>
//             <button
//               onClick={() => setLoginModal(false)}
//               style={{
//                 padding: "8px",
//                 borderRadius: "5px",
//                 border: "1px solid #ccc",
//                 backgroundColor: "white",
//                 cursor: "pointer",
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
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
  const [animateLike, setAnimateLike] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [actionPending, setActionPending] = useState(null); // {type, postId}

  // Fetch posts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Email validation: must contain "@" and end with ".com"
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.com$/.test(email);

  const handleLogin = () => {
    if (!loginEmail.trim()) return alert("Enter your email!");
    if (!isValidEmail(loginEmail)) return alert("Invalid email! Must contain '@' and end with '.com'");

    setLoggedIn(true);
    setLoginModal(false);

    // Perform pending action
    if (actionPending) {
      if (actionPending.type === "like") handleLike(actionPending.postId, true);
      if (actionPending.type === "comment") toggleCommentBox(actionPending.postId, true);
      setActionPending(null);
    }
  };

  const toggleCommentBox = (postId, skipLoginCheck = false) => {
    if (!loggedIn && !skipLoginCheck) {
      setLoginModal(true);
      setActionPending({ type: "comment", postId });
      return;
    }
    setShowCommentBox({
      ...showCommentBox,
      [postId]: !showCommentBox[postId],
    });
  };

  const handleAddComment = (postId) => {
    if (!loggedIn) {
      setLoginModal(true);
      setActionPending({ type: "comment", postId });
      return;
    }
    if (!newComment[postId]?.trim()) return;

    const comment = {
      id: comments[postId]?.length + 1 || 1,
      content: newComment[postId],
      createdAt: new Date().toLocaleString(),
    };

    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), comment],
    });

    setNewComment({ ...newComment, [postId]: "" });
  };

  const handleLike = (postId, skipLoginCheck = false) => {
    if (!loggedIn && !skipLoginCheck) {
      setLoginModal(true);
      setActionPending({ type: "like", postId });
      return;
    }

    setLikes({
      ...likes,
      [postId]: (likes[postId] || 0) + 1,
    });

    setAnimateLike({ ...animateLike, [postId]: true });
    setTimeout(() => {
      setAnimateLike({ ...animateLike, [postId]: false });
    }, 300);
  };

  if (loading)
    return <p style={{ padding: "20px", textAlign: "center" }}>Loading posts...</p>;

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#d20217" }}>
        Social Feed
      </h1>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            backgroundColor: "rgba(255,255,255,0.95)",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            padding: "20px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {/* Header */}
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

          {/* Content */}
          <h2 style={{ margin: "0 0 10px 0", color: "#333" }}>{post.title}</h2>
          <p style={{ color: "#555", lineHeight: "1.5" }}>{post.body}</p>

          {/* Like & Comment Buttons */}
          <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
            <span
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "#d20217",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transform: animateLike[post.id] ? "scale(1.3)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onClick={() => handleLike(post.id)}
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

          {/* Comment Box */}
          {showCommentBox[post.id] && (
            <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
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

          {/* Display Comments */}
          {comments[post.id]?.length > 0 && (
            <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
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

      {/* Login Modal */}
      {loginModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
            <button
              onClick={handleLogin}
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#0070f3",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <button
              onClick={() => setLoginModal(false)}
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                backgroundColor: "white",
                cursor: "pointer",
                color: "blue"
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
