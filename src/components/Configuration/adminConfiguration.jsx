import React, { useState } from "react";
import { User } from "lucide-react";

const AdminConfiguration = () => {
  const [formData, setFormData] = useState({
    companyName: "AaniRids Technologies Private Limited",
    email: "info@wavesnett.com",
    phone: "+919886411162",
    address: "Zars Mansion 5-992/5/B Near Water Tank",
    city: "Kalaburagi",
    zipCode: "585104",
    country: "India",
    timezone: "Asia/Kolkata",
    currency: "INR(₹)",
    showCompanyName: true,
  });

  const [logoFile, setLogoFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setLogoFile(file);
  };

  const clearLogo = () => {
    setLogoFile(null);
    document.getElementById("logoInput").value = "";
  };

  return (
    <div className="flex h-full">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <nav className="flex flex-col space-y-4 text-gray-600 text-sm font-medium">
          <span className="text-cyan-500 font-semibold">ADMIN</span>
          <span className="hover:text-cyan-500 cursor-pointer">PORTAL</span>
          <span className="hover:text-cyan-500 cursor-pointer">BILLING</span>
          <span className="hover:text-cyan-500 cursor-pointer">MAIL</span>
          <span className="hover:text-cyan-500 cursor-pointer">PAYMENT GATEWAY</span>
          <span className="hover:text-cyan-500 cursor-pointer">SMS GATEWAY</span>
          <span className="hover:text-cyan-500 cursor-pointer">NOTIFICATION</span>
          <span className="hover:text-cyan-500 cursor-pointer">AUTO USER</span>
          <span className="hover:text-cyan-500 cursor-pointer">WHATSAPP GATEWAY</span>
          <span className="hover:text-cyan-500 cursor-pointer">OPERATOR NOTIFICATION</span>
          <span className="hover:text-cyan-500 cursor-pointer">OTT CONFIGURATION</span>
          <span className="hover:text-cyan-500 cursor-pointer">KYC CONFIGURATION</span>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
     <main className="flex-1 p-6 bg-gray-50 h-screen overflow-y-auto">

        {/* Admin Form */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Admin</h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                />
                <User size={16} className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Time Zone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time Zone
              </label>
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="Asia/Kolkata">Asia/Kolkata</option>
                <option value="Asia/Mumbai">Asia/Mumbai</option>
                <option value="Asia/Delhi">Asia/Delhi</option>
              </select>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Currency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Currency
              </label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="INR(₹)">INR(₹)</option>
                <option value="USD($)">USD($)</option>
                <option value="EUR(€)">EUR(€)</option>
              </select>
            </div>
          </div>

          {/* Checkbox */}
          <div className="mt-6">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="showCompanyName"
                checked={formData.showCompanyName}
                onChange={handleInputChange}
                className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                Company name show in login page
              </span>
            </label>
          </div>

          {/* Apply Button */}
          <div className="mt-6">
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
              APPLY
            </button>
          </div>
        </div>

        {/* Logo Setup */}
        <div className="bg-white rounded-lg p-6 mt-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Logo Setup</h2>
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <input
                  id="logoInput"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
                <label htmlFor="logoInput" className="cursor-pointer">
                  <div className="text-gray-400 mb-2">📎</div>
                  <span className="text-gray-600">Choose File</span>
                </label>
              </div>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => document.getElementById("logoInput").click()}
                  className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium"
                >
                  UPLOAD
                </button>
                <button
                  onClick={clearLogo}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md font-medium"
                >
                  CLEAR
                </button>
              </div>
            </div>

            <div className="ml-8 text-center">
              <img
                src="/wavesnett.png"
                alt="WavesNett"
                className="w-24 h-auto object-contain mb-2"
              />
              <div className="text-xs font-semibold text-blue-600">WavesNett</div>
              <div className="text-xs text-orange-400">BROADBAND</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminConfiguration;
