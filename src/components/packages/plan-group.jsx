import React, { useState } from 'react';
import DataTable from '../ui/datatable';

const PlanGroup = () => {
  // Empty data as shown in the image - "No data available in table"
  const [data] = useState([]);

  const columns = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'createdAt',
      label: 'Created At'
    },
    {
      key: 'zoneName',
      label: 'Zone Name'
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
        <h2 className="text-xl font-semibold text-gray-800">Plan Group</h2>

        
      </div>
      
      <DataTable
        title="Plan Group"
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

export default PlanGroup;