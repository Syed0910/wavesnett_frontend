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
    { month: "Jan", revenue: 0, expense: 0 },
    { month: "Feb", revenue: 0, expense: 0 },
    { month: "Mar", revenue: 0, expense: 0 },
    { month: "Apr", revenue: 0, expense: 0 },
    { month: "May", revenue: 25000, expense: 2000 },
    { month: "Jun", revenue: 72000, expense: 50000 },
    { month: "Jul", revenue: 30000, expense: 20000 },
    { month: "Aug", revenue: 65000, expense: 48000 },
    { month: "Sep", revenue: 12000, expense: 5000 },
    { month: "Oct", revenue: 0, expense: 0 },
    { month: "Nov", revenue: 0, expense: 0 },
    { month: "Dec", revenue: 0, expense: 0 }
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
          {/* Green bars (Revenue) */}
          <Bar dataKey="revenue" fill="#16a34a" name="Revenue" />
          {/* Orange bars (Expense) */}
          <Bar dataKey="expense" fill="#dc2626" name="Expense" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BillingSummaryChart;
