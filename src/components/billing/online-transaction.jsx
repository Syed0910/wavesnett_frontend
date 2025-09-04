import React, { useState } from "react";
import DataTable from "../../components/ui/datatable";
import { Pencil, Trash2, Printer, Mail } from "lucide-react";

const OnlineTransactions = () => {
  const [transactions] = useState([
    {
      transId: "order_RBbhNyYwTWHsb3",
      userName: "",
      date: "30/08/2025 21:40:41",
      status: "Open",
      amount: "₹2537.00",
      paymentType: "razorpay",
      zone: "admin",
      notes: "Online Recharge",
    },
    {
      transId: "order_RBbWfgbIK9D76J",
      userName: "",
      date: "30/08/2025 21:30:33",
      status: "Fail",
      amount: "₹1271.00",
      paymentType: "razorpay",
      zone: "admin",
      notes: "Online Recharge",
    },
    {
      transId: "order_RAtld2ofKQQ0Fq",
      userName: "",
      date: "29/08/2025 02:42:11",
      status: "Open",
      amount: "₹4799.00",
      paymentType: "razorpay",
      zone: "admin",
      notes: "Online Recharge With Outstanding Payment",
    },
    // 👉 add more from your list here
  ]);

  const [selected, setSelected] = useState([]);
  const allSelected = selected.length === transactions.length;

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelected(transactions.map((t) => t.transId));
    } else {
      setSelected([]);
    }
  };

  const handleDelete = () => {
    alert(`Deleting: ${selected.join(", ")}`);
  };

  const handlePrint = () => {
    alert(`Printing: ${selected.join(", ")}`);
  };

  const handleMail = () => {
    alert(`Mailing: ${selected.join(", ")}`);
  };

  const columns = [
    { key: "transId", label: "Trans Id" },
    { key: "userName", label: "User name" },
    { key: "date", label: "Creation Date" },
    { key: "status", label: "Status" },
    { key: "amount", label: "Amount" },
    { key: "paymentType", label: "Payment Type" },
    { key: "zone", label: "Zone" },
    { key: "notes", label: "Notes" },
    {
      key: "action",
      label: (
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
        row ? (
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={selected.includes(row.transId)}
              onChange={() => toggleSelect(row.transId)}
            />
            <button
              onClick={() => alert(`Edit ${row.transId}`)}
              className="p-1 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
            >
              <Pencil size={16} />
            </button>
            <button
              onClick={() => alert(`Delete ${row.transId}`)}
              className="p-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
            >
              <Trash2 size={16} />
            </button>
            <button
              onClick={() => alert(`Print ${row.transId}`)}
              className="p-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
            >
              <Printer size={16} />
            </button>
          </div>
        ) : null,
    },
  ];

  // Dynamic toolbar
  const toolbar =
    selected.length > 0 ? (
      <div className="flex gap-2">
        <button
          onClick={handleDelete}
          className="px-3 py-1 bg-red-500 text-white rounded-lg flex items-center gap-1"
        >
          <Trash2 size={16} /> Delete
        </button>
        <button
          onClick={handlePrint}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg flex items-center gap-1"
        >
          <Printer size={16} /> Print
        </button>
        <button
          onClick={handleMail}
          className="px-3 py-1 bg-purple-500 text-white rounded-lg flex items-center gap-1"
        >
          <Mail size={16} /> Mail
        </button>
      </div>
    ) : null;

  return (
    <div className="p-6">
      <DataTable
        title="Online Transactions"
        data={transactions}
        columns={columns}
        pageSize={10}
        searchable={true}
        showNasDropdown={false}
        showDateFilter={true}
        toolbar={toolbar}
      />
    </div>
  );
};

export default OnlineTransactions;
