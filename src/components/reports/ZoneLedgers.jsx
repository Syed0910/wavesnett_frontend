import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../ui/datatable";

const ZoneLedgers = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/zoneledgers");
        console.log("ZoneLedgers data:", res.data);
        setRecords(res.data);
      } catch (err) {
        console.error("❌ Error fetching Zone Ledgers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  const columns = [
    { key: "ledgerDate", label: "Date" },
    { key: "operatorUsername", label: "Zone" },
    { key: "ledgerName", label: "Ledger" },
    {
      key: "cr",
      label: "Credit",
      render: (value) => <span className="text-green-600">{value}</span>,
    },
    {
      key: "dr",
      label: "Debit",
      render: (value) => <span className="text-red-600">{value}</span>,
    },
    { key: "closingBalance", label: "Closing Balance" },
    { key: "receiptType", label: "Receipt Type" },
    { key: "remark", label: "Remark" },
    { key: "createdBy", label: "Created By" },
    { key: "created_at", label: "Create Date" },
    {
      key: "action",
      label: "Action",
      render: () => (
        <button className="text-blue-600 hover:text-blue-800">ℹ️</button>
      ),
    },
  ];

  if (loading) return <p className="p-4">Loading Zone Ledgers...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Zone Account Ledgers</h2>
      <DataTable data={records} columns={columns} pageSize={10} />
    </div>
  );
};

export default ZoneLedgers;
