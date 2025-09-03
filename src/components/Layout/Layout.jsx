// Layout.jsx
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const LG_BREAKPOINT = 1024;

const Layout = ({ children }) => {
  // Track the sidebar open state for toggles
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= LG_BREAKPOINT);
  // To prevent unnecessary state updates after mount
  const prevIsLarge = useRef(window.innerWidth >= LG_BREAKPOINT);

  // Responsive: auto sync when crossing the breakpoint
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= LG_BREAKPOINT;
      // Only update when crossing the breakpoint
      if (isLarge !== prevIsLarge.current) {
        setIsSidebarOpen(isLarge);
        prevIsLarge.current = isLarge;
      }
    };

    window.addEventListener('resize', handleResize);
    // Call once on mount to set correct initial state
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Always allow manual toggle
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Close handler for mobile overlay/click-away
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Navbar isSidebarOpen={isSidebarOpen} onMenuToggle={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0 z-60' : '-translate-x-full z-40'} lg:translate-x-0`}
      >
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col pt-16 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}
      >
        <main className="flex-1 p-4 sm:p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
