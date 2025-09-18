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
    setMailSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (action) => {
    console.log(`${action} clicked with settings:`, mailSettings);
  };

  // ✅ Fixed Reusable Input Component
  const InputField = ({ icon, type, placeholder, value, onChange, extra }) => (
    <div className="flex items-center border rounded px-3 py-2">
      {icon && React.cloneElement(icon, { className: "w-4 h-4 mr-2 text-gray-500" })}
      {type === 'select' ? (
        <select
          value={value}
          onChange={onChange}
          className="w-full outline-none text-sm"
          {...extra}
        >
          {extra?.children}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full outline-none text-sm"
          {...extra}
        />
      )}
    </div>
  );

  const actionButtons = [
    { label: "Apply", color: "bg-cyan-400 hover:bg-cyan-500 text-white" },
    { label: "Cancel", color: "bg-gray-300 hover:bg-gray-400 text-gray-700" },
    { label: "Test&Apply", color: "bg-green-500 hover:bg-green-600 text-white" },
    { label: "Clear", color: "bg-yellow-400 hover:bg-yellow-500 text-white" }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Mail Configuration</h2>

        {/* Mail & SMTP Inputs */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <InputField
            icon={<Mail />}
            type="email"
            placeholder="From Email Address"
            value={mailSettings.fromEmail}
            onChange={(e) => handleInputChange('fromEmail', e.target.value)}
          />
          <InputField
            icon={<User />}
            type="text"
            placeholder="SMTP Server Address"
            value={mailSettings.smtpServer}
            onChange={(e) => handleInputChange('smtpServer', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <InputField
            type="select"
            value={mailSettings.smtpSecure}
            onChange={(e) => handleInputChange('smtpSecure', e.target.value)}
            extra={{
              children: (
                <>
                  <option value="SSL">SSL</option>
                  <option value="TLS">TLS</option>
                  <option value="None">None</option>
                </>
              )
            }}
          />
          <InputField
            type="text"
            placeholder="SMTP Server Port"
            value={mailSettings.smtpPort}
            onChange={(e) => handleInputChange('smtpPort', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <InputField
            icon={<User />}
            type="text"
            placeholder="User name"
            value={mailSettings.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
          />
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
              aria-label={showPassword ? "Hide Password" : "Show Password"}
              onClick={() => setShowPassword(!showPassword)}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 mb-6">
          {actionButtons.map(({ label, color }) => (
            <button
              key={label}
              onClick={() => handleSubmit(label)}
              className={`${color} px-6 py-2 rounded-md font-medium text-sm`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Email Templates Table */}
        <div>
          <div className="grid grid-cols-3 gap-4 mb-4 font-medium text-gray-700">
            <div className="text-sm">Email Type</div>
            <div className="text-sm">Email Sender Configuration</div>
            <div className="text-sm">Mail Template</div>
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
