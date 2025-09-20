// src/components/reports/reports.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// ✅ Import all report components
import OnlineUsers from "./online-users";
import LogViewer from "./Logs-reports"; 
import TermsPage from "./Terms";
import UserLogins from "./UserLogins";

const Reports = () => {
  return (
    <Routes>
      {/* Redirect base /reports to /reports/online-users */}
      <Route path="/" element={<Navigate to="/reports/online-users" replace />} />

      {/* ✅ Online Users */}
      <Route path="online-users" element={<OnlineUsers />} />
      
      {/* ✅ Fixed Logs route - matches sidebar path */}
      <Route path="logs" element={<LogViewer />} />
       <Route path="terms" element={<TermsPage />} />
       <Route path="user-logins" element={<UserLogins/>}/>
    </Routes>
  );
};

export default Reports;