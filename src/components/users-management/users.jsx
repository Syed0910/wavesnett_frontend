import React, { useState } from 'react';
import { Eye, Edit, Trash2, Download, Upload, Plus, Filter } from 'lucide-react';
import DataTable from '../ui/datatable'

const Users = () => {
  // Sample data matching the image
  const [users] = useState([
    {
      username: 'moiz',
      alternatePhone: '5',
      email: 'mdmoizuddinmg@gmail.com',
      plan: '',
      expiry: '',
      createdAt: '30/08/2025 16:13:20',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Disable',
      account: 'Inactive'
    },
    {
      username: 'aleem',
      alternatePhone: '4',
      email: 'aleemsk945@gmail.com',
      plan: 'WavesNett 50mbps UL 6M',
      expiry: '01/03/2026 18:43:33',
      createdAt: '28/08/2025 14:28:24',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Disable',
      account: 'Active'
    },
    {
      username: 'aqeela',
      alternatePhone: '0',
      email: 'syedaaqeela81@gmail.com',
      plan: 'WavesNett 50mbps UL 6M',
      expiry: '28/02/2026 12:50:28',
      createdAt: '28/08/2025 11:00:55',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Disable',
      account: 'Active'
    },
    {
      username: 'shoukat',
      alternatePhone: '0',
      email: 'alishoukat297@gmail.com',
      plan: 'WavesNett 50mbps UL 6M',
      expiry: '27/02/2026 19:36:07',
      createdAt: '27/08/2025 18:33:49',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Disable',
      account: 'Active'
    },
    {
      username: 'wnett',
      alternatePhone: '6',
      email: 'humanaidtrust@gmail.com',
      plan: 'WavesNett 100Mbps UL 3M',
      expiry: '27/11/2025 04:43:12',
      createdAt: '27/08/2025 04:34:24',
      bill: '₹258.00',
      type: 'User',
      planGroup: '',
      status: 'Disable',
      account: 'Active'
    },
    {
      username: 'shaikshafi',
      alternatePhone: '1',
      email: 'shafiuddinsulta@gmail.com',
      plan: 'WavesNett 50Mbps UL 12M',
      expiry: '26/08/2026 16:30:00',
      createdAt: '26/08/2025 16:30:00',
      bill: '₹4248.00',
      type: 'User',
      planGroup: '',
      status: 'Enable',
      account: 'Active'
    },
    {
      username: 'maqbool',
      alternatePhone: '',
      email: 'naziamaqbool343@gmail.com',
      plan: 'WavesNett 50mbps UL 6M',
      expiry: '03/03/2026 17:25:28',
      createdAt: '31/08/2025 02:01:42',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Disable',
      account: 'Active'
    },
    {
      username: 'fkvideo',
      alternatePhone: '',
      email: 'fkvideodk@gmail.com',
      plan: 'WavesNett 50mbps UL 6M',
      expiry: '02/03/2026 21:46:56',
      createdAt: '30/08/2025 20:54:26',
      bill: '₹0.00',
      type: 'User',
      planGroup: '',
      status: 'Disable',
      account: 'Active'
    },
    {
      username: 'testuser1',
      alternatePhone: '2',
      email: 'testuser1@gmail.com',
      plan: 'WavesNett 25mbps UL 3M',
      expiry: '15/12/2025 10:30:00',
      createdAt: '25/08/2025 09:15:30',
      bill: '₹150.00',
      type: 'User',
      planGroup: '',
      status: 'Enable',
      account: 'Active'
    },
    {
      username: 'testuser2',
      alternatePhone: '3',
      email: 'testuser2@gmail.com',
      plan: 'WavesNett 75mbps UL 6M',
      expiry: '20/01/2026 14:20:00',
      createdAt: '22/08/2025 11:45:15',
      bill: '₹300.00',
      type: 'User',
      planGroup: '',
      status: 'Enable',
      account: 'Active'
    }
  ]);

  const columns = [
    {
      key: 'username',
      label: 'User name',
      render: (value) => (
        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
          {value}
        </span>
      )
    },
    {
      key: 'id',
      label: 'ID',
      primaryKey: true
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
    // Navigate to edit user page or open modal
    alert(`Edit user: ${user.username}`);
  };

  const handleDelete = (user, index) => {
    console.log('Delete user:', user);
    // Show confirmation dialog and delete user
    if (window.confirm(`Are you sure you want to delete user "${user.username}"?`)) {
      alert(`User ${user.username} would be deleted`);
      // Add actual delete logic here
    }
  };

  const handleView = (user, index) => {
    console.log('View user:', user);
    // Navigate to user details page or open modal
    alert(`View user details: ${user.username}`);
  };

  const handleExport = () => {
    console.log('Exporting users...');
    // Export functionality is handled by the DataTable component
    alert('Export functionality triggered from toolbar');
  };

  const handleImport = () => {
    console.log('Importing users...');
    // Create file input and trigger click
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv,.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        alert(`Selected file: ${file.name}`);
        // Add actual import logic here
      }
    };
    input.click();
  };

  const handleFilter = () => {
    console.log('Filtering users...');
    // Filter logic is handled by the DataTable component
    alert('Filter functionality triggered from toolbar');
  };

  const handleAddUser = () => {
    console.log('Adding new user...');
    // Navigate to add user page or open modal
    alert('Add new user form would open here');
  };

  // Tooltip Component for toolbar buttons
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

  return (
    <div className="p-6">
      <DataTable
        title="Users"
        data={users}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        showSelection={false} // Changed from true to false to remove the checkbox column
        toolbar={toolbar}
        pageSize={10}
      />
    </div>
  );
};

export default Users;