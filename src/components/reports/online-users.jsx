import React, { useEffect, useState } from "react";
import { getOnlineUsers } from "../../services/api";

const OnlineUsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOnlineUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching online users:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Online Users</h2>
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">User name</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Plan Name</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Account</th>
            <th className="p-2 border">Exp. Date</th>
            <th className="p-2 border">Zone</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, i) => (
              <tr key={i} className="text-center">
                <td className="p-2 border">{user.username}</td>
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.UserInfo?.contactPerson || "-"}</td>
                <td className="p-2 border">{user.UserInfo?.phone || "-"}</td>
                <td className="p-2 border">{user.planName}</td>
                <td className="p-2 border">
                  {user.status === 1 ? (
                    <span className="text-green-600 font-medium">Active</span>
                  ) : (
                    <span className="text-red-600 font-medium">Inactive</span>
                  )}
                </td>
                <td className="p-2 border">{user.account}</td>
                <td className="p-2 border">
                  {user.expiryDate
                    ? new Date(user.expiryDate).toLocaleDateString()
                    : "-"}
                </td>
                <td className="p-2 border">{user.zoneName}</td>
                <td className="p-2 border">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-2 border text-center" colSpan="9">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OnlineUsersTable;
