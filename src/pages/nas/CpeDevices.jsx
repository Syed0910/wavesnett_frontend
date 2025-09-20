import React, { useState } from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import DataTable from "../../components/ui/datatable";

const CpeDevices = () => {
  const [devices] = useState([
    {
      interface: "ether3",
      address: "",
      macAddress: "00:5F:86:C8:C7:0A",
      identity: "",
      platform: "Cisco SG300-28 (PID:SRW2024-K9)-VSD",
      uptime: ""
    }
  ]);

  const handleViewDevice = (device) => {
    alert(`Viewing device with MAC: ${device.macAddress}`);
  };

  const handleEditDevice = (device) => {
    alert(`Editing device with MAC: ${device.macAddress}`);
  };

  const handleDeleteDevice = (device) => {
    alert(`Deleting device with MAC: ${device.macAddress}`);
  };

  const columns = [
    {
      key: "interface",
      label: "Interface",
      render: (value) => (
        <span className="font-medium text-gray-900">
          {value || "ether3"}
        </span>
      ),
    },
    { 
      key: "address", 
      label: "Address",
      render: (value) => (
        <span className="text-blue-600">
          {value || "N/A"}
        </span>
      ),
    },
    { 
      key: "macAddress", 
      label: "MAC Address",
      render: (value) => (
        <span className="text-gray-600 font-mono text-sm">
          {value}
        </span>
      ),
    },
    { 
      key: "identity", 
      label: "Identity",
      render: (value) => (
        <span className="text-gray-600">
          {value || "N/A"}
        </span>
      ),
    },
    { 
      key: "platform", 
      label: "Platform",
      render: (value) => (
        <span className="text-green-600 font-medium">
          {value}
        </span>
      ),
    },
    { 
      key: "uptime", 
      label: "Uptime",
      render: (value) => (
        <span className="text-purple-600">
          {value || "N/A"}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (_, row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleViewDevice(row)}
            className="p-1 rounded hover:bg-blue-100 text-blue-600 transition"
            title="View Device"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleEditDevice(row)}
            className="p-1 rounded hover:bg-yellow-100 text-yellow-600 transition"
            title="Edit Device"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDeleteDevice(row)}
            className="p-1 rounded hover:bg-red-100 text-red-600 transition"
            title="Delete Device"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h3 className="text-xl font-medium mb-4 text-gray-700"> CPE Devices</h3>
      <DataTable
        title="CPE Devices"
        data={devices}
        columns={columns}
        pageSize={10}
        searchable={true}
        showNasDropdown={true}
      />
    </div>
  );
};

export default CpeDevices;