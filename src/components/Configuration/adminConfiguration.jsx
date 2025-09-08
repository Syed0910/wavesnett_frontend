// components/Configuration/adminConfiguration.jsx
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Hash,
  Globe,
} from "lucide-react";

const AdminConfiguration = () => {
  const [formData, setFormData] = useState({
    companyName: "AaniRids Technologies Private Limited",
    email: "info@wavesnett.com",
    phone: "+919886411162",
    address: "Zars Mansion 5-992/5/B Near Water Tan",
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
    if (file) setLogoFile(URL.createObjectURL(file));
  };

  const clearLogo = () => {
    setLogoFile(null);
    document.getElementById("logoInput").value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="space-y-6">
      {/* Admin Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Admin</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Company Name */}
          <div className="flex items-center border rounded px-3 py-2">
            <User className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Company Name"
              className="w-full outline-none"
            />
          </div>

          {/* Address */}
          <div className="flex items-center border rounded px-3 py-2">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="w-full outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded px-3 py-2">
            <Mail className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full outline-none"
            />
          </div>

          {/* City */}
          <div className="flex items-center border rounded px-3 py-2">
            <Building className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="w-full outline-none"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border rounded px-3 py-2">
            <Phone className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className="w-full outline-none"
            />
          </div>

          {/* Zip Code */}
          <div className="flex items-center border rounded px-3 py-2">
            <Hash className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Zip Code"
              className="w-full outline-none"
            />
          </div>

          {/* Time Zone */}
          <div className="flex items-center border rounded px-3 py-2 col-span-1 md:col-span-1">
            <Globe className="w-4 h-4 mr-2 text-gray-500" />
            <select
              name="timezone"
              value={formData.timezone}
              onChange={handleInputChange}
              className="w-full outline-none"
            >
              <option value="Asia/Kolkata">Asia/Kolkata</option>
              <option value="UTC">UTC</option>
            </select>
          </div>

          {/* Country */}
          <div className="flex items-center border rounded px-3 py-2">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="w-full outline-none"
            />
          </div>

          {/* Currency */}
          <div className="flex items-center border rounded px-3 py-2 col-span-1 md:col-span-1">
            <Globe className="w-4 h-4 mr-2 text-gray-500" />
            <select
              name="currency"
              value={formData.currency}
              onChange={handleInputChange}
              className="w-full outline-none"
            >
              <option value="INR(₹)">INR(₹)</option>
              <option value="USD($)">USD($)</option>
            </select>
          </div>

          {/* Checkbox */}
          <div className="flex items-center col-span-1 md:col-span-2 mt-2">
            <input
              type="checkbox"
              name="showCompanyName"
              checked={formData.showCompanyName}
              onChange={handleInputChange}
              className="mr-2"
            />
            <span className="text-gray-700">Company name show in login page</span>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600"
            >
              APPLY
            </button>
          </div>
        </form>
      </div>

      {/* Logo Setup */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Logo Setup</h2>

        <div className="flex items-center space-x-4">
          <input
            id="logoInput"
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="border border-gray-300 rounded px-3 py-2"
          />
          {logoFile && (
            <img
              src={logoFile}
              alt="Logo Preview"
              className="h-12 object-contain"
            />
          )}
        </div>

        <div className="mt-4 flex space-x-3">
          <button
            onClick={() => alert("Logo Uploaded")}
            className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600"
          >
            UPLOAD
          </button>
          <button
            onClick={clearLogo}
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500"
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminConfiguration;
