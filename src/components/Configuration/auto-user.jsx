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
            style={{ backgroundColor: isEnabled ? "var(--primary)" : "#d1d5db" }} // ✅ dynamic
            className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
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
              style={{ backgroundColor: "var(--primary)" }}
              className="hover:opacity-90 text-white px-6 py-2 rounded-md font-medium"
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
              
              {/* Dropdown */}
              <div className="mb-6 relative user-info-dropdown">
                {/* ...existing code unchanged... */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b shadow-lg z-10 max-h-64 overflow-y-auto">
                    <div className="p-2">
                      <label className="flex items-center space-x-3 p-2 hover:bg-blue-50 cursor-pointer">
                        <div style={{ backgroundColor: "var(--primary)" }} className="w-4 h-4 flex items-center justify-center rounded-sm">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span onClick={handleSelectAll} className="text-gray-700 font-medium">Select All</span>
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
                              style={{ accentColor: "var(--primary)" }} // ✅ dynamic
                              className="w-4 h-4 border-gray-300 rounded"
                            />
                            <span className="text-gray-700">{field}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Checkboxes */}
              <div className="grid grid-cols-3 gap-6">
                {['phoneAsUserName', 'otpAsPassword', 'defaultPassword'].map((field, idx) => (
                  <label key={idx} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData[field]}
                      onChange={() => handleCheckboxChange(field)}
                      style={{ accentColor: "var(--primary)" }} // ✅ dynamic
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">
                      {field === 'phoneAsUserName' && 'Phone as user name'}
                      {field === 'otpAsPassword' && 'Otp as password'}
                      {field === 'defaultPassword' && 'Default Password'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Authentication Setting */}
          <div className="mb-6">
            <div className="bg-white shadow rounded-md p-4 mb-2 mt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Authentication Setting</h3>
              <p className="text-gray-600 mb-6">Select the below option to assign access rights to the user.</p>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                {['email', 'sms', 'whatsapp'].map((field, idx) => (
                  <label key={idx} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData[field]}
                      onChange={() => handleCheckboxChange(field)}
                      style={{ accentColor: "var(--primary)" }} // ✅ dynamic
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</span>
                  </label>
                ))}
              </div>

              {/* Rest unchanged... */}
            </div>
          </div>

          {/* Payment Setting */}
          <div className="mb-6">
            <div className="bg-white shadow rounded-md p-4 mb-2 mt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Setting</h3>
              <p className="text-gray-600 mb-6">Select payment option for user creation</p>
              
              <div className="flex space-x-8 mb-6">
                {['paid', 'default'].map((option, idx) => (
                  <label key={idx} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentOption"
                      value={option}
                      checked={formData.paymentOption === option}
                      onChange={(e) => handleSelectChange('paymentOption', e.target.value)}
                      style={{ accentColor: "var(--primary)" }} // ✅ dynamic
                      className="w-4 h-4 border-gray-300"
                    />
                    <span className="text-gray-700">
                      {option === 'paid'
                        ? 'Enable payment gateway for paid plans'
                        : 'Set default plan for auto user registration'}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleApply}
              style={{ backgroundColor: "var(--primary)" }}
              className="hover:opacity-90 text-white px-6 py-2 rounded-md font-medium"
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
