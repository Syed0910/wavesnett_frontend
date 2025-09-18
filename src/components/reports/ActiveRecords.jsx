// src/components/reports/ActiveRecords.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../ui/datatable";

const ActiveRecords = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActiveRecords = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/active-records");
        // ✅ Ensure unique id for each row
        const withIds = res.data.map((item, index) => ({
          ...item,
          id: item.id || `active-${index}`,
        }));
        setRecords(withIds);
      } catch (err) {
        console.error("❌ Error fetching active records:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchActiveRecords();
  }, []);

  // ✅ Define columns for Active Records table
  const columns = [
    { key: "username", label: "User" },
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone" },
    { key: "planName", label: "Plan" },
    { key: "validity", label: "Validity (Days)" },
    {
      key: "startDate",
      label: "Starting",
      render: (value) =>
        value ? new Date(value).toLocaleString() : "-",
    },
    { key: "usedTime", label: "Used Time (Hours)" },
    {
      key: "account",
      label: "Account",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Active"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "expiryDate",
      label: "Exp. Date",
      render: (value) =>
        value ? new Date(value).toLocaleDateString() : "-",
    },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Online"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    { key: "zoneName", label: "Zone" },
    {
      key: "action",
      label: "Action",
      render: () => (
        <button className="text-blue-600 hover:text-blue-800">ℹ️</button>
      ),
    },
  ];

  if (loading) return <p className="p-4">Loading Active Records...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Active Records</h2>
      <DataTable
        data={records}
        columns={columns}
        pageSize={10}
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
};

export default ActiveRecords;
