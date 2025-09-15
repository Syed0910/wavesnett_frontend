// src/components/hotspot/hotspotProfile.jsx
import React from "react";
import DataTable from "../ui/datatable";
import { useNavigate } from "react-router-dom";

const HotspotProfile = () => {
  const navigate = useNavigate();

  const handleEdit = (profile) =>
    alert(`Edit Hotspot Profile: ${profile.name}`);
  const handleDelete = (profile) =>
    window.confirm(`Delete ${profile.name}?`) &&
    alert(`Deleted ${profile.name}`);
  const handleView = (profile) =>
    navigate(`/hotspot/profile/details/${profile.id}`);
  const handleImport = () => alert("Import Hotspot profiles clicked");
  const handleAdd = () => alert("Add Hotspot profile clicked");

  // ✅ Table columns
  const columns = [
    { key: "name", label: "Profile Name" },
    { key: "profileAddress", label: "Profile Address" },
    { key: "dnsName", label: "DNS Name" },
    { key: "loginBy", label: "Login By" },
    { key: "useRadius", label: "Use Radius", render: (val) => (val ? "Yes" : "No") },
  ];

  // ✅ Static data
  const sampleData = [
    {
      id: 1,
      name: "default",
      profileAddress: "0.0.0.0",
      dnsName: "",
      loginBy: "mac",
      useRadius: true,
    },
  ];

  // ✅ Toolbar
  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
      >
        Import
      </button>
      <button
        onClick={handleAdd}
        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add
      </button>
      <button
        onClick={() => window.location.reload()}
        className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
      >
        Refresh
      </button>
    </div>
  );

  return (
    <div className="h-screen p-6 bg-white">
      <DataTable
        title="Hotspot Profile"
        data={sampleData} // ✅ Only static data
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search Hotspot profiles..."
      />
    </div>
  );
};

export default HotspotProfile;
