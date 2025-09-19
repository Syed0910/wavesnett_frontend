// src/components/complaint/Complaints.jsx
import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DataTable from "../ui/datatable";
import StatCard from "../ui/stat-cards";
import { Grid } from "@mui/material";

const Complaints = () => {
  const navigate = useNavigate();
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);

  // Sample complaints data
  const [data] = useState([
    {
      id: 5,
      userName: "Issal",
      creationDate: "12/08/2025 20:05:45",
      type: "Connectivity issue",
      status: "open",
      zone: "admin",
    },
  ]);

  // Columns
  const columns = [
    { key: "id", label: "Id" },
    { key: "userName", label: "User Name" },
    { key: "creationDate", label: "Creation Date" },
    { key: "type", label: "Type" },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === "open"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    { key: "zone", label: "Zone" },
  ];

  // Handlers
  const handleView = (row) => console.log("View complaint:", row);
  const handleEdit = (row) => console.log("Edit complaint:", row);
  const handleDelete = (row) => console.log("Delete complaint:", row);

  const handleNewComplaint = () => {
    setShowActionsDropdown(false);
    navigate("/complaints/new-complaint");
  };

  const handleCloseComplaint = () => {
    setShowActionsDropdown(false);
    navigate("/complaints/close-complaint");
  };

  return (
    <div className="max-w-8xl mx-auto bg-white p-6 pt-0 min-h-screen">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Complaints</h2>

        {/* Actions Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowActionsDropdown(!showActionsDropdown)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <MoreVertical size={20} className="text-gray-600" />
          </button>

          {showActionsDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
              <div className="py-1">
                <button
                  onClick={handleNewComplaint}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  New Complaint
                </button>
                <button
                  onClick={handleCloseComplaint}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Close Complaint
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* StatCards (original sizing with MUI Grid) */}
      <Grid container spacing={3} className="mb-4">
        <Grid item xs={12} sm={6} md={3}>
          <StatCard title="Open" value="1" />
        </Grid>
        {/* You can add more StatCards here if needed */}
      </Grid>

      {/* DataTable */}
      <DataTable
        title="Complaints"
        data={data}
        columns={columns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        pageSize={10}
        searchable={true}
      />
    </div>
  );
};

export default Complaints;
