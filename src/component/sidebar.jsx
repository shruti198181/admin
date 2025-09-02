import React from "react";

export function Sidebar({ children, style }) {
  return <div style={{ width: "250px", ...style }}>{children}</div>;
}

export function SidebarContent({ children }) {
  return <div>{children}</div>;
}

export function SidebarGroup({ children }) {
  return <div>{children}</div>;
}

export function SidebarGroupLabel({ children, style }) {
  return <h4 style={style}>{children}</h4>;
}

export function SidebarGroupContent({ children }) {
  return <div>{children}</div>;
}

export function SidebarMenu({ children }) {
  return <ul>{children}</ul>;
}

export function SidebarMenuItem({ children }) {
  return <li>{children}</li>;
}

export function SidebarMenuButton({ children, style, onClick }) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}
