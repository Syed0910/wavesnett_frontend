// src/components/ip/ip-pool.jsx
import { Plus, Upload, Activity } from 'lucide-react';
import DataTable from '../ui/datatable';
import { useNavigate } from "react-router-dom";

const IpPool = () => {
  const navigate = useNavigate();

  // ✅ Handlers
  const handleEdit = (pool) => alert(`Edit IP Pool: ${pool.name}`);
  const handleDelete = (pool) =>
    window.confirm(`Delete ${pool.name}?`) && alert(`Deleted ${pool.name}`);
  const handleView = (pool) => navigate(`/ip-pool/details/${pool.id}`);
  const handleImport = () => alert("Import IP Pools clicked");
  const handleAdd = () => alert("Add IP Pool clicked");

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
    { key: 'range', label: 'IP Range' }
  ];

  // ✅ Static sample data
  const sampleData = [
    { id: 1, name: 'dhcp_pool2', range: '10.10.1.100-10.10.1.254' },
    { id: 2, name: 'expired_pool', range: '1.1.1.0/24' },
    { id: 3, name: 'pool-eth5', range: '10.10.60.30-10.10.60.35' },
    {
      id: 4,
      name: 'pool2-45',
      range:
        '10.10.20.2-10.10.20.254, 10.10.21.2-10.10.21.254, 10.10.22.2-10.10.22.254, 10.10.23.2-10.10.23.254'
    },
    { id: 5, name: 'pool3-46', range: '10.10.30.2-10.10.30.254' },
    { id: 6, name: 'pool4-47', range: '10.10.40.2-10.10.40.254' },
    { id: 7, name: 'ppp1-10', range: '10.10.50.2-10.10.50.254' }
  ];

  // ✅ Toolbar actions
  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import IP Pools"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAdd}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        title="Add IP Pool"
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
        title="IP Pool"
        data={sampleData}   // ✅ Static data
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search IP Pools..."
      />
    </div>
  );
};

export default IpPool;
