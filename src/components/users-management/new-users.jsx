import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Edit3 } from 'lucide-react';
import Button, { PrimaryButton, SecondaryButton } from '../ui/button';
import { addUser, getNas, getPlans, getPlanGroups, getZones } from '../../services/api';

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
    selectPlan: '',
    planGroup: '',
    simultaneousUse: '1',
    ipAddress: '',
    generateInvoice: true,
    userType: 'User'
  });

  // Dynamic data states
  const [nasListOptions, setNasListOptions] = useState([]);
  const [planOptions, setPlanOptions] = useState([]);
  const [planGroupOptions, setPlanGroupOptions] = useState([]);
  const [zoneOptions, setZoneOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch dynamic data on component mount
  useEffect(() => {
    fetchDynamicData();
  }, []);

  const fetchDynamicData = async () => {
    try {
      console.log('Fetching dynamic data...');
      
      // Fetch NAS options
      try {
        const nasResponse = await getNas();
        const nasOptions = nasResponse.data.map(nas => ({
          value: nas.id || nas.name,
          label: nas.name || nas.label || `NAS ${nas.id}`
        }));
        setNasListOptions(nasOptions);
        console.log('NAS options loaded:', nasOptions);
      } catch (nasError) {
        console.warn('Error fetching NAS, using fallback:', nasError);
        setNasListOptions([
          { value: 'nas1', label: 'NAS Server 1' },
          { value: 'nas2', label: 'NAS Server 2' },
          { value: 'nas3', label: 'NAS Server 3' }
        ]);
      }

      // Fetch Plans
      try {
        const plansResponse = await getPlans();
        const planOptions = plansResponse.data.map(plan => ({
          value: plan.id || plan.name,
          label: plan.name || plan.title || `Plan ${plan.id}`,
          price: plan.price || plan.cost
        }));
        setPlanOptions(planOptions);
        console.log('Plans loaded:', planOptions);
      } catch (planError) {
        console.warn('Error fetching plans, using fallback:', planError);
        setPlanOptions([
          { value: 'basic-100', label: 'Basic 100 Mbps - ₹299' },
          { value: 'premium-200', label: 'Premium 200 Mbps - ₹599' },
          { value: 'ultra-500', label: 'Ultra 500 Mbps - ₹999' },
          { value: 'fiber-1gb', label: 'Fiber 1 Gbps - ₹1999' }
        ]);
      }

      // Fetch Plan Groups
      try {
        const planGroupsResponse = await getPlanGroups();
        const planGroupOptions = planGroupsResponse.data.map(group => ({
          value: group.id || group.name,
          label: group.name || group.title || `Group ${group.id}`
        }));
        setPlanGroupOptions(planGroupOptions);
        console.log('Plan groups loaded:', planGroupOptions);
      } catch (groupError) {
        console.warn('Error fetching plan groups, using fallback:', groupError);
        setPlanGroupOptions([
          { value: 'residential', label: 'Residential' },
          { value: 'business', label: 'Business' },
          { value: 'enterprise', label: 'Enterprise' },
          { value: 'student', label: 'Student' }
        ]);
      }

      // Fetch Zones
      try {
        const zonesResponse = await getZones();
        const zoneOptions = zonesResponse.data.map(zone => ({
          value: zone.id || zone.name,
          label: zone.name || zone.title || `Zone ${zone.id}`
        }));
        setZoneOptions(zoneOptions);
        console.log('Zones loaded:', zoneOptions);
      } catch (zoneError) {
        console.warn('Error fetching zones, using fallback:', zoneError);
        setZoneOptions([
          { value: 'admin', label: 'Admin Zone' },
          { value: 'zone1', label: 'Zone 1 - Central' },
          { value: 'zone2', label: 'Zone 2 - North' },
          { value: 'zone3', label: 'Zone 3 - South' },
          { value: 'zone4', label: 'Zone 4 - East' }
        ]);
      }

      console.log('Dynamic data loading completed');
    } catch (error) {
      console.error('General error fetching dynamic data:', error);
      // Set minimal fallback data
      setNasListOptions([{ value: 'default', label: 'Default NAS' }]);
      setPlanOptions([{ value: 'basic', label: 'Basic Plan - ₹299' }]);
      setPlanGroupOptions([{ value: 'residential', label: 'Residential' }]);
      setZoneOptions([{ value: 'admin', label: 'Admin Zone' }]);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setFormData(prev => ({
      ...prev,
      userType: type,
      simultaneousUse: type === 'User' ? '1' : '',
      ipAddress: '' // Clear IP address when changing user type
    }));
  };

  const generateRandomPassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let password = '';
    for (let i = 0; i < 10; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    handleInputChange('password', password);
  };

  const handleSubmit = async () => {
    try {
      // Validate required fields
      if (!formData.username.trim()) {
        alert('Username is required');
        return;
      }

      if (!formData.password.trim()) {
        alert('Password is required');
        return;
      }

      setLoading(true);
      
      console.log('=== FRONTEND SUBMIT ===');
      console.log('Form data being sent:', JSON.stringify(formData, null, 2));

      // Use the API service instead of direct axios call
      const response = await addUser(formData);
      
      console.log('Success response:', response.data);
      alert('User added successfully!');
      handleCancel();
      
    } catch (err) {
      console.error('=== FRONTEND ERROR ===');
      console.error('Full error object:', err);
      
      if (err.response) {
        // Server responded with error
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
        console.error('Response headers:', err.response.headers);
        
        const errorMessage = err.response.data?.error || err.response.data?.message || 'Server error';
        const errorDetails = err.response.data?.details || '';
        const errorField = err.response.data?.field || '';
        
        let alertMessage = `Failed to add user: ${errorMessage}`;
        if (errorDetails) alertMessage += `\nDetails: ${errorDetails}`;
        if (errorField) alertMessage += `\nField: ${errorField}`;
        
        alert(alertMessage);
      } else if (err.request) {
        // Request was made but no response received
        console.error('No response received:', err.request);
        alert('Failed to add user: No response from server. Please check if the server is running on http://localhost:3000');
      } else {
        // Something else happened
        console.error('Request setup error:', err.message);
        alert('Failed to add user: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      password: 'WavesNet123',
      zone: 'admin',
      discount: '0',
      nasList: '',
      selectPlan: '',
      planGroup: '',
      simultaneousUse: '1',
      ipAddress: '',
      generateInvoice: true,
      userType: 'User'
    });
    setUserType('User');
  };

  const getIpPlaceholder = () => {
    switch (userType) {
      case 'User':
        return 'IP Address (optional)';
      case 'Mac / Static IP':
        return 'Mac / IP Address';
      case 'Multiple Static IP':
        return 'Multiple IP Addresses (comma separated)';
      default:
        return 'IP Address';
    }
  };

  return (
    <div className="p-6 pt-0 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="pb-4 border-b border-gray-200 mb-6">
        <h2 className="text-xl font-semibold text-gray-900">New User</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex">
            {['ACCOUNT INFO', 'USER INFO'].map(tab => (
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
        <div className="p-8">
          {activeTab === 'ACCOUNT INFO' && (
            <div className="space-y-8">
              {/* User Type Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-4">
                  Select User Type
                </label>
                <div className="flex gap-8">
                  {[
                    { value: 'User', label: 'User' },
                    { value: 'Mac / Static IP', label: 'Mac / Static IP' },
                    { value: 'Multiple Static IP', label: 'Multiple Static IP' }
                  ].map(type => (
                    <label key={type.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value={type.value}
                        checked={userType === type.value}
                        onChange={e => handleUserTypeChange(e.target.value)}
                        className="w-5 h-5 text-cyan-500 border-gray-300 focus:ring-cyan-500"
                      />
                      <span className="ml-3 text-sm text-gray-700 font-medium">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Username */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      User name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.username}
                        onChange={e => handleInputChange('username', e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                        placeholder="Admin"
                        required
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                      >
                        <Edit3 className="w-4 h-4 text-cyan-500" />
                      </button>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={e => handleInputChange('password', e.target.value)}
                        className="w-full pl-3 pr-20 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900"
                        required
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="p-1"
                        >
                          {showPassword ? 
                            <EyeOff className="w-4 h-4 text-gray-400" /> : 
                            <Eye className="w-4 h-4 text-gray-400" />
                          }
                        </button>
                        <button
                          type="button"
                          onClick={generateRandomPassword}
                          className="p-1"
                        >
                          <Edit3 className="w-4 h-4 text-cyan-500" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Zone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Zone</label>
                    <select
                      value={formData.zone}
                      onChange={e => handleInputChange('zone', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      {zoneOptions.map(zone => (
                        <option key={zone.value} value={zone.value}>
                          {zone.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Discount */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Discount</label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={formData.discount}
                        onChange={e => handleInputChange('discount', e.target.value)}
                        className="w-full pl-3 pr-16 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900"
                        placeholder="0"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                        <span className="text-gray-400">%</span>
                        <span className="text-gray-400">₹</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* NAS List */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Nas List</label>
                    <select
                      value={formData.nasList}
                      onChange={e => handleInputChange('nasList', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Select NAS</option>
                      {nasListOptions.map(nas => (
                        <option key={nas.value} value={nas.value}>
                          {nas.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Select Plan */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Select Plan</label>
                    <select
                      value={formData.selectPlan}
                      onChange={e => handleInputChange('selectPlan', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Select Plan</option>
                      {planOptions.map(plan => (
                        <option key={plan.value} value={plan.value}>
                          {plan.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Plan Group */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Plan Group</label>
                    <select
                      value={formData.planGroup}
                      onChange={e => handleInputChange('planGroup', e.target.value)}
                      className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 bg-white"
                    >
                      <option value="">Select Plan Group</option>
                      {planGroupOptions.map(group => (
                        <option key={group.value} value={group.value}>
                          {group.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Simultaneous Use - Only show for User type */}
                  {userType === 'User' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">
                        Simultaneous Use
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.simultaneousUse}
                        onChange={e => handleInputChange('simultaneousUse', e.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                  )}

                  {/* IP Address */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-600 mb-2">
                      IP Address
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.ipAddress}
                        onChange={e => handleInputChange('ipAddress', e.target.value)}
                        placeholder={getIpPlaceholder()}
                        className="w-full pl-3 pr-24 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-cyan-500 text-white text-xs rounded font-medium hover:bg-cyan-600 transition-colors"
                      >
                        Unused Ip
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generate Invoice Checkbox */}
              <div className="flex items-center pt-4">
                <input
                  type="checkbox"
                  id="generateInvoice"
                  checked={formData.generateInvoice}
                  onChange={e => handleInputChange('generateInvoice', e.target.checked)}
                  className="w-5 h-5 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                />
                <label htmlFor="generateInvoice" className="ml-3 text-sm font-medium text-gray-700">
                  Generate Invoice
                </label>
              </div>
            </div>
          )}

          {activeTab === 'USER INFO' && (
            <div className="text-center text-gray-500 py-12">
              <p className="text-lg">User information form will be implemented here</p>
              <p className="text-sm mt-2">This section will contain additional user details like contact information, address, etc.</p>
            </div>
          )}
        </div>

        {/* Form Actions */}
        <div className="px-8 py-4 border-t border-gray-200 flex gap-4">
          <PrimaryButton 
            onClick={handleSubmit}
            disabled={loading}
            className={`${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'SAVING...' : 'SAVE USER'}
          </PrimaryButton>
          <SecondaryButton onClick={handleCancel} disabled={loading}>
            CANCEL
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default NewUser;