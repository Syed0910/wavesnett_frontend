import React, { useState } from 'react';
import DataTable from '../ui/datatable';
import { MoreVertical,Plus,FileDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();
  const [data] = useState([
    {
      id: 1,
      planName: '512 Mbps Leased Line',
      validity: '1 Month',
      bandwidth: '512M/512M',
      quota: '',
      amount: '₹36500.00',
      type: 'Unlimited',
      status: 'Active',
      basePlan: '512 Mbps Leased Line',
      planGroup: '',
      zone: 'admin'
    },
    {
      id: 2,
      planName: '512 Mbps Leased Line',
      validity: '1 Month',
      bandwidth: '512M/512M',
      quota: '',
      amount: '₹36500.00',
      type: 'Unlimited',
      status: 'Active',
      basePlan: '512 Mbps Leased Line',
      planGroup: '',
      zone: 'bharat'
    },
    {
      id: 3,
      planName: 'WavesNett 100mbps UL 12M',
      validity: '12 Month',
      bandwidth: '100M/100M',
      quota: '3500G',
      amount: '₹5304.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '100Mbps',
      planGroup: '',
      zone: 'admin'
    },
    {
      id: 4,
      planName: 'WavesNett 100mbps UL 12M',
      validity: '12 Month',
      bandwidth: '100M/100M',
      quota: '3500G',
      amount: '₹5304.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '100Mbps',
      planGroup: '',
      zone: 'bharat'
    },
    {
      id: 5,
      planName: 'WavesNett 100Mbps UL 3M',
      validity: '3 Month',
      bandwidth: '100M/100M',
      quota: '3500G',
      amount: '₹1617.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '100Mbps',
      planGroup: '',
      zone: 'admin'
    },
    {
      id: 6,
      planName: 'WavesNett 100Mbps UL 3M',
      validity: '3 Month',
      bandwidth: '100M/100M',
      quota: '3500G',
      amount: '₹1617.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '100Mbps',
      planGroup: '',
      zone: 'bharat'
    },
    {
      id: 7,
      planName: 'WavesNett 100Mbps UL 6M',
      validity: '6 Month',
      bandwidth: '100M/100M',
      quota: '3500G',
      amount: '₹3100.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '100Mbps',
      planGroup: '',
      zone: 'admin'
    },
    {
      id: 8,
      planName: 'WavesNett 100Mbps UL 6M',
      validity: '6 Month',
      bandwidth: '100M/100M',
      quota: '3500G',
      amount: '₹3100.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '100Mbps',
      planGroup: '',
      zone: 'bharat'
    },
    {
      id: 9,
      planName: 'WavesNett 200mbps UL 12M',
      validity: '12 Month',
      bandwidth: '200M/200M',
      quota: '3500G',
      amount: '₹7080.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '200Mbps',
      planGroup: '',
      zone: 'admin'
    },
    {
      id: 10,
      planName: 'WavesNett 200mbps UL 12M',
      validity: '12 Month',
      bandwidth: '200M/200M',
      quota: '3500G',
      amount: '₹7080.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '200Mbps',
      planGroup: '',
      zone: 'bharat'
    },
    {
      id: 11,
      planName: 'WavesNett 200Mbps UL 3M',
      validity: '3 Month',
      bandwidth: '200M/200M',
      quota: '3500G',
      amount: '₹2157.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '200Mbps',
      planGroup: '',
      zone: 'admin'
    },
    {
      id: 12,
      planName: 'WavesNett 200Mbps UL 3M',
      validity: '3 Month',
      bandwidth: '200M/200M',
      quota: '3500G',
      amount: '₹2157.00',
      type: 'Fup',
      status: 'Active',
      basePlan: '200Mbps',
      planGroup: '',
      zone: 'bharat'
    },
    
  ]);

  const [showActionsDropdown, setShowActionsDropdown] = useState(false);

  const columns = [
    {
      key: 'planName',
      label: 'Plan Name',
      render: (value) => <span className="text-blue-600 font-medium">{value}</span>
    },
    {
      key: 'validity',
      label: 'Validity'
    },
    {
      key: 'bandwidth',
      label: 'Bandwidth'
    },
    {
      key: 'quota',
      label: 'Quota'
    },
    {
      key: 'amount',
      label: 'Amount',
      render: (value) => <span className="font-medium">{value}</span>
    },
    {
      key: 'type',
      label: 'Type'
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'basePlan',
      label: 'Base Plan'
    },
    {
      key: 'planGroup',
      label: 'Plan Group'
    },
    {
      key: 'zone',
      label: 'Zone'
    }
  ];

  const handleView = (row) => {
    console.log('View:', row);
  };

  const handleEdit = (row) => {
    console.log('Edit:', row);
  };

  const handleDelete = (row) => {
    console.log('Delete:', row);
  };

  const handleNewPlan = () => {
    setShowActionsDropdown(false);
    navigate("/packages/plan/new-plan");   
  };

   const handleNewTopupPlan = () => {
  setShowActionsDropdown(false);
  navigate("/packages/plan/new-topup-plan");   
};


    const handleImportPlans = () => {
        setShowActionsDropdown(false);
        navigate("/packages/plan/import-plans"); 

    };

  return (
    <div className="max-w-8xl mx-auto bg-white p-0 pt-0 min-h-screen">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Plans</h2>

         {/* Three-dot Actions Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setShowActionsDropdown(!showActionsDropdown)}
                        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                        <MoreVertical size={20} className="text-gray-600" />
                    </button>
                    
                    {showActionsDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                            <div className="py-1">
                                <button
                                    onClick={handleNewPlan}
                                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <Plus size={16} className="mr-2" />
                                    New Plan
                                </button>
                                <button
                                    onClick={handleNewTopupPlan}
                                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <Plus size={16} className="mr-2" />
                                    New Topup Plan
                                </button>
                                <button
                                    onClick={handleImportPlans}
                                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <FileDown size={16} className="mr-2" />
                                    Import Plans
                                </button>
                            </div>
                        </div>
                    )}
                </div>
      </div>
      
      
      <DataTable
        title="Plans"
        data={data}
        columns={columns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        pageSize={15}
        searchable={true}
        
      />
    </div>
  );
};

export default Plans;