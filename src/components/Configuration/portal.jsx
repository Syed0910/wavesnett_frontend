import React, { useState } from "react";
import { Globe } from "lucide-react";

const Portal = () => {
  const [selectedTheme, setSelectedTheme] = useState(5); // Default to cyan theme
  const [darkMode, setDarkMode] = useState(false);
  const [minSidebar, setMinSidebar] = useState(false);
  const [autoMacBinding, setAutoMacBinding] = useState(true);
  
  const [userFields, setUserFields] = useState({
    customerName: true,
    email: true,
    contactNumber: true,
    installationAddressLine1: true,
    installationCity: false
  });

  const [passwordConfig, setPasswordConfig] = useState({
    defaultPassword: "Custom",
    customPassword: "WavesNett123",
    disablePassword: false,
    userInvoiceTaxable: true,
    userKycRequired: false,
    autoDeleteInactiveUsers: false
  });

  const [portalConfig, setPortalConfig] = useState({
    setOwnZone: true,
    clientPortalUrl: "ac.aanirids.com"
  });

  const [hotspotConfig, setHotspotConfig] = useState({
    orderBy: "",
    sortBy: ""
  });

  const [permissions, setPermissions] = useState({
    dashboard: true,
    userDetail: true,
    changePassword: true,
    sessionLog: true,
    invoiceList: true,
    receiptList: true,
    traffic: true,
    customerSupport: true,
    rechargeList: true,
    recharge: true,
    voucherRecharge: true,
    wifiSSID: false,
    wifiPassword: false
  });

  const themeColors = [
    "#ef4444", "#ec4899", "#a855f7", "#8b5cf6", 
    "#6366f1", "#3b82f6", "#06b6d4", "#10b981", 
    "#22c55e", "#84cc16", "#eab308", "#f59e0b",
    "#f97316", "#f97316", "#78716c", "#6b7280"
  ];

  const handleThemeChange = (index) => {
    setSelectedTheme(index);
  };

  const handleUserFieldChange = (field) => {
    setUserFields(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handlePasswordConfigChange = (field, value) => {
    setPasswordConfig(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePermissionChange = (permission) => {
    setPermissions(prev => ({
      ...prev,
      [permission]: !prev[permission]
    }));
  };

  const selectAllPermissions = () => {
    const allSelected = Object.values(permissions).every(val => val === true);
    const newState = {};
    Object.keys(permissions).forEach(key => {
      newState[key] = !allSelected;
    });
    setPermissions(newState);
  };

  return (
    <main className="flex-1 p-6 bg-gray-50 h-screen overflow-y-auto">
      {/* Themes Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Themes</h2>
        
        <div className="grid grid-cols-8 gap-3 mb-6">
          {themeColors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleThemeChange(index)}
              className={`w-12 h-12 rounded-lg relative ${
                selectedTheme === index ? 'ring-2 ring-gray-400' : ''
              }`}
              style={{ backgroundColor: color }}
            >
              {selectedTheme === index && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Dark Mode</span>
          </label>
          
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={minSidebar}
              onChange={(e) => setMinSidebar(e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Mini Sidebar</span>
          </label>
        </div>

        <div className="flex space-x-4">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
            SAVE
          </button>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
            DESIGN DASHBOARD
          </button>
        </div>
      </div>

      {/* Extra Config Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Extra Config</h2>
        
        <div className="mb-6">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={autoMacBinding}
              onChange={(e) => setAutoMacBinding(e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm font-medium text-gray-700">Auto MAC Binding</span>
          </label>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Select field that you want to required in new user creation</h3>
          <div className="text-xs text-gray-500 mb-3">User Info</div>
          
          <div className="flex flex-wrap gap-3 mb-4">
            {[
              { key: 'customerName', label: 'Customer Name' },
              { key: 'email', label: 'Email' },
              { key: 'contactNumber', label: 'Contact Number' },
              { key: 'installationAddressLine1', label: 'Installation Address Line 1' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleUserFieldChange(key)}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  userFields[key] 
                    ? 'bg-gray-200 text-gray-700' 
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                {label} {userFields[key] && '×'}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => handleUserFieldChange('installationCity')}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              userFields.installationCity 
                ? 'bg-gray-200 text-gray-700' 
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            Installation City {userFields.installationCity && '×'}
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">New User Terms</h3>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md h-16 text-sm"
            placeholder="Enter new user terms..."
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Default Password
            </label>
            <select
              value={passwordConfig.defaultPassword}
              onChange={(e) => handlePasswordConfigChange('defaultPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="Custom">Custom</option>
              <option value="Auto">Auto Generate</option>
              <option value="Mobile">Mobile Number</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Password
            </label>
            <input
              type="text"
              value={passwordConfig.customPassword}
              onChange={(e) => handlePasswordConfigChange('customPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {[
            { key: 'disablePassword', label: 'Disable Password' },
            { key: 'userInvoiceTaxable', label: 'User invoice will taxable' },
            { key: 'userKycRequired', label: 'User kyc required' },
            { key: 'autoDeleteInactiveUsers', label: 'Auto Delete Inactive Users' }
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={passwordConfig[key]}
                onChange={(e) => handlePasswordConfigChange(key, e.target.checked)}
                className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>

        <div className="flex space-x-4">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
            APPLY
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md font-medium">
            API TOKEN
          </button>
          <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-md font-medium">
            ALL USER RESET PASSWORD
          </button>
        </div>
      </div>

      {/* Portal Access Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Portal Access</h2>
        
        <div className="mb-4">
          <p className="text-sm text-gray-700 mb-2">Default portal urls are as below</p>
          <p className="text-sm text-gray-600">
            Client portal - <span className="text-cyan-500">https://wavesnett.phpradius.com</span>
          </p>
          <p className="text-sm text-gray-600">
            Zone Portal - <span className="text-cyan-500">https://wavesnett.phpradius.com/admin</span>
          </p>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={portalConfig.setOwnZone}
              onChange={(e) => setPortalConfig(prev => ({ ...prev, setOwnZone: e.target.checked }))}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Set your own zone and client portal url</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Client and zone portal url
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={portalConfig.clientPortalUrl}
              onChange={(e) => setPortalConfig(prev => ({ ...prev, clientPortalUrl: e.target.value }))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <Globe size={16} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Hotspot Plan Order Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Hotspot Plan Order</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Order By
            </label>
            <select
              value={hotspotConfig.orderBy}
              onChange={(e) => setHotspotConfig(prev => ({ ...prev, orderBy: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="">Select Order By</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="duration">Duration</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              value={hotspotConfig.sortBy}
              onChange={(e) => setHotspotConfig(prev => ({ ...prev, sortBy: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="">Select Sort By</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Client Portal Page Permission Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Client Portal Page Permission</h2>
          <button
            onClick={selectAllPermissions}
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-1 rounded-md font-medium text-sm"
          >
            SELECT ALL
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { key: 'dashboard', label: 'Dashboard' },
            { key: 'userDetail', label: 'User Detail' },
            { key: 'changePassword', label: 'Change Password' },
            { key: 'sessionLog', label: 'Session Log' },
            { key: 'invoiceList', label: 'Invoice list' },
            { key: 'receiptList', label: 'Receipt List' },
            { key: 'traffic', label: 'Traffic' },
            { key: 'customerSupport', label: 'Customer Support [CMS]' },
            { key: 'rechargeList', label: 'Recharge List' },
            { key: 'recharge', label: 'Recharge' },
            { key: 'voucherRecharge', label: 'Voucher Recharge' }
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={permissions[key]}
                onChange={() => handlePermissionChange(key)}
                className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>

        <div className="flex space-x-6 mb-6">
          <span className="text-sm font-medium text-gray-700">Wifi SSID</span>
          <span className="text-sm font-medium text-gray-700">Wifi Password</span>
        </div>

        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
          APPLY
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>PHP Radius © 2025</p>
        <p className="text-right">v3.72.69</p>
      </div>
    </main>
  );
};

export default Portal;