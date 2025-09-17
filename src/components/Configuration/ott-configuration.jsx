// src/components/ott/OttConfiguration.jsx
import { useEffect, useState } from "react";
import { getOtts } from "../../services/api";
import axios from "axios";

const OttConfiguration = () => {
  const [otts, setOtts] = useState([]);
  const [selectedOtt, setSelectedOtt] = useState("");
  const [formData, setFormData] = useState({
    loginId: "",
    operCode: "",
    apiToken: "",
    enabled: false,
    subscribeWith: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch OTTs dynamically
  useEffect(() => {
    const fetchOtts = async () => {
      try {
        setLoading(true);
        const res = await getOtts();
        setOtts(res.data);
      } catch (err) {
        console.error("Failed to fetch OTTs:", err);
        setError("Failed to load OTTs.");
      } finally {
        setLoading(false);
      }
    };
    fetchOtts();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submit form
  const handleSubmit = async () => {
    if (!selectedOtt) return alert("Select an OTT first");

    // Build payload with all required backend fields
    const payload = {
      user_id: 1, // example user ID
      username: "admin", // example username
      ottPlanId: selectedOtt === "ottplay" ? "ottplay001" : selectedOtt,
      ottPlanName:
        selectedOtt === "ottplay"
          ? "OTTPlay"
          : otts.find((o) => o.id.toString() === selectedOtt)?.ottPlanName,
      ottValidity: 30, // example validity
      otts: {}, // empty JSON object
      status: formData.enabled,
      msg: "",
      operator_id: 1,
      zoneName: "Default",
      createdBy: "admin",
      loginId: formData.loginId,
      operCode: formData.operCode,
      apiToken: formData.apiToken,
      subscribeWith: formData.subscribeWith,
    };

    try {
      if (selectedOtt === "ottplay") {
        // Create OTTPlay
        await axios.post("http://localhost:3000/api/otts", payload);
        alert("OTTPlay created successfully!");
      } else {
        // Update existing OTT
        await axios.put(`http://localhost:3000/api/otts/${selectedOtt}`, payload);
        alert("OTT updated successfully!");
      }
    } catch (err) {
      console.error("Failed to save OTT:", err);
      alert("Error saving OTT configuration.");
    }
  };

  // Cancel form
  const handleCancel = () => {
    setSelectedOtt("");
    setFormData({
      loginId: "",
      operCode: "",
      apiToken: "",
      enabled: false,
      subscribeWith: "",
    });
  };

  if (loading) return <div className="p-6">Loading OTTs...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-lg font-medium text-gray-900 mb-4">OTT Configuration</h2>

      {/* OTT Dropdown */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select OTT
        </label>
        <select
          value={selectedOtt}
          onChange={(e) => setSelectedOtt(e.target.value)}
          className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500"
        >
          <option value="">Select OTT</option>
          <option value="ottplay">OTTPlay</option>
          {otts.map((ott) => (
            <option key={ott.id} value={ott.id}>
              {ott.ottPlanName}
            </option>
          ))}
        </select>
      </div>

      {/* Form expands if an OTT is selected */}
      {selectedOtt && (
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="loginId"
              value={formData.loginId}
              onChange={handleInputChange}
              placeholder="OTT LoginId"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
            <input
              type="text"
              name="operCode"
              value={formData.operCode}
              onChange={handleInputChange}
              placeholder="OTT OperCode"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="apiToken"
              value={formData.apiToken}
              onChange={handleInputChange}
              placeholder="OTT API Token"
              className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/2 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>

          {/* Enable toggle */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-sm text-gray-700">Disable</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="enabled"
                checked={formData.enabled}
                onChange={handleInputChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-cyan-500 transition"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-5"></div>
            </label>
            <span className="text-sm text-gray-700">Enable</span>
          </div>

          {/* Subscribe With */}
          {formData.enabled && (
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-sm font-medium text-gray-700">Subscribe With</span>
                <label className="flex items-center space-x-1">
                  <input
                    type="radio"
                    name="subscribeWith"
                    value="phone"
                    checked={formData.subscribeWith === "phone"}
                    onChange={handleInputChange}
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
                  />
                  <span className="text-sm">Email</span>
                </label>
              </div>
              <p className="text-sm text-red-500">
                Notes: If OTTPlay enabled, all users must have unique email and phone.
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={handleSubmit}
              className="px-5 py-1 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
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
