// src/pages/new-plan.jsx
import React, { useState } from "react";

const NewPlan = ({ onCancel }) => {
  const initialFormData = {
    planName: "",
    zone: "",
    ipPool: "",
    customerCost: "",
    zoneCost: "",
    addressList: "",
    planGroup: "",
    timePeriod: "1",
    ott: "",
    simultaneousUse: "",
    showOnline: false,
    showHotspot: false,
    attributes: [{ attribute: "", value: "" }],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPlanFields, setShowPlanFields] = useState(true);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAttributeChange = (index, field, value) => {
    const updated = [...formData.attributes];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, attributes: updated }));
  };

  const handleAddAttribute = () => {
    setFormData((prev) => ({
      ...prev,
      attributes: [...prev.attributes, { attribute: "", value: "" }],
    }));
  };

  const handleRemoveAttribute = (index) => {
    const updated = [...formData.attributes];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, attributes: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Plan Data:", formData);
  };

  // Delete only the form fields + extra attributes
  const handleDeletePlanFields = () => {
    setFormData(initialFormData);
    setShowPlanFields(false);
  };

  // Restore fields when Add Plan is clicked
  const handleAddPlan = () => {
    setShowPlanFields(true);
  };

  return (
    <div className="w-full h-screen bg-white p-6 pt-0">
       <h2 className="text-xl font-semibold mb-6">New Plan</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Base Plan always visible */}
        <div>
          <label className="block mb-1 font-medium">Base Plan</label>
          <select
            value={formData.basePlan}
            onChange={(e) => handleChange("basePlan", e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Base Plan Name</option>
            <option value="512 Mbps">512 Mbps</option>
            <option value="100 Mbps">100 Mbps</option>
          </select>
        </div>

        {/* New/Edit Plan Heading with Delete button */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">New/Edit Plan</h3>
          <button
            type="button"
            onClick={handleDeletePlanFields}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
          >
            Delete
          </button>
        </div>

        {/* Conditionally render fields under heading */}
        {showPlanFields && (
          <>
            {/* New/Edit Plan Fields */}
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Plan Name"
                value={formData.planName}
                onChange={(e) => handleChange("planName", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <select
                value={formData.zone}
                onChange={(e) => handleChange("zone", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Zone</option>
                <option value="admin">Admin</option>
                <option value="bharat">Bharat</option>
              </select>
              <input
                type="text"
                placeholder="IP Pool"
                value={formData.ipPool}
                onChange={(e) => handleChange("ipPool", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />

              {/* Second Row */}
              <input
                type="text"
                placeholder="Customer Cost"
                value={formData.customerCost}
                onChange={(e) => handleChange("customerCost", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Zone Cost"
                value={formData.zoneCost}
                onChange={(e) => handleChange("zoneCost", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <select
                value={formData.addressList}
                onChange={(e) => handleChange("addressList", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Address List</option>
                <option value="list1">List 1</option>
              </select>

              {/* Third Row */}
              <select
                value={formData.planGroup}
                onChange={(e) => handleChange("planGroup", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">Plan Group</option>
                <option value="group1">Group 1</option>
              </select>
              <div className="flex border rounded">
                <input
                  type="number"
                  value={formData.timePeriod}
                  onChange={(e) => handleChange("timePeriod", e.target.value)}
                  className="w-1/2 px-2 py-2 border-r rounded-l"
                />
                <select className="w-1/2 px-2 py-2 rounded-r">
                  <option>Month</option>
                  <option>Year</option>
                </select>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.showOnline}
                    onChange={(e) =>
                      handleChange("showOnline", e.target.checked)
                    }
                  />
                  <span>Plan show in online recharge at client portal</span>
                </label>
              </div>

              {/* Fourth Row */}
              <select
                value={formData.ott}
                onChange={(e) => handleChange("ott", e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="">OTT</option>
              </select>
              <input
                type="text"
                placeholder="Simultaneous Use"
                value={formData.simultaneousUse}
                onChange={(e) =>
                  handleChange("simultaneousUse", e.target.value)
                }
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.showHotspot}
                    onChange={(e) =>
                      handleChange("showHotspot", e.target.checked)
                    }
                  />
                  <span>Show this plan in hotSpot page</span>
                </label>
              </div>
            </div>

            {/* Extra Attribute Section */}
            <div className="bg-white shadow rounded-md p-4 mb-4 mt-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Extra Attribute</h3>
                <button
                  type="button"
                  onClick={handleAddAttribute}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-lg"
                >
                  +
                </button>
              </div>

              {/* Header Row */}
              <div className="grid grid-cols-12 gap-4 font-semibold text-gray-600 border-b pb-2 mb-2">
                <div className="col-span-1"></div>
                <div className="col-span-5">Attribute</div>
                <div className="col-span-6">Value</div>
              </div>

              {/* Attribute Rows */}
              {formData.attributes.map((attr, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 items-center mb-2"
                >
                  <button
                    type="button"
                    onClick={() => handleRemoveAttribute(index)}
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-red-500 text-red-500 hover:bg-red-100"
                  >
                    🗑
                  </button>

                  <select
                    value={attr.attribute}
                    onChange={(e) =>
                      handleAttributeChange(index, "attribute", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2 col-span-5"
                  >
                    <option value="">Select MikroTik Group</option>
                    <option value="mikrotik1">Mikrotik Group 1</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Enter Value"
                    value={attr.value}
                    onChange={(e) =>
                      handleAttributeChange(index, "value", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded px-3 py-2 col-span-6"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Add Plan button always visible */}
        <button
          type="button"
          onClick={handleAddPlan}
          className="flex items-center gap-1 bg-blue-500 text-white px-2 py-0.25 rounded shadow"
        >
          <span className="text-lg">+</span> Add Plan
        </button>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-teal-500 text-white px-3 py-1.5 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="border px-3 py-1.5 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPlan;
