import React, { useState } from "react";
import { Calendar, FileText, IndianRupee } from "lucide-react";

const NewReceipt = () => {
  const [formData, setFormData] = useState({
    zone: "admin",
    userName: "",
    date: new Date().toISOString().split("T")[0], // current date in YYYY-MM-DD
    notes: "",
    remarks: "",
    amount: 0,
    type: "",
  });

  // Example dynamic users array (replace with API fetch if needed)
  const users = [
    { value: "user1", label: "John Doe" },
    { value: "user2", label: "Jane Smith" },
    { value: "user3", label: "Alice Johnson" },
  ];

  // Dynamic receipt types
  const receiptTypes = [
    { value: "Cash", label: "Cash" },
    { value: "Cheque", label: "Cheque" },
    { value: "Online Transfer", label: "Online Transfer" },
    { value: "Credit Card", label: "Credit card" },
    { value: "Debit Card", label: "Debit Card" },
    { value: "Swipe Machine", label: "Swipe Machine" },
    { value: "Demand Draft(DD)", label: "Demand Draft" },
    { value: "External Gateway", label: "External Gateway" },
    { value: "Bank Transfer", label: "Bank Transfer" }
    ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Receipt Submitted:", formData);
  };

  return (
    <div className="max-w-8xl p-6">
      <h2 className="text-xl font-semibold mb-6">New Receipt</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow"
      >
        {/* Zone */}
        <select
          name="zone"
          value={formData.zone}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="admin">Admin</option>
        </select>

        {/* Date */}
        <div className="flex items-center border p-2 rounded">
          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="flex-1 outline-none"
          />
        </div>

        {/* User Name (Dynamic) */}
        <select
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.value} value={user.value}>
              {user.label}
            </option>
          ))}
        </select>

        {/* Notes */}
        <div className="flex items-center border p-2 rounded">
          <FileText className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type="text"
            name="notes"
            placeholder="Receipt Notes"
            value={formData.notes}
            onChange={handleChange}
            className="flex-1 outline-none"
          />
        </div>

        {/* Amount */}
        <div className="flex items-center border p-2 rounded">
          <IndianRupee className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="flex-1 outline-none"
          />
        </div>

        {/* Remarks */}
        <input
          type="text"
          name="remarks"
          placeholder="Remarks"
          value={formData.remarks}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Receipt Type (Dynamic) */}
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
        >
          <option value="">Select Receipt Type</option>
          {receiptTypes.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>

        {/* Buttons */}
        <div className="flex gap-2 md:col-span-2">
          <button
            type="submit"
            className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
          >
            SUBMIT
          </button>
          <button
            type="button"
            className="border px-4 py-2 rounded hover:bg-gray-100"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewReceipt;
