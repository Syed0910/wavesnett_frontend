// src/components/complaint/Complaints.jsx
import React, { useState } from "react";
import StatCard from "../ui/stat-cards";
import DataTable from "../ui/datatable";
import {
  Grid,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import NewComplaint from "./new-complaint";
import CloseComplaint from "./close-complaint";


const Complaints = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const [selectedView, setSelectedView] = useState("main");

  // Sample complaints data (for dashboard view only)
  const complaintsData = [
    {
      id: 5,
      userName: "Issal",
      creationDate: "12/08/2025 20:05:45",
      type: "Connectivity issue",
      status: "open",
      zone: "admin",
      action: "",
    },
  ];

  const complaintsColumns = [
    { key: "id", label: "Id" },
    { key: "userName", label: "User name" },
    { key: "creationDate", label: "Creation Date" },
    { key: "type", label: "Type" },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs ${
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

  const renderContent = () => {
    if (selectedView === "new") return <NewComplaint />;
    if (selectedView === "close") return <CloseComplaint />;

    // Default dashboard view
    return (
      <>
        {/* Stats Section */}
        <Grid container spacing={3} className="mb-4">
          <Grid item xs={12} sm={6} md={3}>
            <StatCard title="Open" value="1" />
          </Grid>
        </Grid>

        {/* Data Table Section */}
        <DataTable
          title=""
          data={complaintsData}
          columns={complaintsColumns}
          pageSize={10}
          searchable={true}
          onView={(row) => console.log("View complaint:", row)}
          onEdit={(row) => console.log("Edit complaint:", row)}
          onDelete={(row) => console.log("Delete complaint:", row)}
        />
      </>
    );
  };

  return (
    <div className="p-0 pt-0 bg-gray-50 min-h-screen">
      {/* Header should only show in dashboard */}
      {selectedView === "main" && (
        <Box
          className="flex justify-between items-center mb-2"
          sx={{ mt: 0, pt: 0 }}
        >
          <Typography variant="h6" className="font-semibold">
            Complaints
          </Typography>

          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>

          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                setSelectedView("new");
              }}
            >
              New Complaint
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                setSelectedView("close");
              }}
            >
              Close Complaint
            </MenuItem>
          </Menu>
        </Box>
      )}

      {/* Page content */}
      {renderContent()}
    </div>
  );
};

export default Complaints;
