// src/components/ZoneManagement/operators.jsx
import { useEffect, useState } from "react";
import { getOperators } from "../../services/api";
import { Eye, Edit, Trash2, Upload, Plus } from "lucide-react";
import DataTable from "../ui/datatable";

const Operators = () => {
  const [operators, setOperators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOperators = async () => {
      try {
        setLoading(true);
        const response = await getOperators();
        setOperators(response.data);
      } catch (err) {
        console.error("Failed to fetch operators:", err);
        setError("Failed to load operators.");
      } finally {
        setLoading(false);
      }
    };
    fetchOperators();
  }, []);

  const handleEdit = (op) => alert(`Edit operator: ${op.username}`);
  const handleDelete = (op) =>
    window.confirm(`Delete ${op.username}?`) && alert(`Deleted ${op.username}`);
  const handleView = (op) => alert(`View details: ${op.username}`);
  const handleImport = () => alert("Import operators clicked");
  const handleAddOperator = () => alert("Add operator clicked");

  const columns = [
    { key: "id", label: "ID", primaryKey: true },
    {
      key: "username",
      label: "Username",
      render: (value, row) => (
        <span
          onClick={() => handleView(row)}
          className="cursor-pointer px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all duration-200"
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
        onClick={handleAddOperator}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );

  if (loading) return <div className="p-6">Loading operators...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <DataTable
        title="Operators"
        data={operators}
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

export default Operators; // ✅ critical
