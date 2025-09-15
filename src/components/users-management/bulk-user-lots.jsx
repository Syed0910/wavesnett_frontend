import React, { useState } from 'react';
import { Plus, Upload } from 'lucide-react';
import DataTable from '../ui/datatable';

const BulkUserLots = () => {
  const [bulkLots] = useState([
    {
      lotName: 'BULK_LOT_001',
      usernameLength: 8,
      passwordLength: 12,
      planName: 'WavesNett 50mbps UL 6M',
      users: 25,
      expDate: '2026-03-01',
      createDate: '2025-08-30',
      zone: 'admin'
    },
    {
      lotName: 'BULK_LOT_002',
      usernameLength: 10,
      passwordLength: 16,
      planName: 'WavesNett 100Mbps UL 3M',
      users: 50,
      expDate: '2025-12-15',
      createDate: '2025-08-25',
      zone: 'admin'
    }
  ]);

  const [dateRange, setDateRange] = useState({
    from: '2025-07-31',
    to: '2025-08-30'
  });

  const [isMenuOpen, setMenuOpen] = useState(false);
const [showUsersTable, setShowUsersTable] = useState(false);

  const columns = [
    { 
      key: 'lotName', 
      label: 'Lot Name', 
      render: (value) => (
        <span className="text-blue-600 font-medium cursor-pointer hover:underline">{value}</span>
      )
    },
    { key: 'usernameLength', label: 'Username Length' },
    { key: 'passwordLength', label: 'Password Length' },
    { key: 'planName', label: 'Plan Name' },
    { 
      key: 'users', 
      label: 'Users', 
      render: (value) => (
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{value}</span>
      )
    },
    // Removed duplicate date columns; keep only one each
    { key: 'expDate', label: 'Exp. Date', type: 'date' },
    { key: 'createDate', label: 'Create Date', type: 'date' },
    { key: 'zone', label: 'Zone' }
  ];

  const handleEdit = (lot) => console.log('Edit lot:', lot);
  const handleDelete = (lot) => console.log('Delete lot:', lot);
  const handleView = (lot) => console.log('View lot:', lot);
  const handleDateChange = (field, value) =>
    setDateRange((prev) => ({ ...prev, [field]: value }));

  const handleImport = () => {
    console.log('Importing bulk lots...');
  };

  const handleAddBulkLot = () => {
    console.log('Adding new bulk lot...');
  };
const [isConfigModalOpen, setConfigModalOpen] = useState(false);
const [selectedFields, setSelectedFields] = useState([]);
const [isDropdownOpen, setDropdownOpen] = useState(false);

const fields = [
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
];

const toggleField = (field) => {
  if (selectedFields.includes(field)) {
    setSelectedFields(selectedFields.filter(f => f !== field));
  } else {
    setSelectedFields([...selectedFields, field]);
  }
};

const toggleAllFields = () => {
  if (selectedFields.length === fields.length) {
    setSelectedFields([]);
  } else {
    setSelectedFields([...fields]);
  }
};
const removeField = (field, e) => {
  e.stopPropagation();
  setSelectedFields(selectedFields.filter(f => f !== field));
};
const [isCreateBulkModalOpen, setCreateBulkModalOpen] = useState(false);
const [bulkUserData, setBulkUserData] = useState({
  zone: "admin",
  structure: "1",
  lot: "1",
  characterType: "Numeric",
  userCount: "",
  usernamePrefix: "",
  usernameLength: 5,
  plan: "",
  passwordRequired: true,
  expiryDate: "15/09/2025",
  registrationRequired: false
});
  return (
    <div className="p-0 pt-0 max-w-8xl mx-auto bg-white min-h-screen">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-medium mb-1 text-gray-700">Bulk User Lots</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 mr-4">
            <input
              type="date"
              value={dateRange.from}
              onChange={(e) => handleDateChange('from', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="text-gray-500">–</span>
            <input
              type="date"
              value={dateRange.to}
              onChange={(e) => handleDateChange('to', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={handleImport}
            className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <Upload className="w-4 h-4" />
            Import
          </button>
          <button
            onClick={handleAddBulkLot}
            className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            Add Bulk Lot
          </button>

          {/* Three dots menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="p-1 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
           {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10 py-1">
                <button 
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setMenuOpen(false);
                      setConfigModalOpen(true);
                    }}
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Configuration
                  </button>
                <button
  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  onClick={() => {
    setMenuOpen(false);  // Close the dropdown
    setShowUsersTable(true);  // Show the users table
  }}
>
  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
  All Users
</button>

                <button 
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setMenuOpen(false);
                      setCreateBulkModalOpen(true);
                    }}
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Create Bulk User
                  </button>
                                </div>
                  )}
          </div>
        </div>
      </div>

      {/* DataTable without title and toolbar */}
      <DataTable
        data={bulkLots}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        pageSize={15}
        headerClassName="font-semibold"
        showDateFilter={false} 
        dateRange={dateRange}
        onDateChange={handleDateChange}
      />
{isConfigModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white border border-gray-300 rounded-lg w-full max-w-xl p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">Bulk User Configuration</h2>
      <p className="text-sm text-gray-600 mb-4">Select field that you want to required while bulk user creation</p>
      
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2 text-gray-700">User info</h3>
        
        {/* Dropdown input field with tags */}
        <div className="relative mb-3">
          <div 
            className="flex flex-wrap items-center p-2 border border-gray-300 rounded cursor-pointer min-h-10 gap-2"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            {selectedFields.length === 0 ? (
              <span className="text-sm text-gray-500">Enter User Info</span>
            ) : (
              selectedFields.map((field) => (
                <div key={field} className="flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs">
                  {field}
                  <button 
                    type="button" 
                    onClick={(e) => removeField(field, e)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
            <svg 
              className={`w-4 h-4 transform transition-transform ml-auto ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded shadow-lg z-10 mt-1">
              <div className="p-2 border-b border-gray-200">
                <label className="flex items-center text-sm text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedFields.length === fields.length}
                    onChange={toggleAllFields}
                    className="h-4 w-4 text-blue-600 rounded mr-2"
                  />
                  Select All
                </label>
              </div>
              
              <div className="max-h-48 overflow-y-auto">
                {fields.map((field) => (
                  <label key={field} className="flex items-center p-2 hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedFields.includes(field)}
                      onChange={() => toggleField(field)}
                      className="h-4 w-4 text-blue-600 rounded mr-2"
                    />
                    <span className="text-sm text-gray-700">{field}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          onClick={() => setConfigModalOpen(false)}
          className="px-4 py-2 text-sm font-medium border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            console.log("Selected fields:", selectedFields);
            setConfigModalOpen(false);
          }}
          className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
)}


{isCreateBulkModalOpen && (
  <div className="fixed inset-0 flex items-start justify-center z-50 p-4 overflow-y-auto">
    <div className="bg-white rounded-lg w-full max-w-3xl my-8 p-6 border border-black">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Create Bulk User</h2>
      
      <div className="space-y-4">
        {/* Zoom Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Zoom</label>
          <div className="p-2 bg-gray-100 rounded text-sm">{bulkUserData.zoom}</div>
        </div>
        
        {/* Structure Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Simultaneous Use</label>
          <input
            type="text"
            value={bulkUserData.structure}
            onChange={(e) => setBulkUserData({...bulkUserData, structure: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        
        {/* Lot Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lot</label>
          <input
            type="text"
            value={bulkUserData.lot}
            onChange={(e) => setBulkUserData({...bulkUserData, lot: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        
        {/* Character Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Username password character</label>
          <div className="flex space-x-4">
            {["Numeric", "Alphanumeric"].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="radio"
                  name="characterType"
                  checked={bulkUserData.characterType === type}
                  onChange={() => setBulkUserData({...bulkUserData, characterType: type})}
                  className="h-4 w-4 text-blue-600 mr-2"
                />
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Number of Users */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">No. of Users</label>
          <input
            type="number"
            value={bulkUserData.userCount}
            onChange={(e) => setBulkUserData({...bulkUserData, userCount: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            min="1"
          />
        </div>
        
        {/* Username Prefix */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username Prefix</label>
          <input
            type="text"
            value={bulkUserData.usernamePrefix}
            onChange={(e) => setBulkUserData({...bulkUserData, usernamePrefix: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded text-sm"
          />
        </div>
        
        {/* Username Length */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Username Length</label>
          <input
            type="number"
            value={bulkUserData.usernameLength}
            onChange={(e) => setBulkUserData({...bulkUserData, usernameLength: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            min="1"
          />
        </div>
        
        {/* Select Plan - Using a custom dropdown implementation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Plan</label>
          <div className="relative">
            <select
              value={bulkUserData.plan}
              onChange={(e) => setBulkUserData({...bulkUserData, plan: e.target.value})}
              className="w-full p-2 border border-gray-300 rounded text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select Plan</option>
              <option value="wavesnett_50mbps_ul_3m">WavesNett 50mbps UL 3M</option>
              <option value="wavesnett_100mbps_ul_3m">WavesNett 100Mbps UL 3M</option>
              <option value="wavesnett_200mbps_ul_3m">WavesNett 200Mbps UL 3M</option>
              <option value="wavesnett_300mbps_ul_3m">WavesNett 300Mbps UL 3M</option>
              <option value="wavesnett_50mbps_ul_6m">WavesNett 50mbps UL 6M</option>
              <option value="wavesnett_100mbps_ul_6m">WavesNett 100Mbps UL 6M</option>
              <option value="wavesnett_50mbps_ul_12m">WavesNett 50Mbps UL 12M</option>
              <option value="wavesnett_100mbps_ul_12m">WavesNett 100mbps UL 12M</option>
              <option value="wavesnett_200mbps_ul_12m">WavesNett 200mbps UL 12M</option>
              <option value="wavesnett_300mbps_ul_12m">WavesNett 300mbps UL 12M</option>
              <option value="wavesnett_50mbps_ul_1m">WavesNett 50mbps UL 1M</option>
              <option value="leased_line_512mbps">512 Mbps Leased Line</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 pt-5">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Password Required */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={bulkUserData.passwordRequired}
              onChange={(e) => setBulkUserData({...bulkUserData, passwordRequired: e.target.checked})}
              className="h-4 w-4 text-blue-600 mr-2"
            />
            <span className="text-sm text-gray-700">Password Required</span>
          </label>
        </div>
        
        {/* Bulk User Expiry Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bulk User Expiry Date</label>
          <input
            type="text"
            value={bulkUserData.expiryDate}
            onChange={(e) => setBulkUserData({...bulkUserData, expiryDate: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded text-sm"
            placeholder="DD/MM/YYYY"
          />
        </div>
        
        {/* User registration not required */}
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={!bulkUserData.registrationRequired}
              onChange={(e) => setBulkUserData({...bulkUserData, registrationRequired: !e.target.checked})}
              className="h-4 w-4 text-blue-600 mr-2"
            />
            <span className="text-sm text-gray-700">User registration not required</span>
          </label>
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
        <button
          onClick={() => setCreateBulkModalOpen(false)}
          className="px-4 py-2 text-sm font-medium border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            console.log("Bulk user data:", bulkUserData);
            setCreateBulkModalOpen(false);
          }}
          className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
)}</div>
  );
};

export default BulkUserLots;
