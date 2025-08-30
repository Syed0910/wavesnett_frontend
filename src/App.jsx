import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Layout from "./components/Layout/Layout";
import NasDashboard from "./pages/nas/NasDashboard";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/nas/dashboard" element={<NasDashboard />} />
      </Routes>
    </Layout>
  );
};

export default App;
