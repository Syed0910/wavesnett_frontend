import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import DataTable from "../../components/ui/datatable";

const DHCPLease = () => {
  const [leases] = useState([
    {
      hostname: "TraceSetup",
      address: "10.10.1.14",
      mac: "E8:FF:1E:D0:57:AA",
      expiresAfter: "7d11h30m23s",
      lastSeen: "@pcp",
      server: "Aas-Technologies-01"
    },
    {
      hostname: "erptf",
      address: "10.10.1.99",
      mac: "4C:75:6E:B2:BF:D3",
      expiresAfter: "20d10h02m73s",
      lastSeen: "@pcp",
      server: "Aas-Technologies-01"
    },
    {
      hostname: "wavesnet",
      address: "10.10.1.90",
      mac: "00:0C:29:4E:55:69",
      expiresAfter: "21h19m45s38s",
      lastSeen: "@pcp",
      server: "Aas-Technologies-01"
    },
    {
      hostname: "wavesnet",
      address: "10.10.1.100",
      mac: "00:0C:24:F9:32:FA",
      expiresAfter: "21h19m45s38s",
      lastSeen: "@pcp",
      server: "Aas-Technologies-01"
    },
    {
      hostname: "DESKTOP-SEV1FFH",
      address: "10.10.1.132",
      mac: "38:A2:8C:E8:6C:07",
      expiresAfter: "16m03s",
      lastSeen: "14m03s",
      server: "@pcp"
    },
    {
      hostname: "realme-8i",
      address: "10.10.1.186",
      mac: "96:BA:22:AB:B0:8A",
      expiresAfter: "16m03s",
      lastSeen: "14m03s",
      server: "@pcp"
    },
    {
      hostname: "LAPTOP-ASOPPWV",
      address: "10.10.1.145",
      mac: "74:3A:F4:12:E5:9F",
      expiresAfter: "16m03s",
      lastSeen: "14m03s",
      server: "@pcp"
    },
    {
      hostname: "OPPO-F15",
      address: "10.10.1.184",
      mac: "80:88:C3:AA:16:70",
      expiresAfter: "16m03s",
      lastSeen: "14m03s",
      server: "@pcp"
    },
    {
      hostname: "localhost",
      address: "10.10.1.91",
      mac: "00:0C:29:69:09:A7",
      expiresAfter: "17m03s",
      lastSeen: "12m23s",
      server: "@pcp"
    },
    {
      hostname: "wavesnet",
      address: "10.10.1.3",
      mac: "00:0C:29:23:65:85",
      expiresAfter: "16m03s",
      lastSeen: "11m23s",
      server: "@pcp"
    },
    {
      hostname: "realme-3",
      address: "10.10.1.139",
      mac: "BA:32:0E:53:45:FE",
      expiresAfter: "16m03s",
      lastSeen: "10m11s",
      server: "@pcp"
    },
    {
      hostname: "OnePlus-Nord2-5G",
      address: "10.10.1.153",
      mac: "22:AA:93:E7:5A:1F",
      expiresAfter: "19m05s",
      lastSeen: "10m13s",
      server: "@pcp"
    },
    {
      hostname: "Nothing-Phone-2",
      address: "10.10.1.154",
      mac: "0E:73:BA:33:F9:F2",
      expiresAfter: "20m17s",
      lastSeen: "9m43s",
      server: "@pcp"
    },
    {
      hostname: "switchesc709",
      address: "10.10.1.125",
      mac: "00:5F:86:C8:CF:70",
      expiresAfter: "20m23s",
      lastSeen: "9m37s",
      server: "@pcp"
    },
    {
      hostname: "Device-15",
      address: "10.10.1.155",
      mac: "AA:BB:CC:DD:EE:FF",
      expiresAfter: "1h30m15s",
      lastSeen: "45m22s",
      server: "@pcp"
    },
    {
      hostname: "Device-16",
      address: "10.10.1.156",
      mac: "11:22:33:44:55:66",
      expiresAfter: "2d5h30m",
      lastSeen: "1h15m",
      server: "@pcp"
    },
    {
      hostname: "Device-17",
      address: "10.10.1.157",
      mac: "77:88:99:AA:BB:CC",
      expiresAfter: "12h45m",
      lastSeen: "30m12s",
      server: "@pcp"
    },
    {
      hostname: "Device-18",
      address: "10.10.1.158",
      mac: "DD:EE:FF:00:11:22",
      expiresAfter: "3d2h15m",
      lastSeen: "2h45m",
      server: "@pcp"
    },
    {
      hostname: "Device-19",
      address: "10.10.1.159",
      mac: "33:44:55:66:77:88",
      expiresAfter: "45m30s",
      lastSeen: "20m15s",
      server: "@pcp"
    },
    {
      hostname: "Device-20",
      address: "10.10.1.160",
      mac: "99:AA:BB:CC:DD:EE",
      expiresAfter: "5d12h",
      lastSeen: "4h30m",
      server: "@pcp"
    },
    {
      hostname: "Device-21",
      address: "10.10.1.161",
      mac: "FF:EE:DD:CC:BB:AA",
      expiresAfter: "18h45m",
      lastSeen: "8h15m",
      server: "@pcp"
    }
  ]);

  const handleDeleteLease = (lease) => {
    alert(`Deleting lease for ${lease.hostname} (${lease.address})`);
  };

  const columns = [
    {
      key: "hostname",
      label: "Hostname",
      render: (value) => (
        <span className="font-medium text-gray-900">
          {value}
        </span>
      ),
    },
    { 
      key: "address", 
      label: "Address",
      render: (value) => (
        <span className="text-blue-600 font-medium">
          {value}
        </span>
      ),
    },
    { 
      key: "mac", 
      label: "MAC",
      render: (value) => (
        <span className="text-gray-600 font-mono text-sm">
          {value}
        </span>
      ),
    },
    { 
      key: "expiresAfter", 
      label: "Expires After",
      render: (value) => (
        <span className="text-green-600 font-medium">
          {value}
        </span>
      ),
    },
    { 
      key: "lastSeen", 
      label: "Last Seen",
      render: (value) => (
        <span className="text-gray-600">
          {value}
        </span>
      ),
    },
    { 
      key: "server", 
      label: "Server",
      render: (value) => (
        <span className="text-purple-600">
          {value}
        </span>
      ),
    },
    {
      key: "action",
      label: "Action",
      render: (_, row) => (
        <button
          onClick={() => handleDeleteLease(row)}
          className="p-2 rounded-full hover:bg-red-100 text-red-600 transition"
          title="Delete Lease"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <DataTable
        title="DHCP Lease"
        data={leases}
        columns={columns}
        pageSize={21}
        searchable={true}
        showNasDropdown={true}
      />
    </div>
  );
};

export default DHCPLease;