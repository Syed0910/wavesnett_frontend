// src/components/ip-address/IpAddress.jsx
import { Plus, Upload, Activity } from 'lucide-react';
import DataTable from '../ui/datatable';
import { useNavigate } from "react-router-dom";

const IpAddress = () => {
  const navigate = useNavigate();

  const handleEdit = (item) => alert(`Edit IP Address: ${item.address}`);
  const handleDelete = (item) =>
    window.confirm(`Delete ${item.address}?`) && alert(`Deleted ${item.address}`);
  const handleView = (item) => navigate(`/ip-address/details/${item.id}`);
  const handleImport = () => alert("Import IP addresses clicked");
  const handleAddIpAddress = () => alert("Add IP address clicked");

  const columns = [
    { key: 'name', label: 'Name' },
    { 
      key: 'address', 
      label: 'Address',
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
      key: 'network', 
      label: 'Network',
      render: (value) => (
        <span className="font-mono text-sm text-gray-700">{value}</span>
      )
    },
    { 
      key: 'interface', 
      label: 'Interface',
      render: (value) => (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {value}
        </span>
      )
    }
  ];

  const sampleData = [
    {
      id: 1,
      name: '',
      address: '10.10.10.1/24',
      network: '10.10.10.0',
      interface: 'ether7'
    },
    {
      id: 2,
      name: '',
      address: '103.53.31.206/30',
      network: '103.53.31.204',
      interface: 'ether9'
    },
    {
      id: 3,
      name: '',
      address: '192.168.1.90/24',
      network: '192.168.1.0',
      interface: 'ether5'
    },
    {
      id: 4,
      name: '',
      address: '10.10.1.1/24',
      network: '10.10.1.0',
      interface: 'ether3'
    },
    {
      id: 5,
      name: '',
      address: '192.168.29.90/24',
      network: '192.168.29.0',
      interface: 'ether4'
    },
    {
      id: 6,
      name: '',
      address: '10.10.50.1/24',
      network: '10.10.50.0',
      interface: 'vlan10'
    },
    {
      id: 7,
      name: '',
      address: '10.10.20.1/24',
      network: '10.10.20.0',
      interface: 'vlan45'
    }
  ];

  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import IP Addresses"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddIpAddress}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        title="Add IP Address"
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
        title="IP Address"
        data={sampleData}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search IP addresses..."
      />
    </div>
  );
};

export default IpAddress;