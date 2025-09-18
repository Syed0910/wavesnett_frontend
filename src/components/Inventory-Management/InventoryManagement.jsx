// src/components/InventoryManagement/InventoryManagement.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import InventoryList from "./inventoryList";
import Tr069 from "./tr069";


const InventoryManagement = () => {
  return (
    <Routes>
      {/* Redirect base /inventory-mgmt to /inventory-mgmt/list */}
      <Route
        path="/"
        element={<Navigate to="/inventory-mgmt/list" replace />}
      />

      {/* Inventory List */}
      <Route path="/inventoryList" element={<InventoryList />} />

      {/* TR069 */}
      <Route path="/tr069" element={<Tr069 />} />

     
    </Routes>
  );
};

export default InventoryManagement;
