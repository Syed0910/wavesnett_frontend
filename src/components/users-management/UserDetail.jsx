// src/components/users-management/UserDetail.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AccountInfo from './AccountInfo';
import UserInfo from './UserInfo';
import Policy from './Policy';
import Onu from './Onu';
import Recharges from './Recharges';
import ConnectionAttempt from './ConnectionAttempt';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account-info');
  console.log("UserDetail ID:", id);

  const tabs = [
    { id: 'account-info', label: 'ACCOUNT INFO' },
    { id: 'user-info', label: 'USER INFO' },
    { id: 'policy', label: 'POLICY' },
    { id: 'onu', label: 'ONU' },
    { id: 'recharges', label: 'RECHARGES' },
    { id: 'connection-attempt', label: 'CONNECTION ATTEMPT' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account-info':
        return <AccountInfo id={id} />;
      case 'user-info':
        return <UserInfo id={id} />;
      case 'policy':
        return <Policy id={id} />;
      case 'onu':
        return <Onu id={id} />;
      case 'recharges':
        return <Recharges id={id} />;
      case 'connection-attempt':
        return <ConnectionAttempt id={id} />;
      default:
        return <AccountInfo id={id} />;
    }
  };

  const handleBack = () => {
    navigate('/user/users');
  };

  return (
    <div className="p-6">
     
      
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`py-2 px-4 font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {renderTabContent()}
    </div>
  );
};

export default UserDetail;