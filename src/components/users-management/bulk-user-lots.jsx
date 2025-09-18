import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import DataTable from '../ui/datatable';
import { PrimaryButton } from '../ui/button';

const BulkUserLots = () => {
  const [bulkLots] = useState([
    {
      lotName: 'BULK_LOT_001',
      usernameLength: 8,
      passwordLength: 12,
      planName: 'WavesNett 50mbps UL 6M',
      users: 25,
      expDate: '2026-03-01',
      createDate: '2025-08-30',
      zone: 'admin'
    },
    {
      lotName: 'BULK_LOT_002',
      usernameLength: 10,
      passwordLength: 16,
      planName: 'WavesNett 100Mbps UL 3M',
      users: 50,
      expDate: '2025-12-15',
      createDate: '2025-08-25',
      zone: 'admin'
    }
  ]);

  const [dateRange, setDateRange] = useState({
    from: '2025-07-31',
    to: '2025-08-30'
  });

  const columns = [
    { key: 'lotName', label: 'Lot Name', render: (value) => (
      <span className="text-blue-600 font-medium cursor-pointer hover:underline">
        {value}
      </span>
    )},
    { key: 'usernameLength', label: 'Username Length' },
    { key: 'passwordLength', label: 'Password Length' },
    { key: 'planName', label: 'Plan Name' },
    { key: 'users', label: 'Users', render: (value) => (
      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {value}
      </span>
    )},
    { key: 'expDate', label: 'Exp. Date', type: 'date' },
    { key: 'createDate', label: 'Create Date', type: 'date' },
    { key: 'zone', label: 'Zone' }
  ];

  const handleEdit = (lot) => console.log('Edit lot:', lot);
  const handleDelete = (lot) => console.log('Delete lot:', lot);
  const handleView = (lot) => console.log('View lot:', lot);
  const handleDateChange = (field, value) =>
    setDateRange((prev) => ({ ...prev, [field]: value }));

  const handleAddBulkLot = () => {
    console.log('Adding new bulk lot...');
  };

  return (
    <div className="p-0 pt-0 max-w-8xl mx-auto bg-white min-h-screen">
      {/* Header section */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-medium mb-1 text-gray-700">
          Bulk User Lots
                </h2>
        <div className="flex items-center gap-2">
          {/* Date Range Picker */}
          <div className="flex items-center gap-2 mr-4">
            <input
              type="date"
              value={dateRange.from}
              onChange={(e) => handleDateChange('from', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="text-gray-500">–</span>
            <input
              type="date"
              value={dateRange.to}
              onChange={(e) => handleDateChange('to', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
        
          
          <button
            onClick={handleImport}
            className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <Upload className="w-4 h-4" />
            Import
          </button>
          
          <button
            onClick={handleAddBulkLot}
            className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            Add Bulk Lot
          </button>
        </div>
      </div>

      
      {/* DataTable without title and toolbar */}
      <DataTable
        data={bulkLots}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        pageSize={15}
        headerClassName="font-semibold"
         showDateFilter={true}   // 👈 enables date range filter
        dateRange={dateRange}
        onDateChange={handleDateChange}
 
      />
      
    </div>
  );
};

export default BulkUserLots;
