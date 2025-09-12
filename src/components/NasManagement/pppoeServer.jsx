// src/components/pppoe/pppoeServer.jsx
import { Plus, Upload, Activity } from "lucide-react";
import DataTable from "../ui/datatable";
import { useNavigate } from "react-router-dom";

const PPPOEServer = () => {
  const navigate = useNavigate();

  // ✅ Handlers
  const handleEdit = (server) => alert(`Edit PPPoE Server: ${server.name}`);
  const handleDelete = (server) =>
    window.confirm(`Delete ${server.name}?`) && alert(`Deleted ${server.name}`);
  const handleView = (server) => navigate(`/pppoe-server/details/${server.id}`);
  const handleImport = () => alert("Import PPPoE servers clicked");
  const handleAdd = () => alert("Add PPPoE server clicked");

  // ✅ Table columns
  const columns = [
    { key: "name", label: "Name" },
    { key: "interface", label: "Interface" },
    { key: "profile", label: "Profile" },
    {
      key: "status",
      label: "Status",
      render: (val) => (val ? "Active" : "Inactive"), // ✅ plain text
    },
  ];

  // ✅ Static sample data
  const sampleData = [
    { id: 1, name: "ether7", interface: "ether7", profile: "profile1", status: true },
    { id: 2, name: "vlan10", interface: "vlan10", profile: "ppp10", status: true },
    { id: 3, name: "vlan45", interface: "vlan45", profile: "ppp45", status: true },
    { id: 4, name: "vlan46", interface: "vlan46", profile: "ppp46", status: true },
    { id: 5, name: "vlan47", interface: "vlan47", profile: "ppp47", status: true },
  ];

  // ✅ Toolbar
  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-100 flex items-center gap-1"
      >
        <Upload size={16} />
      </button>
      <button
        onClick={handleAdd}
        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-1"
      >
        <Plus size={16} />
      </button>
      <button
        onClick={() => window.location.reload()}
        className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-100 flex items-center gap-1"
      >
        <Activity size={16} />
      </button>
    </div>
  );

  return (
    <div className="h-screen p-6 bg-white">
      <DataTable
        title="PPPOE Server"
        data={sampleData}   // ✅ Static table data
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search PPPoE servers..."
      />
    </div>
  );
};

export default PPPOEServer;
