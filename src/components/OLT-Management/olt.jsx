// src/components/OltManagement/Olt.jsx
import { Plus, Upload, Activity } from "lucide-react";
import DataTable from "../ui/datatable";
import { useNavigate } from "react-router-dom";

const Olt = () => {
  const navigate = useNavigate();

  const handleEdit = (oltItem) => alert(`Edit OLT: ${oltItem.name}`);
  const handleDelete = (oltItem) =>
    window.confirm(`Delete ${oltItem.name}?`) && alert(`Deleted ${oltItem.name}`);
  const handleView = (oltItem) => navigate(`/olt/details/${oltItem.id}`);
  const handleImport = () => alert("Import OLTs clicked");
  const handleAddOlt = () => alert("Add OLT clicked");

  // ✅ Columns like Interface
  const columns = [
    {
      key: "name",
      label: "OLT Name",
      render: (value, row) => (
        <span
          onClick={() => handleView(row)}
          className="cursor-pointer px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 hover:bg-purple-200 transition-all duration-200"
        >
          {value}
        </span>
      ),
    },
    {
      key: "ipAddress",
      label: "IP Address",
      render: (value) => (
        <span className="font-mono text-sm text-gray-700">{value}</span>
      ),
    },
    { key: "telnetPort", label: "Telnet Port" },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
            value ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              value ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {value ? "Active" : "Inactive"}
        </span>
      ),
    },
  ];

  // ✅ Sample static data
  const sampleData = [
    {
      id: 1,
      name: "OLT-1",
      ipAddress: "192.168.1.10",
      telnetPort: "23",
      status: true,
    },
    {
      id: 2,
      name: "OLT-2",
      ipAddress: "192.168.1.11",
      telnetPort: "2323",
      status: false,
    },
  ];

  // ✅ Toolbar like Interface
  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import OLTs"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddOlt}
        className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200"
        title="Add OLT"
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
        title="OLT Management"
        data={sampleData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search OLTs..."
      />
    </div>
  );
};

export default Olt;
