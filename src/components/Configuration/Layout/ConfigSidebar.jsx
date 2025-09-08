// components/Configuration/Layout/ConfigSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const ConfigSidebar = () => {
  const links = [
    { label: "ADMIN", path: "/config/admin" },
    { label: "PORTAL", path: "/config/portal" },
    { label: "BILLING", path: "/config/billing" },
    { label: "MAIL", path: "/config/mail" },
    { label: "PAYMENT GATEWAY", path: "/config/payment-gateway" },
    { label: "SMS GATEWAY", path: "/config/sms-gateway" },
    { label: "NOTIFICATION", path: "/config/notification" },
    { label: "AUTO USER", path: "/config/auto-user" },
    { label: "WHATSAPP GATEWAY", path: "/config/whatsapp-gateway" },
    { label: "OPERATOR NOTIFICATION", path: "/config/operator-notification" },
    { label: "OTT CONFIGURATION", path: "/config/ott-configuration" },
    { label: "KYC CONFIGURATION", path: "/config/kyc-configuration" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <nav className="flex flex-col space-y-2 text-gray-600 text-sm font-medium">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-2 py-1 rounded hover:text-cyan-500 ${
                isActive ? "bg-gray-100 font-semibold text-cyan-600" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default ConfigSidebar;
