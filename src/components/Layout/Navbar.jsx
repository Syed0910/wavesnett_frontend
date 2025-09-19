import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  User,
  Settings,
  HelpCircle,
  ChevronDown,
  LogOut,
  Camera,
  Maximize2,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const Navbar = ({ onMenuToggle, isSidebarOpen, onSettingsClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState("profile");

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [notificationCount] = useState(91); // change this value dynamically as needed
  const navigate = useNavigate();

  // Dummy data for search (replace with API later)
  const usersList = [
    { id: 1, name: "Qazi" },
    { id: 2, name: "w-nett office" },
    { id: 3, name: "azhar khan" },
    { id: 4, name: "syedmamu" },
  ];


  // initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      // no preference saved, respect system preference
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
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
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const triggerFileUpload = () => fileInputRef.current?.click();

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

  const handleInputChange = (value) => {
    setQuery(value);
    if (value.trim()) {
      const matches = usersList.filter((u) =>
        u.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers(matches);
      setIsOpen(matches.length > 0);
    } else {
      setFilteredUsers([]);
      setIsOpen(false);
    }
  };

  const handleSuggestionSelect = (user) => {

    // selecting a suggestion — set query and close dropdown
    setQuery(user.name);
    setIsOpen(false);
    // you can navigate to a user page if desired:
    // navigate(`/users/${user.id}`);

    console.log("Selected user:", user);
  };

  return (

    <nav className="bg-cyan-400 dark:bg-gray-900 sticky top-0 z-50 shadow-sm">

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

              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>


          {/* Center - Search */}
          

          {/* Right - Actions */}
          <div className="flex items-center gap-3">
            {/* Center - Search */}
<div className="flex items-center w-full max-w-2xl relative">
  {/* Left Icon (Search) & Placeholder */}
  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center pointer-events-none">
    <Search className="w-4 h-4 text-gray-400 mr-2" />
    {!query && (
      <span className="text-gray-400 text-sm">Search Users</span>
    )}
  </div>

  {/* Input */}
  <input
    type="text"
    value={query}
    onChange={(e) => handleInputChange(e.target.value)}
    onFocus={() => setIsOpen(filteredUsers.length > 0)}
    onBlur={() => setTimeout(() => setIsOpen(false), 150)}
    className="w-full pl-20 pr-12 py-2.5 bg-white dark:bg-gray-800 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-700 dark:text-gray-200 shadow-sm"
    placeholder=""
    aria-label="Search users"
  />

  {/* Right Dropdown Icon */}
  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
    <ChevronDown className="w-4 h-4 text-gray-400" />
  </div>

  {/* Suggestions Dropdown */}
  {isOpen && filteredUsers.length > 0 && (
    <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-60 overflow-y-auto z-[999]">
      {filteredUsers.map((user) => (
        <button
          key={user.id}
          onMouseDown={(e) => {
            e.preventDefault();
            handleSuggestionSelect(user);
          }}
          className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm"
        >
          {user.name}
        </button>
      ))}
    </div>
  )}
</div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-cyan-500 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (

                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullScreen}
              className="p-2 rounded-md hover:bg-cyan-500 transition-colors duration-200"
              aria-label="Toggle fullscreen"
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </button>


            {/* Profile icon with notification badge (navigates to /users/user) */}

            <div className="relative">
              <button
                onClick={() => navigate("/user/users")}
                className="p-2 rounded-md hover:bg-cyan-500 transition-colors duration-200 relative flex items-center justify-center"
                aria-label="Go to user profile"
              >
                <User className="w-5 h-5 text-white" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium px-1.5">
                    {notificationCount > 99 ? "99+" : notificationCount}
                  </span>
                )}
              </button>
            </div>


            {/* Avatar / Profile dropdown (keeps original avatar + menu) */}

            <div className="relative">
              <button
                onClick={() => setIsProfileOpen((p) => !p)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-cyan-500 transition-colors duration-200"
                aria-label="Open profile menu"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A</span>
                </div>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-4 z-50">
                  <div className="flex flex-col items-center px-4 mb-4">
                    <div className="relative mb-3">
                      <div
                        className="w-20 h-20 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center border-4 border-gray-200 dark:border-gray-700 shadow-lg cursor-pointer hover:opacity-80 transition-opacity"
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
                        aria-label="Upload profile image"
                      >
                        <Camera className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="text-center mb-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        Admin User
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        admin@example.com
                      </p>
                    </div>
                  </div>

                  {/* Dropdown Menu */}
                  <div className="px-2">
                    <button
                      onClick={() => {
                        setActiveMenu("profile");
                        navigate("/users/user");
                        setIsProfileOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left flex items-center gap-3 rounded-lg transition-colors ${

                        activeMenu === "profile" ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      <span className="text-sm text-gray-700 dark:text-gray-200">My Profile</span>

                    </button>

                    <button
                      onClick={() => {
                        setActiveMenu("settings");
                        if (onSettingsClick) onSettingsClick();
                        setIsProfileOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left flex items-center gap-3 rounded-lg transition-colors ${

                        activeMenu === "settings" ? "bg-gray-100 dark:bg-gray-700" : "hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      <Settings className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      <span className="text-sm text-gray-700 dark:text-gray-200">Settings</span>

                    </button>

                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3 rounded-lg transition-colors">
                      <HelpCircle className="w-4 h-4 text-gray-600 dark:text-gray-300" />

                      <span className="text-sm text-gray-700 dark:text-gray-200">Help & Support</span>

                 </button>

                    <hr className="my-2 border-gray-200 dark:border-gray-700" />

                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3 rounded-lg transition-colors text-red-600">
                      <LogOut className="w-4 h-4" />
                      <span className="text-sm">Sign out</span>
                    </button>
                  </div>

                  {/* Hidden file input for profile pic */}
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