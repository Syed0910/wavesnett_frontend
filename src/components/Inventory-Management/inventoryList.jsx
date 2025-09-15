// src/components/InventoryManagement/InventoryList.jsx
import { Plus, Upload, Activity } from "lucide-react";
import DataTable from "../ui/datatable";

const InventoryList = () => {
  const handleEdit = (item) => alert(`Edit Inventory: ${item?.serialNumber}`);
  const handleDelete = (item) =>
    window.confirm(`Delete ${item?.serialNumber}?`) &&
    alert(`Deleted ${item?.serialNumber}`);
  const handleView = (item) => alert(`View Inventory: ${item?.serialNumber}`);
  const handleImport = () => alert("Import inventory clicked");
  const handleAdd = () => alert("Add inventory clicked");

  const columns = [
    { key: "macAddress", label: "Mac-Address" },
    { key: "serialNumber", label: "Serial Number" },
    { key: "brandName", label: "Brand Name" },
    { key: "type", label: "Type" },
    { key: "username", label: "User Name" },
    { key: "zone", label: "Zone" },
  ];

  const sampleData = []; // ✅ No data yet

  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
        title="Import Inventory"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAdd}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        title="Add Inventory"
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
        title="Inventory List"
        data={sampleData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search inventory..."
      />
    </div>
  );
};

export default InventoryList;
