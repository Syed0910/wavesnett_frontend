import React, { useState } from 'react';
import DataTable from '../ui/datatable';
import { MoreVertical, Plus } from 'lucide-react';

const PlanGroup = () => {
  const [data] = useState([]);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [zone, setZone] = useState('admin');

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'createdAt', label: 'Created At' },
    { key: 'zoneName', label: 'Zone Name' }
  ];

  const handleNewPlan = () => {
    setShowActionsDropdown(false);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Group Name:", groupName, "Zone:", zone);
    setShowModal(false);
  };

  return (
    <div className="max-w-8xl mx-auto bg-white p-0 pt-0 min-h-screen">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Plan Group</h2>

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
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DataTable */}
      <DataTable
        title="Plan Group"
        data={data}
        columns={columns}
        pageSize={10}
        searchable={true}
      />

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md shadow-lg w-96">
            <div className="bg-cyan-500 text-white font-bold px-4 py-3 rounded-t-md">
              Create new plangroup here
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              {/* Group Name */}
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Group Name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {/* Zone */}
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">Zone</label>
                <select
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="admin">admin</option>
                  <option value="zone1">Bharat</option>
                  
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanGroup;
