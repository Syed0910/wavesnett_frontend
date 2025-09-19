// src/pages/users.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Users from '../components/users-management/users';
import NewUser from '../components/users-management/new-users';
import BulkUserLots from '../components/users-management/bulk-user-lots';
import UserDetail from '../components/users-management/UserDetail';
import BulkUserConfiguration from '../components/users-management/bulk-configuration';
import BulkUsers from '../components/users-management/bulk-users';
import CreateBulkUser from '../components/users-management/add-bulk-lot';

const UsersPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/users" replace />} />
      <Route path="/users" element={<Users />} />
      <Route path="/new" element={<NewUser />} />
      <Route path="/bulk" element={<BulkUserLots />} />
      <Route path="/configuration" element={<BulkUserConfiguration />} />
      <Route path="/bulk-users" element={<BulkUsers/>} />
      <Route path="/create" element={<CreateBulkUser />} />
      <Route path="/userdetails/:id" element={<UserDetail />} />
    </Routes>
  );
};

export default UsersPage;