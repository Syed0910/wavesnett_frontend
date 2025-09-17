import React, { useState } from "react";

const OperatorNotification = () => {
  const [settings, setSettings] = useState({
    sendToZone: true,
    events: {
      nasConnection: { mail: false, sms: false, whatsapp: false },
      userComplaint: { mail: true, sms: false, whatsapp: true },
    },
  });

  const handleToggle = (event, channel) => {
    setSettings((prev) => ({
      ...prev,
      events: {
        ...prev.events,
        [event]: {
          ...prev.events[event],
          [channel]: !prev.events[event][channel],
        },
      },
    }));
  };

  const handleApply = () => {
    console.log("Applied settings:", settings);
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="pt-0 pb-2 mb-2">
        <h2 className="text-xl font-medium text-gray-700 mb-2">
          Operator Notification Settings
        </h2>
      </div>

      {/* Zone Notification Checkbox */}
      <div className="flex items-center mb-6">
        <input
          id="sendToZone"
          type="checkbox"
          checked={settings.sendToZone}
          onChange={() =>
            setSettings((prev) => ({ ...prev, sendToZone: !prev.sendToZone }))
          }
          style={{ accentColor: "var(--primary)" }}
          className="h-4 w-4 border-gray-300 rounded"
        />
        <label htmlFor="sendToZone" className="ml-2 text-sm text-gray-700">
          User complaint notification sent to zone if operator not assigned
        </label>
      </div>

      {/* Notification Events Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-2 text-sm font-medium text-gray-600">
              Event
            </th>
            <th className="text-center py-2 text-sm font-medium text-gray-600">
              Mail
            </th>
            <th className="text-center py-2 text-sm font-medium text-gray-600">
              SMS
            </th>
            <th className="text-center py-2 text-sm font-medium text-gray-600">
              Whatsapp
            </th>
          </tr>
        </thead>
        <tbody>
          {/* NAS Connection Row */}
          <tr className="border-b border-gray-200">
            <td className="py-3 text-sm text-gray-700">NAS Connection</td>
            <td className="text-center">
              <input
                type="checkbox"
                checked={settings.events.nasConnection.mail}
                onChange={() => handleToggle("nasConnection", "mail")}
                style={{ accentColor: "var(--primary)" }}
                className="h-4 w-4 border-gray-300 rounded"
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                checked={settings.events.nasConnection.sms}
                onChange={() => handleToggle("nasConnection", "sms")}
                style={{ accentColor: "var(--primary)" }}
                className="h-4 w-4 border-gray-300 rounded"
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                checked={settings.events.nasConnection.whatsapp}
                onChange={() => handleToggle("nasConnection", "whatsapp")}
                style={{ accentColor: "var(--primary)" }}
                className="h-4 w-4 border-gray-300 rounded"
              />
            </td>
          </tr>

          {/* User Complaint Row */}
          <tr>
            <td className="py-3 text-sm text-gray-700">User Complaint</td>
            <td className="text-center">
              <input
                type="checkbox"
                checked={settings.events.userComplaint.mail}
                onChange={() => handleToggle("userComplaint", "mail")}
                style={{ accentColor: "var(--primary)" }}
                className="h-4 w-4 border-gray-300 rounded"
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                checked={settings.events.userComplaint.sms}
                onChange={() => handleToggle("userComplaint", "sms")}
                style={{ accentColor: "var(--primary)" }}
                className="h-4 w-4 border-gray-300 rounded"
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                checked={settings.events.userComplaint.whatsapp}
                onChange={() => handleToggle("userComplaint", "whatsapp")}
                style={{ accentColor: "var(--primary)" }}
                className="h-4 w-4 border-gray-300 rounded"
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Action Buttons */}
      <div className="flex space-x-3 mt-4">
        <button
          onClick={handleApply}
          style={{ backgroundColor: "var(--primary)" }}
          className="px-5 py-1 text-white rounded hover:opacity-90 transition-colors"
        >
          APPLY
        </button>
        <button
          onClick={handleCancel}
          className="px-5 py-1 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default OperatorNotification;
