import React, { useState } from "react";

const NewTopupPlan = () => {
  const [formData, setFormData] = useState({
    basePlanName: "",
    zone: "",
    planName: "",
    customerCost: "",
    zoneCost: "",
    planGroup: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const handleCancel = () => {
    setFormData({
      basePlanName: "",
      zone: "",
      planName: "",
      customerCost: "",
      zoneCost: "",
      planGroup: "",
    });
  };

  return (
    <div className="w-full h-screen bg-white p-0 pt-0">
      <h2 className="text-xl font-semibold mb-4">New Topup Plan</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Base Plan Name */}
        <select
          value={formData.basePlanName}
          onChange={(e) => handleChange("basePlanName", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Base Plan Name</option>
          
        </select>

        {/* Zone */}
        <select
          value={formData.zone}
          onChange={(e) => handleChange("zone", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Zone</option>
          <option value="Admin">Admin</option>
          
        </select>

        {/* Plan Name */}
        <input
          type="text"
          placeholder="Plan Name"
          value={formData.planName}
          onChange={(e) => handleChange("planName", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Customer Cost */}
        <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Customer Cost"
          value={formData.customerCost}
          onChange={(e) => handleChange("customerCost", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Zone Cost */}
        <input
          type="text"
          placeholder="Zone Cost"
          value={formData.zoneCost}
          onChange={(e) => handleChange("zoneCost", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
</div>
        {/* Plan Group */}
        <select
          value={formData.planGroup}
          onChange={(e) => handleChange("planGroup", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Plan Group</option>
          
        </select>
      </form>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
        >
          SUBMIT
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default NewTopupPlan;
