// src/components/OltManagement/OltManagement.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Olt from "./olt";
import OnuDiscover from "./onuDiscover";
import OnuStatus from "./onuStatus"; // ✅ Import

const OltManagement = () => {
  return (
    <Routes>
      {/* Redirect base /olt-mgmt to /olt-mgmt/olt */}
      <Route path="/" element={<Navigate to="/olt-mgmt/olt" replace />} />

      {/* OLT Table */}
      <Route path="/olt" element={<Olt />} />

      {/* ONU Discover Table */}
      <Route path="/onu-discover" element={<OnuDiscover />} />

      {/* ONU Status Table */}
      <Route path="/onu-status" element={<OnuStatus />} />
    </Routes>
  );
};

export default OltManagement;
