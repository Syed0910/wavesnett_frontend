// src/components/Configuration/mail.jsx
import React, { useState, useEffect } from "react";
import { Mail, User, Eye, EyeOff, Edit, RotateCw } from "lucide-react";
import { getMailConfig, getEmailTemplateByName } from "../../services/api";

const MailConfiguration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [mailSettings, setMailSettings] = useState({
    fromEmail: "",
    smtpServer: "",
    smtpSecure: "",
    smtpPort: "",
    username: "",
    password: ""
  });

  // Modal preview state
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // Template metadata
  const emailTemplatesMeta = [
    { type: "New User", hasTemplate: true, hasSettings: true },
    { type: "Recharge User", hasTemplate: true, hasSettings: true },
    { type: "Plan Change", hasTemplate: true, hasSettings: true },
    { type: "Reset Password", hasTemplate: true, hasSettings: true },
    { type: "Expiry", hasTemplate: true, hasSettings: true },
    { type: "OTP", hasTemplate: false, hasSettings: false },
    { type: "Announcement", hasTemplate: false, hasSettings: false },
    { type: "Invoice Send", hasTemplate: false, hasSettings: false },
    { type: "Receipt Send", hasTemplate: true, hasSettings: true },
    { type: "FUP Over", hasTemplate: true, hasSettings: true },
    { type: "Enable user", hasTemplate: true, hasSettings: true },
    { type: "Disable user", hasTemplate: true, hasSettings: true },
    { type: "User Complaint", hasTemplate: true, hasSettings: true },
    { type: "Service Suspend", hasTemplate: true, hasSettings: true },
    { type: "Service Resume", hasTemplate: true, hasSettings: true },
    { type: "User Complaint Acknowledgement", hasTemplate: true, hasSettings: true },
    { type: "Renewal Reminder", hasTemplate: true, hasSettings: true },
    { type: "Outstanding Reminder", hasTemplate: true, hasSettings: true },
    { type: "Expired", hasTemplate: true, hasSettings: true },
{ type: "Quota Used", hasTemplate: true, hasSettings: true }
  ];

  // Fetch config from backend on mount
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const { data } = await getMailConfig();
        setMailSettings({
          fromEmail: data.fromEmail || "",
          smtpServer: data.smtpServer || "",
          smtpSecure: data.smtpSecure || "",
          smtpPort: data.smtpPort || "",
          username: data.username || "",
          password: data.password || ""
        });
      } catch (err) {
        console.error("Error fetching mail config:", err);
      }
    };
    fetchConfig();
  }, []);

  const handleInputChange = (field, value) => {
    setMailSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (action) => {
    console.log(`${action} clicked with settings:`, mailSettings);
    // TODO: connect with backend update route
  };

  // ✅ Fetch email template by notifyName and open modal
  const handleEditTemplate = async (notifyName) => {
    try {
      const { data } = await getEmailTemplateByName(notifyName);
      const fullContent = `
        <style>${data.css || ""}</style>
        ${data.html || ""}
      `;
      setSelectedTemplate({ type: notifyName, content: fullContent });
    } catch (err) {
      console.error("Error fetching template:", err);
      alert("Failed to load template");
    }
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
              onChange={(e) => handleInputChange("fromEmail", e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex items-center border rounded px-3 py-2">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              placeholder="SMTP Server Address"
              value={mailSettings.smtpServer}
              onChange={(e) => handleInputChange("smtpServer", e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center border rounded px-3 py-2">
            <select
              value={mailSettings.smtpSecure}
              onChange={(e) => handleInputChange("smtpSecure", e.target.value)}
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
              onChange={(e) => handleInputChange("smtpPort", e.target.value)}
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
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex items-center border rounded px-3 py-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={mailSettings.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
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
            onClick={() => handleSubmit("Apply")}
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium text-sm"
          >
            Apply
          </button>
          <button
            onClick={() => handleSubmit("Cancel")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSubmit("Test&Apply")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium text-sm"
          >
            Test&Apply
          </button>
          <button
            onClick={() => handleSubmit("Clear")}
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
            {emailTemplatesMeta.map((tpl, idx) => (
              <div
                key={idx}
                className="grid grid-cols-3 gap-4 items-center py-2 border-b border-gray-100"
              >
                <div className="text-sm text-gray-700">{tpl.type}</div>

                <div className="flex items-center space-x-2">
                  <select className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm">
                    <option>{mailSettings.fromEmail || "Select sender"}</option>
                  </select>
                </div>

                <div className="flex space-x-2">
                  {tpl.hasTemplate && (
                    <button
                      title="Edit Template"
                      onClick={() => handleEditTemplate(tpl.type)}
                      className="w-8 h-8 rounded-full bg-[#00b2a6] hover:bg-[#089689] flex items-center justify-center shadow-sm"
                    >
                      <Edit size={14} className="text-white" />
                    </button>
                  )}

                  {tpl.hasSettings && (
                    <button
                      title="Template Settings"
                      className="w-8 h-8 rounded-full bg-[#00a85a] hover:bg-[#008f45] flex items-center justify-center shadow-sm"
                    >
                      <RotateCw size={14} className="text-white" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Template Preview Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full h-5/6 overflow-auto p-6 relative">
            <h3 className="text-lg font-semibold mb-4">
              Template for {selectedTemplate.type}
            </h3>

            {/* Email sandbox */}
            <div className="flex justify-center">
              <div
                className="shadow-md border rounded-lg"
                style={{
                  maxWidth: "800px",
                  width: "100%",
                  background: "#f4f4f4", // fallback wrapper like mail clients
                  padding: "20px"
                }}
              >
                <div
                  style={{
                    background: "white",
                    padding: "10px"
                  }}
                  dangerouslySetInnerHTML={{ __html: selectedTemplate.content }}
                />
              </div>
            </div>

            <button
              onClick={() => setSelectedTemplate(null)}
              className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MailConfiguration;
