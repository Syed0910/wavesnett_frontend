import React, { useState } from "react";

const OttConfiguration = () => {
  const [selectedOtt, setSelectedOtt] = useState("");
  const [formData, setFormData] = useState({
    loginId: "",
    operCode: "",
    apiToken: "",
    enabled: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    setFormData((prev) => ({
      ...prev,
      enabled: !prev.enabled,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", { selectedOtt, ...formData });
  };

  const handleCancel = () => {
    console.log("Cancelled");
    setSelectedOtt("");
    setFormData({
      loginId: "",
      operCode: "",
      apiToken: "",
      enabled: false,
    });
  };

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white shadow rounded">
      {/* Header */}
      <div className="pb-2 mb-2">
        <h2 className="text-lg font-medium text-gray-900">OTT Configuration</h2>
      </div>

      {/* OTT Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select OTT
        </label>
        <select
          value={selectedOtt}
          onChange={(e) => setSelectedOtt(e.target.value)}
          className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1"
          style={{ focusRingColor: "var(--primary)" }}
        >
          <option value="">Select OTT</option>
          <option value="ottplay">OTTPlay</option>
        </select>
      </div>

      {/* Show fields only if OTT is selected */}
      {selectedOtt === "ottplay" && (
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="loginId"
              value={formData.loginId}
              onChange={handleInputChange}
              placeholder="Ott LoginId"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1"
              style={{ borderColor: "#d1d5db", outlineColor: "var(--primary)" }}
            />
            <input
              type="text"
              name="operCode"
              value={formData.operCode}
              onChange={handleInputChange}
              placeholder="Ott OperCode"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1"
              style={{ borderColor: "#d1d5db", outlineColor: "var(--primary)" }}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="apiToken"
              value={formData.apiToken}
              onChange={handleInputChange}
              placeholder="Ott ApiToken"
              className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/2 focus:outline-none focus:ring-1"
              style={{ borderColor: "#d1d5db", outlineColor: "var(--primary)" }}
            />
          </div>

          {/* Toggle */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-sm text-gray-700">Disable</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.enabled}
                onChange={handleToggle}
                className="sr-only peer"
              />
              <div
                className="w-11 h-6 bg-gray-200 rounded-full peer transition"
                style={{
                  backgroundColor: formData.enabled
                    ? "var(--primary)"
                    : "#e5e7eb",
                }}
              ></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
            </label>
            <span className="text-sm text-gray-700">Enable</span>
          </div>

          {/* Show only when enabled */}
          {formData.enabled && (
            <div className="mb-6">
              {/* Subscribe With Radio Buttons */}
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Subscribe With
                </span>
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="subscribeWith"
                    value="phone"
                    checked={formData.subscribeWith === "phone"}
                    onChange={handleInputChange}
                    style={{ accentColor: "var(--primary)" }}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">Phone</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="subscribeWith"
                    value="email"
                    checked={formData.subscribeWith === "email"}
                    onChange={handleInputChange}
                    style={{ accentColor: "var(--primary)" }}
                    className="h-4 w-4"
                  />
                  <span className="text-sm">Email</span>
                </label>
              </div>

              {/* Note */}
              <p className="text-sm text-red-500">
                Notes: If ottPlay enable then all user must have unique email
                and phone number
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleSubmit}
              style={{ backgroundColor: "var(--primary)" }}
              className="px-5 py-1 text-white rounded hover:opacity-90 transition-colors"
            >
              SUBMIT
            </button>
            <button
              onClick={handleCancel}
              className="px-5 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OttConfiguration;
