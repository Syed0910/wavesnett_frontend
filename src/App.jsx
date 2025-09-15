import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users";
import Settings from "./pages/Settings";
import UsersPage from "./pages/users";
import Layout from "./components/Layout/Layout";
import NasDashboard from "./pages/nas/NasDashboard";
import AdminConfiguration from "./components/Configuration/adminConfiguration";
import Configuration from "./components/Configuration/Configuration";
import NasManagement from "./components/NasManagement/NasManagement";
import OnlineUsersTable from "./components/reports/online-users";

// ✅ Import Zone Management pages
import Operators from "./components/ZoneManagement/operators";
import Zone from "./components/ZoneManagement/Zone";
import Permissions from "./components/ZoneManagement/Permissions";


const App = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();

  // Handle Settings button click from Navbar
  const handleSettingsClick = () => {
    setActiveSection("config"); // highlight sidebar
    navigate("/config/admin"); // navigate to admin config page
  };

  // Handle sidebar navigation
  const handleSidebarNavigation = (sectionId) => {
    setActiveSection(sectionId);

    // Map sidebar IDs to routes
    const routeMap = {
      "dashboard": "/dashboard",
      "user-management": "/users",
      "billing": "/billing",
      "complaints": "/user/complaints",
      "packages": "/packages",
      "reports": "/reports",
      "config": "/config/admin",
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

        {/* Billing Routes */}
        <Route path="/billing/*" element={
          <div className="p-6">
            <h2 className="text-xl font-semibold">Billing Management</h2>
            <p className="text-gray-600 mt-2">Billing management features will be implemented here.</p>
          </div>
        } />

        {/* Packages Routes */}
        <Route path="/packages/*" element={
          <div className="p-6">
            <h2 className="text-xl font-semibold">Package Management</h2>
            <p className="text-gray-600 mt-2">Package management features will be implemented here.</p>
          </div>
        } />

        {/* Reports Routes */}
        <Route path="/reports/*" element={
          <OnlineUsersTable/>
        } />

        {/* NAS Management */}
        <Route path="/nas-mgmt/*" element={
          <NasManagement/>
        } />

        {/* OLT Management */}
        <Route path="/olt-mgmt/*" element={
          <div className="p-6">
            <h2 className="text-xl font-semibold">OLT Management</h2>
            <p className="text-gray-600 mt-2">OLT management features will be implemented here.</p>
          </div>
        } />

        {/* Inventory Management */}
        <Route path="/inventory/*" element={
          <div className="p-6">
            <h2 className="text-xl font-semibold">Inventory Management</h2>
            <p className="text-gray-600 mt-2">Inventory management features will be implemented here.</p>
          </div>
        } />

        {/* ✅ Zone Management Routes */}
        <Route path="/zone/operators" element={<Operators />} />
        <Route path="/zone/zones" element={<Zone />} />
        <Route path="/zone/permissions" element={<Permissions />} />

        {/* Active Login */}
        <Route path="/active-login" element={
          <div className="p-6">
            <h2 className="text-xl font-semibold">Active Login</h2>
            <p className="text-gray-600 mt-2">Active login monitoring will be implemented here.</p>
          </div>
        } />
      </Routes>
    </Layout>
  );
};

export default App;
