// src/components/complaints-management/ComplaintAction.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewComplaint from './new-complaint';
import CloseComplaint from './close-complaint';

const ComplaintAction = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('new-complaint');

  const tabs = [
    { id: 'new-complaint', label: 'NEW COMPLAINT' },
    { id: 'close-complaint', label: 'CLOSE COMPLAINT' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'new-complaint':
        return <NewComplaint />;
      case 'close-complaint':
        return <CloseComplaint />;
      default:
        return <NewComplaint />;
    }
  };

  const handleBack = () => {
    navigate('/complaint'); // Adjust this route based on your app structure
  };

  return (
    <div className="p-6">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-600 hover:text-gray-800 mr-4"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">Complaint Management</h1>
      </div>
      
      {/* Tabs */}
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

      {/* Tab content */}
      {renderTabContent()}
    </div>
  );
};

export default ComplaintAction;

