// components/Configuration/configuration.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./Layout/AdminLayout";
import AdminConfiguration from "./adminConfiguration";
import Portal from "./portal";
import Billing from "./billing";
import MailConfiguration from "./mail";
import PaymentGateway from "./payment-gateway";
import SMSGateway from "./sms-gateway";
import NotificationSettings from "./notification";
import KycConfiguration from "./kyc-configuration";
import OttConfiguration from "./ott-configuration";

const Configuration = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/config/admin" replace />} />

      <Route path="/*" element={<AdminLayout />}>
        <Route path="admin" element={<AdminConfiguration />} />
        <Route path="portal" element={<Portal />} />
        <Route path="billing" element={<Billing />} />
        <Route path="mail" element={<MailConfiguration />} />
        <Route path="payment-gateway" element={<PaymentGateway />} />
        <Route path="sms-gateway" element={<SMSGateway />} />
        <Route path="notification" element={<NotificationSettings />} />
        <Route path="auto-user" element={<div>Auto User Settings Coming Soon...</div>} />
        <Route path="whatsapp-gateway" element={<div>WhatsApp Gateway Coming Soon...</div>} />
        <Route path="operator-notification" element={<div>Operator Notifications Coming Soon...</div>} />
        <Route path="ott-configuration" element={<OttConfiguration/>} />
        <Route path="kyc-configuration" element={<KycConfiguration />} /> 
      </Route>
    </Routes>
  );
};

export default Configuration;
