// src/components/OltManagement/OnuStatus.jsx
import { Plus, Upload, Activity } from "lucide-react";
import DataTable from "../ui/datatable";
import { useNavigate } from "react-router-dom";

const OnuStatus = () => {
  const navigate = useNavigate();

  const handleEdit = (onu) => alert(`Edit ONU: ${onu.macAddress}`);
  const handleDelete = (onu) =>
    window.confirm(`Delete ONU ${onu.macAddress}?`) &&
    alert(`Deleted ${onu.macAddress}`);
  const handleView = (onu) => navigate(`/onu/status/${onu.id}`);
  const handleImport = () => alert("Import ONU Status clicked");
  const handleAddOnu = () => alert("Add ONU Status clicked");

  // ✅ Table columns
  const columns = [
    { key: "onuId", label: "ONU-ID" },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
            value === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              value === "Active" ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {value}
        </span>
      ),
    },
    {
      key: "macAddress",
      label: "Mac-Address",
      render: (value) => (
        <span className="font-mono text-sm text-gray-700">{value}</span>
      ),
    },
    { key: "distance", label: "Distance (m)" },
    { key: "rtt", label: "RTT (TQ)" },
    { key: "lastRegTime", label: "Last Reg Time" },
    { key: "lastDeregTime", label: "Last Dereg Time" },
    { key: "lastDeregReason", label: "Last Dereg Reason" },
    { key: "aliveTime", label: "Alive Time" },
    { key: "upgrade", label: "Upgrade" },
    { key: "username", label: "User Name" },
  ];

  // ✅ Sample static data
  const sampleData = [
    {
      id: 1,
      onuId: "ONU-001",
      status: "Active",
      macAddress: "00:1A:2B:3C:4D:AA",
      distance: "1200",
      rtt: "2ms",
      lastRegTime: "2025-09-09 10:15:00",
      lastDeregTime: "-",
      lastDeregReason: "-",
      aliveTime: "2h 30m",
      upgrade: "No",
      username: "user001",
    },
    {
      id: 2,
      onuId: "ONU-002",
      status: "Inactive",
      macAddress: "00:1A:2B:3C:4D:BB",
      distance: "800",
      rtt: "3ms",
      lastRegTime: "2025-09-08 18:40:00",
      lastDeregTime: "2025-09-09 07:55:00",
      lastDeregReason: "Link Down",
      aliveTime: "0h 0m",
      upgrade: "Yes",
      username: "user002",
    },
  ];

  // ✅ Toolbar with icons
  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import ONU Status"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddOnu}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        title="Add ONU"
      >
        <Plus className="w-4 h-4" />
      </button>
      <button
        onClick={() => window.location.reload()}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Refresh"
      >
        <Activity className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="h-screen p-6 bg-white">
      <DataTable
        title="ONU Status"
        data={sampleData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search ONU status..."
      />
    </div>
  );
};

export default OnuStatus;
