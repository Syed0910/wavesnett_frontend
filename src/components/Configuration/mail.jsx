// components/Configuration/mail.jsx
import React, { useState } from "react";
import { Mail, User, Eye, EyeOff } from "lucide-react";

const MailConfiguration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mailSettings, setMailSettings] = useState({
    fromEmail: "billing@wavesnett.com",
    smtpServer: "mail.digitalvoicezone.com",
    smtpSecure: "SSL",
    smtpPort: "465",
    username: "billing@wavesnett.com",
    password: ""
  });

  const [emailTemplates] = useState([
    { type: "New User", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Recharge User", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Plan Change", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Reset Password", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Expiry", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "OTP", sender: "billing@wavesnett...", hasTemplate: false, hasSettings: false },
    { type: "Announcement", sender: "billing@wavesnett...", hasTemplate: false, hasSettings: false },
    { type: "Invoice Send", sender: "billing@wavesnett...", hasTemplate: false, hasSettings: false },
    { type: "Receipt Send", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "FUP Over", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Enable user", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Disable user", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "User Complaint", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Service Suspend", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Service Resume", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "User Complaint Acknowledgement", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Renewal Reminder", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Outstanding Reminder", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Expired", sender: "billing@wavesnett...", hasTemplate: true, hasSettings: true },
    { type: "Quota Used", sender: "billing@wavesnett...", hasTemplate: false, hasSettings: false }
  ]);

  const handleInputChange = (field, value) => {
    setMailSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (action) => {
    console.log(`${action} clicked with settings:`, mailSettings);
  };

  return (
    <div className="space-y-6">
      {/* Mail Configuration */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Mail Configuration</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center border rounded px-3 py-2">
            <Mail className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="email"
              placeholder="From Email Address"
              value={mailSettings.fromEmail}
              onChange={(e) => handleInputChange('fromEmail', e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
          
          <div className="flex items-center border rounded px-3 py-2">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="SMTP Server Address"
              value={mailSettings.smtpServer}
              onChange={(e) => handleInputChange('smtpServer', e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center border rounded px-3 py-2">
            <select
              value={mailSettings.smtpSecure}
              onChange={(e) => handleInputChange('smtpSecure', e.target.value)}
              className="w-full outline-none text-sm"
            >
              <option value="SSL">SSL</option>
              <option value="TLS">TLS</option>
              <option value="None">None</option>
            </select>
          </div>
          
          <div className="flex items-center border rounded px-3 py-2">
            <input
              type="text"
              placeholder="SMTP Server Port"
              value={mailSettings.smtpPort}
              onChange={(e) => handleInputChange('smtpPort', e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center border rounded px-3 py-2">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="User name"
              value={mailSettings.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
          
          <div className="flex items-center border rounded px-3 py-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={mailSettings.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full outline-none text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <button 
            onClick={() => handleSubmit('Apply')}
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium text-sm"
          >
            Apply
          </button>
          <button 
            onClick={() => handleSubmit('Cancel')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium text-sm"
          >
            Cancel
          </button>
          <button 
            onClick={() => handleSubmit('Test&Apply')}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium text-sm"
          >
            Test&Apply
          </button>
          <button 
            onClick={() => handleSubmit('Clear')}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md font-medium text-sm"
          >
            Clear
          </button>
        </div>

        {/* Email Templates Table */}
        <div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-sm font-medium text-gray-700">Email Type</div>
            <div className="text-sm font-medium text-gray-700">Email Sender Configuration</div>
            <div className="text-sm font-medium text-gray-700">Mail Template</div>
          </div>

          <div className="space-y-2">
            {emailTemplates.map((template, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 items-center py-2 border-b border-gray-100">
                <div className="text-sm text-gray-700">{template.type}</div>
                <div className="flex items-center space-x-2">
                  <select className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm">
                    <option>{template.sender}</option>
                  </select>
                </div>
                <div className="flex space-x-2">
                  {template.hasTemplate && (
                    <button className="w-8 h-8 bg-cyan-400 hover:bg-cyan-500 rounded-full flex items-center justify-center">
                      <Mail size={14} className="text-white" />
                    </button>
                  )}
                  {template.hasSettings && (
                    <button className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">⚙</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailConfiguration;