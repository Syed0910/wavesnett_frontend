// src/components/NasManagement/Masquerade/index.jsx
import React, { useState } from "react";
import AddressListTable from "./addressListTable";
import NatTable from "./natTable";

const MasqueradePage = () => {
  const [activeTab, setActiveTab] = useState("address");

  return (
    <div className="p-4">
      {/* Top Navigation */}
      <div className="flex space-x-4 border-b pb-2 mb-4">
        <button
          onClick={() => setActiveTab("address")}
          className={`px-4 py-2 rounded-t-lg font-medium ${
            activeTab === "address"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Address List
        </button>

        <button
          onClick={() => setActiveTab("nat")}
          className={`px-4 py-2 rounded-t-lg font-medium ${
            activeTab === "nat"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          NAT
        </button>
      </div>

      {/* Content Area */}
      <div>
        {activeTab === "address" && <AddressListTable />}
        {activeTab === "nat" && <NatTable />}
      </div>
    </div>
  );
};

export default MasqueradePage;
