import React, { useState } from "react";

const BulkUserConfiguration = () => {
const [selectedFields, setSelectedFields] = useState([]);
 
const options = [
    "Customer Name",
    "Company Name",
    "Contact Number",
    "Email",
    "TAX/GST Number",
    "Gender",
    "Date of Birth",
    "Alt Contact No.",
    "Nationality",
    "Billing Address Line 1",
    "Billing Address Line 2",
    "Billing City",
    "Billing Zip Code",
    "Installation Address Line 1",
    "Installation Address Line 2",
    "Installation City",
    "Installation Zip Code",
    "Identity Proof and Number",
    "Address Proof and Number",
]
const handleChange = (e) => {
    const { value, checked } = e.target;
    if (value === "selectAll") {
      if (checked) {
        setSelectedFields([...options]);
      } else {
        setSelectedFields([]);
      }
    } else {
      if (checked) {
        setSelectedFields([...selectedFields, value]);
      } else {
        setSelectedFields(selectedFields.filter((item) => item !== value));
      }
      }
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Fields:", selectedFields);
  };

  const handleCancel = () => {
    setSelectedFields([]);
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
      <div className="border border-gray-300 rounded-md px-3 py-2 mb-6 text-gray-700">
        <label className="font-semibold mb-2 block">Select User Info:</label>
        <div className="flex flex-col max-h-64 overflow-y-auto">
          {/* Select All */}
          <label className="flex items-center gap-2 mb-1">
            <input
              type="checkbox"
              value="selectAll"
              checked={selectedFields.length === options.length}
              onChange={handleChange}
            />
            Select All
          </label>

          {/* Options */}
          {options.map((option) => (
            <label key={option} className="flex items-center gap-2 mb-1">
              <input
                type="checkbox"
                value={option}
                checked={selectedFields.includes(option)}
                onChange={handleChange}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

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
