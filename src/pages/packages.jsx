import React from 'react'; 
import { Routes, Route, Navigate } from 'react-router-dom'; 
import BasePlans from '../components/packages/base-plans.jsx'; 
import ImportBasePlans from '../components/packages/import-base-plans.jsx'; 
import Plans from '../components/packages/plans.jsx'; 
import ImportPlans from '../components/packages/import-plans.jsx'; 
import PlanGroup from '../components/packages/plan-group.jsx'; 
import Vouchers from '../components/packages/vouchers.jsx';
import NewBasePlan from '../components/packages/new-base-plan.jsx';  
import NewBaseTopupPlan from "../components/packages/new-base-topup-plan";
import NewPlan from "../components/packages/new-plan";
import NewTopupPlan from "../components/packages/new-topup-plan";
import NewVoucher from "../components/packages/new-voucher";



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
            <Route path="/base/new-base-plan" element={<NewBasePlan />} />  
            <Route path="/base/new-base-topup-plan" element={<NewBaseTopupPlan />} />
            <Route path="/base/import-base-plan" element={<ImportBasePlans />} /> 
             <Route path="/plan/new-plan" element={<NewPlan />} />
             <Route path="/plan/new-topup-plan" element={<NewTopupPlan />} />
             <Route path="/plan/import-plans" element={<ImportPlans />} /> 
              <Route path="/vouchers/new-voucher" element={<NewVoucher />} />
              
        </Routes>   
    ); 
};  

export default Packages;