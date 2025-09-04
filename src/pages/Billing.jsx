import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Invoices from '../components/billing/invoices';
import BillingSummaryChart from '../components/billing/billing-summary-chart';
import OnlineTransaction from '../components/billing/online-transaction';
import Receipts from '../components/billing/receipts';

const Billing = () => {
  return (
    <Routes>
      {/* Default redirect when visiting /nas */}
      <Route path="/" index element={<Navigate to="/invoices" replace />} />

      {/* Sub-routes relative to /nas */}
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/receipts" element={<Receipts />} />
      <Route path="/transactions" element={<OnlineTransaction/>} />
      <Route path="/summary" element={<BillingSummaryChart />} />
    </Routes>
  );
};

export default Billing;