import React, { useState, useEffect } from 'react';
import { Plus, Settings, Users } from 'lucide-react';
import axios from 'axios';
import DataTable from '../ui/datatable';


const BulkUsers = () => {
 

  const [bulkLots, setBulkLots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState({ from: '', to: '' });

  // Fetch bulk lots from API
  useEffect(() => {
    const fetchBulkLots = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/bulk-lots'); // Replace with real API
        setBulkLots(response.data || []);
      } catch (error) {
        console.error('Error fetching bulk lots:', error);
        setBulkLots([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBulkLots();
  }, []);

  // Columns for DataTable
  const columns = [
    { key: 'lotName', label: 'Lot Name' },
    { key: 'username', label: 'User name' },
    { key: 'password', label: 'Password' },
    { key: 'planName', label: 'Plan Name' },
    { key: 'planCost', label: 'Plan Cost' },
    { key: 'usedDate', label: 'Used Date', type: 'date' },
    { key: 'createDate', label: 'Create Date', type: 'date' },
    { key: 'zone', label: 'Zone' },
    {
      key: 'action',
      label: 'Action',
      render: (_, row) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row)}
            className="text-blue-600 hover:underline text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="text-red-600 hover:underline text-sm"
          >
            Delete
          </button>
          <button
            onClick={() => handleView(row)}
            className="text-gray-600 hover:underline text-sm"
          >
            View
          </button>
        </div>
      )
    }
  ];

  const handleEdit = (lot) => console.log('Edit lot:', lot);
  const handleDelete = (lot) => console.log('Delete lot:', lot);
  const handleView = (lot) => console.log('View lot:', lot);
  const handleDateChange = (field, value) =>
    setDateRange((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="p-6 pt-0 max-w-8xl mx-auto bg-white min-h-screen">
      {/* Header section */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-medium mb-1 text-gray-700">
          Bulk Users
        </h2>
      </div>

      {/* Table */}
      {loading ? (
        <p className="text-gray-500 p-4">Loading bulk lots...</p>
      ) : (
        <DataTable
          data={bulkLots}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
          showSelection={false}
          pageSize={15}
          headerClassName="font-semibold"
          showDateFilter={true}
          dateRange={dateRange}
          onDateChange={handleDateChange}
        />
      )}
    </div>
  );
};

export default BulkUsers;
