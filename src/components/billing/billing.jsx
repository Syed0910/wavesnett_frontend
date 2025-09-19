import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Invoices from '../billing/invoices';
import BillingSummaryChart from '../billing/billing-summary-chart';
import OnlineTransaction from '../billing/online-transaction';
import Receipts from '../billing/receipts';
import CreateInvoice from './new-invoices';
import NewReceipt from './new-receipt';

const Billing = () => {
  return (
    <Routes>
      {/* Default redirect when visiting /nas */}
      <Route path="/" index element={<Navigate to="/invoices" replace />} />

      {/* Sub-routes relative to /nas */}
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/receipts" element={<Receipts />} />
      <Route path="/online-transactions" element={<OnlineTransaction/>} />
      <Route path="/billing-summary-chart" element={<BillingSummaryChart />} />
      <Route path="/new-invoice" element={<CreateInvoice/>} />
      <Route path="/new-receipt" element={<NewReceipt/>} />
    </Routes>
  );
};

export default Billing;