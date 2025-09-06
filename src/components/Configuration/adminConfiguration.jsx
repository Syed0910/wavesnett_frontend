// components/Configuration/adminConfiguration.jsx
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
    <div>
      {/* Admin Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Admin</h2>
        {/* form fields (your original fields go here) */}
      </div>

      {/* Logo Setup */}
      <div className="bg-white rounded-lg p-6 mt-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Logo Setup</h2>
        {/* logo upload UI */}
      </div>
    </div>
  );
};

export default AdminConfiguration;
