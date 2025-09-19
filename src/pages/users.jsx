// src/pages/users.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Users from '../components/users-management/users';
import NewUser from '../components/users-management/new-users';
import BulkUserLots from '../components/users-management/bulk-user-lots';
import UserDetail from '../components/users-management/UserDetail';
import ImportUsers from '../components/users-management/import-users';

const UsersPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/users" replace />} />
      <Route path="/users" element={<Users />} />
      <Route path="/new" element={<NewUser />} />
      <Route path="/bulk" element={<BulkUserLots />} />
      <Route path="/import" element={<ImportUsers />} />
      <Route path="/userdetails/:id" element={<UserDetail />} />
    </Routes>
  );
};

export default UsersPage;