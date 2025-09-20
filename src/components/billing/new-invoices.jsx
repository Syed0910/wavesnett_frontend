// src/components/invoices/CreateInvoice.jsx
import React, { useState, useEffect } from "react";
import {
  Calendar,
  FileText,
  Percent,
  IndianRupee,
} from "lucide-react";
import { getUsers, addInvoice } from "../../services/api";

const CreateInvoice = () => {
  const todayISO = new Date().toISOString().slice(0, 10);

  const [formData, setFormData] = useState({
    zone: "admin",
    userName: "",
    date: todayISO,
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
    notes: "",
  });

  const [applyTax, setApplyTax] = useState(false);
  const [userOptions, setUserOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const planOptions = {
    Plans: [
      { value: "wavesnett-50-3m", label: "WavesNett 50mbps UL - 3M" },
      { value: "wavesnett-100-3m", label: "WavesNett 100mbps UL - 3M" },
      { value: "wavesnett-200-3m", label: "WavesNett 200mbps UL - 3M" },
      { value: "wavesnett-300-3m", label: "WavesNett 300mbps UL - 3M" },
      { value: "wavesnett-50-12m", label: "WavesNett 50mbps UL - 12M" },
      { value: "wavesnett-100-12m", label: "WavesNett 100mbps UL - 12M" },
      { value: "wavesnett-200-12m", label: "WavesNett 200mbps UL - 12M" },
      { value: "wavesnett-300-12m", label: "WavesNett 300mbps UL - 12M" },
      { value: "wavesnett-50-6m", label: "WavesNett 50mbps UL - 6M" },
      { value: "wavesnett-100-6m", label: "WavesNett 100mbps UL - 6M" },
      { value: "wavesnett-50-1m", label: "WavesNett 50mbps UL - 1M" },
      { value: "512-mbps-leased-line", label: "512 Mbps Leased line" },
    ],
  };

  const invoiceSeriesOptions = [
    { value: "wNettInv", label: "wNettInv" },
    { value: "wNettInv(WT)(inv-)", label: "wNettInv(WT)(inv-)" },
  ];

  const receiveTypeOptions = [
    "Cash",
    "Cheque",
    "Online Transfer",
    "Credit Card",
    "Debit Card",
    "Swipe Machine",
    "Demand Draft (DD)",
    "External Gateway",
    "Bank Transfer",
  ];

  // Load users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        if (res.data) {
          // map users into {id, value, label}
          setUserOptions(
            res.data.map((u) => ({
              id: u.id,
              value: u.username,
              label: u.username,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["amount", "discount"].includes(name)) {
      setFormData((p) => ({ ...p, [name]: value === "" ? "" : parseFloat(value) }));
    } else if (name === "quantity") {
      setFormData((p) => ({ ...p, [name]: value === "" ? "" : parseInt(value, 10) }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setFormData((p) => ({ ...p, type: value, plan: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const subTotal = (Number(formData.amount) || 0) * (Number(formData.quantity) || 0);
    const discountAmount = (subTotal * (Number(formData.discount) || 0)) / 100;
    const taxableAmount = Math.max(0, subTotal - discountAmount);
    const sgst = applyTax ? +(taxableAmount * 0.09).toFixed(2) : 0;
    const cgst = applyTax ? +(taxableAmount * 0.09).toFixed(2) : 0;
    const total = +(taxableAmount + sgst + cgst).toFixed(2);

    const payload = {
      ...formData,
      subTotal,
      discountAmount,
      sgst,
      cgst,
      total,
    };

    try {
      await addInvoice(payload);
      alert("Invoice created successfully ✅");

      // reset form
      setFormData({
        zone: "admin",
        userName: "",
        date: todayISO,
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
        notes: "",
      });
      setApplyTax(false);
    } catch (err) {
      console.error("Error creating invoice:", err);
      alert("❌ Failed to create invoice");
    } finally {
      setLoading(false);
    }
  };

  // Computed display values
  const subTotal = (Number(formData.amount) || 0) * (Number(formData.quantity) || 0);
  const discountAmount = (subTotal * (Number(formData.discount) || 0)) / 100;
  const taxableAmount = Math.max(0, subTotal - discountAmount);
  const sgstAmount = applyTax ? +(taxableAmount * 0.09).toFixed(2) : 0;
  const cgstAmount = applyTax ? +(taxableAmount * 0.09).toFixed(2) : 0;
  const totalAmount = +(taxableAmount + sgstAmount + cgstAmount).toFixed(2);

  return (
    <div className="max-w-8xl p-4">
      <h2 className="text-xl font-semibold mb-6">Create Invoice</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow"
      >
        {/* Zone */}
        <div>
          <label className="block text-sm font-medium mb-1">Zone</label>
          <select
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>

        {/* Invoice Series */}
        <div>
          <label className="block text-sm font-medium mb-1">Invoice Series</label>
          <select
            name="invoiceSeries"
            value={formData.invoiceSeries}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Series</option>
            {invoiceSeriesOptions.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* User Name */}
        <div>
          <label className="block text-sm font-medium mb-1">User Name</label>
          <select
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select User</option>
            {userOptions.map((u) => (
              <option key={u.id} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>
        </div>

        {/* Select Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Select Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleTypeChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Type</option>
            <option value="Plans">Plans</option>
            <option value="Services">Services</option>
            <option value="staticIp">Static IP</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
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
        </div>

        {/* Plan */}
        <div>
          <label className="block text-sm font-medium mb-1">Plan / Service</label>
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Plan / Service</option>
            {formData.type && planOptions[formData.type] ? (
              planOptions[formData.type].map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))
            ) : (
              <optgroup label="Plans">
                {planOptions.Plans.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))}
              </optgroup>
            )}
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <div className="flex items-center border p-2 rounded">
            <FileText className="w-4 h-4 mr-2 text-gray-500" />
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="flex-1 outline-none"
            />
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <div className="flex items-center border p-2 rounded">
            <IndianRupee className="w-4 h-4 mr-2 text-gray-500" />
            <input
              name="amount"
              type="number"
              step="0.01"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="flex-1 outline-none"
            />
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            name="quantity"
            type="number"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Start & End Dates */}
        <div>
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Discount + Tax Toggle */}
        <div>
          <label className="block text-sm font-medium mb-1">Discount (%)</label>
          <div className="flex items-center border p-2 rounded gap-4">
            <Percent className="w-4 h-4 text-gray-500" />
            <input
              name="discount"
              type="number"
              step="0.01"
              min="0"
              value={formData.discount}
              onChange={handleChange}
              className="flex-1 outline-none"
            />
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Apply SGST/CGST</span>
              <input
                type="checkbox"
                checked={applyTax}
                onChange={() => setApplyTax((s) => !s)}
              />
            </div>
          </div>
        </div>

        {/* Receipt Type */}
        <div>
          <label className="block text-sm font-medium mb-1">Receipt Type</label>
          <select
            name="receiveType"
            value={formData.receiveType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Receipt Type</option>
            {receiveTypeOptions.map((rt) => (
              <option key={rt} value={rt}>
                {rt}
              </option>
            ))}
          </select>
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
        </div>

        {/* Totals */}
        <div className="md:col-span-2">
          <div className="p-4 bg-gray-50 rounded flex flex-col md:flex-row justify-between gap-4">
            <div>
              <p className="text-sm text-gray-600">Sub Total</p>
              <p className="text-lg font-semibold">₹{subTotal.toFixed(2)}</p>

              <p className="text-sm text-gray-600 mt-2">Discount</p>
              <p className="text-md">₹{discountAmount.toFixed(2)}</p>
            </div>
            <div>
              {applyTax ? (
                <>
                  <p className="text-sm text-gray-600">SGST (9%)</p>
                  <p className="text-lg font-semibold">₹{sgstAmount.toFixed(2)}</p>
                  <p className="text-sm text-gray-600 mt-2">CGST (9%)</p>
                  <p className="text-lg font-semibold">₹{cgstAmount.toFixed(2)}</p>
                </>
              ) : (
                <p className="text-sm text-gray-600">No tax applied</p>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-2xl font-bold">₹{totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 flex gap-2 justify-end">
          <button
            type="button"
            onClick={() =>
              setFormData({
                zone: "admin",
                userName: "",
                date: todayISO,
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
                notes: "",
              })
            }
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            name="cancel"
          >
            CANCEL
          </button>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50"
            name="submit"
          >
            {loading ? "Saving..." : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateInvoice;
