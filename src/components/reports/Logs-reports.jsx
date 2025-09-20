import React, { useState } from "react";
import { RefreshCcw, Grid, List } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LogsPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const navigate = useNavigate();

  const logs = [
    "Sep 2025",
    "Aug 2025",
    "Jul 2025",
    "Jun 2025",
    "May 2025",
    "Apr 2025",
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Logs</h2>
        <div className="flex items-center gap-3">
          {/* Reload */}
          <button
            onClick={() => alert("Refreshing logs...")}
            className="p-2 border rounded hover:bg-gray-100"
          >
            <RefreshCcw className="w-5 h-5" />
          </button>

          {/* Grid view */}
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 border rounded hover:bg-gray-100 ${
              viewMode === "grid" ? "bg-gray-200" : ""
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>

          {/* List view */}
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 border rounded hover:bg-gray-100 ${
              viewMode === "list" ? "bg-gray-200" : ""
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Alert Banner with Terms */}
      <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded mb-6 flex justify-between items-center">
        <p className="text-sm">
          ⚠️ Logs are provided as a service and are subject to availability. We
          do not guarantee uninterrupted log generation due to potential server
          issues, network instability, or misconfiguration by the ISP. Logs are
          retained for up to six months; please download and store logs
          periodically to ensure compliance with your requirements.
        </p>
        <button
          onClick={() => navigate("/reports/terms")}
          className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 whitespace-nowrap"
        >
          Terms
        </button>
      </div>

      {/* Logs Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {logs.map((month) => (
            <div
              key={month}
              className="border rounded shadow-sm hover:shadow-md p-6 flex flex-col items-center cursor-pointer"
            >
              <div className="text-6xl">📁</div>
              <p className="mt-3 text-gray-700 font-medium">{month}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {logs.map((month) => (
            <div
              key={month}
              className="border rounded shadow-sm hover:shadow-md p-4 flex items-center gap-4 cursor-pointer"
            >
              <div className="text-3xl">📁</div>
              <p className="text-gray-700 font-medium">{month}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LogsPage;
