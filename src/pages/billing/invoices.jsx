import React, { useState } from "react";
import DataTable from "../../components/ui/datatable";

const Invoices = () => {
  const [invoices] = useState([
    {
      invoiceNo: "With Tax17",
      date: "03/09/2025",
      userName: "sardar",
      name: "Md Sardar Ali Ansari",
      status: "open",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax16",
      date: "02/09/2025",
      userName: "samiuddin",
      name: "Syed Samiuddin",
      status: "partial",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax15",
      date: "01/09/2025",
      userName: "moiz",
      name: "Md Moizuddin",
      status: "partial",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax14",
      date: "01/09/2025",
      userName: "nizam",
      name: "Mohd Nizamuddin",
      status: "partial",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax13",
      date: "31/08/2025",
      userName: "maqbool",
      name: "Mohammed Maqbool Ahmed",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax12",
      date: "30/08/2025",
      userName: "tkvideo",
      name: "Abubakar",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax11",
      date: "29/08/2025",
      userName: "aleem",
      name: "Aleemuddin Mahagaonvi",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax10",
      date: "29/08/2025",
      userName: "syedmamu",
      name: "Syed Patel",
      status: "open",
      totalAmt: "₹471.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax9",
      date: "28/08/2025",
      userName: "aqeela",
      name: "Syeda Aqeela Fatima",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax8",
      date: "28/08/2025",
      userName: "qazi",
      name: "Mohammed Gouse",
      status: "partial",
      totalAmt: "₹3658.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax7",
      date: "27/08/2025",
      userName: "aqhil",
      name: "Aqhil Ahmed",
      status: "partial",
      totalAmt: "₹1271.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax6",
      date: "27/08/2025",
      userName: "shoukat",
      name: "Shoukat Ali",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax5",
      date: "27/08/2025",
      userName: "wnett",
      name: "Mohammed Gouse",
      status: "partial",
      totalAmt: "₹1908.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax4",
      date: "26/08/2025",
      userName: "shaikshafi",
      name: "Shaik Shafiuddin",
      status: "open",
      totalAmt: "₹4248.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax3",
      date: "25/08/2025",
      userName: "laxmikant",
      name: "Laxmikant Akade",
      status: "partial",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
    {
      invoiceNo: "With Tax2",
      date: "25/08/2025",
      userName: "samad",
      name: "Samad Pasha",
      status: "paid",
      totalAmt: "₹2537.00",
      createdBy: "admin",
      zone: "admin",
    },
  ]);

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

  return (
    <div className="p-6">
      <DataTable
        title="Invoices"
        data={invoices}
        columns={columns}
        pageSize={10}
        searchable={true}
        showNasDropdown={false}
         showDateFilter={true}   // 👈 enables date range filter
        dateRange={true}
        onDateChange={true} 
      />
    </div>
  );
};

export default Invoices;
