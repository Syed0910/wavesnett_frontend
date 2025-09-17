import React, { useState, useEffect } from 'react';

const AutoUser = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    userInfo: 'User Info',
    selectedFields: [],
    phoneAsUserName: false,
    otpAsPassword: false,
    defaultPassword: false,
    email: false,
    sms: false,
    whatsapp: false,
    hotspotUrl: 'phpradius.net',
    userActivationByAdmin: false,
    macBinding: false,
    enableClientPortal: false,
    autoDeleteExpired: false,
    paymentOption: 'paid',
    defaultZone: 'admin',
    planGroup: 'Plan Group'
  });

  const fieldOptions = [
    'Customer Name',
    'Company Name',
    'Contact Number',
    'Email',
    'TAX/GST Number'
  ];

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSelectChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFieldSelection = (field) => {
    const updatedFields = formData.selectedFields.includes(field)
      ? formData.selectedFields.filter(f => f !== field)
      : [...formData.selectedFields, field];
    
    setFormData(prev => ({
      ...prev,
      selectedFields: updatedFields
    }));
  };

  const handleSelectAll = () => {
    const allSelected = formData.selectedFields.length === fieldOptions.length;
    setFormData(prev => ({
      ...prev,
      selectedFields: allSelected ? [] : [...fieldOptions]
    }));
  };

  const removeSelectedField = (fieldToRemove) => {
    setFormData(prev => ({
      ...prev,
      selectedFields: prev.selectedFields.filter(field => field !== fieldToRemove)
    }));
  };

  const handleApply = () => {
    console.log('Applied settings:', formData);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.user-info-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-xl font-medium text-gray-900 mb-4">Auto User Creation</h2>
        
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Disable</span>
          <button
            onClick={handleToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              isEnabled ? 'bg-cyan-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className="text-gray-600">Enable</span>
        </div>
        
        {/* Show buttons below toggle when disabled */}
        {!isEnabled && (
          <div className="flex space-x-3 mt-4">
            <button
              onClick={handleApply}
              className="px-5 py-1 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
            >
              APPLY
            </button>
            <button
              onClick={handleCancel}
              className="px-5 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
            >
              CANCEL
            </button>
          </div>
        )}
      </div>

      {/* Configuration Sections - Only show when enabled */}
      {isEnabled && (
        <>
          {/* User Information Setting */}
          <div className="mb-6">
            <div className="bg-white shadow rounded-md p-4 mb-2 mt-4">

            <h3 className="text-lg font-medium text-gray-900 mb-2">User Information Setting</h3>
            <p className="text-gray-600 mb-4">Select option which data you want to get from the user at the auto user creation time.</p>
            
            <div className="mb-6 relative user-info-dropdown">
              <div 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full p-3 border border-cyan-500 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cursor-pointer bg-white min-h-[50px] flex flex-wrap items-center gap-2"
              >
                {formData.selectedFields.length === 0 ? (
                  <span className="text-gray-500">Enter User Info</span>
                ) : (
                  <>
                    {formData.selectedFields.map((field, index) => (
                      <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm flex items-center gap-1">
                        {field}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSelectedField(field);
                          }}
                          className="text-gray-500 hover:text-gray-700 ml-1"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </>
                )}
                <svg className="w-5 h-5 text-cyan-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
              </div>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b shadow-lg z-10 max-h-64 overflow-y-auto">
                  <div className="p-2">
                    <label className="flex items-center space-x-3 p-2 hover:bg-blue-50 cursor-pointer">
                      <div className="w-4 h-4 bg-blue-600 flex items-center justify-center rounded-sm">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span 
                        onClick={handleSelectAll}
                        className="text-gray-700 font-medium"
                      >
                        Select All
                      </span>
                    </label>
                    {fieldOptions.map((field, index) => {
                      const isSelected = formData.selectedFields.includes(field);
                      return (
                        <label 
                          key={index} 
                          className={`flex items-center space-x-3 p-2 hover:bg-gray-50 cursor-pointer ${
                            isSelected ? 'bg-cyan-100' : ''
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleFieldSelection(field)}
                            className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                          />
                          <span className="text-gray-700">{field}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.phoneAsUserName}
                  onChange={() => handleCheckboxChange('phoneAsUserName')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">Phone as user name</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.otpAsPassword}
                  onChange={() => handleCheckboxChange('otpAsPassword')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">Otp as password</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.defaultPassword}
                  onChange={() => handleCheckboxChange('defaultPassword')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">Default Password</span>
              </label>
            </div>
          </div>
          </div>

          {/* Authentication Setting */}
          <div className="mb-6">
            <div className="bg-white shadow rounded-md p-4 mb-2 mt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Authentication Setting</h3>
            <p className="text-gray-600 mb-6">Select the below option to assign access rights to the user.</p>
            
            <div className="grid grid-cols-3 gap-6 mb-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.email}
                  onChange={() => handleCheckboxChange('email')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">Email</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.sms}
                  onChange={() => handleCheckboxChange('sms')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">SMS</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.whatsapp}
                  onChange={() => handleCheckboxChange('whatsapp')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">Whatsapp</span>
              </label>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Hotspot URL</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.hotspotUrl}
                  onChange={(e) => handleInputChange('hotspotUrl', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent pr-10"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M13.828 10.172a4 4 0 010 5.656l-3 
       3a4 4 0 01-5.656-5.656l1.5-1.5
       M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 
       015.656 5.656l-1.5 1.5"
  />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.userActivationByAdmin}
                  onChange={() => handleCheckboxChange('userActivationByAdmin')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">User activation by admin</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.macBinding}
                  onChange={() => handleCheckboxChange('macBinding')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">MAC binding to prevent duplicate registration</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.enableClientPortal}
                  onChange={() => handleCheckboxChange('enableClientPortal')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">Enable client portal</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.autoDeleteExpired}
                  onChange={() => handleCheckboxChange('autoDeleteExpired')}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                />
                <span className="text-gray-700">Auto-delete expired users if the same username exists while creating a new user from user registration</span>
              </label>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Put this code in your MikroTik login page for user self registration (optional)</p>
              <p className="text-sm text-red-500 mb-3">(*If you select mac bind option than you must put this code in MikroTik.)</p>
              <div className="bg-gray-100 p-1 rounded text-xs font-mono text-gray-800">
                {'<form name="login" action="https://ac.aanirids.com/index.php/api/hotspotregister" method="post"><button type="submit" name="m" value="$(mac)">register</button></form>'}
              </div>
            </div>
          </div>
          </div>

          {/* Payment Setting */}
          <div className="mb-6">
            <div className="bg-white shadow rounded-md p-4 mb-2 mt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Setting</h3>
            <p className="text-gray-600 mb-6">Select payment option for user creation</p>
            
            <div className="flex space-x-8 mb-6">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="paymentOption"
                  value="paid"
                  checked={formData.paymentOption === 'paid'}
                  onChange={(e) => handleSelectChange('paymentOption', e.target.value)}
                  className="w-4 h-4 text-cyan-600 border-gray-300 focus:ring-cyan-500"
                />
                <span className="text-gray-700">Enable payment gateway for paid plans</span>
              </label>
              
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="paymentOption"
                  value="default"
                  checked={formData.paymentOption === 'default'}
                  onChange={(e) => handleSelectChange('paymentOption', e.target.value)}
                  className="w-4 h-4 text-cyan-600 border-gray-300 focus:ring-cyan-500"
                />
                <span className="text-gray-700">Set default plan for auto user registration</span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Default Zone</label>
                <select
                  value={formData.defaultZone}
                  onChange={(e) => handleSelectChange('defaultZone', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="admin">admin</option>
                  <option value="zone1">Bharat</option>
                 
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plan Group</label>
                <select
                  value={formData.planGroup}
                  onChange={(e) => handleSelectChange('planGroup', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="Plan Group">Plan Group</option>
                  
                </select>
              </div>
            </div>
          </div>
          </div>

          {/* Bottom Action Buttons - Only show when enabled */}
          <div className="flex space-x-3">
            <button
              onClick={handleApply}
              className="px-5 py-1 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
            >
              APPLY
            </button>
            <button
              onClick={handleCancel}
              className="px-5 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
            >
              CANCEL
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AutoUser;