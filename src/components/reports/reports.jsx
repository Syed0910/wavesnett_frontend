// src/components/reports/reports.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// ✅ Only Online Users report
import OnlineUsers from "./online-users";

const Reports = () => {
  return (
    <Routes>
      {/* Redirect base /reports to /reports/online-users */}
      <Route path="/" element={<Navigate to="/reports/online-users" replace />} />

      {/* ✅ Online Users */}
      <Route path="/online-users" element={<OnlineUsers />} />
    </Routes>
  );
};

export default Reports;
