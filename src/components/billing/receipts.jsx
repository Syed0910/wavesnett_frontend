import React, { useEffect, useState } from "react";
import DataTable from "../../components/ui/datatable";
import { Pencil, Trash2, Printer, MoreVertical, FileText, Receipt } from "lucide-react";
import { getReceipts, addReceipt, deleteReceipt } from "../../services/api"; // ✅ use API functions

const Receipts = () => {
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNewReceiptModal, setShowNewReceiptModal] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    amount: 0,
    receiptType: "Cash",
    date: new Date().toISOString().split("T")[0], // yyyy-mm-dd
    remarks: "",
  });

  /* -------------------- FETCH RECEIPTS -------------------- */
  const fetchReceipts = async () => {
    try {
      const res = await getReceipts();
      const mapped = res.data.map((r) => ({
        id: r.id,
        receiptNo: r.receiptNo,
        userName: r.username,
        name: r.username, // placeholder, can be replaced with fullName if you join with users
        date: r.receiptDate,
        amount: `₹${r.amount}`,
        createdBy: r.createdBy || "system",
        type: r.remark, // remark used as Type
        zone: r.zoneName,
      }));
      setReceipts(mapped);
    } catch (err) {
      console.error("Error fetching receipts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReceipts();
  }, []);

  /* -------------------- HANDLE INPUT -------------------- */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* -------------------- ADD RECEIPT -------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReceipt({
        receiptNo: Math.floor(Math.random() * 100000), // generate number
        user_id: 1, // replace with actual user_id from your users table
        username: formData.userName,
        amount: formData.amount,
        receipttype_id: 1, // map types properly later
        notes: null,
        remark: formData.receiptType,
        receiptDate: formData.date,
        operator_id: 1,
        zoneName: "admin",
        oldPayId: 0,
        createdBy: "admin",
      });
      setShowNewReceiptModal(false);
      fetchReceipts(); // refresh table
    } catch (err) {
      console.error("Error adding receipt:", err);
    }
  };

  /* -------------------- DELETE RECEIPT -------------------- */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this receipt?")) return;
    try {
      await deleteReceipt(id);
      fetchReceipts();
    } catch (err) {
      console.error("Error deleting receipt:", err);
    }
  };

  /* -------------------- TABLE COLUMNS -------------------- */
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
            onClick={() => handleDelete(row.id)}
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

  if (loading) {
    return <div className="p-6">Loading receipts...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold">Receipts</h3>
      {/* Options */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowNewReceiptModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + New Receipt
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

      {/* Modal */}
      {showNewReceiptModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">New Receipt</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Receipt Type</label>
                <select
                  name="receiptType"
                  value={formData.receiptType}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="Cash">Cash</option>
                  <option value="Card">Card</option>
                  <option value="UPI">UPI</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Remarks</label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  rows="3"
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewReceiptModal(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
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

export default Receipts;
