// src/components/reports/online-users.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../ui/datatable";

const OnlineUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/reports/online-users"
        );
        setUsers(res.data);
      } catch (err) {
        console.error("❌ Error fetching online users:", err);
        setError("Failed to load online users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    { key: "username", label: "Username" },
    { key: "name", label: "Name" },
    { key: "phone", label: "Phone" },
    { key: "planName", label: "Plan Name" },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {value ? "Online" : "Offline"}
        </span>
      ),
    },
    {
      key: "suspend",
      label: "Account",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
          }`}
        >
          {value ? "Suspended" : "Active"}
        </span>
      ),
    },
    {
      key: "expiryDate",
      label: "Exp. Date",
      render: (value) => (value ? new Date(value).toLocaleString() : "-"),
    },
    { key: "zoneName", label: "Zone" },
  ];

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Online Users</h2>
      <DataTable data={users} columns={columns} showSelection={false} pageSize={10} />
    </div>
  );
};

export default OnlineUsers;
