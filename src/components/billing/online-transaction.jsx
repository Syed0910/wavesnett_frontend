import React, { useEffect, useState } from "react";
import DataTable from "../../components/ui/datatable";
import { Pencil, Trash2, Printer, Mail } from "lucide-react";
import axios from "axios";

const OnlineTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/online-transactions");

        console.log("✅ API Response:", res.data);

        const data = Array.isArray(res.data)
          ? res.data.map((t, index) => ({
              id: t.id ?? index,
              transId: t.txnId ?? "-",                         // txnId → Trans Id
              username: t.username ?? "-",                      // username
              creationDate: t.created_at
                ? new Date(t.created_at).toLocaleDateString()
                : "-",                                          // created_at → Creation Date
              status: t.status ?? "N/A",                        // status
              amount: t.amount ?? 0,                            // amount
              paymentType: t.paymentGatewayType ?? "-",         // paymentGatewayType → Payment Type
              zone: t.zoneName ?? "-",                          // zoneName → Zone
              notes: t.notes ?? "-",                            // notes
            }))
          : [];

        setTransactions(data);
      } catch (err) {
        console.error("❌ Error fetching transactions:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const allSelected =
    selected.length === transactions.length && transactions.length > 0;

  const toggleSelect = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const handleSelectAll = (checked) => {
    setSelected(checked ? transactions.map((t) => t.id) : []);
  };

  const handleDelete = () => alert(`Deleting: ${selected.join(", ")}`);
  const handlePrint = () => alert(`Printing: ${selected.join(", ")}`);
  const handleMail = () => alert(`Mailing: ${selected.join(", ")}`);

  const columns = [
    { key: "transId", label: "Trans Id" },
    { key: "username", label: "User name" },
    { key: "creationDate", label: "Creation Date" },
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
      render: (row) => {
        const rowId = row?.id ?? "";
        return (
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={selected.includes(rowId)}
              onChange={() => rowId && toggleSelect(rowId)}
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
        );
      },
    },
  ];

  const toolbar =
    selected.length > 0 && (
      <div className="flex gap-2 mb-4">
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
    );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!transactions.length) return <p>No transactions found</p>;

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4">Online Transactions</h3>
      <DataTable
        title="Online Transactions"
        data={transactions}
        columns={columns}
        pageSize={10}
        searchable
        showDateFilter
        toolbar={toolbar}
      />
    </div>
  );
};

export default OnlineTransactions;