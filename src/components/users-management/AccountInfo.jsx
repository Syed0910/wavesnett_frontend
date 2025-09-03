import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { MoreVertical, Trash2, LogOut, RefreshCcw } from "lucide-react";

const chartData = [
  { time: ":30", rx: 10, tx: 8 },
  { time: ":45", rx: 2, tx: 1 },
  { time: "10:59", rx: 0, tx: 0 },
  { time: ":15", rx: 3, tx: 2 },
  { time: ":30", rx: 5, tx: 4 },
  { time: ":45", rx: 7, tx: 6 },
  { time: "11:00", rx: 1, tx: 0 },
];

export default function AccountInfo() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Account Info</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Trash2 size={18} /> Delete
        </button>
      </div>

      {/* Tabs */}
    

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {/* User Card */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white text-lg font-bold">
              S
            </div>
            <div>
              <p className="font-semibold">samiuddin</p>
              <p className="text-sm text-gray-500">WavesNett 50mbps UL 6M</p>
            </div>
            <span className="ml-auto text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
              online
            </span>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Used 21 Hour</span>
              <span>6 Month/6 Month</span>
            </div>
            <div className="h-2 bg-gray-200 rounded mt-1">
              <div className="h-2 bg-sky-500 rounded w-2/3"></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Expiry Date: <span className="text-gray-800">02/03/2026 13:03:17</span>
            </p>
          </div>

          <div className="mt-4 text-sm text-gray-600">
  <div className="grid grid-cols-2 gap-y-1">
    <p>User Type</p>
    <p className="text-gray-800">User</p>

    <p>Created At</p>
    <p className="text-gray-800">02/09/2025</p>

    <p>Zone</p>
    <p className="text-gray-800">admin</p>

    <p>Fup</p>
    <p className="text-gray-800">3.22TB</p>

    <p>Used</p>
    <p className="text-gray-800">21.05GB</p>

    <p>DL/UL</p>
    <p className="text-gray-800">18.21GB / 2.84GB</p>

    <p>Remaining</p>
    <p className="text-gray-800">3.2TB</p>

    <p>Next Plan</p>
    <p className="text-gray-800">WavesNett 50mbps UL 6M</p>
  </div>
</div>

          <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-gray-800 text-white py-2 rounded-lg">Recharge</button>
            <button className="flex-1 bg-sky-500 text-white py-2 rounded-lg flex items-center justify-center gap-1">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* Chart + Connection */}
        <div className="bg-white rounded-2xl shadow p-5">
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" />
              <Tooltip />
              <Line type="monotone" dataKey="rx" stroke="#2563eb" strokeWidth={2} />
              <Line type="monotone" dataKey="tx" stroke="#f97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-4 text-sm text-gray-600">
  <div className="grid grid-cols-2 gap-y-1">
    <p>Last Conn</p>
    <p className="text-gray-800">03/09/2025 06:31:15</p>

    <p>Uptime</p>
    <p className="text-gray-800">4H 21m 1s</p>

    <p>Server IP</p>
    <p className="text-gray-800">10.10.1.1</p>

    <p>Server Name</p>
    <p className="text-gray-800">10.10.20.165</p>

    <p>MAC</p>
    <p className="text-gray-800">2C:C4:4F:54:5F:E1</p>

    <p>Download</p>
    <p className="text-gray-800">1.59GB</p>

    <p>Upload</p>
    <p className="text-gray-800">103.27MB</p>
  </div>
</div>
        </div>

        {/* Balance + Actions */}
        <div className="bg-white rounded-2xl shadow p-5">
          <p className="text-lg font-semibold">₹387.00</p>
          <p className="text-gray-500 text-sm">Balance</p>

          <div className="flex justify-between mt-3 text-sm">
            <div>
              <p className="font-semibold">₹2537.00</p>
              <p className="text-gray-500">Invoice</p>
            </div>
            <div>
              <p className="font-semibold">₹2150.00</p>
              <p className="text-gray-500">Receipt</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <button className="bg-red-400 text-white py-2 rounded-lg">Show Invoice</button>
            <button className="bg-gray-600 text-white py-2 rounded-lg">Show Receipt</button>
            <button className="bg-emerald-600 text-white py-2 rounded-lg">Reset Password</button>
            <button className="bg-gray-300 text-gray-600 py-2 rounded-lg">Enable</button>
          </div>

          <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg">Suspend</button>
        </div>
      </div>
    </div>
  );
}