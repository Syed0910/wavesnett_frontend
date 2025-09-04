import React, { useState } from "react";
import { LogOut } from "lucide-react";
import DataTable from "../../components/ui/datatable";

const OnlineUsers = () => {
  const [users,setUsers] = useState([
    {
      user: "abdul",
      ip: "10.10.20.185",
      uptime: "19m40s",
      rxspeed: "8.17K",
      txspeed: "2.17K",
      rxbytes: "366.04K",
      txbytes: "1.29M",
    },
    {
      user: "abdulkareem",
      ip: "10.10.20.184",
      uptime: "18m36s",
      rxspeed: "814.92B",
      txspeed: "91.82B",
      rxbytes: "7.25M",
      txbytes: "1.51M",
    },
    {
      user: "abdulkareemis",
      ip: "10.10.20.207",
      uptime: "23m15s",
      rxspeed: "9.54K",
      txspeed: "75.81K",
      rxbytes: "263.07M",
      txbytes: "12.05M",
    },
    {
      user: "abdurrahman",
      ip: "10.10.20.226",
      uptime: "1h21m14s",
      rxspeed: "0B",
      txspeed: "0B",
      rxbytes: "18.36M",
      txbytes: "6.42M",
    },
    {
      user: "Adnankhan",
      ip: "10.10.20.180",
      uptime: "18m35s",
      rxspeed: "227.83K",
      txspeed: "10.81M",
      rxbytes: "60.53M",
      txbytes: "3.33M",
    },
    {
      user: "afaaq",
      ip: "10.10.20.173",
      uptime: "15h53m32s",
      rxspeed: "404.02B",
      txspeed: "257.1B",
      rxbytes: "5.38G",
      txbytes: "636.92M",
    },
    {
      user: "ahmed0",
      ip: "10.10.20.248",
      uptime: "2d5h56m25s",
      rxspeed: "1.48K",
      txspeed: "899.86B",
      rxbytes: "32.1G",
      txbytes: "1.49G",
    },
    {
      user: "ahmed68",
      ip: "10.10.20.224",
      uptime: "2d5h56m25s",
      rxspeed: "0B",
      txspeed: "0B",
      rxbytes: "5.89G",
      txbytes: "316.27M",
    },
    {
      user: "ahmedpasha",
      ip: "10.10.20.179",
      uptime: "23m14s",
      rxspeed: "0B",
      txspeed: "0B",
      rxbytes: "693.23M",
      txbytes: "2.37G",
    },
    {
      user: "ali",
      ip: "10.10.20.214",
      uptime: "2d5h56m58s",
      rxspeed: "0B",
      txspeed: "0B",
      rxbytes: "55.05G",
      txbytes: "2.27G",
    },
    {
      user: "alikhar",
      ip: "10.10.20.253",
      uptime: "2d5h56m7s",
      rxspeed: "1.02M",
      txspeed: "33.65M",
      rxbytes: "11.7G",
      txbytes: "1.3G",
    },
    {
      user: "aqeela",
      ip: "10.10.20.252",
      uptime: "2d5h56m25s",
      rxspeed: "323.67B",
      txspeed: "413.2B",
      rxbytes: "37.9G",
      txbytes: "26.32G",
    },
    {
      user: "aqhil",
      ip: "10.10.20.243",
      uptime: "23m8s",
      rxspeed: "0B",
      txspeed: "0B",
      rxbytes: "1.75G",
      txbytes: "508.46M",
    },
    {
      user: "ashtiyabegum",
      ip: "10.10.20.228",
      uptime: "2d5h56m56s",
      rxspeed: "13.12K",
      txspeed: "1.57K",
      rxbytes: "23.83G",
      txbytes: "1.31G",
    },
    {
      user: "atharkhan",
      ip: "10.10.20.211",
      uptime: "2d5h56m39s",
      rxspeed: "211.19B",
      txspeed: "96.41B",
      rxbytes: "5.68G",
      txbytes: "327.38M",
    },
    {
      user: "azgar",
      ip: "10.10.20.199",
      uptime: "52m14s",
      rxspeed: "0B",
      txspeed: "0B",
      rxbytes: "465.39M",
      txbytes: "21.97M",
    },
  ]);

  const handleViewProfile = (user) => {
    alert(`Opening profile of ${user.user}`);
  };

  // ✅ Logout particular user
  const handleLogoutUser = async (username) => {
    try {
      // 1. Call API to force logout this user
      await fetch(`/api/logout/${username}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // 2. Remove that user from local state (so they disappear from table)
      setUsers((prevUsers) => prevUsers.filter((u) => u.user !== username));

      alert(`${username} has been logged out successfully.`);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const columns = [
    {
      key: "user",
      label: "User",
      render: (value, row) => (
        <span
          className="text-blue-600 font-medium cursor-pointer hover:underline"
          onClick={() => handleViewProfile(row)}
        >
          {value}
        </span>
      ),
    },
    { key: "ip", label: "IP" },
    { key: "uptime", label: "Uptime" },
    { key: "rxspeed", label: "RX Speed" },
    { key: "txspeed", label: "TX Speed" },
    { key: "rxbytes", label: "RX Bytes" },
    { key: "txbytes", label: "TX Bytes" },
    {
      key: "logout",
      label: "Logout",
      render: (_, row) => (
        <button
          onClick={() => handleLogoutUser(row.user)}
          className="p-2 rounded-full hover:bg-red-100 text-red-600 transition"
        >
          <LogOut className="w-4 h-4" />
        </button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <DataTable
        title="Online Users"
        data={users}
        columns={columns}
        pageSize={10}
        searchable={true}
        showRowActions={false}
        showNasDropdown={true}
      />
    </div>
  );
};

export default OnlineUsers;