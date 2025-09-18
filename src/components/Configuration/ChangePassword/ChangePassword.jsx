// configuration/changepassword/change-password.jsx
import React, { useState } from "react";
import { Key, EyeOff, Eye } from "lucide-react";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="max-w-8xl mx-auto bg-white p-0 pt-0 min-h-screen">
      <h2 className="text-lg font-semibold mb-4">Change Password</h2>

      {/* Current Password */}
      <div className="mb-3">
        <div className="flex items-center w-1/2 border border-gray-300 rounded px-2">
          <input
            type="password"
            placeholder="Current Password"
            className="flex-1 p-2 outline-none"
            style={{ outlineColor: "var(--primary)" }}
          />
          <Key className="text-gray-500" size={18} />
        </div>
      </div>

      {/* New Password */}
      <div className="mb-3">
        <div className="flex items-center w-1/2 border border-gray-300 rounded px-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            className="flex-1 p-2 outline-none"
            style={{ outlineColor: "var(--primary)" }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="p-1"
          >
            {showPassword ? (
              <Eye className="text-gray-500" size={18} />
            ) : (
              <Key className="text-gray-500" size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className="mb-5">
        <div className="flex items-center w-1/2 border border-gray-300 rounded px-2">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm New Password"
            className="flex-1 p-2 outline-none"
            style={{ outlineColor: "var(--primary)" }}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="p-1"
          >
            {showConfirmPassword ? (
              <Eye className="text-gray-500" size={18} />
            ) : (
              <EyeOff className="text-gray-500" size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          className="text-white px-3 py-1 rounded shadow hover:opacity-90 transition-colors"
          style={{ backgroundColor: "var(--primary)" }}
        >
          SUBMIT
        </button>
        <button className="border px-3 py-1 rounded hover:bg-gray-100 transition-colors">
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;