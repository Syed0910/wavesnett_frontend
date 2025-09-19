import React, { useState } from 'react';
import DataTable from '../ui/datatable';
import { MoreVertical, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Vouchers = () => {
  const navigate = useNavigate();
  const [data] = useState([]);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  

  const columns = [
    { key: 'secret', label: 'Secret' },
    { key: 'plan', label: 'Plan' },
    { key: 'usedDate', label: 'Used Date' },
    { key: 'creationDate', label: 'Creation Date' },
    { key: 'userName', label: 'User name' },
    { key: 'zone', label: 'Zone' }
  ];

  const handleNewVoucher = () => {
    setShowActionsDropdown(false);
    navigate('/packages/vouchers/new-voucher'); 
  };

  return (
    <div className="max-w-8xl mx-auto bg-white p-6 pt-0 min-h-screen">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Vouchers</h2>

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
                  onClick={handleNewVoucher}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Plus size={16} className="mr-2" />
                  New Voucher
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DataTable */}
      <DataTable
        title="Vouchers"
        data={data}
        columns={columns}
        pageSize={10}
        searchable={true}
      />
    </div>
  );
};

export default Vouchers;
