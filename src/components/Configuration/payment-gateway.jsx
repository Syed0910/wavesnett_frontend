// components/Configuration/paymentGateway.jsx
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PaymentGateway = () => {
  const [showMerchantSecret, setShowMerchantSecret] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  
  const [paymentSettings, setPaymentSettings] = useState({
    gateway: "Razorpay",
    zoneBalanceLimit: "0",
    merchantApiKey: "rzp_live_MMR4Dx2IRvsQCh",
    merchantSecret: "SL2nkLIMvEnH339CxMADTvz",
    isEnabled: true
  });

  const handleInputChange = (field, value) => {
    setPaymentSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToggleEnable = () => {
    setPaymentSettings(prev => ({
      ...prev,
      isEnabled: !prev.isEnabled
    }));
  };

  const handleSubmit = (action) => {
    console.log(`${action} clicked with settings:`, paymentSettings);
  };

  return (
    <div className="space-y-6">
      {/* Payment Gateway Configuration */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Gateway</h2>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Payment Gateway
            </label>
            <select
              value={paymentSettings.gateway}
              onChange={(e) => handleInputChange('gateway', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="Razorpay">Razorpay</option>
              <option value="Payu">PayU</option>
              <option value="CCAvenue">CCAvenue</option>
              <option value="Instamojo">Instamojo</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zone Balance Limit
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <input
                type="number"
                value={paymentSettings.zoneBalanceLimit}
                onChange={(e) => handleInputChange('zoneBalanceLimit', e.target.value)}
                className="w-full outline-none text-sm"
              />
              <span className="ml-2 text-gray-500">₹</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Merchant API key
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <input
                type={showApiKey ? "text" : "password"}
                value={paymentSettings.merchantApiKey}
                onChange={(e) => handleInputChange('merchantApiKey', e.target.value)}
                className="w-full outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                style={{ backgroundColor: "var(--primary)" }}
                className="hover:opacity-90 text-white px-6 py-2 rounded-md font-medium"
              >
                {showApiKey ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Merchant Secret
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <input
                type={showMerchantSecret ? "text" : "password"}
                value={paymentSettings.merchantSecret}
                onChange={(e) => handleInputChange('merchantSecret', e.target.value)}
                className="w-full outline-none text-sm"
              />
              <button
                type="button"
                onClick={() => setShowMerchantSecret(!showMerchantSecret)}
                 style={{ backgroundColor: "var(--primary)" }}
                 className="hover:opacity-90 text-white px-6 py-2 rounded-md font-medium"
              >
                {showMerchantSecret ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Enable/Disable Toggle */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-gray-700">
            {paymentSettings.isEnabled ? "Disable" : "Enable"}
          </span>
          <div 
            onClick={handleToggleEnable}
            className={`relative inline-flex h-6 w-12 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
              paymentSettings.isEnabled ? 'bg-cyan-400' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                paymentSettings.isEnabled ? 'translate-x-6' : 'translate-x-0.5'
              } mt-0.5`}
            />
          </div>
          <span className="text-sm font-medium text-gray-700">Enable</span>
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={() => handleSubmit('SUBMIT')}
             style={{ backgroundColor: "var(--primary)" }}
            className="hover:opacity-90 text-white px-6 py-2 rounded-md font-medium"
          >
            SUBMIT
          </button>
          <button 
            onClick={() => handleSubmit('CANCEL')}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium"
          >
            CANCEL
          </button>
        </div>
      </div>

      {/* Payment Gateway API */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Payment Gateway API</h2>
        
        <div className="flex space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
            BHARATPE API
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md font-medium">
            DEMANDPAY API
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;