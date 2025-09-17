// src/components/reports/RechargeSummary.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../ui/datatable";

const RechargeSummary = () => {
  const [recharges, setRecharges] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchRecharges = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/recharges");
      // Ensure each row has a unique id for React keys
      const withIds = res.data.map((item, index) => ({
        ...item,
        id: item.id || `recharge-${index}`,   // fallback if id missing/duplicate
      }));
      setRecharges(withIds);
    } catch (err) {
      console.error("❌ Error fetching recharge summary:", err);
    } finally {
      setLoading(false);
    }
  };
  fetchRecharges();
}, []);


  // ✅ Define columns for Recharge Summary table
  const columns = [
    {
      key: "username",
      label: "User",
      render: (value) => (
        <span className="text-blue-600 hover:underline cursor-pointer">
          {value}
        </span>
      ),
    },
    { key: "planName", label: "Plan" },
    { key: "quantity", label: "Quantity" },
    {
      key: "amount",
      label: "Amount",
      render: (value) => `₹${parseFloat(value || 0).toFixed(2)}`,
    },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "rechargeDate",
      label: "Recharge Date",
      render: (value) =>
        value ? new Date(value).toLocaleString() : "-",
    },
    { key: "type", label: "Type" },
    { key: "zone", label: "Zone" },
    {
      key: "action",
      label: "Action",
      render: () => (
        <button className="text-blue-600 hover:text-blue-800">
          ℹ️
        </button>
      ),
    },
  ];

  if (loading) return <p className="p-4">Loading Recharge Summary...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Recharge Summary</h2>
      <DataTable
        data={recharges}
        columns={columns}
        pageSize={10}
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
};

export default RechargeSummary;
