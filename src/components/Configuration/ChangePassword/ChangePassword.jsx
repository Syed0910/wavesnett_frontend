import React, { useState } from 'react';
import { Key, EyeOff } from 'lucide-react';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = () => {
    // Add your password change logic here
    console.log('Password change submitted:', formData);
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="p-6 max-w-3xl bg-white">
      <h1 className="text-2xl font-normal text-gray-800 mb-8">Change Password</h1>
      
      <div className="space-y-6 max-w-2xl">
        {/* Current Password */}
        <div className="relative">
          <input
            type={showPasswords.current ? "text" : "password"}
            value={formData.currentPassword}
            onChange={(e) => handleInputChange('currentPassword', e.target.value)}
            placeholder="Current Password"
            className="w-full h-14 px-4 pr-12 border border-gray-300 rounded-md text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility('current')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Key size={20} />
          </button>
        </div>

        {/* New Password */}
        <div className="relative">
          <input
            type={showPasswords.new ? "text" : "password"}
            value={formData.newPassword}
            onChange={(e) => handleInputChange('newPassword', e.target.value)}
            placeholder="New Password"
            className="w-full h-14 px-4 pr-12 border border-gray-300 rounded-md text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility('new')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Key size={20} />
          </button>
        </div>

        {/* Confirm New Password */}
        <div className="relative">
          <input
            type={showPasswords.confirm ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            placeholder="Confirm New Password"
            className="w-full h-14 px-4 pr-12 border border-gray-300 rounded-md text-base text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility('confirm')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <EyeOff size={20} />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-8">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-cyan-500 text-white font-medium text-sm rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors uppercase tracking-wide"
          >
            SUBMIT
          </button>
          
          <button
            onClick={handleCancel}
            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium text-sm rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors uppercase tracking-wide"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;