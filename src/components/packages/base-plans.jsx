import React, { useState } from 'react';
import DataTable from '../ui/datatable';
import { MoreVertical, Plus, FileDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const BasePlans = () => {
    const navigate = useNavigate();
    const [data] = useState([
        {
            id: 1,
            planName: '100Mbps',
            bandwidth: '100M/100M',
            quota: '3500G',
            type: 'Fup'
        },
        {
            id: 2,
            planName: '200Mbps',
            bandwidth: '200M/200M',
            quota: '3500G',
            type: 'Fup'
        },
        {
            id: 3,
            planName: '300Mbps',
            bandwidth: '300M/300M',
            quota: '3500G',
            type: 'Fup'
        },
        {
            id: 4,
            planName: '50Mbps',
            bandwidth: '50M/50M',
            quota: '3300G',
            type: 'Fup'
        },
        {
            id: 5,
            planName: '512 Mbps Leased Line',
            bandwidth: '512M/512M',
            quota: '',
            type: 'Unlimited'
        }
    ]);

    const [showActionsDropdown, setShowActionsDropdown] = useState(false);

    const columns = [
        {
            key: 'planName',
            label: 'Plan Name',
            render: (value) => <span className="text-blue-600 font-medium">{value}</span>
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
            key: 'type',
            label: 'Type'
        },
    ];

    const handleDelete = (row) => {
        console.log('Delete:', row);
    };

    const handleNewBasePlan = () => {
    console.log('Navigating to New Base Plan');
    setShowActionsDropdown(false);
    navigate('/packages/base/new-base-plan'); 
};

     const handleNewBaseTopupPlan = () => {
        console.log("New Base Topup Plan");
        setShowActionsDropdown(false);
        navigate("/packages/base/new-base-topup-plan"); 
    };

    const handleImportBasePlans = () => {
        console.log('Import Base Plans');
        setShowActionsDropdown(false);
         navigate("/packages/base/import-base-plan");
    };

    return (
        <div className="max-w-8xl mx-auto bg-white p-6 pt-0 min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium text-gray-800">
                    Base Plans
                </h2>
                
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
                                    onClick={handleNewBasePlan}
                                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <Plus size={16} className="mr-2" />
                                    New Base Plan
                                </button>
                                <button
                                    onClick={handleNewBaseTopupPlan}
                                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <Plus size={16} className="mr-2" />
                                    New Base Topup Plan
                                </button>
                                <button
                                    onClick={handleImportBasePlans}
                                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <FileDown size={16} className="mr-2" />
                                    Import Base Plans
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <DataTable
                title="Base Plans"
                data={data}
                columns={columns}
                onDelete={handleDelete}   /* ✅ Only delete remains */
                pageSize={10}
                searchable={true}
            />
        </div>
    );
};

export default BasePlans;
