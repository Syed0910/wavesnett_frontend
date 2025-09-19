// src/components/users/Users.jsx
import { useEffect, useState } from "react";
import { getUsers } from "../../services/api";
import { Eye, Edit, Trash2, Upload, Plus } from 'lucide-react';
import DataTable from '../ui/datatable';
import { useNavigate } from "react-router-dom";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const handleAddUser = () => {
    navigate("/user/new");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await getUsers();
        setUsers(response.data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (user) => alert(`Edit user: ${user.username}`);
  const handleDelete = (user) =>
    window.confirm(`Delete ${user.username}?`) && alert(`Deleted ${user.username}`);
const navigate = useNavigate();

const handleView = (user) => {
  // Navigate to /user/:id dynamically
  navigate(`/user/userdetails/${user.id}`);
};


  const handleImport = () => {
    navigate("/user/import");
  };
  const columns = [
    {
      key: 'username',
      label: 'Username',
      render: (value, row) => (
        <span
          onClick={() => handleView(row)}
          className="cursor-pointer px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all duration-200"
        >
          {value}
        </span>
      )
    },
    { key: 'id', label: 'ID', primaryKey: true },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'alternatePhone', label: 'Alternate Phone' },
    { key: 'contactPerson', label: 'Contact Person' },
    { key: 'plan', label: 'Plan' },
    { key: 'planGroup', label: 'Plan Group' },
    { key: 'createdAt', label: 'Created At' },
    { key: 'expiry', label: 'Expiry' },
    { key: 'bill', label: 'Bill' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === 'Enable' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {value}
        </span>
      )
    },
    {
      key: 'account',
      label: 'Account',
      render: (value) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            value === 'Active' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
          }`}
        >
          {value}
        </span>
      )
    },
  ];

  if (loading) return <div className="p-6">Loading users...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;

  return (
    <div className="p-6 pt-0">
      {/* Header section similar to complaints image */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-medium mb-1 text-gray-700">
                    Users
                </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handleImport}
            className="flex items-center gap-1 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            <Upload className="w-4 h-4" />
            Import
          </button>
            <button
            onClick={handleAddUser}
            className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
            Add User
          </button>
              </div>
            </div>

      

      {/* DataTable without title and toolbar */}
      <DataTable
        data={users}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete} 
        onView={handleView}
        showSelection={false}
        pageSize={10}
      />
    </div>
  );
};

export default Users;