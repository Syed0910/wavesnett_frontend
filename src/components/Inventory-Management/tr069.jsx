// src/components/InventoryManagement/Tr069.jsx
import { Plus, Upload, Activity } from "lucide-react";
import DataTable from "../ui/datatable";

const Tr069 = () => {
  const handleEdit = (item) => alert(`Edit TR069: ${item?.serialNumber}`);
  const handleDelete = (item) =>
    window.confirm(`Delete ${item?.serialNumber}?`) &&
    alert(`Deleted ${item?.serialNumber}`);
  const handleView = (item) => alert(`View TR069: ${item?.serialNumber}`);
  const handleImport = () => alert("Import TR069 clicked");
  const handleAdd = () => alert("Add TR069 clicked");

  const columns = [
    { key: "macAddress", label: "Mac-Address" },
    { key: "serialNumber", label: "Serial Number" },
    { key: "lastUpdate", label: "Last Update" },
    { key: "brandName", label: "Brand Name (Product Class)" },
    { key: "username", label: "User Name" },
    { key: "createdAt", label: "Created At" },
  ];

  const sampleData = []; // ✅ No data yet

  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
        title="Import TR069"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAdd}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        title="Add TR069"
      >
        <Plus className="w-4 h-4" />
      </button>
      <button
        onClick={() => window.location.reload()}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
        title="Refresh"
      >
        <Activity className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="h-screen p-6 bg-white">
      <DataTable
        title="TR069"
        data={sampleData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search TR069..."
      />
    </div>
  );
};

export default Tr069;
