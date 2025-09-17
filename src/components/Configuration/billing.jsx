// components/Configuration/billing.jsx
import React, { useState,useEffect } from "react";
import axios from "axios"; 

const Billing = () => {
  const [printingSettings, setPrintingSettings] = useState({
    defaultInvoiceSeries: "",
    defaultInvoiceWithoutTax: "",
    totalRoundOff: true,
    discountDisplayInPrint: true
  });

 const [taxSettings, setTaxSettings] = useState({
    selectedTax: "None",
    gstNumber: "",
    taxRate: 0,
    tax1Name: "",
    tax1Rate: 0,
    tax2Name: "",
    tax2Rate: 0,
    tax3Name: "",
    tax3Rate: 0,
    acrTax: 0,
    hsnSacCode: "",
  });
 const [loading, setLoading] = useState(true);

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

  
  const [invoiceSeries, setInvoiceSeries] = useState([]);
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
   const handleApply = async () => {
    try {
      const payload = {
        tax_type: taxSettings.selectedTax,
        tax_number: taxSettings.gstNumber,
        taxRate: taxSettings.taxRate,
        tax_1: [taxSettings.tax1Name, taxSettings.tax1Rate],
        tax_2: [taxSettings.tax2Name, taxSettings.tax2Rate],
        tax_3: [taxSettings.tax3Name, taxSettings.tax3Rate],
        agr: taxSettings.acrTax,
        HSNCode: taxSettings.hsnSacCode,
      };

      await axios.put("http://localhost:3000/api/configs/tax/config", payload);
      alert("Tax configuration updated successfully!");
    } catch (error) {
      console.error("Failed to update tax config:", error);
      alert("Failed to update tax config");
    }
  };
useEffect(() => {
    const fetchInvoiceSeries = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/billbooks"); // Replace with your API
        // Make sure to assign array to state
        setInvoiceSeries(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Failed to fetch invoice series:", err);
        setInvoiceSeries([]); // fallback empty array
      }
    };

    fetchInvoiceSeries();
  }, [])
    useEffect(() => {
    const fetchTaxConfig = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/configs/tax/config");
        const data = response.data;

        setTaxSettings({
          selectedTax: data.tax_type || "None",
          gstNumber: data.tax_number || "",
          taxRate: data.taxRate || 0,
          tax1Name: data.tax_1 ? data.tax_1[0] : "",
          tax1Rate: data.tax_1 ? parseInt(data.tax_1[1]) : 0,
          tax2Name: data.tax_2 ? data.tax_2[0] : "",
          tax2Rate: data.tax_2 ? parseInt(data.tax_2[1]) : 0,
          tax3Name: data.tax_3 ? data.tax_3[0] : "",
          tax3Rate: data.tax_3 ? parseInt(data.tax_3[1]) : 0,
          acrTax: data.agr || 0,
          hsnSacCode: data.HSNCode || "",
        });
      } catch (error) {
        console.error("Failed to fetch tax config:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTaxConfig();
  }, []);
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
              {invoiceSeries
                .filter((series) => series.withTax === 1) // only series withTax = 1
                .map((series) => (
                  <option key={series.id} value={series.name}>
                    {series.name} {series.prefix ? `(${series.prefix})` : ""}
                  </option>
                ))}
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

        <div className="mt-4">
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              value={printingSettings.defaultInvoiceWithoutTax || ""} // start empty
              onChange={(e) => handlePrintingChange('defaultInvoiceWithoutTax', e.target.value)}
            >
              {/* Placeholder (disabled so it cannot be selected again) */}
              <option value="" disabled>
                Default invoice series without tax
              </option>

              {/* Dynamically render options from backend */}
              {invoiceSeries
                .filter(series => series.withTax === 0) // only without tax
                .map(series => (
                  <option key={series.id} value={series.name}>
                    {series.name} {series.prefix ? `(${series.prefix})` : ""}
                  </option>
                ))}
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

      {/* TAX TYPE SELECTION */}
      <div className="flex items-center space-x-6 mb-6">
        <span className="text-sm text-gray-700 font-medium">Select Tax</span>
        {["None", "GST", "Service"].map((type) => (
          <label key={type} className="flex items-center space-x-2">
            <input
              type="radio"
              name="taxType"
              value={type}
              checked={taxSettings.selectedTax === type}
              onChange={(e) => handleTaxChange("selectedTax", e.target.value)}
              className="w-4 h-4 text-cyan-400"
            />
            <span className="text-sm text-gray-700">{type}</span>
          </label>
        ))}
      </div>

      {/* CONDITIONAL FIELDS */}
      {taxSettings.selectedTax === "None" && (
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              HSN/SAC Code
            </label>
            <input
              type="text"
              placeholder="Enter HSN/SAC Code"
              value={taxSettings.hsnSacCode}
              onChange={(e) => handleTaxChange("hsnSacCode", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>
      )}

      {(taxSettings.selectedTax === "GST" ||
        taxSettings.selectedTax === "Service") && (
        <>
          {/* GST NUMBER + TAX RATE */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GST Number
              </label>
              <input
                type="text"
                placeholder="Enter GST Number"
                value={taxSettings.gstNumber}
                onChange={(e) => handleTaxChange("gstNumber", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Overall Tax Rate (%)
              </label>
              <input
                type="number"
                value={taxSettings.taxRate}
                onChange={(e) => handleTaxChange("taxRate", parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>

          {/* IGST, SGST, CGST */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {[1, 2, 3].map((num) => (
              <React.Fragment key={num}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tax Name
                  </label>
                  <input
                    type="text"
                    value={taxSettings[`tax${num}Name`]}
                    onChange={(e) => handleTaxChange(`tax${num}Name`, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tax Rate (%)
                  </label>
                  <input
                    type="number"
                    value={taxSettings[`tax${num}Rate`]}
                    onChange={(e) =>
                      handleTaxChange(`tax${num}Rate`, parseInt(e.target.value))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* ACR TAX + HSN/SAC */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {taxSettings.selectedTax === "GST" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ACR Tax (%)
                </label>
                <input
                  type="number"
                  value={taxSettings.acrTax}
                  onChange={(e) => handleTaxChange("acrTax", parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                HSN/SAC Code
              </label>
              <input
                type="text"
                placeholder="Enter HSN/SAC Code"
                value={taxSettings.hsnSacCode}
                onChange={(e) => handleTaxChange("hsnSacCode", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>
        </>
      )}

      <button
        onClick={handleApply}
        className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium"
      >
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
            <thead className="bg-gray-50 border-b border-gray-200">
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
              {Array.isArray(invoiceSeries) && invoiceSeries.length > 0 ? (
                invoiceSeries.map((series) => (
                  <tr key={series.id} className="border-b border-gray-300">
                    <td className="px-4 py-2">{series.name}</td>
                    <td className="px-4 py-2">{series.prefix ?? "-"}</td>
                    <td className="px-4 py-2">{series.title}</td>
                    <td className="px-4 py-2">{series.startingNumber}</td>
                    <td className="px-4 py-2">{series.withTax === 1 ? "Yes" : "No"}</td>
                    <td className="px-4 py-2">
                      <div className="flex space-x-2">
                        <button className="text-green-600 hover:text-green-800">✓</button>
                        <button className="text-red-600 hover:text-red-800">✗</button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No invoice series found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;