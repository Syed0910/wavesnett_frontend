import React, { useState } from "react";
import DataTable from "../../components/ui/datatable";
import { Pencil, Trash2, Printer } from "lucide-react";

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
  ]);

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
        showActionColumn={true}
      />
    </div>
  );
};

export default Receipts;
