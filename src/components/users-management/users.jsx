// src/components/users/Users.jsx
import { useEffect, useState } from "react";
import { getUsers, addUser } from "../../services/api";
import { Eye, Edit, Trash2, Upload, Plus } from 'lucide-react';
import DataTable from '../ui/datatable';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  const handleView = (user) => alert(`View details: ${user.username}`);
  const handleImport = () => alert("Import users clicked");
  const handleAddUser = () => alert("Add user clicked");

const columns = [
  { key: 'id', label: 'ID', primaryKey: true },
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


  const toolbar = (
    <div className="flex items-center gap-2">
      <button
        onClick={handleImport}
        className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
      >
        <Upload className="w-4 h-4" />
      </button>
      <button
        onClick={handleAddUser}
        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
      >
        <Plus className="w-4 h-4" />
      </button>
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
        toolbar={toolbar}
        pageSize={10}
      />
    </div>
  );
};

export default Users;
