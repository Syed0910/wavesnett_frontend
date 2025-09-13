import React, { useState } from 'react';
import { Eye, EyeOff, Settings, Percent, DollarSign } from 'lucide-react';
import Button, { PrimaryButton, SecondaryButton } from '../ui/button';

const NewUser = () => {
  const [activeTab, setActiveTab] = useState('ACCOUNT INFO');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('User');
  const [formData, setFormData] = useState({
    username: '',
    password: 'WavesNet123',
    zone: 'admin',
    discount: '0',
    nasList: '',
    plan: '',
    planGroup: '',
    simultaneousUse: '1',
    ipAddress: '',
    generateInvoice: true
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    
    // Reset IP address when changing user type
    if (type !== 'User') {
      setFormData(prev => ({
        ...prev,
        simultaneousUse: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        simultaneousUse: '1'
      }));
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    // Handle form submission
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      username: '',
      password: 'WavesNet123',
      zone: 'admin',
      discount: '0',
      nasList: '',
      plan: '',
      planGroup: '',
      simultaneousUse: '1',
      ipAddress: '',
      generateInvoice: true
    });
    setUserType('User');
  };

  return (
    <div className="p-0 pt-0 max-w-8xl mx-auto bg-gray-50 min-h-screen">
      
        {/* Header */}
        <div className="p-0 pt-0 pb-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">New User</h2>
        </div>
<div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex">
            {['ACCOUNT INFO', 'USER INFO'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-cyan-500 text-cyan-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {activeTab === 'ACCOUNT INFO' && (
            <div className="space-y-6">
              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select User Type
                </label>
                <div className="flex gap-6">
                  {['User', 'Mac / Static IP', 'Multiple Static IP'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="userType"
                        value={type}
                        checked={userType === type}
                        onChange={(e) => handleUserTypeChange(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      User name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter username"
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full px-3 py-2 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Settings className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Zone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zone
                    </label>
                    <select
                      value={formData.zone}
                      onChange={(e) => handleInputChange('zone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="admin">admin</option>
                    </select>
                  </div>

                  {/* Discount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Discount
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={formData.discount}
                        onChange={(e) => handleInputChange('discount', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0"
                      />
                      <Button variant="outline" icon={<Percent className="w-4 h-4" />} />
                      <Button variant="outline" icon={<Settings className="w-4 h-4" />} />
                      <Button variant="outline" icon={<DollarSign className="w-4 h-4" />} />
                    </div>
                    <div className="mt-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.generateInvoice}
                          onChange={(e) => handleInputChange('generateInvoice', e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Generate Invoice</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* NAS List */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nas List
                    </label>
                    <select
                      value={formData.nasList}
                      onChange={(e) => handleInputChange('nasList', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select NAS</option>
                    </select>
                  </div>

                  {/* Select Plan */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Plan
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => handleInputChange('plan', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Plan</option>
                      <option value="WavesNett 50mbps UL 6M">WavesNett 50mbps UL 6M</option>
                      <option value="WavesNett 100Mbps UL 3M">WavesNett 100Mbps UL 3M</option>
                      <option value="WavesNett 50Mbps UL 12M">WavesNett 50Mbps UL 12M</option>
                    </select>
                  </div>

                  {/* Plan Group */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Plan Group
                    </label>
                    <select
                      value={formData.planGroup}
                      onChange={(e) => handleInputChange('planGroup', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Plan Group</option>
                    </select>
                  </div>

                  {/* Simultaneous Use - Only show for User type */}
                  {userType === 'User' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Simultaneous Use
                      </label>
                      <input
                        type="number"
                        value={formData.simultaneousUse}
                        onChange={(e) => handleInputChange('simultaneousUse', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="1"
                      />
                    </div>
                  )}

                  {/* IP Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      IP Address
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.ipAddress}
                        onChange={(e) => handleInputChange('ipAddress', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder={
                          userType === 'User' 
                            ? 'IP Address' 
                            : userType === 'Mac / Static IP' 
                            ? 'Mac / IP Address' 
                            : 'IP Addresses'
                        }
                      />
                      <Button variant="info" className="px-3">
                        Unused Ip
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'USER INFO' && (
            <div className="space-y-6">
              <div className="text-center text-gray-500 py-8">
                User information form will be implemented here
              </div>
            </div>
          )}
        </div>

        {/* Form Actions */}
        <div className="px-6 py-4 border-t border-gray-200 flex gap-3">
          <PrimaryButton onClick={handleSubmit}>
            NEXT
          </PrimaryButton>
          <SecondaryButton onClick={handleCancel}>
            CANCEL
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default NewUser;