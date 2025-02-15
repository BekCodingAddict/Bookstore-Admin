"use client";
import React, { useState } from "react";

const SettingsClient = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<boolean>(true);

  const handleDarkModeToggle = () => setDarkMode(!darkMode);
  const handleNotificationsToggle = () => setNotifications(!notifications);

  return (
    <div className={`space-y-8`}>
      {/* General Settings Section */}
      <div>
        <h3 className="text-lg font-medium mb-4">General Settings</h3>
        <div className="space-y-4">
          {/* Dark Mode Toggle */}
          <div className="flex justify-between items-center">
            <span>Dark Mode</span>
            <button
              onClick={handleDarkModeToggle}
              className={`px-4 py-2 rounded-md text-sm ${
                darkMode
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {darkMode ? "Disable" : "Enable"}
            </button>
          </div>

          {/* Notifications Toggle */}
          <div className="flex justify-between items-center">
            <span>Email Notifications</span>
            <button
              onClick={handleNotificationsToggle}
              className={`px-4 py-2 rounded-md text-sm ${
                notifications
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {notifications ? "Disable" : "Enable"}
            </button>
          </div>
        </div>
      </div>

      {/* Account Settings Section */}
      <div>
        <h3 className="text-lg font-medium mb-4">Account Settings</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Change Password</span>
            <button
              className="px-4 py-2 rounded-md text-sm bg-blue-600 text-white"
              onClick={() => alert("Change password feature")}
            >
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Section */}
      <div>
        <h3 className="text-lg font-medium mb-4">Preferences</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Language</span>
            <select
              className="px-4 py-2 rounded-md border text-gray-700"
              defaultValue="English"
            >
              <option>English</option>
              <option>Korean</option>
              <option>Spanish</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <span>Currency</span>
            <select
              className="px-4 py-2 rounded-md border text-gray-700"
              defaultValue="USD"
            >
              <option>USD</option>
              <option>KRW</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsClient;
