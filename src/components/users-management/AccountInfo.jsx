import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Trash2, LogOut } from "lucide-react";
import axios from "axios";


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
  const { id } = useParams(); // dynamic param from route
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("User ID from params:", id);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:3000/api/userdetails/${id}`) // API should return single user by id
      .then((res) => {
        setUser(res.data);
        console.log("Fetched user details:", res.data);
      })
      .catch((err) => console.error("Error fetching user details:", err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Account Info</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Trash2 size={18} /> Delete
        </button>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {/* User Card */}
        <div className="bg-white rounded-2xl shadow p-5">
          {loading ? (
            <p>Loading user...</p>
          ) : user ? (
            <>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white text-lg font-bold">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold">{user.username}</p>
                  <p className="text-sm text-gray-500">{user.planName}</p>
                </div>
                <span className="ml-auto text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  online
                </span>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500 mt-2">
                  Expiry Date:{" "}
                  <span className="text-gray-800">
                    {user.expiryDate
                      ? new Date(user.expiryDate).toLocaleString()
                      : "N/A"}
                  </span>
                </p>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <div className="grid grid-cols-2 gap-y-1">
                  <p>User Type</p>
                  <p className="text-gray-800">{user.userType ?? "N/A"}</p>

                  <p>Created At</p>
                  <p className="text-gray-800">
                    {user.created_at
                      ? new Date(user.created_at).toLocaleDateString()
                      : "N/A"}
                  </p>

                  <p>Zone</p>
                  <p className="text-gray-800">{user.zoneName ?? "N/A"}</p>

                  <p>Fup</p>
                  <p className="text-gray-800">{user.fup ?? "N/A"}</p>

                  <p>Next Plan</p>
                  <p className="text-gray-800">
                    {user.changeplanName ?? "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-gray-800 text-white py-2 rounded-lg">
                  Recharge
                </button>
                <button className="flex-1 bg-sky-500 text-white py-2 rounded-lg flex items-center justify-center gap-1">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </>
          ) : (
            <p className="text-red-500">User not found</p>
          )}
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
        </div>

        {/* Balance + Actions */}
        <div className="bg-white rounded-2xl shadow p-5">
          <p className="text-lg font-semibold">₹387.00</p>
          <p className="text-gray-500 text-sm">Balance</p>
          <div className="grid grid-cols-2 gap-3 mt-5">
            <button className="bg-red-400 text-white py-2 rounded-lg">
              Show Invoice
            </button>
            <button className="bg-gray-600 text-white py-2 rounded-lg">
              Show Receipt
            </button>
            <button className="bg-emerald-600 text-white py-2 rounded-lg">
              Reset Password
            </button>
            <button className="bg-gray-300 text-gray-600 py-2 rounded-lg">
              Enable
            </button>
          </div>
          <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg">
            Suspend
          </button>
        </div>
      </div>
    </div>
  );
}
