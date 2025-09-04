import React, { useState } from "react";
import DataTable from "../ui/datatable";
import { Pencil, Trash2, Printer } from "lucide-react";

const Receipts = () => {
  const [receipts] = useState([
    {
      receiptNo: "73",
      date: "02/09/2025",
      userName: "samiuddin",
      name: "Syed Samiuddin",
      amount: "2150.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
      tax: 387,
      status: "Open",
    },
    {
      receiptNo: "72",
      date: "01/09/2025",
      userName: "nizam",
      name: "Mohd Nizamuddin",
      amount: "2150.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
      tax: 387,
      status: "Open",
    },
    {
      receiptNo: "71",
      date: "01/09/2025",
      userName: "moiz",
      name: "Md Moizuddin",
      amount: "2150.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
      tax: 387,
      status: "Open",
    },
    {
      receiptNo: "70",
      date: "31/08/2025",
      userName: "maqbool",
      name: "Mohammed Maqbool Ahmed",
      amount: "2537.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
      tax: 387,
      status: "Open",
    },
    {
      receiptNo: "69",
      date: "30/08/2025",
      userName: "tkvideo",
      name: "Abubakar",
      amount: "2537.00",
      createdBy: "admin",
      type: "Cash",
      zone: "admin",
      tax: 387,
      status: "Open",
    },
  ]);

  const [selectedReceipt, setSelectedReceipt] = useState(null);

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
      label: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedReceipt(row)}
            className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => setSelectedReceipt(row)}
            className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
          >
            <Trash2 size={16} />
          </button>
          <button
            onClick={() => setSelectedReceipt(row)}
            className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
          >
            <Printer size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <DataTable
        title="Receipts"
        data={receipts}
        columns={columns}
        pageSize={10}
        searchable={true}
        showNasDropdown={false}
        showDateFilter={true}
      />

      {/* Modal */}
      {selectedReceipt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96">
            <div className="bg-cyan-500 text-white p-3 rounded-t-lg font-semibold">
              More Information
            </div>
            <div className="p-4 space-y-2 text-sm">
              <p>• <b>Quantity:</b> 1</p>
              <p>• <b>Amount:</b> {selectedReceipt.amount}</p>
              <p>• <b>Total Tax:</b> {selectedReceipt.tax}</p>
              <p>• <b>Total:</b> {parseFloat(selectedReceipt.amount) + selectedReceipt.tax}</p>
              <p>• <b>Total Payment:</b> {parseFloat(selectedReceipt.amount) + selectedReceipt.tax}</p>
              <p>• <b>Status:</b> {selectedReceipt.status}</p>
            </div>
            <div className="flex justify-between items-center p-3 border-t">
              <button
                onClick={() => setSelectedReceipt(null)}
                className="text-gray-500 font-medium hover:text-gray-700"
              >
                CANCEL
              </button>
              <button
                className="bg-cyan-500 text-white px-4 py-1 rounded hover:bg-cyan-600"
              >
                CHECK STATUS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Receipts;
