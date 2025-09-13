// src/components/pppoe/pppoeProfile.jsx
import { Plus, Upload, Activity } from "lucide-react";
import DataTable from "../ui/datatable";
import { useNavigate } from "react-router-dom";

const PPPOEProfile = () => {
  const navigate = useNavigate();

  // ✅ Handlers
  const handleEdit = (profile) => alert(`Edit PPPoE Profile: ${profile.name}`);
  const handleDelete = (profile) =>
    window.confirm(`Delete ${profile.name}?`) && alert(`Deleted ${profile.name}`);
  const handleView = (profile) => navigate(`/pppoe-profile/details/${profile.id}`);
  const handleImport = () => alert("Import PPPoE profiles clicked");
  const handleAdd = () => alert("Add PPPoE profile clicked");

  // ✅ Table columns
  const columns = [
    { key: "name", label: "Name" },
    { key: "localIp", label: "Local IP" },
    { key: "remoteAddress", label: "Remote Address" },
  ];

  // ✅ Static sample data
  const sampleData = [
    { id: 1, name: "default", localIp: "", remoteAddress: "" },
    { id: 2, name: "default-encryption", localIp: "", remoteAddress: "" },
    { id: 3, name: "ppp10", localIp: "10.10.50.1", remoteAddress: "ppp1-10" },
    { id: 4, name: "ppp45", localIp: "10.10.20.1", remoteAddress: "pool2-45" },
    { id: 5, name: "ppp46", localIp: "10.10.30.1", remoteAddress: "pool3-46" },
    { id: 6, name: "ppp47", localIp: "10.10.40.1", remoteAddress: "pool4-47" },
    { id: 7, name: "profile1", localIp: "10.10.10.1", remoteAddress: "pppoe_pool1" },
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
        title="PPPOE Profile"
        data={sampleData}   // ✅ Static table data
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search PPPoE profiles..."
      />
    </div>
  );
};

export default PPPOEProfile;
