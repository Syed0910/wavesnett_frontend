import React, { useState } from "react";
import DataTable from "../../components/ui/datatable";
import { Pencil, Trash2, Printer, Mail, FilePlus, X } from "lucide-react";
import { Tooltip } from "recharts";

const Invoices = () => {
  const [selected, setSelected] = useState([]);
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showGenerateModal, setShowGenerateModal] = useState(false);

  const invoices = [
    {
      id: 1,
      invoiceNo: "With Tax17",
      date: "03/09/2025",
      userName: "sardar",
      name: "Md Sardar Ali Ansari",
      status: "open",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
      amount: 2150.00,
      quantity: 1,
      discount: 0,
      description: "Monthly internet subscription",
      startDate: "03/09/2025",
      endDate: "03/03/2026",
      phone: "9379839593",
      email: "sardar@example.com",
      plan: "WavesNet 50mbps UL 6M",
      type: "Plans",
      receiveAmount: 2150.00
    },
    {
      id: 2,
      invoiceNo: "With Tax16",
      date: "02/09/2025",
      userName: "samiuddin",
      name: "Syed Samiuddin",
      status: "partial",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
      amount: 2150.00,
      quantity: 1,
      discount: 0,
      description: "Monthly internet subscription",
      startDate: "02/09/2025",
      endDate: "02/03/2026",
      phone: "9379839593",
      email: "sspsyed@gmail.com",
      plan: "WavesNet 50mbps UL 6M",
      type: "Plans",
      receiveAmount: 1500.00
    },
    // ... rest of your invoice data
  ];

  const toggleSelect = (invoiceNo) => {
    setSelected((prev) =>
      prev.includes(invoiceNo)
        ? prev.filter((id) => id !== invoiceNo)
        : [...prev, invoiceNo]
    );
  };

  const allSelected = selected.length === invoices.length;

  const handleSelectAll = (checked) => {
    setSelected(checked ? invoices.map((row) => row.invoiceNo) : []);
  };

  const handleDelete = () => alert(`Deleting ${selected.length} invoices`);
  const handlePrint = () => alert(`Printing ${selected.length} invoices`);
  const handleMail = () => alert(`Mailing ${selected.length} invoices`);

  // Edit invoice function
  // Edit invoice function
const handleEditInvoice = (rowData) => {
  setSelectedInvoice(rowData);
  setShowEditModal(true);
};

// Print invoice function
const handlePrintInvoice = (rowData) => {
  const printContent = `
    <html>
      <head>
        <title>Invoice ${rowData.invoiceNo}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          .invoice-header { text-align: center; margin-bottom: 30px; }
          .invoice-details { margin-bottom: 20px; }
          .invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          .invoice-table th, .invoice-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          .invoice-table th { background-color: #f2f2f2; }
          .invoice-summary { float: right; width: 300px; border: 1px solid #ddd; padding: 15px; }
          .text-right { text-align: right; }
          .text-center { text-align: center; }
          .company-header { text-align: center; margin-bottom: 20px; }
          .customer-info { margin-bottom: 20px; }
        </style>
      </head>
      <body>
        <div class="company-header">
          <h1>AanRids Technologies Private Limited</h1>
          <p>Zara Mansion 5-592/5/B Near Water Tank Yokalia</p>
          <p>Colony Salisburgh - S35104</p>
          <p>Mo: +91988181152 | Email: info@wavestret.com</p>
          <p>GSTIN : 29ABDCA2224812C</p>
        </div>

        <div class="customer-info">
          <h2>To: ${rowData.name}</h2>
          <p><strong>Company Name:</strong> WavezNet</p>
          <p><strong>Address:</strong> KBN college road-Huma Hotel new bank</p>
          <p>Colony Gallager Salisburg - S35104</p>
          <p><strong>Phone:</strong> ${rowData.phone}</p>
        </div>

        <table class="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Invoice Type:</strong> ${rowData.type}<br>
                <strong>Plan Name:</strong> ${rowData.plan}<br>
                <strong>Duration:</strong> 6 Months<br>
                <strong>Plan Data:</strong> Unlimited<br>
                <strong>Invoice Period:</strong> ${rowData.startDate} ~ ${rowData.endDate}
              </td>
              <td>${rowData.quantity || 1}</td>
              <td>₹${rowData.amount}</td>
            </tr>
          </tbody>
        </table>

        <div class="invoice-summary">
          <p><strong>Amount:</strong> ₹${rowData.amount}</p>
          <p><strong>SGST (9%):</strong> ₹${(rowData.amount * 0.09).toFixed(2)}</p>
          <p><strong>CGST (9%):</strong> ₹${(rowData.amount * 0.09).toFixed(2)}</p>
          <p><strong>Total:</strong> ₹${(rowData.amount * 1.18).toFixed(2)}</p>
        </div>

        <div style="clear: both; margin-top: 50px; text-align: center;">
          <p>Signature</p>
          <p>About client</p>
          <p>1/1</p>
        </div>
      </body>
    </html>
  `;

  const printWindow = window.open('', '_blank');
  printWindow.document.write(printContent);
  printWindow.document.close();
  printWindow.print();
};

