// src/components/queue/Queue.jsx
import { Plus, Upload, Activity, BarChart3 } from 'lucide-react';
import DataTable from '../ui/datatable';
import { useNavigate } from "react-router-dom";

const Queue = () => {
  const navigate = useNavigate();

  const handleEdit = (item) => alert(`Edit Queue: ${item.name}`);
  const handleDelete = (item) =>
    window.confirm(`Delete queue ${item.name}?`) && alert(`Deleted queue ${item.name}`);
  const handleView = (item) => navigate(`/queue/details/${item.id}`);
  const handleImport = () => alert("Import queues clicked");
  const handleAddQueue = () => alert("Add queue clicked");
  const handleViewStats = (item) => alert(`View statistics for: ${item.name}`);

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
    { 
      key: 'target', 
      label: 'Target',
      render: (value) => (
        <span className="font-mono text-xs text-gray-700 break-all">{value}</span>
      )
    },
    { 
      key: 'maxLimit', 
      label: 'Max-Limit',
      render: (value) => (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
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
      name: 'staticip-bharat',
      target: '10.10.60.30/32,10.10.60.31/32,10.10.60.32/32,10.10.60.33/32,10.10.60.34/32,10.10.60.35/32',
      maxLimit: '512M/512M',
      status: 'Active'
    }
  ];

  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import Queues"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddQueue}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        title="Add Queue"
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

  // Custom action buttons for queue
  const customActions = (item) => (
    <div className="flex items-center gap-1">
      <button
        onClick={() => handleViewStats(item)}
        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
        title="View Statistics"
      >
        <BarChart3 className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="h-screen p-6 bg-white">
      <DataTable
        title="Queue"
        data={sampleData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search queues..."
        customActions={customActions}
      />
    </div>
  );
};

export default Queue;