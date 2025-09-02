import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users";
import Settings from "./pages/Settings";
import UsersPage from "./pages/users";
import Layout from "./components/Layout/Layout";
import NasDashboard from "./pages/nas/NasDashboard";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* User Management Routes */}
        <Route path="/user/*" element={<UsersPage />} />
        
        {/* NAS Routes - Placeholder for future implementation */}
        <Route path="/nas/*" element={<div className="p-6"><h2 className="text-xl font-semibold">NAS Management</h2><p className="text-gray-600 mt-2">NAS management features will be implemented here.</p></div>} />
        
        {/* Billing Routes - Placeholder for future implementation */}
        <Route path="/billing/*" element={<div className="p-6"><h2 className="text-xl font-semibold">Billing Management</h2><p className="text-gray-600 mt-2">Billing management features will be implemented here.</p></div>} />
        
        {/* Packages Routes - Placeholder for future implementation */}
        <Route path="/packages/*" element={<div className="p-6"><h2 className="text-xl font-semibold">Package Management</h2><p className="text-gray-600 mt-2">Package management features will be implemented here.</p></div>} />
        
        {/* Reports Routes - Placeholder for future implementation */}
        <Route path="/reports/*" element={<div className="p-6"><h2 className="text-xl font-semibold">Reports</h2><p className="text-gray-600 mt-2">Reports will be implemented here.</p></div>} />
        
        {/* Configuration Routes - Placeholder for future implementation */}
        <Route path="/config/*" element={<div className="p-6"><h2 className="text-xl font-semibold">Configuration</h2><p className="text-gray-600 mt-2">Configuration settings will be implemented here.</p></div>} />
        
        {/* NAS Management Routes - Placeholder for future implementation */}
        <Route path="/nas-mgmt/*" element={<div className="p-6"><h2 className="text-xl font-semibold">NAS Management</h2><p className="text-gray-600 mt-2">NAS management features will be implemented here.</p></div>} />
        
        {/* OLT Management Routes - Placeholder for future implementation */}
        <Route path="/olt-mgmt/*" element={<div className="p-6"><h2 className="text-xl font-semibold">OLT Management</h2><p className="text-gray-600 mt-2">OLT management features will be implemented here.</p></div>} />
        
        {/* Inventory Routes - Placeholder for future implementation */}
        <Route path="/inventory/*" element={<div className="p-6"><h2 className="text-xl font-semibold">Inventory Management</h2><p className="text-gray-600 mt-2">Inventory management features will be implemented here.</p></div>} />
        
        {/* Zone Management Routes - Placeholder for future implementation */}
        <Route path="/zone/*" element={<div className="p-6"><h2 className="text-xl font-semibold">Zone Management</h2><p className="text-gray-600 mt-2">Zone management features will be implemented here.</p></div>} />
        
        {/* Active Login Route - Placeholder for future implementation */}
        <Route path="/active-login" element={<div className="p-6"><h2 className="text-xl font-semibold">Active Login</h2><p className="text-gray-600 mt-2">Active login monitoring will be implemented here.</p></div>} />
      </Routes>
    </Layout>
  );
};

export default App;