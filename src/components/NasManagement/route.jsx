// src/components/route/RouteManagement.jsx
import { Plus, Upload, Activity } from 'lucide-react';
import DataTable from '../ui/datatable';
import { useNavigate } from "react-router-dom";

const RouteManagement = () => {
  const navigate = useNavigate();

  const handleEdit = (item) => alert(`Edit Route: ${item.toAddress}`);
  const handleDelete = (item) =>
    window.confirm(`Delete route ${item.toAddress}?`) && alert(`Deleted route ${item.toAddress}`);
  const handleView = (item) => navigate(`/route/details/${item.id}`);
  const handleImport = () => alert("Import routes clicked");
  const handleAddRoute = () => alert("Add route clicked");

  const columns = [
    { key: 'name', label: 'Name' },
    { 
      key: 'toAddress', 
      label: 'To-Address',
      render: (value, row) => (
        <span
          onClick={() => handleView(row)}
          className="cursor-pointer font-mono text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          {value}
        </span>
      )
    },
    { 
      key: 'gateway', 
      label: 'Gateway',
      render: (value) => (
        <span className="font-mono text-sm text-gray-700">{value}</span>
      )
    },
    { 
      key: 'distance', 
      label: 'Distance',
      render: (value) => (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
          {value}
        </span>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
            value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${value === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
          {value}
        </span>
      )
    }
  ];

  const sampleData = [
    {
      id: 1,
      name: '',
      toAddress: '0.0.0.0/0',
      gateway: '103.53.31.205',
      distance: 1,
      status: 'Active'
    },
    {
      id: 2,
      name: '',
      toAddress: '0.0.0.0/0',
      gateway: '192.168.1.1',
      distance: 1,
      status: 'Active'
    },
    {
      id: 3,
      name: '',
      toAddress: '0.0.0.0/0',
      gateway: '192.168.29.1',
      distance: 1,
      status: 'Active'
    },
    {
      id: 4,
      name: '',
      toAddress: '100.68.24.192/28',
      gateway: '10.10.1.15',
      distance: 1,
      status: 'Active'
    },
    {
      id: 5,
      name: '',
      toAddress: '0.0.0.0/0',
      gateway: '192.168.1.1',
      distance: 1,
      status: 'Active'
    },
    {
      id: 6,
      name: '',
      toAddress: '0.0.0.0/0',
      gateway: '192.168.29.1',
      distance: 1,
      status: 'Active'
    }
  ];

  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import Routes"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddRoute}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        title="Add Route"
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
        title="Route"
        data={sampleData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search routes..."
      />
    </div>
  );
};

export default RouteManagement;