// Generate invoice function
const handleGenerateInvoice = (rowData) => {
  setSelectedInvoice(rowData);
  setShowGenerateModal(true);
};
  // Update invoice function
  const handleUpdateInvoice = (updatedInvoice) => {
    alert(`Invoice ${updatedInvoice.invoiceNo} updated successfully!`);
    setShowEditModal(false);
  };

  // Submit receipt function
  const handleSubmitReceipt = (receiptData) => {
    alert(`Receipt generated for invoice ${receiptData.invoice.invoiceNo}`);
    setShowGenerateModal(false);
  };

  const columns = [
    { key: "invoiceNo", label: "Invoice No" },
    { key: "date", label: "Date" },
    { key: "userName", label: "User name" },
    { key: "name", label: "Name" },
    { key: "status", label: "Status" },
    { key: "totalAmt", label: "Total Amt." },
    { key: "createdBy", label: "Created By" },
    { key: "zone", label: "Zone" },
  ];

  const toolbar =
    selected.length > 0 && (
      <div className="flex gap-2 mb-3">
        <button
          onClick={handleDelete}
          className="flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <Trash2 size={16} /> Delete
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Printer size={16} /> Print
        </button>
        <button
          onClick={handleMail}
          className="flex items-center gap-1 px-3 py-1.5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          <Mail size={16} /> Mail
        </button>
      </div>
    );

  return (
    <div className="p-6">
      {toolbar}

      <DataTable
        title="Invoices"
        data={invoices}
        columns={columns}
        pageSize={10}
        searchable={true}
        showNasDropdown={false}
        showDateFilter={true}
        onEdit={handleEditInvoice} // pass your handlers here
        onGenerate={handleGenerateInvoice}
        onPrint={handlePrint} // example delete handler
        showActionColumn={true}
      />

      {/* Edit Invoice Modal */}
      {showEditModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Edit Invoice With Tax</h2>
              <button onClick={() => setShowEditModal(false)} className="p-1">
                <X size={20} />
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              handleUpdateInvoice(selectedInvoice);
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    value={selectedInvoice.date}
                    onChange={(e) => setSelectedInvoice({...selectedInvoice, date: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <input
                    type="text"
                    value={selectedInvoice.description}
                    onChange={(e) => setSelectedInvoice({...selectedInvoice, description: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Start Date</label>
                  <input
                    type="date"
                    value={selectedInvoice.startDate}
                    onChange={(e) => setSelectedInvoice({...selectedInvoice, startDate: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">End Date</label>
                  <input
                    type="date"
                    value={selectedInvoice.endDate}
                    onChange={(e) => setSelectedInvoice({...selectedInvoice, endDate: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Amount</label>
                  <input
                    type="number"
                    value={selectedInvoice.amount}
                    onChange={(e) => setSelectedInvoice({...selectedInvoice, amount: parseFloat(e.target.value)})}
                    className="w-full border rounded px-3 py-2"
                    step="0.01"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Quantity</label>
                  <input
                    type="number"
                    value={selectedInvoice.quantity}
                    onChange={(e) => setSelectedInvoice({...selectedInvoice, quantity: parseInt(e.target.value)})}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Discount</label>
                  <input
                    type="number"
                    value={selectedInvoice.discount}
                    onChange={(e) => setSelectedInvoice({...selectedInvoice, discount: parseFloat(e.target.value)})}
                    className="w-full border rounded px-3 py-2"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  UPDATE
                </button>
              </div>
            </form>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Data Summary</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>Sub Total</div>
                <div className="text-right">₹{(selectedInvoice.amount * selectedInvoice.quantity).toFixed(2)}</div>
                
                <div>SCST (9%)</div>
                <div className="text-right">₹{(selectedInvoice.amount * selectedInvoice.quantity * 0.09).toFixed(2)}</div>
                
                <div>CCST (9%)</div>
                <div className="text-right">₹{(selectedInvoice.amount * selectedInvoice.quantity * 0.09).toFixed(2)}</div>
                
                <div className="font-semibold">Total</div>
                <div className="text-right font-semibold">₹{(selectedInvoice.amount * selectedInvoice.quantity * 1.18).toFixed(2)}</div>
                
                <div>Receive Amount</div>
                <div className="text-right">₹{selectedInvoice.receiveAmount}</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">{selectedInvoice.name}</h3>
              <p>{selectedInvoice.phone}</p>
              <p>{selectedInvoice.email}</p>
              <p className="mt-2"><strong>Plans:</strong> {selectedInvoice.plan}</p>
              <p><strong>Type:</strong> {selectedInvoice.type}</p>
              <p><strong>Status:</strong> {selectedInvoice.status}</p>
            </div>

            <div className="mt-6">
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Generate Invoice Modal */}
      {showGenerateModal && selectedInvoice && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">New Receipt</h2>
              <button onClick={() => setShowGenerateModal(false)} className="p-1">
                <X size={20} />
              </button>
            </div>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const receiptData = {
                zone: formData.get('zone'),
                userName: formData.get('userName'),
                amount: parseFloat(formData.get('amount')),
                receiptType: formData.get('receiptType'),
                notes: formData.get('notes'),
                remarks: formData.get('remarks'),
                invoice: selectedInvoice
              };
              handleSubmitReceipt(receiptData);
            }}>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Zone</label>
                  <select 
                    name="zone" 
                    defaultValue={selectedInvoice.zone}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    defaultValue={selectedInvoice.userName}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                
                <div className="p-2 bg-gray-100 rounded">
                  <label className="block text-sm font-medium">Balance</label>
                  <p className="font-bold">₹{(selectedInvoice.amount * selectedInvoice.quantity * 1.18).toFixed(2)}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    defaultValue="0"
                    className="w-full border rounded px-3 py-2"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Receipt Type</h3>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center">
                    <input type="radio" name="receiptType" value="cash" defaultChecked className="mr-2" />
                    Cash
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="receiptType" value="card" className="mr-2" />
                    Card
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="receiptType" value="transfer" className="mr-2" />
                    Bank Transfer
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="receiptType" value="upi" className="mr-2" />
                    UPI
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Receipt Notes</h3>
                <p className="text-sm text-gray-600 mb-2">This notes will be displayed on print of receipt</p>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Remarks</label>
                  <textarea
                    name="remarks"
                    className="w-full border rounded px-3 py-2"
                    rows="3"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setShowGenerateModal(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Invoice Modal */}
      {showCreateInvoice && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[600px]">
            <h2 className="text-lg font-semibold mb-4">New Invoice</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm">Zone</label>
                <input
                  type="text"
                  defaultValue="admin"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm">User Name</label>
                <input
                  type="text"
                  defaultValue="sardar"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm">Balance</label>
                <input
                  type="number"
                  defaultValue="2537.00"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm">Amount</label>
                <input
                  type="number"
                  defaultValue="0"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm">Date</label>
                <input
                  type="date"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm">Receipt Notes</label>
                <input
                  type="text"
                  placeholder="This note will be displayed on receipt"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm">Remarks</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm">Receipt Type</label>
                <select className="w-full border rounded px-3 py-2">
                  <option>Cash</option>
                  <option>Cheque</option>
                  <option>Online Transfer</option>
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Swipe Machine</option>
                  <option>Demand Draft (DD)</option>
                </select>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateInvoice(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoices;