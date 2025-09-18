// components/Configuration/Layout/ConfigSidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";

const ConfigSidebar = () => {
  const { primaryColor } = useTheme();
  const [hovered, setHovered] = useState(null);

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
    { label: "KYC-CONFIGURATION", path: "/config/kyc-configuration" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <nav className="flex flex-col space-y-2 text-gray-700 text-sm font-medium">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive ? "bg-gray-100 font-semibold" : ""
              }`
            }
            style={({ isActive }) => {
              if (isActive) return { color: primaryColor };
              if (hovered === link.path) return { color: primaryColor };
              return {};
            }}
            onMouseEnter={() => setHovered(link.path)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default ConfigSidebar;
