import React, { useState } from 'react';
import DataTable from '../ui/datatable';
import { Calendar } from 'lucide-react';

const Vouchers = () => {
  // Empty data as shown in the image - "No data available in table"
  const [data] = useState([]);
  const [dateRange, setDateRange] = useState('2025-08-07 ~ 2025-09-06');

  const columns = [
    {
      key: 'secret',
      label: 'Secret'
    },
    {
      key: 'plan',
      label: 'Plan'
    },
    {
      key: 'usedDate',
      label: 'Used Date'
    },
    {
      key: 'creationDate',
      label: 'Creation Date'
    },
    {
      key: 'userName',
      label: 'User name'
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

  return (
    <div className="max-w-8xl mx-auto bg-white p-0 pt-0 min-h-screen">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Vouchers</h2>
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
      </div>

      
      <DataTable
        title="Vouchers"
        data={data}
        columns={columns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        pageSize={10}
        searchable={true}
      />
    </div>
  );
};

export default Vouchers;