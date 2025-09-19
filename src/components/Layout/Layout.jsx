import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const LG_BREAKPOINT = 1024;

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    window.innerWidth >= LG_BREAKPOINT
  );
  const prevIsLarge = useRef(window.innerWidth >= LG_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= LG_BREAKPOINT;
      if (isLarge !== prevIsLarge.current) {
        setIsSidebarOpen(isLarge);
        prevIsLarge.current = isLarge;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navigate = useNavigate();
  const onSettingsClick = () => navigate("/config/admin");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-700">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          onMenuToggle={toggleSidebar}
          onSettingsClick={onSettingsClick}
        />
      </div>

      {/* Main Content Container (Sidebar + Content) */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0 z-60" : "-translate-x-full z-40"} lg:translate-x-0`}
        >
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* Main Content + Footer */}
        <div
          className={`flex flex-col flex-1 transition-all duration-300 ${
            isSidebarOpen ? "lg:ml-64" : "lg:ml-0"
          }`}
        >
          {/* Main Page Content */}
          <main className="flex-1 p-4 sm:p-6">{children}</main>

          {/* ✅ Footer stays at bottom */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
