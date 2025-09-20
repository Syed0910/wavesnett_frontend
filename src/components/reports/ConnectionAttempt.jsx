// src/components/reports/ConnectionAttempt.jsx
import React, { useEffect, useState } from "react";
import { getConnectionAttempts } from "../../services/api";
import DataTable from "../ui/datatable";

const ConnectionAttempt = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttempts = async () => {
      try {
        const { data } = await getConnectionAttempts();
        // ✅ Ensure unique id for every row
        const withIds = data.map((item, index) => ({
          ...item,
          id: item.id || `attempt-${index}`, // fallback if id missing/duplicate
        }));
        setRecords(withIds);
      } catch (err) {
        console.error("❌ Error fetching connection attempts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAttempts();
  }, []);

  // ✅ Define columns for Connection Attempts table
  const columns = [
    { key: "username", label: "User Name" },
    {
      key: "authdate",
      label: "Start Time",
      render: (value) =>
        value ? new Date(value).toLocaleString() : "-",
    },
    { key: "mac_address", label: "Mac Address" },
    { key: "nasip", label: "Nas IP" },
    {
      key: "reply",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "Access-Accept"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    { key: "pass", label: "Password" },
    { key: "reason", label: "Message" },
  ];

  if (loading) return <p className="p-4">Loading Connection Attempts...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Connection Attempts</h2>
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

export default ConnectionAttempt;
