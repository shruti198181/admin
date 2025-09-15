"use client";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarHeader from "./component/header";
import Dashboard from "./page/dashboard";
import UsersData from "./admins/users";
import Setting from "./admins/setting";
import Reports from "./admins/reports";
import Projects from "./manager/project";
import Team from "./manager/team";
import ManagerReport from "./manager/mreport";
import MyProfile from "./user/myprofile";
import Task from "./user/task";

export default function App() {
  return (
    <>
      <NavbarHeader />

      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard role="admin" />} />
        <Route path="/admin/users" element={<UsersData />} />
        <Route path="/admin/setting" element={<Setting />} />
        <Route path="/admin/reports" element={<Reports />} />

        {/* Manager Routes */}
        <Route path="/manager" element={<Dashboard role="manager" />} />
        <Route path="/manager/project" element={<Projects />} />
        <Route path="/manager/team" element={<Team />} />
        <Route path="/manager/reports" element={<ManagerReport />} />

        {/* User Routes */}
        <Route path="/user" element={<Dashboard role="user" />} />
        <Route path="/user/myprofile" element={<MyProfile />} />
        <Route path="/user/task" element={<Task />} />

        {/* Default */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
