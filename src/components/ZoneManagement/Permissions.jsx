import React, { useState } from "react";
import { PERMISSIONS_SECTIONS, ROLES } from "./permissionsData";

const ACTIONS = ["List", "View", "Insert", "Update"]; // Removed "Delete"

const Permissions = () => {
  const [permissions, setPermissions] = useState(PERMISSIONS_SECTIONS);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedRole, setSelectedRole] = useState("Admin"); // default role
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("");

  // Flatten all features for pagination and apply search filter
  const allFeatures = permissions.flatMap((section, sectionIndex) =>
    section.features.map((feature, featureIndex) => ({
      ...feature,
      sectionName: section.section,
      sectionIndex,
      featureIndex,
    }))
  ).filter(feature => 
    feature.feature.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = allFeatures.length;
  const totalPages = itemsPerPage === "all" ? 1 : Math.ceil(totalItems / itemsPerPage);
  const startIndex = itemsPerPage === "all" ? 0 : (currentPage - 1) * itemsPerPage;
  const endIndex = itemsPerPage === "all" ? totalItems : startIndex + itemsPerPage;
  const currentFeatures = allFeatures.slice(startIndex, endIndex);

  // Toggle role-specific permissions
  const togglePermission = (sectionIndex, featureIndex, role) => {
    const updated = [...permissions];
    const currentState =
      updated[sectionIndex].features[featureIndex].permissions[role] || false;
    updated[sectionIndex].features[featureIndex].permissions[role] = !currentState;
    setPermissions(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Permission</h1>

          {/* Search and Operator Selector */}
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 pl-10 text-sm focus:ring-2 focus:ring-blue-500 w-64"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Operator Selector */}
            <div className="flex flex-col">
              <label className="text-xs text-cyan-500 font-medium mb-1">Select Operator</label>
              <select
                value={selectedOperator}
                onChange={(e) => setSelectedOperator(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 min-w-48"
              >
                <option value="">Select Operator</option>
                <option value="syedgazi">syedgazi</option>
                <option value="akhlaq">akhlaq</option>
                <option value="waheed">waheed</option>
                <option value="shubham">shubham</option>
                <option value="bharat">bharat</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          
          {/* ✅ Table Header (always separate, no overlap) */}
          <div className="bg-gray-100 border-b border-gray-200">
            <div
              className="grid"
              style={{ gridTemplateColumns: `1fr repeat(${ACTIONS.length}, 120px)` }}
            >
              <div className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                File Name
              </div>
              {ACTIONS.map((action) => (
                <div
                  key={action}
                  className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider"
                >
                  {action}
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Table Body (rows render below header now) */}
          <div className="divide-y divide-gray-200">
            {currentFeatures.map((feature, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={`${feature.sectionIndex}-${feature.featureIndex}`}>
                  <div
                    className={`grid ${isEven ? "bg-gray-50" : "bg-white"}`}
                    style={{ gridTemplateColumns: `1fr repeat(${ACTIONS.length}, 120px)` }}
                  >
                    <div className="px-6 py-3 text-sm text-gray-900 font-medium">
                      {feature.feature}
                    </div>
                    {ACTIONS.map((action) => (
                      <div key={action} className="px-6 py-3 text-center">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={feature.permissions[selectedRole] || false}
                            onChange={() =>
                              togglePermission(feature.sectionIndex, feature.featureIndex, selectedRole)
                            }
                          />
                          <div
                            className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-all duration-200 ${
                              feature.permissions[selectedRole]
                                ? "bg-cyan-500 border-cyan-500"
                                : "bg-white border-gray-400"
                            }`}
                          >
                            {feature.permissions[selectedRole] && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pagination Footer */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-700">
          <span className="mr-2">Rows per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              const value = e.target.value === "all" ? "all" : Number(e.target.value);
              setItemsPerPage(value);
              setCurrentPage(1);
            }}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value="all">All</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-700">
            {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1 || itemsPerPage === "all"}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ◀
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || itemsPerPage === "all"}
              className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
