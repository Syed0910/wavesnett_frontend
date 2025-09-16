import React, { useState } from 'react';
import DataTable from '../ui/datatable';
import { MoreVertical, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Billing = () => {
  const navigate = useNavigate();
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);

  const [printingSettings, setPrintingSettings] = useState({
    defaultInvoiceSeries: "wNetinv (WT) (Inv -)",
    defaultInvoiceWithoutTax: "Default Invoice Series Without Tax",
    receiptTerms: "",
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

  // Invoice Series Data for DataTable
  const [invoiceSeriesData] = useState([
    {
      id: 1,
      name: "wNetinv",
      prefix: "",
      title: "Invoice",
      startFrom: "110",
      withTax: "No"
    },
    {
      id: 2,
      name: "wNetinv (WT)",
      prefix: "Inv -",
      title: "Invoice", 
      startFrom: "1",
      withTax: "Yes"
    }
  ]);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'prefix', label: 'Prefix' },
    { key: 'title', label: 'Title' },
    { key: 'startFrom', label: 'Start From' },
    { key: 'withTax', label: 'With Tax' },
    { key: 'action', label: 'Action' }
  ];

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

  const handleApplyPrinting = () => {
    console.log('Applying printing settings:', printingSettings);
  };

  const handleApplyTax = () => {
    console.log('Applying tax settings:', taxSettings);
  };

  const handleApplyInvoice = () => {
    console.log('Applying invoice settings:', invoiceSettings);
  };

  const handleApplySeries = () => {
    console.log('Applying series settings:', invoiceSeries);
  };

  const handleClear = () => {
    setInvoiceSeries({
      name: "",
      title: "",
      prefix: "",
      terms: "",
      template: "Invoice Template 1",
      startingNumber: "1",
      withTax: true
    });
  };

  const handleNewInvoiceSeries = () => {
    setShowActionsDropdown(false);
    navigate('/billing/invoice-series/new');
  };

  const handleViewTemplate = () => {
    console.log('Viewing template:', invoiceSeries.template);
  };

  return (
    <div className="max-w-8xl mx-auto bg-gray-50 p-0 pt-0 min-h-screen">
      {/* Printing Settings */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Printing Setting</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">Default Invoice Series</label>
            <div className="relative">
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white pr-8"
                value={printingSettings.defaultInvoiceSeries}
                onChange={(e) => handlePrintingChange('defaultInvoiceSeries', e.target.value)}
              >
                <option value="wNetinv (WT) (Inv -)">wNetinv (WT) (Inv -)</option>
                <option value="wNetinv">wNetinv</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">Receipt terms</label>
            <input 
              type="text"
              placeholder="Receipt terms"
              value={printingSettings.receiptTerms}
              onChange={(e) => handlePrintingChange('receiptTerms', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <select 
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white pr-8"
              value={printingSettings.defaultInvoiceWithoutTax}
              onChange={(e) => handlePrintingChange('defaultInvoiceWithoutTax', e.target.value)}
            >
              <option value="Default Invoice Series Without Tax">Default Invoice Series Without Tax</option>
           
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div> </select>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={printingSettings.totalRoundOff}
              onChange={(e) => handlePrintingChange('totalRoundOff', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
            />
            <span className="text-sm text-gray-700">Total round off</span>
          </label>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={printingSettings.discountDisplayInPrint}
              onChange={(e) => handlePrintingChange('discountDisplayInPrint', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
            />
            <span className="text-sm text-gray-700">Discount display in invoice print</span>
          </label>
        </div>

        <button 
          onClick={handleApplyPrinting}
          className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
        >
          APPLY
        </button>
      </div>

       {/* Tax Settings */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Tax Settings</h2>
        
        <div className="mb-6">
          <div className="flex items-center space-x-6 mb-6">
            <span className="text-sm text-gray-700">Select Tax</span>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="taxType"
                value="None"
                checked={taxSettings.selectedTax === "None"}
                onChange={(e) => handleTaxChange('selectedTax', e.target.value)}
                className="w-4 h-4 text-cyan-400 focus:ring-cyan-400"
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
                className="w-4 h-4 text-cyan-400 focus:ring-cyan-400"
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
                className="w-4 h-4 text-cyan-400 focus:ring-cyan-400"
              />
              <span className="text-sm text-gray-700">Service</span>
            </label>
          </div>

          {/* Show different fields based on selected tax type */}
          {taxSettings.selectedTax === "None" && (
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">HSN/SAC Code</label>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="HSN/SAC Code"
                  value={taxSettings.hsnSacCode}
                  onChange={(e) => handleTaxChange('hsnSacCode', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm2 2h12v12H6V6z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {taxSettings.selectedTax === "GST" && (
            <>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-2">
                  <label className="block text-sm text-gray-600 mb-2">GST Number</label>
                  <input 
                    type="text"
                    placeholder="GST Number"
                    value={taxSettings.gstNumber}
                    onChange={(e) => handleTaxChange('gstNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Name</label>
                  <input 
                    type="text"
                    placeholder="Tax Name"
                    value={taxSettings.igstName}
                    onChange={(e) => handleTaxChange('igstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Rate</label>
                  <div className="relative">
                    <input 
                      type="number"
                      value={taxSettings.igstRate}
                      onChange={(e) => handleTaxChange('igstRate', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Name</label>
                  <input 
                    type="text"
                    placeholder="Tax Name"
                    value={taxSettings.sgstName}
                    onChange={(e) => handleTaxChange('sgstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Rate</label>
                  <div className="relative">
                    <input 
                      type="number"
                      value={taxSettings.sgstRate}
                      onChange={(e) => handleTaxChange('sgstRate', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Name</label>
                  <input 
                    type="text"
                    placeholder="Tax Name"
                    value={taxSettings.cgstName}
                    onChange={(e) => handleTaxChange('cgstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Rate</label>
                  <div className="relative">
                    <input 
                      type="number"
                      value={taxSettings.cgstRate}
                      onChange={(e) => handleTaxChange('cgstRate', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">ACR Tax</label>
                  <div className="relative">
                    <input 
                      type="number"
                      value={taxSettings.acrTax}
                      onChange={(e) => handleTaxChange('acrTax', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                      %
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">HSN/SAC Code</label>
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="HSN/SAC Code"
                      value={taxSettings.hsnSacCode}
                      onChange={(e) => handleTaxChange('hsnSacCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm2 2h12v12H6V6z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {taxSettings.selectedTax === "Service" && (
            <>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="col-span-2">
                  <label className="block text-sm text-gray-600 mb-2">Tax Number</label>
                  <input 
                    type="text"
                    placeholder="Tax Number"
                    value={taxSettings.gstNumber}
                    onChange={(e) => handleTaxChange('gstNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Name</label>
                  <input 
                    type="text"
                    placeholder="Tax Name"
                    value={taxSettings.igstName}
                    onChange={(e) => handleTaxChange('igstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Rate</label>
                  <div className="relative">
                    <input 
                      type="number"
                      value={taxSettings.igstRate}
                      onChange={(e) => handleTaxChange('igstRate', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Name</label>
                  <input 
                    type="text"
                    placeholder="Tax Name"
                    value={taxSettings.sgstName}
                    onChange={(e) => handleTaxChange('sgstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Rate</label>
                  <div className="relative">
                    <input 
                      type="number"
                      value={taxSettings.sgstRate}
                      onChange={(e) => handleTaxChange('sgstRate', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Name</label>
                  <input 
                    type="text"
                    placeholder="Tax Name"
                    value={taxSettings.cgstName}
                    onChange={(e) => handleTaxChange('cgstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Tax Rate</label>
                  <div className="relative">
                    <input 
                      type="number"
                      value={taxSettings.cgstRate}
                      onChange={(e) => handleTaxChange('cgstRate', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">
                      %
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-2">HSN/SAC Code</label>
                <div className="relative">
                  <input 
                    type="text"
                    placeholder="HSN/SAC Code"
                    value={taxSettings.hsnSacCode}
                    onChange={(e) => handleTaxChange('hsnSacCode', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm pr-10"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm2 2h12v12H6V6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <button 
          onClick={handleApplyTax}
          className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
        >
          APPLY
        </button>
      </div>

      {/* Invoice & Plan Setting */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Invoice & Plan Setting</h2>
        
        <div className="space-y-3 mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.autoInvoiceRecharge}
              onChange={(e) => handleInvoiceChange('autoInvoiceRecharge', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
            />
            <span className="text-sm text-gray-700">Auto invoice generate during recharge and new user creation time</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.autoInvoiceOnlineRecharge}
              onChange={(e) => handleInvoiceChange('autoInvoiceOnlineRecharge', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
            />
            <span className="text-sm text-gray-700">Auto invoice generate during online recharge from the client portal</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Auto renew plan</label>
          <div className="relative">
            <select 
              value={invoiceSettings.autoRenewPlan}
              onChange={(e) => handleInvoiceChange('autoRenewPlan', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white pr-8"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Automatically renew the plan and generate an invoice on this day</p>
        </div>

        <div className="space-y-3 mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.planCostDisplay}
              onChange={(e) => handleInvoiceChange('planCostDisplay', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
            />
            <span className="text-sm text-gray-700">Plan cost & plan name together displaying in recharge</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.gracePeriod}
              onChange={(e) => handleInvoiceChange('gracePeriod', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
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
                className="w-4 h-4 text-cyan-400 focus:ring-cyan-400"
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
                className="w-4 h-4 text-cyan-400 focus:ring-cyan-400"
              />
              <span className="text-sm text-gray-700">Partial [Hourly basis]</span>
            </label>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.outstandingAmount}
              onChange={(e) => handleInvoiceChange('outstandingAmount', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
            />
            <span className="text-sm text-gray-700">The outstanding amount is added when online recharge</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.midNightExpiry}
              onChange={(e) => handleInvoiceChange('midNightExpiry', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
            />
            <span className="text-sm text-gray-700">Mid night expiry display one day before if mid night set is start of day</span>
          </label>
          
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={invoiceSettings.disableOutstandingUpdate}
              onChange={(e) => handleInvoiceChange('disableOutstandingUpdate', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
            />
            <span className="text-sm text-gray-700">The outstanding amount is disable for update when online recharge</span>
          </label>
        </div>

        <button 
          onClick={handleApplyInvoice}
          className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
        >
          APPLY
        </button>
      </div>

      {/* Invoice Series */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Invoice Series</h2>
          
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input 
            type="text"
            placeholder="Invoice Series Name"
            value={invoiceSeries.name}
            onChange={(e) => handleSeriesChange('name', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none bg-white pr-8"
                value={invoiceSeries.template}
                onChange={(e) => handleSeriesChange('template', e.target.value)}
              >
                <option value="Invoice Template 1">Invoice Template 1</option>
                <option value="Invoice Template 2">Invoice Template 2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <button 
              onClick={handleViewTemplate}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
            >
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
          <label className="flex items-center space-x-3 pt-2">
            <input
              type="checkbox"
              checked={invoiceSeries.withTax}
              onChange={(e) => handleSeriesChange('withTax', e.target.checked)}
              className="w-4 h-4 text-cyan-400 border-gray-300 rounded focus:ring-cyan-400"
            />
            <span className="text-sm text-gray-700">Invoice With Tax</span>
          </label>
        </div>

        <textarea 
          placeholder="Invoice Terms"
          value={invoiceSeries.terms}
          onChange={(e) => handleSeriesChange('terms', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm h-20 mb-4 resize-none"
        />

        <div className="flex space-x-4 mb-6">
          <button 
            onClick={handleApplySeries}
            className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            APPLY
          </button>
          <button 
            onClick={handleClear}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium transition-colors"
          >
            Clear
          </button>
        </div>

        {/* DataTable for Invoice Series */}
        <DataTable
          title=""
          data={invoiceSeriesData}
          columns={columns}
          pageSize={10}
          searchable={true}
          actions={{
            edit: (row) => console.log('Edit invoice series:', row),
            delete: (row) => console.log('Delete invoice series:', row),
            view: (row) => console.log('View invoice series:', row)
          }}
        />
      </div>
    </div>
  );
};

export default Billing;