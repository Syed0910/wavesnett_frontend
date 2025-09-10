// src/components/OltManagement/OnuDiscover.jsx
import { Plus, Upload, Activity } from "lucide-react";
import DataTable from "../ui/datatable";
import { useNavigate } from "react-router-dom";

const OnuDiscover = () => {
  const navigate = useNavigate();

  const handleEdit = (onuItem) => alert(`Edit ONU: ${onuItem.macAddress}`);
  const handleDelete = (onuItem) =>
    window.confirm(`Delete ONU ${onuItem.macAddress}?`) &&
    alert(`Deleted ${onuItem.macAddress}`);
  const handleView = (onuItem) => navigate(`/onu/details/${onuItem.id}`);
  const handleImport = () => alert("Import ONU clicked");
  const handleAddOnu = () => alert("Add ONU clicked");

  // ✅ Table columns
  const columns = [
    { key: "index", label: "Index" },
    { key: "ponId", label: "PON-ID" },
    { key: "llid", label: "LLID" },
    {
      key: "macAddress",
      label: "Mac-Address",
      render: (value) => (
        <span className="font-mono text-sm text-gray-700">{value}</span>
      ),
    },
    { key: "link", label: "Link" },
    { key: "ctcOamStatus", label: "CTC OAM Status" },
    { key: "username", label: "User Name" },
  ];

  // ✅ Static sample data
  const sampleData = [
    {
      id: 1,
      index: "1",
      ponId: "PON-1",
      llid: "LLID-001",
      macAddress: "00:1A:2B:3C:4D:7E",
      link: "Up",
      ctcOamStatus: "Registered",
      username: "user1",
    },
    {
      id: 2,
      index: "2",
      ponId: "PON-2",
      llid: "LLID-002",
      macAddress: "00:1A:2B:3C:4D:8F",
      link: "Down",
      ctcOamStatus: "Unregistered",
      username: "user2",
    },
  ];

  // ✅ Toolbar with icons
  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import ONUs"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddOnu}
        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
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
        title="ONU Discover"
        data={sampleData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search ONUs..."
      />
    </div>
  );
};

export default OnuDiscover;
