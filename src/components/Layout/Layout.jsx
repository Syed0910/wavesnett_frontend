import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './footer';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-60 ml-4 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Navbar 
          onMenuToggle={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* Layout Container */}
      <div className="flex pt-16"> {/* pt-16 = 64px for navbar height */}
        
        {/* Desktop Sidebar - Fixed */}
        <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 z-40">
          <div className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            <Sidebar isOpen={true} onClose={closeSidebar} />
          </div>
        </div>
        
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 pt-16">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50" 
              onClick={closeSidebar}
            />
            {/* Sidebar */}
            <div className="relative w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
              <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            </div>
          </div>
        )}
        
        {/* Main Content Area */}
        <div className="flex-1 lg:ml-60 min-h-screen flex flex-col">
          {/* Main Content */}
          <main className="flex-1 sm:p-6">
            <div className="max-w-full mx-auto">
              {children}
            </div>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
