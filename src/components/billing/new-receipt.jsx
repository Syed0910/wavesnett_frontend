import React, { useState } from "react";
import { Calendar, FileText, IndianRupee } from "lucide-react";

const NewReceipt = () => {
  const [formData, setFormData] = useState({
    zone: "admin",
    userName: "",
    date: new Date().toLocaleDateString("en-GB"),
    notes: "",
    remarks: "",
    amount: 0,
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Receipt Submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
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
          <option value="admin">admin</option>
        </select>

        {/* Date */}
        <div className="flex items-center border p-2 rounded">
          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="flex-1 outline-none"
          />
        </div>

        {/* User Name */}
        <input
          type="text"
          name="userName"
          placeholder="User name"
          value={formData.userName}
          onChange={handleChange}
          className="border p-2 rounded"
        />

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

        {/* Receipt Type */}
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
        >
          <option value="">Receipt Type</option>
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
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
