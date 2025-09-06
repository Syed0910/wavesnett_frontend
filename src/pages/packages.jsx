import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BasePlans from '../components/packages/base-plans.jsx';
import ImportBasePlans from '../components/packages/import-base-plans.jsx';
import Plans from '../components/packages/plans.jsx';
import ImportPlans from '../components/packages/import-plans.jsx';
import PlanGroup from '../components/packages/plan-group.jsx';
import Vouchers from '../components/packages/vouchers.jsx';

const Packages = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/packages/base" replace />} />
      <Route path="/base" element={<BasePlans />} />
      <Route path="/import-base" element={<ImportBasePlans />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/import-plans" element={<ImportPlans />} />
      <Route path="/plan-group" element={<PlanGroup />} />
      <Route path="/vouchers" element={<Vouchers />} />
    </Routes>
  );
};

export default Packages;