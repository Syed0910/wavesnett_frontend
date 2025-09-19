import React, { useState } from "react";
import { Calendar, FileText, Percent, IndianRupee, CreditCard } from "lucide-react";

const CreateInvoice = () => {
  const [formData, setFormData] = useState({
    zone: "admin",
    userName: "",
    date: new Date().toLocaleDateString("en-GB"),
    invoiceSeries: "",
    type: "",
    plan: "",
    description: "",
    amount: "",
    quantity: 1,
    discount: 0,
    startDate: "",
    endDate: "",
    receiveType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Invoice Data Submitted:", formData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-6">Create Invoice</h2>
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

        {/* Invoice Series */}
        <div className="flex items-center border p-2 rounded">
          <FileText className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type="text"
            name="invoiceSeries"
            placeholder="Invoice Series"
            value={formData.invoiceSeries}
            onChange={handleChange}
            className="flex-1 outline-none"
          />
        </div>

        {/* User name */}
        <input
          type="text"
          name="userName"
          placeholder="User name"
          value={formData.userName}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Select Type */}
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Type</option>
          <option value="Plans">Plans</option>
          <option value="Custom">Custom</option>
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

        {/* Select Plan */}
        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Plan</option>
          <option value="Plan A">Plan A</option>
          <option value="Plan B">Plan B</option>
        </select>

        {/* Description */}
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded md:col-span-2"
        />

        {/* Amount */}
        <div className="flex items-center border p-2 rounded">
          <CreditCard className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="flex-1 outline-none"
          />
        </div>

        {/* Quantity */}
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="border p-2 rounded"
        />

        {/* Start & End Date */}
        <div className="flex items-center border p-2 rounded">
          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="flex-1 outline-none"
          />
        </div>
        <div className="flex items-center border p-2 rounded">
          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="flex-1 outline-none"
          />
        </div>

        {/* Discount */}
        <div className="flex items-center border p-2 rounded">
          <Percent className="w-4 h-4 mr-2 text-gray-500" />
          <input
            type="number"
            name="discount"
            placeholder="Discount"
            value={formData.discount}
            onChange={handleChange}
            className="flex-1 outline-none"
          />
        </div>

        {/* Receive Type */}
        <select
          name="receiveType"
          value={formData.receiveType}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Receive Type</option>
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
        </select>

        {/* Totals */}
        <div className="md:col-span-2 flex justify-end text-right">
          <div>
            <p className="text-gray-500">Sub Total: 0.00</p>
            <p className="font-semibold">Total: 0.00</p>
          </div>
        </div>

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

export default CreateInvoice;
