import React, { useState } from "react";
import DataTable from "../../components/ui/datatable";
import { Pencil, Trash2, Printer, MoreVertical, FileText, Receipt } from "lucide-react";

const Receipts = () => {
  const [receipts] = useState([
    {
      receiptNo: "73",
      date: "02/09/2025",
      userName: "samiuddin",
      name: "Syed Samiuddin",
      amount: "₹2150.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
    },
    {
      receiptNo: "72",
      date: "01/09/2025",
      userName: "nizam",
      name: "Mohd Nizamuddin",
      amount: "₹2150.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
    },
    {
      receiptNo: "71",
      date: "01/09/2025",
      userName: "moiz",
      name: "Md Moizuddin",
      amount: "₹2150.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
    },
    {
      receiptNo: "70",
      date: "31/08/2025",
      userName: "maqbool",
      name: "Mohammed Maqbool Ahmed",
      amount: "₹2537.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
    },
    {
      receiptNo: "69",
      date: "30/08/2025",
      userName: "tkvideo",
      name: "Abubakar",
      amount: "₹2537.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
    },
     {
      receiptNo: "75",
      date: "1/09/2025",
      userName: "tkvideo",
      name: "Abubakar",
      amount: "₹456.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
    },
  ]);

  const [showNewReceiptModal, setShowNewReceiptModal] = useState(false);
  const [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    amount: 0,
    receiptType: "Cash",
    date: new Date().toLocaleDateString('en-GB'),
    remarks: ""
  });

  const columns = [
    { key: "receiptNo", label: "Receipt No" },
    { key: "userName", label: "User name" },
    { key: "name", label: "Name" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount" },
    { key: "createdBy", label: "Created By" },
    { key: "type", label: "Type" },
    { key: "zone", label: "Zone" },
    {
      key: "action",
      label: "Action",
      render: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => alert(`Edit receipt ${row.receiptNo}`)}
            className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => alert(`Delete receipt ${row.receiptNo}`)}
            className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
          >
            <Trash2 size={16} />
          </button>
          <button
            onClick={() => alert(`Print receipt ${row.receiptNo}`)}
            className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
          >
            <Printer size={16} />
          </button>
        </div>
      ),
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted: ${JSON.stringify(formData)}`);
    setShowNewReceiptModal(false);
    setShowNewInvoiceModal(false);
  };

  // Custom Modal Component with lighter background
  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          <div className="p-4 max-h-96 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
       <h3 className="text-xl font-semibold">Receipts</h3>
      {/* Options Menu */}
      <div className="relative flex justify-end mb-4">
        <button 
          onClick={() => setShowOptionsMenu(!showOptionsMenu)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <MoreVertical size={20} />
        </button>
        
        {showOptionsMenu && (
          <div className="absolute right-0 top-full mt-1 bg-white border rounded-lg shadow-lg z-10 w-48">
            <button
              onClick={() => {
                setShowNewInvoiceModal(true);
                setShowOptionsMenu(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              New Invoice
            </button>
            <button
              onClick={() => {
                setShowNewReceiptModal(true);
                setShowOptionsMenu(false);
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              New Receipt
            </button>
          </div>
        )}
      </div>

      <DataTable
        title="Receipts"
        data={receipts}
        columns={columns}
        pageSize={10}
        searchable={true}
        showNasDropdown={false}
        showDateFilter={true}
        showActionColumn={true}
        customHeader={
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setShowMenu(!showMenu)}
            >
              <MoreVertical size={20} />
            </button>
            
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <button
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    setShowNewReceiptModal(true);
                    setShowMenu(false);
                  }}
                >
                  <Receipt size={16} className="mr-2" />
                  New Receipt
                </button>
                <button
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    setShowNewInvoiceModal(true);
                    setShowMenu(false);
                  }}
                >
                  <FileText size={16} className="mr-2" />
                  New Invoice
                </button>
              </div>
            )}
          </div>
        }
      />

      {/* New Receipt Modal */}
      <Modal
        isOpen={showNewReceiptModal}
        onClose={() => setShowNewReceiptModal(false)}
        title="New Receipt"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zero</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="admin">admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="text"
                value={formData.date}
                className="w-full p-2 border border-gray-300 rounded-md"
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Receipt Type</label>
            <select
              name="receiptType"
              value={formData.receiptType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="UPI">UPI</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Receipt Notes</h3>
            <p className="text-sm text-gray-600 mb-2">This notes will be display on print of receipt.</p>
            
            <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="3"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={() => setShowNewReceiptModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </Modal>

      {/* New Invoice Modal */}
      <Modal
        isOpen={showNewInvoiceModal}
        onClose={() => setShowNewInvoiceModal(false)}
        title="New Invoice"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zero</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="admin">admin</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="text"
                value={formData.date}
                className="w-full p-2 border border-gray-300 rounded-md"
                readOnly
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Invoice Type</label>
            <select
              name="receiptType"
              value={formData.receiptType}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Standard">Standard</option>
              <option value="Proforma">Proforma</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Invoice Notes</h3>
            <p className="text-sm text-gray-600 mb-2">This notes will be display on print of invoice.</p>
            
            <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="3"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={() => setShowNewInvoiceModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Receipts;