// src/components/reports/user-logins.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../ui/datatable";

const UserLogins = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user login data dynamically
  useEffect(() => {
    const fetchUserLogins = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users/login-info");
        setUsers(response.data);
      } catch (err) {
        console.error("❌ Error fetching user logins:", err);
        setError("Failed to load user logins.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserLogins();
  }, []);

  // Dynamically define columns based on keys from data
  const columns = [
    { key: "username", label: "User Name" },
    { 
      key: "createdAt", 
      label: "Creation Date",
      render: (value) => value ? new Date(value).toLocaleString() : "-"
    },
    { 
      key: "lastLogin", 
      label: "Last Login",
      render: (value) => value ? new Date(value).toLocaleString() : "-"
    },
    { 
      key: "lastLogout", 
      label: "Last Logout",
      render: (value) => value ? new Date(value).toLocaleString() : "-"
    },
    { key: "plan", label: "Plan" },
    { key: "status", label: "Status" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
    { key: "alternatePhone", label: "Alt Phone" },
    { key: "contactPerson", label: "Contact Person" },
  ];

  if (loading) return <p className="p-4">Loading user logins...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">User Logins</h2>
      <DataTable
        data={users}
        columns={columns}
        showSelection={false}
        pageSize={20} // configurable
        searchable // enables search if your DataTable supports it
      />
    </div>
  );
};

export default UserLogins;
