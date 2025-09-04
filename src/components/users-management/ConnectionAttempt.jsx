// src/components/users-management/ConnectionAttempt.jsx
import React, { useState } from "react";
import { Trash2, Eye, Edit, Plus, Search, Filter, Download, Upload, MoreVertical } from "lucide-react";
import DataTable from "../ui/datatable";
import Button, { DangerButton, PrimaryButton } from "../ui/button";

const ConnectionAttempt = ({ username }) => {
  // Sample data matching the interface in the image
  const [connectionData, setConnectionData] = useState([
    {
      id: 1,
      startTime: "04/09/2025 07:29:56",
      macAddress: "2C:C4:4F:54:5E:31",
      nasIp: "10.10.1.1",
      status: "Access-Accept",
      password: "WavesNet123",
      message: ""
    },
    {
      id: 2,
      startTime: "03/09/2025 22:56:10",
      macAddress: "2C:C4:4F:54:5E:31",
      nasIp: "10.10.1.1",
      status: "Access-Accept",
      password: "WavesNet123",
      message: ""
    },
    {
      id: 3,
      startTime: "03/09/2025 20:59:07",
      macAddress: "2C:C4:4F:54:5E:31",
      nasIp: "10.10.1.1",
      status: "Access-Accept",
      password: "WavesNet123",
      message: ""
    },
    {
      id: 4,
      startTime: "03/09/2025 14:29:58",
      macAddress: "2C:C4:4F:54:5E:31",
      nasIp: "10.10.1.1",
      status: "Access-Accept",
      password: "WavesNet123",
      message: ""
    },
    {
      id: 5,
      startTime: "03/09/2025 13:41:30",
      macAddress: "2C:C4:4F:54:5E:31",
      nasIp: "10.10.1.1",
      status: "Access-Accept",
      password: "WavesNet123",
      message: ""
    }
  ]);

  const [activeTab, setActiveTab] = useState('CONNECTION ATTEMPT');

  // Define table columns matching the image interface
  const columns = [
    {
      key: 'startTime',
      label: 'Start Time',
      render: (value) => (
        <div className="text-sm text-gray-700">{value}</div>
      )
    },
    {
      key: 'macAddress',
      label: 'Mac-Address',
      render: (value) => (
        <div className="text-sm text-gray-700 font-mono">{value}</div>
      )
    },
    {
      key: 'nasIp',
      label: 'Nas IP',
      render: (value) => (
        <div className="text-sm text-gray-700">{value}</div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <div className="text-sm text-gray-700">{value}</div>
      )
    },
    {
      key: 'password',
      label: 'Password',
      render: (value) => (
        <div className="text-sm text-gray-700">{value}</div>
      )
    },
    {
      key: 'message',
      label: 'Message',
      render: (value) => (
        <div className="text-sm text-gray-700">{value || ''}</div>
      )
    }
  ];

  // Handle actions
  const handleView = (row) => {
    console.log('View connection attempt:', row);
  };

  const handleEdit = (row) => {
    console.log('Edit connection attempt:', row);
  };

  const handleDelete = (row) => {
    console.log('Delete connection attempt:', row);
    if (window.confirm('Are you sure you want to delete this connection attempt log?')) {
      setConnectionData(prev => prev.filter(item => item.id !== row.id));
    }
  };

  const handleBulkDelete = () => {
    console.log('Bulk delete');
    if (window.confirm('Are you sure you want to delete selected connection attempts?')) {
      // Handle bulk delete logic here
    }
  };

  const tabs = [
    'ACCOUNT INFO',
    'USER INFO', 
    'POLICY',
    'ONU',
    'RECHARGES',
    'CONNECTION ATTEMPT'
  ];

  return (
    <div className="max-w-8xl mx-auto bg-white p-6 min-h-screen">
      {/* Header */}
      
        
          <div className="flex justify-between items-center py-4">
            <h2 className="text-2xl font-semibold">Connection Attempt</h2>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleBulkDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
              >
                <Trash2 size={16} />
                Delete
              </button>
              
            </div>
          </div>
          

        {/* Data Table */}
        
          <DataTable
            title=""
            data={connectionData}
            columns={columns}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            showSelection={false}
            searchable={false}
            pageSize={10}
            showActions={false}
          />
          
          {/* Footer with entry count */}
          <div className="px-4 py-3 border-t border-gray-200 text-sm text-gray-500">
            Showing 1 to 5 of 5 entries
          </div>
        
      
    </div>
  );
};

export default ConnectionAttempt;