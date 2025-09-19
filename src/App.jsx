import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users";
import Settings from "./pages/Settings";
import UsersPage from "./pages/users";
import Layout from "./components/Layout/Layout";
import NasDashboard from "./pages/Nas";
import Billing from "./components/billing/billing";

import AdminConfiguration from "./components/Configuration/adminConfiguration";
import Configuration from "./components/Configuration/Configuration";
import ChangePassword from "./components/Configuration/ChangePassword/ChangePassword";
import NasManagement from "./components/NasManagement/nasManagement";
import OltManagement from "./components/OLT-Management/OltManagement";
import Reports from "./components/reports/reports";

// Import the new Billing component
import BillingComponent from "./components/billing/billing";

// ✅ Import Zone Management pages
import Operators from "./components/ZoneManagement/operators";
import Zone from "./components/ZoneManagement/Zone";
import Permissions from "./components/ZoneManagement/Permissions";
import InventoryManagement from "./components/Inventory-Management/InventoryManagement";

import Complaints from "./components/complaint/Complaints";
import NewComplaint from "./components/complaint/new-complaint";
import CloseComplaint from "./components/complaint/close-complaint";
import Packages from "./pages/packages";

// ✅ Import User Detail
import UserDetail from "./components/users-management/UserDetail";

// ✅ Corrected Import for Online Users
import OnlineUsers from "./components/reports/online-users";

const App = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    setActiveSection("config");
    navigate("/config/admin");
  };

  const handleSidebarNavigation = (sectionId) => {
    setActiveSection(sectionId);

    const routeMap = {
      dashboard: "/dashboard",
      "user-management": "/users",
      billing: "/billing",
      complaints: "/user/complaints",
      packages: "/packages",
      reports: "/reports",
      online: "/online-users",
      config: "/config/admin",
      "admin-config": "/config/admin",
      "nas-management": "/nas-mgmt",
      "olt-management": "/olt-mgmt",
      "inventory-management": "/inventory",
      "zone-management": "/zone",
    };

    if (routeMap[sectionId]) {
      navigate(routeMap[sectionId]);
    }
  };

  return (
    <Layout
      activeSection={activeSection}
      setActiveSection={handleSidebarNavigation}
      onSettingsClick={handleSettingsClick}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user/*" element={<UsersPage />} />

        <Route path="/nas/*" element={<NasDashboard />} />

        {/* Configuration Routes */}
        <Route path="/config/*" element={<Configuration />} />
        <Route path="/config/ChangePassword/*" element={<ChangePassword />} />

        {/* Billing Routes */}
        <Route path="/billing" element={<BillingComponent />} />
        <Route path="/billing/*" element={<Billing />} />

        {/* Packages */}
        <Route path="/packages/*" element={<Packages />} />

        {/* ✅ Reports with nested routes */}
        <Route path="/reports/*" element={<Reports />} />

        {/* ✅ Online Users */}
        <Route path="/online-users" element={<OnlineUsers />} />

        {/* NAS Management */}
        <Route path="/nas-mgmt/*" element={<NasManagement />} />

        {/* OLT Management */}
        <Route path="/olt-mgmt/*" element={<OltManagement />} />

        {/* Inventory Management */}
        <Route path="/inventory/*" element={<InventoryManagement />} />

        {/* Zone Management */}
        <Route path="/zone/operators" element={<Operators />} />
        <Route path="/zone/zones" element={<Zone />} />
        <Route path="/zone/permissions" element={<Permissions />} />

        {/* Complaints */}
        <Route path="/complaints/*" element={<Complaints />} />
        <Route path="/complaints/new-complaint" element={<NewComplaint />} />
        <Route
          path="/complaints/close-complaint"
          element={<CloseComplaint />}
        />

        {/* ✅ User Detail Route */}
        <Route path="/userdetails/:id" element={<UserDetail />} />
      </Routes>
    </Layout>
  );
};

export default App;
