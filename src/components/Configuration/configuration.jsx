// components/Configuration/configuration.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./Layout/AdminLayout";
import AdminConfiguration from "./adminConfiguration";
import Portal from "./portal";

const Configuration = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/config/admin" replace />} />

      <Route path="/*" element={<AdminLayout />}>
        <Route path="admin" element={<AdminConfiguration />} />
        <Route path="portal" element={<Portal/>} />
        <Route path="billing" element={<div>Billing Config Coming Soon...</div>} />
        <Route path="mail" element={<div>Mail Config Coming Soon...</div>} />
        <Route path="payment-gateway" element={<div>Payment Gateway Config...</div>} />
        <Route path="sms-gateway" element={<div>SMS Gateway Config...</div>} />
        <Route path="notification" element={<div>Notification Settings...</div>} />
        <Route path="auto-user" element={<div>Auto User Settings...</div>} />
        <Route path="whatsapp-gateway" element={<div>WhatsApp Gateway...</div>} />
        <Route path="operator-notification" element={<div>Operator Notifications...</div>} />
        <Route path="ott-configuration" element={<div>OTT Config...</div>} />
        <Route path="kyc-configuration" element={<div>KYC Config...</div>} />
      </Route>
    </Routes>
  );
};

export default Configuration;
