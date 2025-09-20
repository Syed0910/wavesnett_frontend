import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Hash,
  Globe,
  AlertCircle,
} from "lucide-react";
import {
  getAdminConfiguration,
  updateAdminConfiguration,
} from "../../services/api";

// ✅ Import Material UI TextField
import TextField from "@mui/material/TextField";

const AdminConfiguration = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    timezone: "",
    currency: "",
    showCompanyName: false,
  });

  const [logoFile, setLogoFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [configId, setConfigId] = useState(null);

  // Fetch config dynamically
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAdminConfiguration();
        const configsArray = response.data || [];

        const targetConfig = configsArray.find((cfg) => cfg.id === 2);
        if (!targetConfig) throw new Error("Configuration with id=2 not found");

        setConfigId(targetConfig.id);

        let parsedValue = {};
        try {
          if (typeof targetConfig.value === "string") {
            const trimmed = targetConfig.value.trim();
            if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
              parsedValue = JSON.parse(targetConfig.value);
            } else {
              parsedValue = { companyName: targetConfig.value };
            }
          } else {
            parsedValue = targetConfig.value || {};
          }
        } catch {
          parsedValue = { companyName: targetConfig.value };
        }

        setFormData({
          companyName: parsedValue.isp_name || "",
          email: parsedValue.isp_email || "",
          phone: parsedValue.isp_phone || "",
          address: parsedValue.isp_address || "",
          city: parsedValue.isp_city || "",
          zipCode: parsedValue.isp_zip || "",
          country: parsedValue.isp_country || "",
          timezone: parsedValue.isp_timezone || "Asia/Kolkata",
          currency: parsedValue.isp_currency || "INR(₹)",
          showCompanyName: parsedValue.isp_name_show ?? false,
        });
      } catch (err) {
        console.error("Error fetching admin config:", err);
        setError(`Failed to load configuration: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setSuccess(null);

      if (!configId) throw new Error("No configuration ID available for update");

      const payload = {
        isp_name: formData.companyName,
        isp_email: formData.email,
        isp_phone: formData.phone,
        isp_address: formData.address,
        isp_city: formData.city,
        isp_zip: formData.zipCode,
        isp_country: formData.country,
        isp_timezone: formData.timezone,
        isp_currency: formData.currency,
        isp_name_show: formData.showCompanyName,
      };

      await updateAdminConfiguration(configId, {
        value: JSON.stringify(payload),
      });

      setSuccess("Configuration updated successfully!");
    } catch (err) {
      console.error("Error updating configuration:", err);
      setError(`Failed to update configuration: ${err.message}`);
    }
  };

  if (loading)
    return (
      <div className="p-6 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)]"></div>
        <span className="ml-3">Loading configuration...</span>
      </div>
    );

  if (error)
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-start">
          <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">Error</p>
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-sm underline"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="space-y-6 p-0 pt-0">
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-start">
          <span className="mr-2">✓</span>
          <div>{success}</div>
        </div>
      )}

      {/* Admin Form */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Admin</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Company Name */}
          <TextField
            fullWidth
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            variant="outlined"
          />

          {/* Address */}
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            variant="outlined"
          />

          {/* Email */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            variant="outlined"
          />

          {/* City */}
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            variant="outlined"
          />

          {/* Phone */}
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            variant="outlined"
          />

          {/* Zip Code */}
          <TextField
            fullWidth
            label="Zip Code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            variant="outlined"
          />

          {/* Time Zone */}
          <TextField
            select
            fullWidth
            label="Time Zone"
            name="timezone"
            value={formData.timezone}
            onChange={handleInputChange}
            variant="outlined"
            SelectProps={{ native: true }}
          >
            <option value="Asia/Kolkata">Asia/Kolkata</option>
            <option value="UTC">UTC</option>
          </TextField>

          {/* Country */}
          <TextField
            fullWidth
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            variant="outlined"
          />

          {/* Currency */}
          <TextField
            select
            fullWidth
            label="Currency"
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
            variant="outlined"
            SelectProps={{ native: true }}
          >
            <option value="INR(₹)">INR(₹)</option>
            <option value="USD($)">USD($)</option>
          </TextField>

          {/* Checkbox */}
          <div className="flex items-center col-span-1 md:col-span-2 mt-2">
            <input
              type="checkbox"
              id="showCompanyName"
              name="showCompanyName"
              checked={formData.showCompanyName}
              onChange={handleInputChange}
              className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
            />
            <label
              htmlFor="showCompanyName"
              className="ml-2 text-gray-700 cursor-pointer"
            >
              Company name show in login page
            </label>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="submit"
              className="px-6 py-2 rounded text-white transition-colors"
              style={{
                backgroundColor: "var(--primary)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "rgba(6,182,212,0.9)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--primary)")
              }
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
            className="px-6 py-2 rounded text-white transition-colors"
            style={{
              backgroundColor: "var(--primary)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(6,182,212,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary)")
            }
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
