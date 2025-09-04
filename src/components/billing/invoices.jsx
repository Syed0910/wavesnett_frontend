import React, { useState } from "react";
import DataTable from "../ui/datatable";
import { Pencil, Trash2, Printer, Mail, FilePlus } from "lucide-react";

const Invoices = () => {
  const [selected, setSelected] = useState([]);
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);

  const invoices = [
    {
      invoiceNo: "With Tax17",
      date: "03/09/2025",
      userName: "sardar",
      name: "Md Sardar Ali Ansari",
      status: "open",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax16",
      date: "02/09/2025",
      userName: "samiuddin",
      name: "Syed Samiuddin",
      status: "partial",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax15",
      date: "01/09/2025",
      userName: "moiz",
      name: "Md Moizuddin",
      status: "partial",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax14",
      date: "01/09/2025",
      userName: "nizam",
      name: "Mohd Nizamuddin",
      status: "partial",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax13",
      date: "31/08/2025",
      userName: "maqbool",
      name: "Mohammed Maqbool Ahmed",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax12",
      date: "30/08/2025",
      userName: "tkvideo",
      name: "Abubakar",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax11",
      date: "29/08/2025",
      userName: "aleem",
      name: "Aleemuddin Mahagaonvi",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax10",
      date: "29/08/2025",
      userName: "syedmamu",
      name: "Syed Patel",
      status: "open",
      totalAmt: "₹471.00",
      createdBy: "admin",
      zone: "admin",
    },
        {
      invoiceNo: "With Tax9",
      date: "28/08/2025",
      userName: "aqeela",
      name: "Syeda Aqeela Fatima",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax8",
      date: "28/08/2025",
      userName: "qazi",
      name: "Mohammed Gouse",
      status: "partial",
      totalAmt: "₹3658.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax7",
      date: "27/08/2025",
      userName: "aqhil",
      name: "Aqhil Ahmed",
      status: "partial",
      totalAmt: "₹1271.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax6",
      date: "27/08/2025",
      userName: "shoukat",
      name: "Shoukat Ali",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax5",
      date: "27/08/2025",
      userName: "wnett",
      name: "Mohammed Gouse",
      status: "partial",
      totalAmt: "₹1908.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax4",
      date: "26/08/2025",
      userName: "shaikshafi",
      name: "Shaik Shafiuddin",
      status: "open",
      totalAmt: "₹4248.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax3",
      date: "25/08/2025",
      userName: "laxmikant",
      name: "Laxmikant Akade",
      status: "partial",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax2",
      date: "25/08/2025",
      userName: "samad",
      name: "Samad Pasha",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },


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

  const columns = [
    { key: "invoiceNo", label: "Invoice No" },
    { key: "date", label: "Date" },
    { key: "userName", label: "User name" },
    { key: "name", label: "Name" },
    { key: "status", label: "Status" },
    { key: "totalAmt", label: "Total Amt." },
    { key: "createdBy", label: "Created By" },
    { key: "zone", label: "Zone" },
    {
      key: "action",
      label:(
    <div className="flex items-center gap-2">
      Action
      <input
        type="checkbox"
        checked={allSelected}
        onChange={(e) => handleSelectAll(e.target.checked)}
      />
    </div>
  ),
  render: (row) =>
    row ? ( // <-- ✅ safeguard
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={selected.includes(row.invoiceNo)}
          onChange={() => toggleSelect(row.invoiceNo)}
        />
        <button
          onClick={() => alert(`Edit ${row.invoiceNo}`)}
          className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => setShowCreateInvoice(true)}
          className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
        >
          <FilePlus size={16} />
        </button>
      </div>
    ) : null,
    },
  ];

  const toolbar =
    selected.length > 0 && (
      <div className="flex gap-2 mb-3">
        <button
          onClick={handleDelete}
          className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg"
        >
          <Trash2 size={16} /> Delete
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg"
        >
          <Printer size={16} /> Print
        </button>
        <button
          onClick={handleMail}
          className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white rounded-lg"
        >
          <Mail size={16} /> Mail
        </button>
      </div>
    );
const handleCustomPrint = (data, columns, title) => {
  // Custom invoice print formatting
  const printContent = `
    <html>
      <head>
        <title>${title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .invoice-header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
          .company-info { margin-bottom: 20px; }
          .invoice-details { margin-bottom: 30px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
          th { background-color: #f5f5f5; font-weight: bold; }
          .total-row { font-weight: bold; background-color: #f9f9f9; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666; }
          @media print {
            body { margin: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="invoice-header">
          <h1>INVOICE REPORT</h1>
          <h2>${title}</h2>
          <p>Generated on ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div class="company-info">
          <h3>Your Company Name</h3>
          <p>123 Business Street, City, State 12345</p>
          <p>Phone: (123) 456-7890 | Email: info@yourcompany.com</p>
        </div>
        
        <table>
          <thead>
            <tr>
              ${columns.map(col => `<th>${col.label}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${data.map(row => `
              <tr>
                ${columns.map(col => `<td>${row[col.key] || ''}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="footer">
          <p>Total Invoices: ${data.length}</p>
        </div>
        
        <div class="no-print" style="margin-top: 20px; text-align: center;">
          <button onclick="window.print()" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
            Print Now
          </button>
          <button onclick="window.close()" style="padding: 10px 20px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">
            Close
          </button>
        </div>
      </body>
    </html>
  `;
  
  const printWindow = window.open('', '_blank');
  printWindow.document.write(printContent);
  printWindow.document.close();
};
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
        customPrintHandler={handleCustomPrint} 
      />

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
                  className="px-4 py-2 rounded bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-500 text-white"
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
