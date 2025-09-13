// components/Configuration/notification.jsx
import React, { useState } from "react";

const NotificationSettings = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    expiryNotificationDays: 3,
    dailyNotificationTime: "10:36"
  });

  const [notifications, setNotifications] = useState({
    newUser: { mail: true, sms: true, whatsapp: true },
    rechargeUser: { mail: true, sms: true, whatsapp: true },
    changePlan: { mail: true, sms: true, whatsapp: true },
    newReceipt: { mail: true, sms: true, whatsapp: true },
    resetPassword: { mail: true, sms: true, whatsapp: false },
    expirationNotification: { mail: true, sms: true, whatsapp: true },
    fupOver: { mail: true, sms: true, whatsapp: true },
    enableUser: { mail: true, sms: true, whatsapp: true },
    disableUsers: { mail: true, sms: true, whatsapp: true },
    serviceResume: { mail: true, sms: true, whatsapp: true },
    serviceSuspend: { mail: true, sms: true, whatsapp: true },
    userComplaintAcknowledgement: { mail: true, sms: true, whatsapp: false },
    renewalReminder: { mail: true, sms: true, whatsapp: true },
    outstandingReminder: { mail: true, sms: true, whatsapp: true },
    expired: { mail: true, sms: true, whatsapp: true },
    quotasUsed: { mail: false, sms: false, whatsapp: false }
  });

  const handleSettingChange = (field, value) => {
    setNotificationSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (event, channel, value) => {
    setNotifications(prev => ({
      ...prev,
      [event]: {
        ...prev[event],
        [channel]: value
      }
    }));
  };

  const notificationTypes = [
    { key: 'newUser', label: 'New User' },
    { key: 'rechargeUser', label: 'Recharge User' },
    { key: 'changePlan', label: 'Change Plan' },
    { key: 'newReceipt', label: 'New Receipt' },
    { key: 'resetPassword', label: 'Reset Password' },
    { key: 'expirationNotification', label: 'Expiration Notification' },
    { key: 'fupOver', label: 'FUP Over' },
    { key: 'enableUser', label: 'Enable User' },
    { key: 'disableUsers', label: 'Disable Users' },
    { key: 'serviceResume', label: 'Service Resume' },
    { key: 'serviceSuspend', label: 'Service Suspend' },
    { key: 'userComplaintAcknowledgement', label: 'User Complaint Acknowledgement' },
    { key: 'renewalReminder', label: 'Renewal Reminder', description: 'Notifications will be sent until renew' },
    { key: 'outstandingReminder', label: 'Outstanding Reminder', description: 'Notifications will be sent until outstanding paid' },
    { key: 'expired', label: 'Expired' },
    { key: 'quotasUsed', label: 'Quotas Used' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Notification Settings</h2>
      
      {/* Top Settings */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Expiry Notification Before Days
          </label>
          <input
            type="number"
            value={notificationSettings.expiryNotificationDays}
            onChange={(e) => handleSettingChange('expiryNotificationDays', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Expiry notifications will send before 3 Days and on the expiry date
          </p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Daily Notification Time
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="time"
              value={notificationSettings.dailyNotificationTime}
              onChange={(e) => handleSettingChange('dailyNotificationTime', e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
            <span className="text-sm text-gray-500">⏰</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Daily notifications for Expiry, Renewal, and Outstanding will send every day at 10:36 o'clock
          </p>
        </div>
      </div>

      {/* Notifications Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="px-4 py-3 text-left font-medium text-gray-700">Event</th>
              <th className="px-4 py-3 text-center font-medium text-gray-700">Mail</th>
              <th className="px-4 py-3 text-center font-medium text-gray-700">SMS</th>
              <th className="px-4 py-3 text-center font-medium text-gray-700">Whatsapp</th>
            </tr>
          </thead>
          <tbody>
            {notificationTypes.map((type) => (
              <tr key={type.key} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div>
                    <div className="font-medium text-gray-700">{type.label}</div>
                    {type.description && (
                      <div className="text-xs text-gray-500 mt-1">{type.description}</div>
                    )}
                    {type.key === 'outstandingReminder' && (
                      <div className="text-xs text-gray-500 mt-1">To stop notifications for any user, disable them.</div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={notifications[type.key]?.mail || false}
                      onChange={(e) => handleNotificationChange(type.key, 'mail', e.target.checked)}
                      className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
                    />
                  </label>
                </td>
                <td className="px-4 py-3 text-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={notifications[type.key]?.sms || false}
                      onChange={(e) => handleNotificationChange(type.key, 'sms', e.target.checked)}
                      className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
                    />
                  </label>
                </td>
                <td className="px-4 py-3 text-center">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={notifications[type.key]?.whatsapp || false}
                      onChange={(e) => handleNotificationChange(type.key, 'whatsapp', e.target.checked)}
                      className="w-4 h-4 text-cyan-400 border-gray-300 rounded"
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-md font-medium">
          APPLY
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-md font-medium">
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;