// components/Configuration/billing.jsx
import React, { useState } from "react";

const Billing = () => {
  const [printingSettings, setPrintingSettings] = useState({
    defaultInvoiceSeries: "wNetinv (WT) (Inv -)",
    defaultInvoiceWithoutTax: "Default Invoice Series Without Tax",
    totalRoundOff: true,
    discountDisplayInPrint: true
  });

  const [taxSettings, setTaxSettings] = useState({
    selectedTax: "GST",
    gstNumber: "29ABDCA2224R1ZC",
    igstName: "IGST",
    igstRate: 18,
    sgstName: "SGST",
    sgstRate: 9,
    cgstName: "CGST",
    cgstRate: 9,
    acrTax: 0,
    hsnSacCode: "9984"
  });

  const [invoiceSettings, setInvoiceSettings] = useState({
    autoInvoiceRecharge: true,
    autoInvoiceOnlineRecharge: true,
    autoRenewPlan: "1",
    planCostDisplay: true,
    gracePeriod: false,
    zoneRefundType: "partial",
    outstandingAmount: true,
    midNightExpiry: true,
    disableOutstandingUpdate: false
  });

  const [invoiceSeries, setInvoiceSeries] = useState({
    name: "",
    title: "",
    prefix: "",
    terms: "",
    template: "Invoice Template 1",
    startingNumber: "1",
    withTax: true
  });

  const handlePrintingChange = (field, value) => {
    setPrintingSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleTaxChange = (field, value) => {
    setTaxSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleInvoiceChange = (field, value) => {
    setInvoiceSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSeriesChange = (field, value) => {
    setInvoiceSeries(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Printing Settings */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Printing Setting</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Default Invoice Series</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={printingSettings.defaultInvoiceSeries}
              onChange={(e) => handlePrintingChange('defaultInvoiceSeries', e.target.value)}
            >
              <option value="wNetinv (WT) (Inv -)">wNetinv (WT) (Inv -)</option>
            </select>
          </div>
          <div>
            <input 
              type="text"
              placeholder="Receipt terms"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            value={printingSettings.defaultInvoiceWithoutTax}
            onChange={(e) => handlePrintingChange('defaultInvoiceWithoutTax', e.target.value)}
          >
            <option value="Default Invoice Series Without Tax">Default Invoice Series Without Tax</option>
          </select>
        </div>

        <div className="space-y-2 mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={printingSettings.totalRoundOff}
              onChange={(e) => handlePrintingChange('totalRoundOff', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Total round off</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={printingSettings.discountDisplayInPrint}
              onChange={(e) => handlePrintingChange('discountDisplayInPrint', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Discount display in invoice print</span>
          </label>
        </div>

        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
          APPLY
        </button>
      </div>

      {/* Tax Settings */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Tax Settings</h2>
        
        <div className="mb-6">
          <div className="flex items-center space-x-6 mb-4">
            <span className="text-sm text-gray-700">Select Tax</span>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="taxType"
                value="None"
                checked={taxSettings.selectedTax === "None"}
                onChange={(e) => handleTaxChange('selectedTax', e.target.value)}
                className="w-4 h-4 text-cyan-400"
              />
              <span className="text-sm text-gray-700">None</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="taxType"
                value="GST"
                checked={taxSettings.selectedTax === "GST"}
                onChange={(e) => handleTaxChange('selectedTax', e.target.value)}
                className="w-4 h-4 text-cyan-400"
              />
              <span className="text-sm text-gray-700">GST</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="taxType"
                value="Service"
                checked={taxSettings.selectedTax === "Service"}
                onChange={(e) => handleTaxChange('selectedTax', e.target.value)}
                className="w-4 h-4 text-cyan-400"
              />
              <span className="text-sm text-gray-700">Service</span>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <input 
                type="text"
                placeholder="GST Number"
                value={taxSettings.gstNumber}
                onChange={(e) => handleTaxChange('gstNumber', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Tax Rate</span>
              <input 
                type="number"
                value={18}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span className="text-sm text-gray-700">%</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4">
            <div>
              <input 
                type="text"
                placeholder="Tax Name"
                value={taxSettings.igstName}
                onChange={(e) => handleTaxChange('igstName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="number"
                value={taxSettings.igstRate}
                onChange={(e) => handleTaxChange('igstRate', parseInt(e.target.value))}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span className="text-sm text-gray-700">%</span>
            </div>
            <div>
              <input 
                type="text"
                placeholder="Tax Name"
                value={taxSettings.sgstName}
                onChange={(e) => handleTaxChange('sgstName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="number"
                value={taxSettings.sgstRate}
                onChange={(e) => handleTaxChange('sgstRate', parseInt(e.target.value))}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span className="text-sm text-gray-700">%</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4">
            <div>
              <input 
                type="text"
                placeholder="Tax Name"
                value={taxSettings.cgstName}
                onChange={(e) => handleTaxChange('cgstName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input 
                type="number"
                value={taxSettings.cgstRate}
                onChange={(e) => handleTaxChange('cgstRate', parseInt(e.target.value))}
                className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <span className="text-sm text-gray-700">%</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">ACR Tax</span>
                <input 
                  type="number"
                  value={taxSettings.acrTax}
                  onChange={(e) => handleTaxChange('acrTax', parseInt(e.target.value))}
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-sm"
                />
                <span className="text-sm text-gray-700">%</span>
              </div>
            </div>
            <div>
              <input 
                type="text"
                placeholder="HSN/SAC Code"
                value={taxSettings.hsnSacCode}
                onChange={(e) => handleTaxChange('hsnSacCode', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>
        </div>

        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
          APPLY
        </button>
      </div>

      {/* Invoice & Plan Setting */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Invoice & Plan Setting</h2>
        
        <div className="space-y-3 mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.autoInvoiceRecharge}
              onChange={(e) => handleInvoiceChange('autoInvoiceRecharge', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Auto invoice generate during recharge and new user creation time</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.autoInvoiceOnlineRecharge}
              onChange={(e) => handleInvoiceChange('autoInvoiceOnlineRecharge', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Auto invoice generate during online recharge from the client portal</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-700 mb-2">Auto renew plan</label>
          <select 
            value={invoiceSettings.autoRenewPlan}
            onChange={(e) => handleInvoiceChange('autoRenewPlan', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">Automatically renew the plan and generate an invoice on this day</p>
        </div>

        <div className="space-y-3 mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.planCostDisplay}
              onChange={(e) => handleInvoiceChange('planCostDisplay', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Plan cost & plan name together displaying in recharge</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.gracePeriod}
              onChange={(e) => handleInvoiceChange('gracePeriod', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Grace period in days</span>
          </label>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-700">Zone refund on active recharge expire</span>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="zoneRefund"
                value="full"
                checked={invoiceSettings.zoneRefundType === "full"}
                onChange={(e) => handleInvoiceChange('zoneRefundType', e.target.value)}
                className="w-4 h-4 text-cyan-400"
              />
              <span className="text-sm text-gray-700">Full</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="zoneRefund"
                value="partial"
                checked={invoiceSettings.zoneRefundType === "partial"}
                onChange={(e) => handleInvoiceChange('zoneRefundType', e.target.value)}
                className="w-4 h-4 text-cyan-400"
              />
              <span className="text-sm text-gray-700">Partial [Hourly basis]</span>
            </label>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.outstandingAmount}
              onChange={(e) => handleInvoiceChange('outstandingAmount', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">The outstanding amount is added when online recharge</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.midNightExpiry}
              onChange={(e) => handleInvoiceChange('midNightExpiry', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Mid night expiry display one day before if mid night set is start of day</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.disableOutstandingUpdate}
              onChange={(e) => handleInvoiceChange('disableOutstandingUpdate', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">The outstanding amount is disable for update when online recharge</span>
          </label>
        </div>

        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
          APPLY
        </button>
      </div>

      {/* Invoice Series */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Invoice Series</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            type="text"
            placeholder="Invoice Series Name"
            value={invoiceSeries.name}
            onChange={(e) => handleSeriesChange('name', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <div className="flex items-center space-x-2">
            <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Invoice Template 1</option>
            </select>
            <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-2 rounded-md text-sm">
              VIEW
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            type="text"
            placeholder="Invoice Title"
            value={invoiceSeries.title}
            onChange={(e) => handleSeriesChange('title', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <input 
            type="text"
            placeholder="Invoice Starting Number"
            value={invoiceSeries.startingNumber}
            onChange={(e) => handleSeriesChange('startingNumber', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            type="text"
            placeholder="Invoice Prefix"
            value={invoiceSeries.prefix}
            onChange={(e) => handleSeriesChange('prefix', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSeries.withTax}
              onChange={(e) => handleSeriesChange('withTax', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Invoice With Tax</span>
          </label>
        </div>

        <textarea 
          placeholder="Invoice Terms"
          value={invoiceSeries.terms}
          onChange={(e) => handleSeriesChange('terms', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-20 mb-4"
        />

        <div className="flex space-x-4 mb-6">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
            APPLY
          </button>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md font-medium">
            Clear
          </button>
        </div>

        {/* Invoice Series Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Prefix</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Start From</th>
                <th className="px-4 py-2 text-left">With Tax</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">wNetinv</td>
                <td className="px-4 py-2">Inv -</td>
                <td className="px-4 py-2">Invoice</td>
                <td className="px-4 py-2">110</td>
                <td className="px-4 py-2">No</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-800">✓</button>
                    <button className="text-red-600 hover:text-red-800">✗</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">wNetinv (WT)</td>
                <td className="px-4 py-2">Inv -</td>
                <td className="px-4 py-2">Invoice</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Yes</td>
                <td className="px-4 py-2">
                  <div className="flex space-x-2">
                    <button className="text-green-600 hover:text-green-800">✓</button>
                    <button className="text-red-600 hover:text-red-800">✗</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;