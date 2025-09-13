// components/Configuration/Layout/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import ConfigSidebar from "./ConfigSidebar";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Outer Sidebar */}
      <ConfigSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <Outlet /> {/* renders nested routes */}
      </main>
    </div>
  );
};

export default AdminLayout;
