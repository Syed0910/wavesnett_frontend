// src/components/billing/invoices.jsx
import React, { useEffect, useState } from "react";
import DataTable from "../ui/datatable"; // ✅ matches your uploaded file
import { getInvoices } from "../../services/api"; // ✅ make sure api.js has getInvoices

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await getInvoices();
        setInvoices(res.data || []); // API should return array
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
