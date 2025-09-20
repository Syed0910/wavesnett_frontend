import React, { useState } from "react";
import DataTable from "../../components/ui/datatable";
import { Pencil, Trash2, Printer, MoreVertical, FileText, Receipt,ReceiptText } from "lucide-react";
import { useNavigate } from "react-router-dom";

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


 const navigate = useNavigate();
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
  <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Receipts</h3>
        {/* Options Menu */}
        <div className="relative flex justify-end gap-2 p-2">
 < button
        onClick={() => navigate("/billing/new-receipt")}
        className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <Receipt className="w-4 h-4" />
        New Receipt 
      </button>

      {/* All Users */}
      <button
        onClick={() => navigate("/billing/new-invoice")}
        className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <ReceiptText className="w-4 h-4" />
        New Invoice
      </button>
      </div>
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
      />
    </div>
  );
};

export default Receipts;