// components/Configuration/smsGateway.jsx
import React, { useState } from "react";
import { Phone, User, Key, Globe } from "lucide-react";

const SMSGateway = () => {
  const [smsSettings, setSmsSettings] = useState({
    gateway: "TextLocal",
    apiKey: "",
    senderId: "",
    username: "",
    password: "",
    isEnabled: true
  });

  const [smsTemplates] = useState([
    { type: "New User", template: "Welcome to WavesNett! Your account has been created.", hasTemplate: true },
    { type: "Recharge User", template: "Your account has been recharged successfully.", hasTemplate: true },
    { type: "Plan Change", template: "Your plan has been changed successfully.", hasTemplate: true },
    { type: "Reset Password", template: "Your password has been reset.", hasTemplate: true },
    { type: "Expiry", template: "Your plan is about to expire.", hasTemplate: true },
    { type: "OTP", template: "Your OTP is: {otp}", hasTemplate: true },
    { type: "FUP Over", template: "Your FUP limit has been exceeded.", hasTemplate: true },
    { type: "Service Suspend", template: "Your service has been suspended.", hasTemplate: true },
    { type: "Service Resume", template: "Your service has been resumed.", hasTemplate: true },
    { type: "Renewal Reminder", template: "Please renew your plan.", hasTemplate: true }
  ]);

  const handleInputChange = (field, value) => {
    setSmsSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToggleEnable = () => {
    setSmsSettings(prev => ({
      ...prev,
      isEnabled: !prev.isEnabled
    }));
  };

  const handleSubmit = (action) => {
    console.log(`${action} clicked with settings:`, smsSettings);
  };

  return (
    <div className="space-y-6">
      {/* SMS Gateway Configuration */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">SMS Gateway Configuration</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select SMS Gateway
          </label>
          <select
            value={smsSettings.gateway}
            onChange={(e) => handleInputChange('gateway', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="TextLocal">TextLocal</option>
            <option value="MSG91">MSG91</option>
            <option value="2Factor">2Factor</option>
            <option value="Fast2SMS">Fast2SMS</option>
            <option value="Twilio">Twilio</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex items-center border rounded px-3 py-2">
            <Key className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="API Key"
              value={smsSettings.apiKey}
              onChange={(e) => handleInputChange('apiKey', e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
          
          <div className="flex items-center border rounded px-3 py-2">
            <Phone className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Sender ID"
              value={smsSettings.senderId}
              onChange={(e) => handleInputChange('senderId', e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex items-center border rounded px-3 py-2">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              value={smsSettings.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
          
          <div className="flex items-center border rounded px-3 py-2">
            <Key className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={smsSettings.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* Enable/Disable Toggle */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-gray-700">
            {smsSettings.isEnabled ? "Disable" : "Enable"}
          </span>
          <div 
            onClick={handleToggleEnable}
            className={`relative inline-flex h-6 w-12 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
              smsSettings.isEnabled ? 'bg-cyan-400' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                smsSettings.isEnabled ? 'translate-x-6' : 'translate-x-0.5'
              } mt-0.5`}
            />
          </div>
          <span className="text-sm font-medium text-gray-700">Enable</span>
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={() => handleSubmit('SUBMIT')}
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium"
          >
            SUBMIT
          </button>
          <button 
            onClick={() => handleSubmit('CANCEL')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium"
          >
            CANCEL
          </button>
          <button 
            onClick={() => handleSubmit('TEST')}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium"
          >
            TEST
          </button>
        </div>
      </div>

      {/* SMS Templates */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">SMS Templates</h2>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 font-medium text-sm text-gray-700 border-b pb-2">
            <div>SMS Type</div>
            <div>Template</div>
          </div>

          {smsTemplates.map((template, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 items-center py-2 border-b border-gray-100">
              <div className="text-sm text-gray-700">{template.type}</div>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={template.template}
                  readOnly
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm bg-gray-50"
                />
                {template.hasTemplate && (
                  <button className="w-8 h-8 bg-cyan-400 hover:bg-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✎</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SMS Balance */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">SMS Balance</h2>
        
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-sm text-gray-700">Current Balance:</span>
          <span className="text-lg font-semibold text-green-600">0 SMS</span>
        </div>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
          CHECK BALANCE
        </button>
      </div>
    </div>
  );
};

export default SMSGateway;