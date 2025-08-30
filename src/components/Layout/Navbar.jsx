import React, { useState, useRef } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  Settings, 
  CreditCard, 
  HelpCircle,
  ChevronDown, 
  LogOut,
  UserCog, 
  Menu, 
  Camera,
  Maximize2
} from 'lucide-react';

const Navbar = ({ onMenuToggle, isSidebarOpen }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === 'string') {
          setProfileImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <nav className="bg-cyan-400 sticky top-0 z-50 shadow-sm">
      <div className="px-0 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-14 gap-4">
          {/* Left section - Menu Button */}
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-md hover:bg-cyan-500 transition-colors duration-200"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Center section - Search Bar */}
          <div className="flex max-w-2xl items-center">
            <div className="relative w-full">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                <User className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm">Search Users</span>
              </div>
              <input
                type="text"
                placeholder=""
                className="w-full pl-20 pr-12 py-2.5 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-700 shadow-sm"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Right section - Actions */}
          <div className="flex items-center gap-3">
            {/* Fullscreen/Expand Button */}
            <button className="p-2 rounded-md hover:bg-cyan-500 transition-colors duration-200">
              <Maximize2 className="w-5 h-5 text-white" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                className="p-2 rounded-md hover:bg-cyan-500 transition-colors duration-200 relative"
              >
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  91
                </span>
              </button>

              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-gray-50">
                      <p className="text-sm text-gray-900">New user registered</p>
                      <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-50">
                      <p className="text-sm text-gray-900">System update completed</p>
                      <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-50">
                      <p className="text-sm text-gray-900">New message received</p>
                      <p className="text-xs text-gray-500 mt-1">6 hours ago</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Section */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-cyan-500 transition-colors duration-200"
              >
                {/* Profile Initial */}
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                  {/* Profile Image Section */}
                  <div className="flex flex-col items-center px-4 mb-4">
                    <div className="relative mb-3">
                      <div 
                        className="w-20 h-20 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center border-4 border-gray-200 shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={triggerFileUpload}
                      >
                        {profileImage ? (
                          <img 
                            src={profileImage} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white text-lg font-bold">A</span>
                        )}
                      </div>

                      {/* Upload Button */}
                      <button
                        onClick={triggerFileUpload}
                        className="absolute -bottom-1 -right-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-1.5 shadow-lg transition-colors"
                      >
                        <Camera className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Profile Info */}
                    <div className="text-center mb-4">
                      <p className="text-sm font-medium text-gray-900">Admin User</p>
                      <p className="text-xs text-gray-500">admin@example.com</p>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="px-2">
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 rounded-lg transition-colors">
                      <User className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">My Profile</span>
                    </button>
                    
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 rounded-lg transition-colors">
                      <Settings className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Settings</span>
                    </button>
                    
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 rounded-lg transition-colors">
                      <HelpCircle className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Help & Support</span>
                    </button>
                    
                    <hr className="my-2 border-gray-200" />
                    
                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 rounded-lg transition-colors text-red-600">
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Sign out</span>
                    </button>
                  </div>

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
