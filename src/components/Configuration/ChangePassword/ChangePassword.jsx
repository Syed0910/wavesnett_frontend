import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ChangePassword = () => {
  const [values, setValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    showCurrent: false,
    showNew: false,
    showConfirm: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => () => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.newPassword !== values.confirmPassword) {
      alert('New password and confirmation password do not match!');
      return;
    }
    if (values.newPassword.length < 8) {
      alert('New password must be at least 8 characters long!');
      return;
    }
    console.log('Password change submitted');
    alert('Password changed successfully!');
  };

  const handleCancel = () => {
    setValues({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      showCurrent: false,
      showNew: false,
      showConfirm: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-lg mx-auto bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-light text-gray-800 mb-8">Change Password</h1>

        <div className="space-y-5">
          <div className="relative">
            <input
              type={values.showCurrent ? "text" : "password"}
              placeholder="Current Password"
              value={values.currentPassword}
              onChange={handleChange("currentPassword")}
              className="w-full px-4 py-4 pr-12 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="button"
              onClick={handleClickShowPassword("showCurrent")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              {values.showCurrent ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={values.showNew ? "text" : "password"}
              placeholder="New Password"
              value={values.newPassword}
              onChange={handleChange("newPassword")}
              className="w-full px-4 py-4 pr-12 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="button"
              onClick={handleClickShowPassword("showNew")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              {values.showNew ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative mb-10">
            <input
              type={values.showConfirm ? "text" : "password"}
              placeholder="Confirm New Password"
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              className="w-full px-4 py-4 pr-12 text-base border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="button"
              onClick={handleClickShowPassword("showConfirm")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              {values.showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5"
            >
              SUBMIT
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-transparent hover:bg-gray-50 text-gray-600 hover:text-gray-800 py-3 px-6 rounded-md font-semibold text-sm tracking-wider uppercase border-2 border-gray-300 hover:border-gray-400 transition-all duration-200"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;