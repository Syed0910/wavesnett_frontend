// components/Configuration/KycConfiguration.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Key } from "lucide-react";

const KycConfiguration = () => {
  const [kycData, setKycData] = useState(null); // Full API response
  const [loading, setLoading] = useState(true);

  const [kycSettings, setKycSettings] = useState({
    provider: "",
    apiKey: "",
    isEnabled: false,
    toggleDisabled: false,
  });
  console.log("apikey",kycSettings.apiKey);
  // Static dropdown options
  const kycOptions = [
    { label: "QuickEKyc", value: "quickekyc" },
    { label: "Surepass", value: "surepass" },
  ];

  // Fetch KYC config from backend for API keys
useEffect(() => {
  const fetchKycConfig = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/configs/kyc/config");
      setKycData(response.data);

      // Find first enabled provider
      const enabledProvider = Object.entries(response.data.Ekyc).find(
        ([key, value]) => value === true
      );

      let provider, apiKey, toggleDisabled, isEnabled;

      if (enabledProvider) {
        provider = enabledProvider[0];
        apiKey = response.data[provider]?.apiKey || "";
        isEnabled = true;
        toggleDisabled = false;
      } else {
        // default to first dropdown
        provider = kycOptions[0].value;
        apiKey = response.data[provider]?.apiKey || "";
        isEnabled = true;
        toggleDisabled = false;
      }
      console.log("Fetched KYC config:", { provider, apiKey, isEnabled, toggleDisabled });

      setKycSettings({ provider, apiKey, isEnabled, toggleDisabled });

    } catch (error) {
      console.error("Error fetching KYC config:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchKycConfig();
}, []);


  // Update API key whenever provider or backend data changes
  useEffect(() => {
    if (!kycData) return;

    if (kycSettings.provider === "surepass") {
      setKycSettings(prev => ({
        ...prev,
        apiKey: "",
        isEnabled: false,
        toggleDisabled: true,
      }));
    } else {
      const apiKey = kycData[kycSettings.provider]?.apiKey || "";
      setKycSettings(prev => ({
        ...prev,
        apiKey,
        isEnabled: true,
        toggleDisabled: false,
      }));
    }
  }, [kycSettings.provider, kycData]);

  // Handle provider selection
  const handleProviderChange = (value) => {
    setKycSettings(prev => ({
      ...prev,
      provider: value,
    }));
  };

  // Handle API key input
  const handleInputChange = (field, value) => {
    setKycSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // Toggle enable/disable
  const handleToggleEnable = () => {
    if (!kycSettings.toggleDisabled) {
      setKycSettings(prev => ({
        ...prev,
        isEnabled: !prev.isEnabled,
      }));
    }
  };

  // Submit handler
  const handleSubmit = (action) => {
    console.log(`${action} clicked with settings:`, kycSettings);
    // Call update API here if needed
  };

  if (loading) {
    return (
      <div className="p-6 bg-white rounded shadow text-gray-700">
        Loading KYC configuration...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          KYC Configuration
        </h2>

        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* KYC Provider Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select KYC Provider
            </label>
            <select
              value={kycSettings.provider}
              onChange={(e) => handleProviderChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              {kycOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* API Key Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              API Key
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <input
                type="text"
                placeholder={kycSettings.provider === "surepass" ? "Token" : "Enter API key"}
                value={kycSettings.apiKey}
                onChange={(e) => handleInputChange("apiKey", e.target.value)}
                className="w-full outline-none text-sm"
              
              />
              <Key className="ml-2 text-gray-500" size={16} />
            </div>
          </div>
        </div>

        {/* Enable/Disable Toggle */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-gray-700">Disable</span>
          <div
            onClick={handleToggleEnable}
            className={`relative inline-flex h-6 w-12 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
              kycSettings.isEnabled ? "bg-cyan-400" : "bg-gray-300"
            } ${kycSettings.toggleDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
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
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium"
          >
            SUBMIT
          </button>
          <button
            onClick={() => handleSubmit("CANCEL")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default KycConfiguration;
