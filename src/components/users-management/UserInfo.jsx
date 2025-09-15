import React, { useState } from "react";
import {
  ChevronDown,
  Upload,
  FileText,
  Printer,
  Trash2,
} from "lucide-react";

const UserInfo = () => {
  const [selectedUser, setSelectedUser] = useState("mohammed");

  // Initial user data
  const initialData = {
    mohammed: {
      personalDetails: {
        contactPerson: "Mohammed Abdul wahab",
        phone: "9448652221",
        email: "awar777@gmail.com",
        dateOfBirth: "",
        taxNumber: "",
        companyName: "",
        alternateContactNo: "",
        nationality: "Indian",
        gender: "Male",
      },
      billingAddress: {
        address1: "Near Sagar Bakery",
        address2: "Hagarga road",
        city: "Kalaburagi",
        zipCode: "585104",
      },
      installationAddress: {
        address1: "Near Sagar Bakery",
        address2: "Hagarga Road",
        city: "Kalaburagi",
        zipCode: "585104",
      },
      documentDetails: {
        idProof: "Aadhaar Card",
        identityProofNo: "307681546097",
        addressProof: "Aadhaar Card",
        addressProofNo: "Aadhar card",
      },
      portalDetails: {
        notes: "",
        cpeIpAddress: "",
        latitude: "",
        longitude: "",
        enableUserPortalLogin: true,
      },
      userInvoiceTaxable: true,
      installationSameAsBilling: false,
    },
    abdul: {
      personalDetails: {
        contactPerson: "Alternuddin Mahagoorwi",
        phone: "8050046134",
        email: "alternudds@gmail.com",
        dateOfBirth: "1980-07-30",
        taxNumber: "",
        companyName: "WavesNett",
        alternateContactNo: "",
        nationality: "Indian",
        gender: "Male",
      },
      billingAddress: {
        address1: "New Bank Colony near Huma hotel",
        address2: "",
        city: "Kalahurgi",
        zipCode: "585104",
      },
      installationAddress: {
        address1: "New Bank Colony near Huma hotel",
        address2: "",
        city: "Kalahurgi",
        zipCode: "585104",
      },
      documentDetails: {
        idProof: "Aadhaar Card",
        identityProofNo: "307681546097",
        addressProof: "Aadhaar Card",
        addressProofNo: "Aadhar card",
      },
      portalDetails: {
        notes: "",
        cpeIpAddress: "",
        latitude: "",
        longitude: "",
        enableUserPortalLogin: true,
      },
      userInvoiceTaxable: true,
      installationSameAsBilling: true,
    },
  };

  // Store state
  const [userData, setUserData] = useState(initialData);

  const currentUser = userData[selectedUser];

  // Update nested state dynamically
  const handleChange = (section, field, value) => {
    setUserData((prev) => ({
      ...prev,
      [selectedUser]: {
        ...prev[selectedUser],
        [section]: {
          ...prev[selectedUser][section],
          [field]: value,
        },
      },
    }));
  };

  // Reusable Inputs
  const InputField = ({
    label,
    value,
    onChange,
    type = "text",
    className = "",
    placeholder = "",
  }) => (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-400 rounded text-sm 
                   focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                   transition-colors duration-200"
      />
    </div>
  );

  const SelectField = ({ label, value, onChange, options, className = "" }) => (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 pr-8 border border-gray-400 rounded text-sm 
                   focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                   transition-colors duration-200 appearance-none"
      >
        {options.length === 0 ? (
          <option disabled>No data available</option>
        ) : (
          options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))
        )}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );

  return (
    <div className="max-w-8xl mx-auto bg-white p-6 space-y-8">
      {/* ===== Header ===== */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">User Info</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Trash2 size={18} /> Delete
        </button>
      </div>

      {/* ===== Personal Details ===== */}
      <section>
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Personal Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <InputField
              label="Contact Person"
              value={currentUser.personalDetails.contactPerson}
              onChange={(val) =>
                handleChange("personalDetails", "contactPerson", val)
              }
            />
            <InputField
              label="Phone"
              value={currentUser.personalDetails.phone}
              onChange={(val) => handleChange("personalDetails", "phone", val)}
            />
            <InputField
              label="Email"
              value={currentUser.personalDetails.email}
              onChange={(val) => handleChange("personalDetails", "email", val)}
            />
            <InputField
              label="Date Of Birth"
              type="date"
              value={currentUser.personalDetails.dateOfBirth}
              onChange={(val) =>
                handleChange("personalDetails", "dateOfBirth", val)
              }
            />
            <InputField
              label="Tax Number"
              value={currentUser.personalDetails.taxNumber}
              onChange={(val) =>
                handleChange("personalDetails", "taxNumber", val)
              }
            />
          </div>

          <div className="space-y-4">
            <InputField
              label="Company Name"
              value={currentUser.personalDetails.companyName}
              onChange={(val) =>
                handleChange("personalDetails", "companyName", val)
              }
            />
            <InputField
              label="Alternate Contact No"
              value={currentUser.personalDetails.alternateContactNo}
              onChange={(val) =>
                handleChange("personalDetails", "alternateContactNo", val)
              }
            />
            <InputField
              label="Nationality"
              value={currentUser.personalDetails.nationality}
              onChange={(val) =>
                handleChange("personalDetails", "nationality", val)
              }
            />

            {/* Gender */}
            <div>
              <label className="block text-xs text-gray-600 mb-2">Gender</label>
              <div className="flex items-center space-x-6">
                {["Male", "Female"].map((g) => (
                  <label key={g} className="flex items-center">
                    <input
                      type="radio"
                      checked={currentUser.personalDetails.gender === g}
                      onChange={() =>
                        handleChange("personalDetails", "gender", g)
                      }
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-2 text-sm text-gray-700">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Taxable Checkbox */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={currentUser.userInvoiceTaxable}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    [selectedUser]: {
                      ...prev[selectedUser],
                      userInvoiceTaxable: e.target.checked,
                    },
                  }))
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                User invoice will be taxable
              </span>
            </label>
          </div>
        </div>
      </section>

      {/* ===== Billing & Installation ===== */}
      <section>
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Billing and Installation Address
        </h2>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={currentUser.installationSameAsBilling}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                [selectedUser]: {
                  ...prev[selectedUser],
                  installationSameAsBilling: e.target.checked,
                },
              }))
            }
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">
            Installation address is same as billing
          </span>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Billing */}
          <div className="space-y-4">
            <InputField
              label="Billing Address1"
              value={currentUser.billingAddress.address1}
              onChange={(val) => handleChange("billingAddress", "address1", val)}
            />
            <InputField
              label="Billing Address2"
              value={currentUser.billingAddress.address2}
              onChange={(val) => handleChange("billingAddress", "address2", val)}
            />
            <InputField
              label="Billing City"
              value={currentUser.billingAddress.city}
              onChange={(val) => handleChange("billingAddress", "city", val)}
            />
            <InputField
              label="Billing ZIP Code"
              value={currentUser.billingAddress.zipCode}
              onChange={(val) => handleChange("billingAddress", "zipCode", val)}
            />
          </div>
          {/* Installation */}
          <div className="space-y-4">
            <InputField
              label="Installation Address1"
              value={currentUser.installationAddress.address1}
              onChange={(val) =>
                handleChange("installationAddress", "address1", val)
              }
            />
            <InputField
              label="Installation Address2"
              value={currentUser.installationAddress.address2}
              onChange={(val) =>
                handleChange("installationAddress", "address2", val)
              }
            />
            <InputField
              label="Installation City"
              value={currentUser.installationAddress.city}
              onChange={(val) =>
                handleChange("installationAddress", "city", val)
              }
            />
            <InputField
              label="Installation ZIP Code"
              value={currentUser.installationAddress.zipCode}
              onChange={(val) =>
                handleChange("installationAddress", "zipCode", val)
              }
            />
          </div>
        </div>
      </section>

      {/* ===== Document Details ===== */}
      <section>
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Document Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SelectField
            label="Select ID Proof"
            value={currentUser.documentDetails.idProof}
            onChange={(val) => handleChange("documentDetails", "idProof", val)}
            options={["Aadhaar Card", "PAN Card", "Passport"]}
          />
          <SelectField
            label="Select Address Proof"
            value={currentUser.documentDetails.addressProof}
            onChange={(val) =>
              handleChange("documentDetails", "addressProof", val)
            }
            options={["Aadhaar Card", "Electricity Bill", "Ration Card"]}
          />
          <InputField
            label="Identity Proof No"
            value={currentUser.documentDetails.identityProofNo}
            onChange={(val) =>
              handleChange("documentDetails", "identityProofNo", val)
            }
          />
          <InputField
            label="Address Proof No"
            value={currentUser.documentDetails.addressProofNo}
            onChange={(val) =>
              handleChange("documentDetails", "addressProofNo", val)
            }
          />
        </div>
      </section>

      {/* ===== Portal Details ===== */}
      <section>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Portal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Notes"
            value={currentUser.portalDetails.notes}
            onChange={(val) => handleChange("portalDetails", "notes", val)}
          />
          <InputField
            label="Latitude"
            value={currentUser.portalDetails.latitude}
            onChange={(val) => handleChange("portalDetails", "latitude", val)}
          />
          <InputField
            label="CPE IP Address"
            value={currentUser.portalDetails.cpeIpAddress}
            onChange={(val) =>
              handleChange("portalDetails", "cpeIpAddress", val)
            }
          />
          <InputField
            label="Longitude"
            value={currentUser.portalDetails.longitude}
            onChange={(val) => handleChange("portalDetails", "longitude", val)}
          />
        </div>
        <label className="flex items-center mt-4">
          <input
            type="checkbox"
            checked={currentUser.portalDetails.enableUserPortalLogin}
            onChange={(e) =>
              handleChange(
                "portalDetails",
                "enableUserPortalLogin",
                e.target.checked
              )
            }
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">
            Enable User Portal Login
          </span>
        </label>
      </section>

      {/* ===== Document Upload ===== */}
      <section>
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Document Upload
        </h2>
        <div className="flex items-end space-x-4">
          <div className="flex-1">
            <InputField
              label="Document Name"
              value=""
              onChange={() => {}}
              placeholder="Document Name"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4 mr-2" /> Choose File
          </button>
          <button className="px-6 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors">
            UPLOAD
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          You can not upload more than 3 documents
        </p>
      </section>

      {/* ===== Actions ===== */}
      <div className="flex items-center justify-between pt-4">
        <button className="px-6 py-2 bg-teal-500 text-white text-sm rounded hover:bg-teal-600 transition-colors">
          APPLY
        </button>
        <div className="flex space-x-2">
          <button className="p-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors">
            <FileText className="w-5 h-5" />
          </button>
          <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            <Printer className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
