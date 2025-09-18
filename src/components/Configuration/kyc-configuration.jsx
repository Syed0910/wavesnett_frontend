// components/Configuration/KycConfiguration.jsx
import React, { useState } from "react";
import { Key } from "lucide-react";

const KycConfiguration = () => {
  const [kycSettings, setKycSettings] = useState({
    provider: "QuickEKyc",
    apiKey: "022f5d34-f06c-4f51-bdfa-255b5a040ef3",
    isEnabled: true,
  });

  const handleInputChange = (field, value) => {
    setKycSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleToggleEnable = () => {
    setKycSettings((prev) => ({
      ...prev,
      isEnabled: !prev.isEnabled,
    }));
  };

  const handleSubmit = (action) => {
    console.log(`${action} clicked with settings:`, kycSettings);
  };

  return (
    <div className="space-y-6">
      {/* KYC Configuration */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Kyc Configuration
        </h2>

        {/* Fields stacked vertically */}
        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* KYC Provider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Kyc Config
            </label>
            <select
              value={kycSettings.provider}
              onChange={(e) => handleInputChange("provider", e.target.value)}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1"
              style={{ outlineColor: "var(--primary)" }}
            >
              <option value="QuickEKyc">QuickEKyc</option>
              <option value="OtherKyc">OtherKyc</option>
            </select>
          </div>

          {/* API Key */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Api Key
            </label>
            <div className="flex items-center w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm">
              <input
                type="text"
                value={kycSettings.apiKey}
                onChange={(e) => handleInputChange("apiKey", e.target.value)}
                className="w-full focus:outline-none"
                style={{ outlineColor: "var(--primary)" }}
              />
            </div>
          </div>
        </div>

        {/* Enable/Disable Toggle */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-medium text-gray-700">Disable</span>

          {/* Toggle Switch */}
          <div
            onClick={handleToggleEnable}
            className={`relative inline-flex h-6 w-12 cursor-pointer rounded-full transition-colors duration-200 ease-in-out`}
            style={{
              backgroundColor: kycSettings.isEnabled
                ? "var(--primary)"
                : "#d1d5db",
            }}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                kycSettings.isEnabled ? "translate-x-6" : "translate-x-0.5"
              } mt-0.5`}
            />
          </div>

          <span className="text-sm font-medium text-gray-700">Enable</span>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={() => handleSubmit("SUBMIT")}
            style={{ backgroundColor: "var(--primary)" }}
            className="text-white px-5 py-1 rounded-md font-medium hover:opacity-90 transition-colors"
          >
            SUBMIT
          </button>
          <button
            onClick={() => handleSubmit("CANCEL")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-5 py-1 rounded-md font-medium"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default KycConfiguration;