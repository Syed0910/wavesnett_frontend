import React, { useState } from "react";

const BulkUserConfiguration = () => {
  const [selectedField, setSelectedField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Field:", selectedField);
  };

  const handleCancel = () => {
    setSelectedField("");
  };

  return (
    <div className="max-w-3xl p-6">
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Bulk User Configuration
      </h2>
      <p className="text-gray-600 mb-4">
        Select field that you want to required while bulk user creation
      </p>

      {/* Dropdown */}
      <form onSubmit={handleSubmit}>
        <select
          value={selectedField}
          onChange={(e) => setSelectedField(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="">User Info</option>
          <option value="username">Username</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="plan">Plan</option>
        </select>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-5 py-2 bg-cyan-500 text-white rounded shadow hover:bg-cyan-600 transition-all duration-200"
          >
            SUBMIT
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="px-5 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition-all duration-200"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default BulkUserConfiguration;
