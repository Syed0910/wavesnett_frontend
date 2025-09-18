
// components/Configuration/configuration.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import AdminLayout from "./Layout/AdminLayout";

// Config Pages
import AdminConfiguration from "./adminConfiguration";
import Portal from "./portal";
import Billing from "./billing";
import MailConfiguration from "./mail";
import PaymentGateway from "./payment-gateway";
import SMSGateway from "./sms-gateway";
import NotificationSettings from "./notification";
import KycConfiguration from "./kyc-configuration";
import AutoUser from "./auto-user";
import OperatorNotification from "./operator-notification";
import OttConfiguration from "./ott-configuration";
import WhatsAppGateway from "./whatsapp-gateway";

const Configuration = () => {
  return (
    <Routes>
      {/* Redirect root to admin configuration */}
      <Route path="/" element={<Navigate to="/config/admin" replace />} />

      {/* Admin Layout Wrapper */}
      <Route path="/*" element={<AdminLayout />}>
        {/* Core Configurations */}
        <Route path="admin" element={<AdminConfiguration />} />
        <Route path="portal" element={<Portal />} />
        <Route path="billing" element={<Billing />} />
        <Route path="mail" element={<MailConfiguration />} />
        <Route path="payment-gateway" element={<PaymentGateway />} />
        <Route path="sms-gateway" element={<SMSGateway />} />
        <Route path="notification" element={<NotificationSettings />} />
        <Route path="kyc-configuration" element={<KycConfiguration />} />
        <Route path="auto-user" element={<AutoUser />} />
        <Route path="operator-notification" element={<OperatorNotification />} />
        <Route path="ott-configuration" element={<OttConfiguration />} />
        <Route path="whatsapp-gateway" element={<WhatsAppGateway />} />

        {/* Fallback for undefined admin paths */}
        <Route path="*" element={<Navigate to="/config/admin" replace />} />
      </Route>
    </Routes>
  );
};

export default Configuration;
