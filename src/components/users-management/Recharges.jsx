// src/components/users-management/Recharges.jsx
import React, { useState } from "react";
import { Trash2, Eye, Edit, Plus } from "lucide-react";
import DataTable from "../ui/datatable";
import Button, { DangerButton, PrimaryButton } from "../ui/button";

const Recharges = ({ username }) => {
  // Sample data - replace with your actual data source
  const [rechargesData, setRechargesData] = useState([
    {
      id: 1,
      planName: "WavesNet! 50mbps UL 6M",
      quantity: "0/1",
      amount: "₹2150.00",
      status: "Active",
      rechargeDate: "03/09/2025 13:40:34",
      type: "Plan"
    },
    // Add more sample data if needed
  ]);

  // Define table columns
  const columns = [
    {
      key: 'planName',
      label: 'Plan Name',
      render: (value) => (
        <div className="font-medium text-gray-900">{value}</div>
      )
    },
    {
      key: 'quantity',
      label: 'Quantity',
      render: (value) => (
        <div className="text-gray-700">{value}</div>
      )
    },
    {
      key: 'amount',
      label: 'Amount',
      render: (value) => (
        <div className="font-semibold text-gray-900">{value}</div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'Active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'rechargeDate',
      label: 'Recharge Date',
      render: (value) => (
        <div className="text-sm text-gray-700">{value}</div>
      )
    },
    {
      key: 'type',
      label: 'Type',
      render: (value) => (
        <div className="text-gray-700">{value}</div>
      )
    }
  ];

  // Handle actions
  const handleView = (row) => {
    console.log('View recharge:', row);
    // Implement view functionality
  };

  const handleEdit = (row) => {
    console.log('Edit recharge:', row);
    // Implement edit functionality
  };

  const handleDelete = (row) => {
    console.log('Delete recharge:', row);
    // Implement delete functionality
    if (window.confirm('Are you sure you want to delete this recharge?')) {
      setRechargesData(prev => prev.filter(item => item.id !== row.id));
    }
  };

  const handleBulkDelete = () => {
    console.log('Bulk delete');
    // Implement bulk delete functionality
    if (window.confirm('Are you sure you want to delete selected recharges?')) {
      // Handle bulk delete logic here
    }
  };

  const handleAddRecharge = () => {
    console.log('Add new recharge');
    // Implement add recharge functionality
  };

  return (
    <div className="max-w-8xl mx-auto bg-white p-6 min-h-screen">
      
        {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Recharges</h2>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <Trash2 size={18} /> Delete
                </button>
              </div>

        

        {/* Data Table */}
        <DataTable
          title=""
          data={rechargesData}
          columns={columns}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
          showSelection={false}
          searchable={true}
          pageSize={10}
          toolbar={
            <div className="flex items-center gap-2">
              {/* Additional toolbar items can be added here */}
            </div>
          }
        />
     
    </div>
  );
};

export default Recharges;