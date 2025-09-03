// src/components/users-management/users.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Plus } from 'lucide-react';
import DataTable from '../ui/datatable';

const Users = () => {
  const navigate = useNavigate();
  
  // Sample data matching the image
  const [users] = useState([
    {
      id: '039',
      username: 'abdul',
      name: 'Mohammed Abdul wahab',
      phone: '9448652221',
      alternatePhone: '',
      email: 'avar777@gmail.com',
      plan: 'Wareekett Springs UL 6M',
      expiry: '18/12/2025 17:07:19',
      createdAt: '16/06/2025 17:07:19',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Enable',
      account: 'Active'
    },
    {
      id: '078',
      username: 'abdulkareem',
      name: 'Abdul Kareem',
      phone: '7204010590',
      alternatePhone: '',
      email: 'kuisumadmi981@gmail.com',
      plan: 'Wareekett Springs UL 6M',
      expiry: '21/01/2025 14:34:36',
      createdAt: '21/07/2025 14:34:36',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Enable',
      account: 'Active'
    },
    {
      id: '099',
      username: 'abdulkareemis',
      name: 'Abdul Kareem',
      phone: '997284775',
      alternatePhone: '',
      email: 'abdulkareem@gmail.com',
      plan: 'Wareekett Springs UL 6M',
      expiry: '12/02/2025 12:18:13',
      createdAt: '12/08/2025 12:18:13',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Enable',
      account: 'Active'
    },
    {
      id: '018',
      username: 'Abdullah',
      name: 'Stakicel Miyan',
      phone: '7339568700',
      alternatePhone: '',
      email: 'shakimiyang@gmail.com',
      plan: 'Wareekett Sdkilpes UL 12M',
      expiry: '30/05/2025 19:23:06',
      createdAt: '30/05/2025 19:23:06',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Enable',
      account: 'Active'
    },
    {
      id: '091',
      username: 'abdulrahman',
      name: 'Mohammed Abdul Rahman Z',
      phone: '720455830',
      alternatePhone: '',
      email: 'raimanbials50@gmail.com',
      plan: 'Wareekett Springs UL 6M',
      expiry: '06/02/2025 13:24:07',
      createdAt: '06/08/2025 13:24:07',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Enable',
      account: 'Active'
    },
    // Add more users as needed
  ]);

  const columns = [
    {
      key: 'username',
      label: 'User name',
      render: (value, row) => (
        <span 
          className="text-blue-600 font-medium cursor-pointer hover:underline"
          onClick={() => navigate(`/user/${value}`)}
        >
          {value}
        </span>
      )
    },
    {
      key: 'id',
      label: 'ID'
    },
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'phone',
      label: 'Phone'
    },
    {
      key: 'alternatePhone',
      label: 'Alternate Phone'
    },
    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'plan',
      label: 'Plan'
    },
    {
      key: 'expiry',
      label: 'Expiry'
    },
    {
      key: 'createdAt',
      label: 'Created At'
    },
    {
      key: 'bill',
      label: 'Bill',
      render: (value) => (
        <span className="font-medium text-gray-900">
          {value}
        </span>
      )
    },
    {
      key: 'type',
      label: 'Type'
    },
    {
      key: 'planGroup',
      label: 'Plan Group'
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Enable' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'account',
      label: 'Account',
      render: (value) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          value === 'Active' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      )
    }
  ];

  const handleEdit = (user, index) => {
    console.log('Edit user:', user);
    alert(`Edit user: ${user.username}`);
  };

  const handleDelete = (user, index) => {
    console.log('Delete user:', user);
    if (window.confirm(`Are you sure you want to delete user "${user.username}"?`)) {
      alert(`User ${user.username} would be deleted`);
    }
  };

  const handleView = (user, index) => {
    console.log('View user:', user);
    alert(`View user details: ${user.username}`);
  };

  const handleImport = () => {
    console.log('Importing users...');
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv,.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        alert(`Selected file: ${file.name}`);
      }
    };
    input.click();
  };

  const handleAddUser = () => {
    navigate('/user/new');
  };

  const Tooltip = ({ children, content }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div 
        className="relative inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {isVisible && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50">
            {content}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    );
  };

  const toolbar = (
    <div className="flex items-center gap-2">
      <Tooltip content="Import Users">
        <button 
          onClick={handleImport}
          className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
        >
          <Upload className="w-4 h-4" />
        </button>
      </Tooltip>
      
      <Tooltip content="Add New User">
        <button 
          onClick={handleAddUser}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          <Plus className="w-4 h-4" />
        </button>
      </Tooltip>
    </div>
  );

  if (loading) return <div className="p-6">Loading users...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <DataTable
        title="Users"
        data={users}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false}
        showSelection={false}
        toolbar={toolbar}
        pageSize={10}
      />
    </div>
  );
};

export default Users;
