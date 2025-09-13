// src/components/dhcp/DhcpServer.jsx
import { Plus, Upload, Activity } from 'lucide-react';
import DataTable from '../ui/datatable';
import { useNavigate } from "react-router-dom";

const DhcpServer = () => {
  const navigate = useNavigate();

  const handleEdit = (dhcpItem) => alert(`Edit DHCP Server: ${dhcpItem.name}`);
  const handleDelete = (dhcpItem) =>
    window.confirm(`Delete ${dhcpItem.name}?`) && alert(`Deleted ${dhcpItem.name}`);
  const handleView = (dhcpItem) => navigate(`/dhcp/details/${dhcpItem.id}`);
  const handleImport = () => alert("Import DHCP servers clicked");
  const handleAdd = () => alert("Add DHCP server clicked");

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'interface', label: 'Interface' },
    { key: 'leaseTime', label: 'Lease Time' },
    { key: 'addressPool', label: 'Address-Pool' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (value ? 'Active' : 'Inactive') // ✅ plain text only
    }
  ];

  // ✅ Static sample data
  const sampleData = [
    {
      id: 1,
      name: 'dhcp2',
      interface: 'ether3',
      leaseTime: '30m',
      addressPool: 'dhcp_pool2',
      status: true
    }
  ];

  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
      >
        Import
      </button>
      <button
        onClick={handleAdd}
        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add
      </button>
      <button
        onClick={() => window.location.reload()}
        className="px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
      >
        Refresh
      </button>
    </div>
  );

  return (
    <div className="h-screen p-6 bg-white">
      <DataTable
        title="DHCP Server"
        data={sampleData}   // ✅ Static table data
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search DHCP servers..."
      />
    </div>
  );
};

export default DhcpServer;
