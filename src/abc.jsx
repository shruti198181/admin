"use client";

import React from "react";

export default function TestImagePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Image Test</h1>
      <img
        src="https://via.placeholder.com/600/92c952"
        alt="Test"
        style={{ width: "200px", height: "auto", border: "1px solid black" }}
      />
    </div>
  );
}
