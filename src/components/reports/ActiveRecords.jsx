// src/components/reports/ActiveRecords.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../ui/datatable";

const ActiveRecords = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/active-records");
        setRecords(res.data);
      } catch (err) {
        console.error("❌ Error fetching active records:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  const columns = [
    { key: "username", label: "User name" },
    { key: "planName", label: "Plan Name" },
    { key: "validity", label: "Validity" },
    { key: "starting", label: "Starting" },
    { key: "usedTime", label: "Used Time" },
    {
      key: "account",
      label: "Account",
      render: (value) => (
        <span
          className={`${
            value === "Active" ? "text-green-600 font-semibold" : "text-red-600"
          }`}
        >
          {value}
        </span>
      ),
    },
    { key: "expDate", label: "Exp. Date" },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`${
            value === "Enable" ? "text-green-600 font-semibold" : "text-red-600"
          }`}
        >
          {value}
        </span>
      ),
    },
    { key: "zone", label: "Zone" },
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
      <DataTable data={records} columns={columns} pageSize={10} />
    </div>
  );
};

export default ActiveRecords;
