// src/components/firewall/Firewall.jsx
import { Plus, Upload, Activity } from 'lucide-react';
import DataTable from '../ui/datatable';
import { useNavigate } from "react-router-dom";

const Firewall = () => {
  const navigate = useNavigate();

  const handleEdit = (item) => alert(`Edit Firewall Rule: ${item.name || item.id}`);
  const handleDelete = (item) =>
    window.confirm(`Delete firewall rule ${item.name || item.id}?`) && alert(`Deleted firewall rule ${item.name || item.id}`);
  const handleView = (item) => navigate(`/firewall/details/${item.id}`);
  const handleImport = () => alert("Import firewall rules clicked");
  const handleAddFirewallRule = () => alert("Add firewall rule clicked");

  const columns = [
    { key: 'name', label: 'Name' },
    { 
      key: 'sourceAddress', 
      label: 'Source Address',
      render: (value) => (
        <span className="font-mono text-sm text-gray-700">{value || '-'}</span>
      )
    },
    { 
      key: 'protocol', 
      label: 'Protocol',
      render: (value) => (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
          {value || '-'}
        </span>
      )
    },
    { 
      key: 'remoteAddress', 
      label: 'Remote Address',
      render: (value) => (
        <span className="font-mono text-sm text-gray-700">{value || '-'}</span>
      )
    },
    { 
      key: 'remotePort', 
      label: 'Remote Port',
      render: (value) => (
        <span className="font-mono text-sm text-gray-700">{value || '-'}</span>
      )
    },
    { 
      key: 'bytes', 
      label: 'Bytes',
      render: (value) => (
        <span className="text-sm text-gray-600">{value || '0'}</span>
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
          {value || 'Inactive'}
        </span>
      )
    }
  ];

  // Empty data array to match the "No data available in table" state
  const sampleData = [];

  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import Firewall Rules"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddFirewallRule}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        title="Add Firewall Rule"
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
        title="Firewall"
        data={sampleData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search firewall rules..."
      />
    </div>
  );
};

export default Firewall;