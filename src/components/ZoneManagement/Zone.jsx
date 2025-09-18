// src/components/ZoneManagement/Zone.jsx
import { useEffect, useState } from "react";
import { getOperators } from "../../services/api"; // ✅ reuse operators API
import { Eye, Edit, Trash2, Upload, Plus } from "lucide-react";
import DataTable from "../ui/datatable";

const Zone = () => {
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchZones = async () => {
      try {
        setLoading(true);
        const response = await getOperators(); // ✅ fetch operators instead
        setZones(response.data);
      } catch (err) {
        console.error("Failed to fetch zones:", err);
        setError("Failed to load zones.");
      } finally {
        setLoading(false);
      }
    };
    fetchZones();
  }, []);

  const handleEdit = (zone) => alert(`Edit zone: ${zone.username}`);
  const handleDelete = (zone) =>
    window.confirm(`Delete ${zone.username}?`) && alert(`Deleted ${zone.username}`);
  const handleView = (zone) => alert(`View details: ${zone.username}`);
  const handleImport = () => alert("Import zones clicked");
  const handleAddZone = () => alert("Add zone clicked");

  const columns = [
    { key: "id", label: "ID", primaryKey: true },
    {
      key: "username",
      label: "Username",
      render: (value, row) => (
        <span
          onClick={() => handleView(row)}
          className="cursor-pointer px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 hover:bg-purple-200 transition-all duration-200"
        >
          {value}
        </span>
      ),
    },
    { key: "name", label: "Name" },
    { key: "zoneName", label: "Zone" },
    { key: "lastLogin", label: "Last Login" },
  ];

  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddZone}
        className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );

  if (loading) return <div className="p-6">Loading zones...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <DataTable
        title="Zones (showing Operators data)"
        data={zones}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
      />
    </div>
  );
};

export default Zone;
