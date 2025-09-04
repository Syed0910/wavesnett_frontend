// src/components/users-management/Policy.jsx
import React, { useState } from 'react';
import { Trash2 } from "lucide-react";

const Policy = ({ username }) => {
  const [formData, setFormData] = useState({
    addressList: '',
    zone: 'admin',
    downloadBandwidth: '',
    downloadUnit: 'Mbps',
    uploadBandwidth: '',
    uploadUnit: 'Mbps',
    expDate: '2025-12-18T17:07',
    discount: '0',
    discountType: '%',
    simultaneousUse: '1',
    ipAddress: '',
    gracePeriod: false,
    autoInvoice: true,
    autoRecharge: false,
    macBind: '20:0C:86:75:D7:C1',
    planCost: '',
    planGroup: ''
  });

  const [nasList, setNasList] = useState(['NAS_1']);
  const [attributes, setAttributes] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const removeNasTag = (index) => {
    setNasList(prev => prev.filter((_, i) => i !== index));
  };

  const addAttribute = () => {
    setAttributes(prev => [...prev, { attribute: '', value: '' }]);
  };

  const updateAttribute = (index, field, value) => {
    setAttributes(prev => prev.map((attr, i) => 
      i === index ? { ...attr, [field]: value } : attr
    ));
  };

  const removeAttribute = (index) => {
    setAttributes(prev => prev.filter((_, i) => i !== index));
  };

  const releaseMac = () => {
    setFormData(prev => ({ ...prev, macBind: '' }));
    alert('MAC address released');
  };

  const applyPolicy = () => {
    alert('Policy applied successfully!');
  };

  const resetUser = () => {
    if (window.confirm('Are you sure you want to reset the user?')) {
      setFormData({
        addressList: '',
        zone: 'admin',
        downloadBandwidth: '',
        downloadUnit: 'Mbps',
        uploadBandwidth: '',
        uploadUnit: 'Mbps',
        expDate: '2025-12-18T17:07',
        discount: '0',
        discountType: '%',
        simultaneousUse: '1',
        ipAddress: '',
        gracePeriod: false,
        autoInvoice: false,
        autoRecharge: false,
        macBind: '',
        planCost: '',
        planGroup: ''
      });
      setAttributes([]);
      alert('User reset successfully!');
    }
  };

  return (
    <div className="max-w-8xl mx-auto bg-white p-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Policy</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <Trash2 size={18} /> Delete
        </button>
      </div>

      {/* Main Content */}
      <div>
        <div className="grid grid-cols-2 gap-5 mb-8">
          {/* Address List */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Address List</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              value={formData.addressList}
              onChange={(e) => handleInputChange('addressList', e.target.value)}
            >
              <option value="">Select Address List</option>
              <option value="list1">Address List 1</option>
              <option value="list2">Address List 2</option>
            </select>
          </div>

          {/* Zone */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Zone</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              value={formData.zone}
              onChange={(e) => handleInputChange('zone', e.target.value)}
            >
              <option value="admin">admin</option>
              <option value="user">user</option>
              <option value="guest">guest</option>
            </select>
          </div>

          {/* Download Bandwidth */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Download Bandwidth</label>
            <div className="flex">
              <input 
                type="text" 
                className="flex-1 p-2 border border-gray-300 rounded-l text-sm focus:outline-none focus:border-blue-500"
                value={formData.downloadBandwidth}
                onChange={(e) => handleInputChange('downloadBandwidth', e.target.value)}
                placeholder="Enter bandwidth"
              />
              <select 
                className="w-20 p-2 border-l-0 border border-gray-300 rounded-r text-sm focus:outline-none focus:border-blue-500"
                value={formData.downloadUnit}
                onChange={(e) => handleInputChange('downloadUnit', e.target.value)}
              >
                <option value="Mbps">Mbps</option>
                <option value="Kbps">Kbps</option>
                <option value="Gbps">Gbps</option>
              </select>
            </div>
          </div>

          {/* Upload Bandwidth */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Upload Bandwidth</label>
            <div className="flex">
              <input 
                type="text" 
                className="flex-1 p-2 border border-gray-300 rounded-l text-sm focus:outline-none focus:border-blue-500"
                value={formData.uploadBandwidth}
                onChange={(e) => handleInputChange('uploadBandwidth', e.target.value)}
                placeholder="Enter bandwidth"
              />
              <select 
                className="w-20 p-2 border-l-0 border border-gray-300 rounded-r text-sm focus:outline-none focus:border-blue-500"
                value={formData.uploadUnit}
                onChange={(e) => handleInputChange('uploadUnit', e.target.value)}
              >
                <option value="Mbps">Mbps</option>
                <option value="Kbps">Kbps</option>
                <option value="Gbps">Gbps</option>
              </select>
            </div>
          </div>

          {/* Exp. Date */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Exp. Date</label>
            <input 
              type="datetime-local" 
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              value={formData.expDate}
              onChange={(e) => handleInputChange('expDate', e.target.value)}
            />
          </div>

          {/* Discount */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Discount</label>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                className="w-20 p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                value={formData.discount}
                onChange={(e) => handleInputChange('discount', e.target.value)}
              />
              <span className="text-blue-500 text-sm">%</span>
              <label className="relative inline-block w-10 h-5">
                <input 
                  type="checkbox" 
                  className="sr-only"
                  checked={formData.discountType === '₹'}
                  onChange={(e) => handleInputChange('discountType', e.target.checked ? '₹' : '%')}
                />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all duration-300 before:absolute before:content-[''] before:h-4 before:w-4 before:left-0.5 before:bottom-0.5 before:bg-white before:rounded-full before:transition-all before:duration-300 checked:bg-blue-500 before:checked:translate-x-5"></span>
              </label>
              <span className="text-gray-600 text-sm">₹</span>
            </div>
          </div>

          {/* Select NAS */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Select NAS</label>
            <div className="flex flex-wrap gap-2">
              {nasList.map((nas, index) => (
                <span key={index} className="inline-flex items-center bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                  {nas}
                  <button 
                    onClick={() => removeNasTag(index)}
                    className="ml-2 text-gray-500 hover:text-gray-700 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Empty cell for alignment */}
          <div></div>

          {/* IP Address */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">IP Address</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              value={formData.ipAddress}
              onChange={(e) => handleInputChange('ipAddress', e.target.value)}
              placeholder="Enter IP Address"
            />
            <div className="text-blue-500 text-xs mt-1">Unused Ip</div>
          </div>

          {/* Checkboxes Column */}
          <div className="space-y-2">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                checked={formData.gracePeriod}
                onChange={(e) => handleInputChange('gracePeriod', e.target.checked)}
              />
              <span className="text-sm">Grace period</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                checked={formData.autoInvoice}
                onChange={(e) => handleInputChange('autoInvoice', e.target.checked)}
              />
              <span className="text-sm">Auto Invoice Generate</span>
            </label>
          </div>

          {/* Simultaneous Use */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Simultaneous Use</label>
            <input 
              type="number" 
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              value={formData.simultaneousUse}
              onChange={(e) => handleInputChange('simultaneousUse', e.target.value)}
            />
          </div>

          {/* Auto Recharge Renew */}
          <div>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                className="mr-2"
                checked={formData.autoRecharge}
                onChange={(e) => handleInputChange('autoRecharge', e.target.checked)}
              />
              <span className="text-sm">Auto Recharge Renew</span>
            </label>
          </div>

          {/* Mac Bind */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Mac Bind</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                className="flex-1 p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                value={formData.macBind}
                onChange={(e) => handleInputChange('macBind', e.target.value)}
                readOnly
              />
              <button 
                onClick={releaseMac}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-xs font-medium"
              >
                RELEASE MAC
              </button>
            </div>
          </div>

          {/* Plan Cost */}
          <div>
            <label className="block text-xs text-gray-600 mb-1 font-medium">Plan Cost</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              value={formData.planCost}
              onChange={(e) => handleInputChange('planCost', e.target.value)}
              placeholder="Enter plan cost"
            />
            <div className="text-red-500 text-xs mt-1">⚠</div>
          </div>

          {/* Plan Group - Full Width */}
          <div className="col-span-2">
            <label className="block text-xs text-gray-600 mb-1 font-medium">Plan Group</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
              value={formData.planGroup}
              onChange={(e) => handleInputChange('planGroup', e.target.value)}
            >
              <option value="">Select Plan Group</option>
              <option value="basic">Basic Plan</option>
              <option value="premium">Premium Plan</option>
              <option value="enterprise">Enterprise Plan</option>
            </select>
          </div>
        </div>

        {/* Extra Attributes Section */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-base font-medium">Extra Attribute</h3>
            <button 
              onClick={addAttribute}
              className="bg-blue-500 hover:bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm"
            >
              +
            </button>
          </div>
          
          {attributes.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 text-xs font-medium text-gray-600">Attribute</th>
                    <th className="text-left p-3 text-xs font-medium text-gray-600">Value</th>
                    <th className="text-left p-3 text-xs font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {attributes.map((attr, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-3">
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                          value={attr.attribute}
                          onChange={(e) => updateAttribute(index, 'attribute', e.target.value)}
                          placeholder="Attribute name"
                        />
                      </td>
                      <td className="p-3">
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
                          value={attr.value}
                          onChange={(e) => updateAttribute(index, 'value', e.target.value)}
                          placeholder="Attribute value"
                        />
                      </td>
                      <td className="p-3">
                        <button 
                          onClick={() => removeAttribute(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Form Actions */}
<div className="flex justify-between items-center mt-8 pt-5 border-t border-gray-200">
  {/* Left side - Apply button */}
  <button
    onClick={applyPolicy}
    className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded text-sm font-medium"
  >
    APPLY
  </button>

  {/* Right side - Other actions */}
  <div className="flex gap-3">
    <button
      onClick={resetUser}
      className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded text-sm font-medium"
    >
      Reset User
    </button>
    <button
      onClick={() => alert("Change user type functionality")}
      className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded text-sm font-medium"
    >
      Change User Type
    </button>
    <button
      onClick={() => alert("Client portal permission functionality")}
      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded text-sm font-medium"
    >
      Client Portal Permission
    </button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Policy;