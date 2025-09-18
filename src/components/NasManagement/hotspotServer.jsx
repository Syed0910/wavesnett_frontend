// src/components/hotspot/HotspotServer.jsx
import { Plus, Upload, Activity } from 'lucide-react';
import DataTable from '../ui/datatable';
import { useNavigate } from "react-router-dom";

const HotspotServer = () => {
  const navigate = useNavigate();

  // ✅ Handlers
  const handleEdit = (hotspot) => alert(`Edit Hotspot Server: ${hotspot.name}`);
  const handleDelete = (hotspot) =>
    window.confirm(`Delete ${hotspot.name}?`) && alert(`Deleted ${hotspot.name}`);
  const handleView = (hotspot) => navigate(`/hotspot/details/${hotspot.id}`);
  const handleImport = () => alert("Import Hotspot servers clicked");
  const handleAdd = () => alert("Add Hotspot server clicked");

  // ✅ Table columns
  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (value, row) => (
        <span
          onClick={() => handleView(row)}
          className="cursor-pointer px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all duration-200"
        >
          {value}
        </span>
      )
    },
    { key: 'interface', label: 'Interface' },
    { key: 'addressPool', label: 'Address-Pool' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
            value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${value ? 'bg-green-500' : 'bg-red-500'}`} />
          {value ? 'Active' : 'Inactive'}
        </span>
      )
    }
  ];

  // ✅ Static sample data
  const sampleData = [
    { id: 1, name: 'server2', interface: '*6', addressPool: '', status: true },
    { id: 2, name: 'server1', interface: 'ether7', addressPool: '', status: true }
  ];

  // ✅ Toolbar actions
  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import Hotspot Servers"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAdd}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        title="Add Hotspot Server"
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
        title="Hotspot Server"
        data={sampleData}   // ✅ Static data
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search Hotspot servers..."
      />
    </div>
  );
};

export default HotspotServer;
