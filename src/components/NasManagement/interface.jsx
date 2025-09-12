// src/components/interface/Interface.jsx
import { Plus, Upload, Activity } from 'lucide-react';
import DataTable from '../ui/datatable';
import { useNavigate } from "react-router-dom";

const Interface = () => {
  const navigate = useNavigate();

  const handleEdit = (interfaceItem) => alert(`Edit interface: ${interfaceItem.name}`);
  const handleDelete = (interfaceItem) =>
    window.confirm(`Delete ${interfaceItem.name}?`) && alert(`Deleted ${interfaceItem.name}`);
  const handleView = (interfaceItem) => navigate(`/interface/details/${interfaceItem.id}`);
  const handleImport = () => alert("Import interfaces clicked");
  const handleAddInterface = () => alert("Add interface clicked");

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
      key: 'macAddress', 
      label: 'Mac-Address',
      render: (value) => (
        <span className="font-mono text-sm text-gray-700">{value}</span>
      )
    },
    { key: 'txbytes', label: 'TX Bytes' },
    { key: 'rxbytes', label: 'RX Bytes' },
    { key: 'txspeed', label: 'TX Speed', render: (value) => (
      <span className="text-sm text-green-600 font-medium">{value}</span>
    )},
    { key: 'rxspeed', label: 'RX Speed', render: (value) => (
      <span className="text-sm text-blue-600 font-medium">{value}</span>
    )},
    { key: 'type', label: 'Type', render: (value) => (
      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
        {value}
      </span>
    )},
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
    {
      id: 1,
      name: 'ether1',
      macAddress: '68:05:CA:86:B1:71',
      txbytes: '9.17TB',
      rxbytes: '745.08GB',
      txspeed: '113.11Mbps',
      rxspeed: '5.69Mbps',
      type: 'ether',
      status: true
    },
    {
      id: 2,
      name: 'ether2',
      macAddress: '00:0C:29:6C:D2:27',
      txbytes: '13.62MB',
      rxbytes: '120Bytes',
      txspeed: '0Bps',
      rxspeed: '0Bps',
      type: 'ether',
      status: true
    },
    {
      id: 3,
      name: 'ether3',
      macAddress: '00:0C:29:6C:D2:31',
      txbytes: '342.88GB',
      rxbytes: '59.83GB',
      txspeed: '1.69Mbps',
      rxspeed: '164.66Kbps',
      type: 'ether',
      status: true
    },
    {
      id: 4,
      name: 'ether4',
      macAddress: '00:0C:29:6C:D2:59',
      txbytes: '0Bps',
      rxbytes: '0Bps',
      txspeed: '0Bps',
      rxspeed: '0Bps',
      type: 'ether',
      status: false
    },
    {
      id: 5,
      name: 'ether5',
      macAddress: '00:0C:29:6C:D2:3B',
      txbytes: '12.15GB',
      rxbytes: '12.12GB',
      txspeed: '0Bps',
      rxspeed: '0Bps',
      type: 'ether',
      status: false
    }
  ];

  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        title="Import Interfaces"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddInterface}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        title="Add Interface"
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
        title="Interface"
        data={sampleData}   // ✅ Only static data
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
        searchPlaceholder="Search interfaces..."
      />
    </div>
  );
};

export default Interface;
