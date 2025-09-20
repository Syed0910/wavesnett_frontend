// src/components/billing/invoices.jsx
import React, { useEffect, useState } from "react";
import DataTable from "../ui/datatable";
import { getInvoices } from "../../services/api";
import { Receipt, ReceiptText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await getInvoices();
        setInvoices(res.data || []); // Ensure API returns array
      } catch (err) {
        console.error("Error fetching invoices:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  const columns = [
    { key: "invoiceNo", label: "Invoice No" },
    { key: "date", label: "Date" },
    { key: "userName", label: "User name" },
    { key: "name", label: "Name" },
    { key: "status", label: "Status" },
    { key: "totalAmt", label: "Total Amt." },
    { key: "createdBy", label: "Created By" },
    { key: "zone", label: "Zone" },
  ];

  if (loading) {
    return <div className="p-6">Loading invoices...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Invoices</h3>
        {/* Options Menu */}
        <div className="flex justify-end gap-2 p-2">
          <button
            onClick={() => navigate("/billing/new-invoice")}
            className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <Receipt className="w-4 h-4" />
            New Invoice
          </button>

          <button
            onClick={() => navigate("/billing/new-receipt")}
            className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <ReceiptText className="w-4 h-4" />
            New Receipt
          </button>
        </div>
      </div>

      <DataTable
        title="Invoices"
        data={invoices}
        columns={columns}
        pageSize={10}
        searchable={true}
        showNasDropdown={false}
        showDateFilter={true}
        showSelection={true}
        onEdit={(row) => console.log("Edit invoice:", row)}
        onDelete={(row) => console.log("Delete invoice:", row)}
        onView={(row) => console.log("View invoice:", row)}
      />
    </div>
  );
};

export default Invoices;
