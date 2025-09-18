import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  User,
  Settings,
  HelpCircle,
  ChevronDown,
  LogOut,
  Camera,
  Maximize2,
  Menu,
  Moon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onMenuToggle, isSidebarOpen, onSettingsClick }) => {
  const { primaryColor } = useTheme(); // ✅ get selected theme color
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [activeMenu, setActiveMenu] = useState("profile");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const fileInputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === "string") {
          setProfileImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };
const [query, setQuery] = useState("");
const [filteredUsers, setFilteredUsers] = useState([]);
const [isOpen, setIsOpen] = useState(false);

// Temporary dummy data (replace with API later)
const usersList = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Mike Johnson" },
  { id: 4, name: "Alice Walker" },
];

  return (
    <nav
      className="sticky top-0 z-50 shadow-sm"
      style={{ backgroundColor: primaryColor }} // ✅ dynamic color
    >
      <div className="px-0 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 gap-4">
          {/* Left - Menu Button */}
          <div
            className={`${
              isSidebarOpen ? "translate-x-70 z-80" : "translate-x-0"
            } transform transition-transform duration-300`}
          >
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-md hover:bg-cyan-500 transition-colors duration-200"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="flex items-center">
              <div className="relative w-full max-w-2xl">
                  {/* Left Icon & Placeholder */}
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                    <User className="w-4 h-4 text-gray-400 mr-2" />
                    {!query && <span className="text-gray-400 text-sm">Search Users</span>}
                  </div>

                  {/* Input */}
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setFilteredUsers(
                        e.target.value.trim()
                          ? usersList.filter((u) =>
                              u.name.toLowerCase().includes(e.target.value.toLowerCase())
                            )
                          : []
                      );
                    }}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setTimeout(() => setIsOpen(false), 150)}
                    className="w-full pl-20 pr-12 py-2.5 bg-white rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-700 shadow-sm"
                  />

                  {/* Right Dropdown Icon */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>

                  {/* Suggestions Dropdown */}
                  {isOpen && filteredUsers.length > 0 && (
                    <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
                      {filteredUsers.map((user) => (
                        <button
                          key={user.id}
                          onClick={() => {
                            setQuery(user.name);
                            setIsOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 text-sm"
                        >
                          {user.name}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-cyan-500 transition-colors duration-200"
            >
              <Moon className="w-5 h-5 text-white" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullScreen}
              className="p-2 rounded-md hover:bg-cyan-500 transition-colors duration-200"
            >
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
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-cyan-500 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
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
                      <button
                        onClick={triggerFileUpload}
                        className="absolute -bottom-1 -right-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-1.5 shadow-lg transition-colors"
                      >
                        <Camera className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-center mb-4">
                      <p className="text-sm font-medium text-gray-900">
                        Admin User
                      </p>
                      <p className="text-xs text-gray-500">admin@example.com</p>
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  <div className="px-2">
                    <button
                      onClick={() => {
                        setActiveMenu("profile");
                        navigate("/users/users");
                        setIsProfileOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 rounded-lg transition-colors ${
                        activeMenu === "profile" ? "bg-gray-100" : ""
                      }`}
                    >
                      <User className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">My Profile</span>
                    </button>

                    <button
                      onClick={() => {
                        setActiveMenu("settings");
                        if (onSettingsClick) onSettingsClick();
                        setIsProfileOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 rounded-lg transition-colors ${
                        activeMenu === "settings" ? "bg-gray-100" : ""
                      }`}
                    >
                      <Settings className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">Settings</span>
                    </button>

                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 rounded-lg transition-colors">
                      <HelpCircle className="w-4 h-4 text-gray-600" />
                      <span className="text-sm text-gray-700">
                        Help & Support
                      </span>
                    </button>

                    <hr className="my-2 border-gray-200" />

                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 rounded-lg transition-colors text-red-600">
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Sign out</span>
                    </button>
                  </div>

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
