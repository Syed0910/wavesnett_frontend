// src/components/users-management/Onu.jsx
import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const Onu = ({ username }) => {
  const [selectedOnu, setSelectedOnu] = useState("");
  const onuList = []; // Empty for now

  return (
    <div className="p-6">
      {/* Header with Delete Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">ONU</h2>
        <button className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow">
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </div>

      {/* Tabs */}
    

      {/* ONU Dropdown */}
      <div className="w-[700px]">
        <label className="block text-gray-700 font-medium mb-2">Onu List</label>
        <select
          value={selectedOnu}
          onChange={(e) => setSelectedOnu(e.target.value)}
          className="w-full border border-gray-400 rounded-md px-3 py-2
                     focus:outline-none focus:ring-1 focus:ring-[#00bcd4]
                     focus:border-[#00bcd4] transition"
        >
          <option value="" disabled>
            Select Onu List
          </option>
          {onuList.length === 0 ? (
            <option value="">No data available</option>
          ) : (
            onuList.map((onu, index) => (
              <option key={index} value={onu}>
                {onu}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default Onu;
