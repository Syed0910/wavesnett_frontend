import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const BillingSummaryChart = () => {
  // ✅ Example dataset (replace with your backend API data)
  const data = [
    { month: "Jan", invoice: 0, receipt: 0 },
    { month: "Feb", invoice: 0, receipt: 0 },
    { month: "Mar", invoice: 0, receipt: 0 },
    { month: "Apr", invoice: 0, receipt: 0 },
    { month: "May", invoice: 25000, receipt: 2000 },
    { month: "Jun", invoice: 72000, receipt: 50000 },
    { month: "Jul", invoice: 30000, receipt: 20000 },
    { month: "Aug", invoice: 65000, receipt: 48000 },
    { month: "Sep", invoice: 12000, receipt: 5000 },
    { month: "Oct", invoice: 0, receipt: 0 },
    { month: "Nov", invoice: 0, receipt: 0 },
    { month: "Dec", invoice: 0, receipt: 0 }
  ];

  return (
    <div className="w-full h-[500px] bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Billing Summary</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Green bars (invoice) */}
          <Bar dataKey="invoice" fill="#16a34a" name="invoice" />
          {/* Orange bars (receipt) */}
          <Bar dataKey="receipt" fill="#dc2626" name="receipt" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BillingSummaryChart;
