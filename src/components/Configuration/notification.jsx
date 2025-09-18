// components/Configuration/notification.jsx
import React, { useState } from "react";

const NotificationSettings = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    expiryNotificationDays: 3,
    dailyNotificationTime: "10:36",
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
    quotasUsed: { mail: false, sms: false, whatsapp: false },
  });

  const handleSettingChange = (field, value) => {
    setNotificationSettings(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNotificationChange = (event, channel) => {
    setNotifications(prev => ({
      ...prev,
      [event]: {
        ...prev[event],
        [channel]: !prev[event][channel],
      },
    }));
  };

  const notificationTypes = [
    { key: "newUser", label: "New User" },
    { key: "rechargeUser", label: "Recharge User" },
    { key: "changePlan", label: "Change Plan" },
    { key: "newReceipt", label: "New Receipt" },
    { key: "resetPassword", label: "Reset Password" },
    { key: "expirationNotification", label: "Expiration Notification" },
    { key: "fupOver", label: "FUP Over" },
    { key: "enableUser", label: "Enable User" },
    { key: "disableUsers", label: "Disable Users" },
    { key: "serviceResume", label: "Service Resume" },
    { key: "serviceSuspend", label: "Service Suspend" },
    { key: "userComplaintAcknowledgement", label: "User Complaint Acknowledgement" },
    { key: "renewalReminder", label: "Renewal Reminder", description: "Notifications will be sent until renew" },
    { key: "outstandingReminder", label: "Outstanding Reminder", description: "Notifications will be sent until outstanding paid" },
    { key: "expired", label: "Expired" },
    { key: "quotasUsed", label: "Quotas Used" },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm max-w-8xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Notification Settings</h2>

      {/* Top Settings */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Notification Before Days</label>
          <input
            type="number"
            value={notificationSettings.expiryNotificationDays}
            onChange={e => handleSettingChange('expiryNotificationDays', parseInt(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">
            Expiry notifications will send before 3 Days and on the expiry date
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Daily Notification Time</label>
          <div className="flex items-center space-x-2">
            <input
              type="time"
              value={notificationSettings.dailyNotificationTime}
              onChange={e => handleSettingChange('dailyNotificationTime', e.target.value)}
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
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-2 text-sm font-medium text-gray-600">Event</th>
            <th className="text-center py-2 text-sm font-medium text-gray-600">Mail</th>
            <th className="text-center py-2 text-sm font-medium text-gray-600">SMS</th>
            <th className="text-center py-2 text-sm font-medium text-gray-600">Whatsapp</th>
          </tr>
        </thead>
        <tbody>
          {notificationTypes.map(type => (
            <tr key={type.key} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 text-sm text-gray-700">
                <div>
                  <div className="font-medium text-gray-700">{type.label}</div>
                  {type.description && <div className="text-xs text-gray-500 mt-1">{type.description}</div>}
                </div>
              </td>
              {['mail','sms','whatsapp'].map(channel => (
                <td key={channel} className="text-center">
                  <input
                    type="checkbox"
                    checked={notifications[type.key][channel]}
                    onChange={() => handleNotificationChange(type.key, channel)}
                    className="h-4 w-4 border-gray-300 rounded"
                    style={{ accentColor: "var(--primary)" }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="flex space-x-3 mt-4">
        <button
          style={{ backgroundColor: "var(--primary)" }}
          className="px-5 py-1 text-white rounded hover:opacity-90 transition-colors"
        >
          APPLY
        </button>
        <button
          className="px-5 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default NotificationSettings;