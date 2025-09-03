import React, { useState } from 'react';
import { Download, Upload, Plus, Filter, Calendar } from 'lucide-react';
import DataTable from '../ui/datatable';
import Button, { PrimaryButton, OutlineButton } from '../ui/button';

const BulkUserLots = () => {
  // Sample data - you can replace with actual data or keep empty initially
  const [bulkLots] = useState([
    // Add sample data if needed for testing
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
    {
      key: 'lotName',
      label: 'Lot Name',
      render: (value) => (
        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
          {value}
        </span>
      )
    },
    {
      key: 'usernameLength',
      label: 'Username Length'
    },
    {
      key: 'passwordLength',
      label: 'Password Length'
    },
    {
      key: 'planName',
      label: 'Plan Name'
    },
    {
      key: 'users',
      label: 'Users',
      render: (value) => (
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {value}
        </span>
      )
    },
    {
      key: 'expDate',
      label: 'Exp. Date',
      type: 'date'
    },
    {
      key: 'createDate',
      label: 'Create Date',
      type: 'date'
    },
    {
      key: 'zone',
      label: 'Zone'
    }
  ];

  const handleEdit = (lot, index) => {
    console.log('Edit lot:', lot);
    // Navigate to edit lot page or open modal
  };

  const handleDelete = (lot, index) => {
    console.log('Delete lot:', lot);
    if (window.confirm(`Are you sure you want to delete lot "${lot.lotName}"?`)) {
      // Delete logic here
    }
  };

  const handleView = (lot, index) => {
    console.log('View lot:', lot);
    // Navigate to lot details page or open modal
  };

  const handleDateChange = (field, value) => {
    setDateRange(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleExport = () => {
    console.log('Exporting data...');
    // Export logic here
  };

  const handleImport = () => {
    console.log('Importing data...');
    // Import logic here
  };

  const handleFilter = () => {
    console.log('Filtering data...');
    // Filter logic here
  };

  const handleAddBulkLot = () => {
    console.log('Adding new bulk lot...');
    // Navigate to add bulk lot page or open modal
  };

  const toolbar = (
    <>

      <PrimaryButton 
        icon={<Plus className="w-4 h-4" />}
        onClick={handleAddBulkLot}
        tooltip="Add New Bulk Lot"
      >
        Add Bulk Lot
      </PrimaryButton>
    </>
  );

  return (
    <div className="p-6">
      <DataTable
        title="Bulk User Lots"
        data={bulkLots}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false} // Changed from true to false to remove the checkbox column
        toolbar={toolbar}
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