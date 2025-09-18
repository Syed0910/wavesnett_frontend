import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useTheme } from "../../context/ThemeContext"; // ✅ import theme

const Portal = () => {
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  const [minSidebar, setMinSidebar] = useState(false);
  const [autoMacBinding, setAutoMacBinding] = useState(true);

  const themeColors = [
    "#ef4444", "#ec4899", "#a855f7", "#8b5cf6",
    "#6366f1", "#3b82f6", "#06b6d4", "#10b981",
    "#22c55e", "#84cc16", "#eab308", "#f59e0b",
    "#f97316", "#78716c", "#6b7280"
  ];

  // ✅ Update CSS variable for global usage
  useEffect(() => {
    document.body.style.setProperty("--primary", primaryColor);
  }, [primaryColor]);

  return (
    <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 h-screen overflow-y-auto">
      {/* Themes Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
          Themes
        </h2>

        {/* Color Picker */}
        <div className="grid grid-cols-8 gap-3 mb-6">
          {themeColors.map((color, index) => (
            <button
              key={index}
              onClick={() => setPrimaryColor(color)}
              className={`w-12 h-12 rounded-lg relative transition ring-offset-2 ${
                primaryColor === color ? "ring-2 ring-[var(--primary)]" : ""
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Dark Mode */}
        <label className="flex items-center space-x-2 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] transition">
            Dark Mode
          </span>
        </label>
      </div>

      {/* Example Texts to Preview Theme Hover */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Preview
        </h3>
        <p className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary)] transition cursor-pointer">
          Hover over me to see theme color.
        </p>
        <p className="text-gray-600 dark:text-gray-400 hover:text-[var(--primary)] transition cursor-pointer">
          The whole UI (Sidebar, Navbar, Buttons) updates with the selected theme color.
        </p>
      </div>
    </main>
  );
};

export default Portal;
