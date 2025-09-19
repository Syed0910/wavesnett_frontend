import React, { useState, useEffect } from 'react';
import { Plus, Upload,Settings, Users } from 'lucide-react';
import axios from 'axios';
import DataTable from '../ui/datatable';
import { PrimaryButton } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const BulkUserLots = () => {
  const navigate = useNavigate();

  const [bulkLots, setBulkLots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState({
    from: '',
    to: ''
  });
//Fetch bulk lots from API
  useEffect(() => {
    const fetchBulkLots = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/api/bulk-lots'); // 👈 replace with your real API endpoint
        setBulkLots(response.data || []);
      } catch (error) {
        console.error('Error fetching bulk lots:', error);
        setBulkLots([]); // ensure no fallback data is shown
      } finally {
        setLoading(false);
      }
    };

    fetchBulkLots();
  }, []);

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
    { key: 'usernameLength', label: 'Username Length' },
    { key: 'passwordLength', label: 'Password Length' },
    { key: 'planName', label: 'Plan Name' },
    {
      key: 'users',
      label: 'Users',
      render: (value) => (
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {value}
        </span>
      )
    },
    { key: 'expDate', label: 'Exp. Date', type: 'date' },
    { key: 'createDate', label: 'Create Date', type: 'date' },
    { key: 'zone', label: 'Zone' }
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
          Bulk User Lots
        </h2>
        <div className="flex items-center gap-2">
      {/* Configuration */}
      <button
        onClick={() => navigate("/user/configuration")}
        className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <Settings className="w-4 h-4" />
        Configuration
      </button>

      {/* All Users */}
      <button
        onClick={() => navigate("/user/bulk-users")}
        className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <Users className="w-4 h-4" />
        All Users
      </button>

      {/* Create Bulk User */}
      <button
        onClick={() => navigate("/user/create")}
        className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        <Plus className="w-4 h-4" />
        Create Bulk User
      </button>
    </div>
      </div>

      {/* Show loader while fetching data */}
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

export default BulkUserLots;
