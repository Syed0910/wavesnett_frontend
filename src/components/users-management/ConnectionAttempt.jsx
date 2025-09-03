// src/components/users-management/ConnectionAttempt.jsx
import React from "react";
import { Trash2 } from "lucide-react";

const ConnectionAttempt = ({ username }) => {
  return (
    <div className="bg-white p-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Connection Attempt</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Trash2 size={18} /> Delete
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Start Time</th>
              <th className="text-left py-2">Mac-Address</th>
              <th className="text-left py-2">Nas IP</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Password</th>
              <th className="text-left py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="py-4 text-center text-gray-500">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>

        {/* Footer */}
        <div className="mt-4 text-sm text-gray-600">
          Showing 0 to 0 of 0 entries
        </div>
      </div>
    </div>
  );
};

export default ConnectionAttempt;
