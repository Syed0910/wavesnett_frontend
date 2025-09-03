// Layout.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import Navbar from './Navbar'
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Navbar isSidebarOpen={isSidebarOpen} onMenuToggle={toggleSidebar} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full  transform transition-transform duration-300
          ${isSidebarOpen ? 'translate-x-0 z-60' : '-translate-x-full z-40'} lg:translate-x-0`}
      >
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className={`${isSidebarOpen ? "-translate-x-100" : "translate-x-0"} flex items-center transform transition-transform duration-300 fixed inset-0  lg:hidden`}
          onClick={closeSidebar}
        />
      )}

      {/* Main Content */}
      <div className={`flex-1 flex flex-col pt-16 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;