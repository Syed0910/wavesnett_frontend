import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NasDashboard from './nas/NasDashboard';
import OnlineUsers from './nas/OnlineUsers';
import DhcpLease from './nas/DhcpLease';
import CpeDevices from './nas/CpeDevices';

const Nas = () => {
  return (
    <Routes>
      {/* Default redirect when visiting /nas */}
      <Route index element={<Navigate to="dashboard" replace />} />

      {/* Sub-routes relative to /nas */}
      <Route path="dashboard" element={<NasDashboard />} />
      <Route path="online-users" element={<OnlineUsers />} />
      <Route path="dhcp-lease" element={<DhcpLease />} />
      <Route path="cpe-devices" element={<CpeDevices />} />
    </Routes>
  );
};

export default Nas;
