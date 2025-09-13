import React, { useState, useMemo } from 'react';
import {
  Eye, Edit, Trash2, Copy, Settings, Columns,
  ArrowUpDown, X, Search, Printer, ChevronLeft, ChevronRight,
  MoreHorizontal, Check, Download, Upload, Plus, Filter,
  FileText, ArrowUp, ArrowDown, Menu, ChevronDown
} from 'lucide-react';

// Tooltip Component
const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900'
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute ${positionClasses[position]} px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-[60] opacity-100 transition-opacity`}>
          {content}
          <div className={`absolute ${arrowClasses[position]} w-0 h-0`}></div>
        </div>
      )}
    </div>
  );
};

// Modal Component with fixed background overlay
const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="fixed inset-0 bg-black bg-opacity-30"></div>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className={`bg-white rounded-lg shadow-xl ${sizeClasses[size]} w-full max-h-[90vh] overflow-hidden relative z-[101]`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 overflow-y-auto max-h-[70vh]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// Column Selection Modal
const ColumnSelectionModal = ({ isOpen, onClose, columns, visibleColumns, onToggleColumn, onSave, onReset }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Choose Columns" size="md">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {columns.map((column) => (
            <label key={column.key} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
              <input
                type="checkbox"
                checked={visibleColumns.includes(column.key)}
                onChange={() => onToggleColumn(column.key)}
                className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
              />
              <span className="text-sm text-gray-700">{column.label}</span>
            </label>
          ))}
        </div>
        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={onSave}
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 text-sm font-medium"
          >
            SAVE
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm font-medium"
          >
            RESET COLUMNS
          </button>
        </div>
      </div>
    </Modal>
  );
};

// Sorting Modal
const SortingModal = ({ isOpen, onClose, columns, sortConfig, onSort, onAddSort, onRemoveSort, onSave, onReset }) => {
  const [newSortColumn, setNewSortColumn] = useState('');
  const [newSortOrder, setNewSortOrder] = useState('asc');

  const handleAddSort = () => {
    if (newSortColumn && !sortConfig.find(s => s.column === newSortColumn)) {
      onAddSort(newSortColumn, newSortOrder);
      setNewSortColumn('');
      setNewSortOrder('asc');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Choose Sorting Order" size="lg">
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Current Sorting Rules:</h4>
          <div className="space-y-2">
            {sortConfig.map((sort, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700">
                    {columns.find(c => c.key === sort.column)?.label}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({sort.direction === 'asc' ? 'Ascending' : 'Descending'})
                  </span>
                </div>
                <button
                  onClick={() => onRemoveSort(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            {sortConfig.length === 0 && (
              <p className="text-sm text-gray-500 italic">No sorting rules applied</p>
            )}
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Add New Sort Rule:</h4>
          <div className="flex gap-3">
            <select
              value={newSortColumn}
              onChange={(e) => setNewSortColumn(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="">Choose Columns</option>
              {columns.map((column) => (
                <option key={column.key} value={column.key}>
                  {column.label}
                </option>
              ))}
            </select>
            <select
              value={newSortOrder}
              onChange={(e) => setNewSortOrder(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <button
              onClick={handleAddSort}
              disabled={!newSortColumn}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              ADD
            </button>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={onSave}
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 text-sm font-medium"
          >
            SAVE
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm font-medium"
          >
            RESET COLUMNS
          </button>
        </div>
      </div>
    </Modal>
  );
};

// Filter Modal
const FilterModal = ({ isOpen, onClose, columns, filters, onAddFilter, onRemoveFilter, onUpdateFilter, onSave, onReset }) => {
  const [newFilterColumn, setNewFilterColumn] = useState('');
  const [newFilterOperator, setNewFilterOperator] = useState('contains');
  const [newFilterValue, setNewFilterValue] = useState('');

  const operators = [
    { value: 'contains', label: 'Contains' },
    { value: 'equals', label: 'Equals' },
    {value: 'startsWith', label: 'Starts with' },
    { value: 'endsWith', label: 'Ends with' },
    { value: 'greater', label: 'Greater than' },
    { value: 'less', label: 'Less than' }
  ];

  const handleAddFilter = () => {
    if (newFilterColumn && newFilterValue) {
      onAddFilter({
        column: newFilterColumn,
        operator: newFilterOperator,
        value: newFilterValue
      });
      setNewFilterColumn('');
      setNewFilterOperator('contains');
      setNewFilterValue('');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Filter Data" size="lg">
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Active Filters:</h4>
          <div className="space-y-2">
            {filters.map((filter, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700">
                    {columns.find(c => c.key === filter.column)?.label}
                  </span>
                  <span className="text-sm text-gray-500">
                    {operators.find(op => op.value === filter.operator)?.label}
                  </span>
                  <span className="text-sm text-gray-900 font-medium">"{filter.value}"</span>
                </div>
                <button
                  onClick={() => onRemoveFilter(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            {filters.length === 0 && (
              <p className="text-sm text-gray-500 italic">No filters applied</p>
            )}
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Add New Filter:</h4>
          <div className="space-y-3">
            <div className="flex gap-3">
              <select
                value={newFilterColumn}
                onChange={(e) => setNewFilterColumn(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">Choose Column</option>
                {columns.map((column) => (
                  <option key={column.key} value={column.key}>
                    {column.label}
                  </option>
                ))}
              </select>
              <select
                value={newFilterOperator}
                onChange={(e) => setNewFilterOperator(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {operators.map((op) => (
                  <option key={op.value} value={op.value}>
                    {op.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={newFilterValue}
                onChange={(e) => setNewFilterValue(e.target.value)}
                placeholder="Filter value..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                onClick={handleAddFilter}
                disabled={!newFilterColumn || !newFilterValue}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                ADD
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={onSave}
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 text-sm font-medium"
          >
            APPLY FILTERS
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 text-sm font-medium"
          >
            CLEAR ALL FILTERS
          </button>
        </div>
      </div>
    </Modal>
  );
};

// Mobile Actions Menu
const MobileActionsMenu = ({ row, onView, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full text-gray-600 hover:bg-gray-100"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
          {onView && (
            <button
              onClick={() => {
                onView(row);
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Eye className="w-4 h-4 mr-2" />
              View
            </button>
          )}
          {onEdit && (
            <button
              onClick={() => {
                onEdit(row);
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => {
                onDelete(row);
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
};

// Enhanced sorting function
const sortData = (data, sortConfig) => {
  if (sortConfig.length === 0) return data;

  return [...data].sort((a, b) => {
    for (const sort of sortConfig) {
      let aVal = a[sort.column];
      let bVal = b[sort.column];

      if (aVal == null && bVal == null) continue;
      if (aVal == null) return sort.direction === 'asc' ? -1 : 1;
      if (bVal == null) return sort.direction === 'asc' ? 1 : -1;

      aVal = String(aVal).trim();
      bVal = String(bVal).trim();

      const aNum = parseFloat(aVal);
      const bNum = parseFloat(bVal);
      
      if (!isNaN(aNum) && !isNaN(bNum) && 
          aVal === String(aNum) && bVal === String(bNum)) {
        if (aNum < bNum) return sort.direction === 'asc' ? -1 : 1;
        if (aNum > bNum) return sort.direction === 'asc' ? 1 : -1;
      } else {
        const comparison = aVal.toLowerCase().localeCompare(bVal.toLowerCase());
        if (comparison !== 0) {
          return sort.direction === 'asc' ? comparison : -comparison;
        }
      }
    }
    return 0;
  });
};

// Main DataTable Component
const DataTable = ({
  title,
  data = [],
  columns = [],
  onEdit,
  onDelete,
  onView,
  showSelection = false,
  toolbar,
  pageSize = 10,
  searchable = true,
  // Custom header props
  showCustomHeader = false,
  nasOptions = [],
  selectedNas = '',
  onNasSelect,
  customHeaderSearch = true
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(columns.map(col => col.key));
  const [sortConfig, setSortConfig] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);

  // Custom header states
  const [showNasDropdown, setShowNasDropdown] = useState(false);

  // Modal states
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check screen size on mount and resize
  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Enhanced header sort handler
  const handleHeaderSort = (columnKey) => {
    const existingSortIndex = sortConfig.findIndex(sort => sort.column === columnKey);

    if (existingSortIndex >= 0) {
      const newSortConfig = [...sortConfig];
      const currentDirection = sortConfig[existingSortIndex].direction;
      
      if (currentDirection === 'asc') {
        newSortConfig[existingSortIndex] = {
          column: columnKey,
          direction: 'desc'
        };
      } else {
        newSortConfig.splice(existingSortIndex, 1);
      }
      
      setSortConfig(newSortConfig);
    } else {
      setSortConfig([...sortConfig, { column: columnKey, direction: 'asc' }]);
    }

    setCurrentPage(1);
  };

  const handleNasSelect = (nas) => {
    setShowNasDropdown(false);
    if (onNasSelect) {
      onNasSelect(nas);
    }
  };

  // Custom header with NAS selector and search
  const customHeader = showCustomHeader ? (
    <div className="flex items-center justify-between mb-6">
      {/* Left side - NAS Selector */}
      <div className="relative">
        <button
          onClick={() => setShowNasDropdown(!showNasDropdown)}
          className="flex items-center gap-2 px-0 py-2 bg-white border-b-2 border-cyan-400 text-gray-800 font-medium hover:bg-gray-50 transition-all duration-200"
        >
          <span className="text-lg">{selectedNas}</span>
          <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${showNasDropdown ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Dropdown Menu */}
        {showNasDropdown && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48">
            {nasOptions.map((nas) => (
              <button
                key={nas}
                onClick={() => handleNasSelect(nas)}
                className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  selectedNas === nas ? 'bg-cyan-50 text-cyan-700' : 'text-gray-700'
                }`}
              >
                {nas}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right side - Search */}
      {customHeaderSearch && (
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-80"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  ) : null;

  // Filter and search data
  const filteredData = useMemo(() => {
    let result = [...data];

    // Apply search
    if (searchTerm) {
      result = result.filter(row =>
        Object.values(row).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply filters
    filters.forEach(filter => {
      result = result.filter(row => {
        const value = String(row[filter.column]).toLowerCase();
        const filterValue = filter.value.toLowerCase();

        switch (filter.operator) {
          case 'contains':
            return value.includes(filterValue);
          case 'equals':
            return value === filterValue;
          case 'startsWith':
            return value.startsWith(filterValue);
          case 'endsWith':
            return value.endsWith(filterValue);
          case 'greater':
            return parseFloat(value) > parseFloat(filterValue);
          case 'less':
            return parseFloat(value) < parseFloat(filterValue);
          default:
            return true;
        }
      });
    });

    // Apply enhanced sorting
    result = sortData(result, sortConfig);

    return result;
  }, [data, searchTerm, filters, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  const handleRowSelect = (index, checked) => {
    if (checked) {
      setSelectedRows([...selectedRows, index]);
    } else {
      setSelectedRows(selectedRows.filter(i => i !== index));
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(paginatedData.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Data copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy data:', err);
      alert('Failed to copy data');
    }
  };

  const handleExport = () => {
    const csvContent = [
      columns.map(col => col.label).join(','),
      ...filteredData.map(row =>
        columns.map(col => `"${row[col.key] || ''}"`).join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${title.replace(/\s+/g, '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const printContent = `
      <html>
        <head>
          <title>${title}</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h2>${title}</h2>
          <table>
            <thead>
              <tr>
                ${columns.map(col => `<th>${col.label}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${filteredData.map(row =>
      `<tr>${columns.map(col => `<td>${row[col.key] || ''}</td>`).join('')}</tr>`
    ).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `;

    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  const handleColumnToggle = (columnKey) => {
    if (visibleColumns.includes(columnKey)) {
      setVisibleColumns(visibleColumns.filter(key => key !== columnKey));
    } else {
      setVisibleColumns([...visibleColumns, columnKey]);
    }
  };

  const handleAddSort = (column, direction) => {
    setSortConfig([...sortConfig, { column, direction }]);
  };

  const handleRemoveSort = (index) => {
    setSortConfig(sortConfig.filter((_, i) => i !== index));
  };

  const handleAddFilter = (filter) => {
    setFilters([...filters, filter]);
  };

  const handleRemoveFilter = (index) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  const filteredColumns = columns.filter(col => visibleColumns.includes(col.key));

  // Get sort indicator for column header
  const getSortIndicator = (columnKey) => {
    const sortInfo = sortConfig.find(sort => sort.column === columnKey);
    if (!sortInfo) {
      return <ArrowUpDown className="w-3 h-3 opacity-30 group-hover:opacity-70" />;
    }
    
    return sortInfo.direction === 'asc' ? 
      <ArrowUp className="w-3 h-3 text-blue-600" /> : 
      <ArrowDown className="w-3 h-3 text-blue-600" />;
  };

  // Mobile card view for each row
  const MobileRowCard = ({ row, index }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 shadow-sm">
      {showSelection && (
        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={selectedRows.includes(index)}
            onChange={(e) => handleRowSelect(index, e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
      )}

      <div className="space-y-2">
        {filteredColumns.map((column) => (
          <div key={column.key} className="flex justify-between">
            <span className="text-sm font-medium text-gray-500">{column.label}:</span>
            <span className="text-sm text-gray-900 text-right">
              {column.render ? column.render(row[column.key], row, index) : row[column.key]}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-3 pt-3 border-t border-gray-100">
        <MobileActionsMenu
          row={row}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Custom Header with NAS Selector */}
      {customHeader}

      {/* Header */}

      {/* Toolbar */}
      <div className="px-4 md:px-6 py-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Table Action Icons - hidden on mobile when menu is closed */}
            <div className={`${mobileMenuOpen ? 'flex' : 'hidden md:flex'} absolute md:relative left-0 top-full mt-2 md:mt-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none rounded-md p-3 md:p-0 z-10 md:z-auto flex-wrap gap-2 md:gap-1`}>
              {/* Copy */}
              <Tooltip content="Copy Data" placement="bottom">
                <button
                  onClick={() => copyToClipboard(JSON.stringify(filteredData, null, 2))}
                  className="p-2 rounded-full text-gray-600 hover:text-[#00bcd4] hover:-translate-y-1 hover:bg-[#00bcd4]/10 transition-all duration-300 ease-out"
                >
                  <Copy className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </Tooltip>

              {/* Export */}
              <Tooltip content="Export" placement="bottom">
                <button
                  onClick={handleExport}
                  className="p-2 rounded-full text-gray-600 hover:text-[#00bcd4] hover:-translate-y-1 hover:bg-[#00bcd4]/10 transition-all duration-300 ease-out"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </Tooltip>

              {/* Print */}
              <Tooltip content="Print" placement="bottom">
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-full text-gray-600 hover:text-[#00bcd4] hover:-translate-y-1 hover:bg-[#00bcd4]/10 transition-all duration-300 ease-out"
                >
                  <Printer className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </Tooltip>

              {/* Filter */}
              <Tooltip content="Filter" placement="bottom">
                <button
                  onClick={() => setShowFilterModal(true)}
                  className="p-2 rounded-full text-gray-600 hover:text-[#00bcd4] hover:-translate-y-1 hover:bg-[#00bcd4]/10 transition-all duration-300 ease-out"
                >
                  <Filter className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </Tooltip>

              {/* Columns */}
              <Tooltip content="Columns" placement="bottom">
                <button
                  onClick={() => setShowColumnModal(true)}
                  className="p-2 rounded-full text-gray-600 hover:text-[#00bcd4] hover:-translate-y-1 hover:bg-[#00bcd4]/10 transition-all duration-300 ease-out"
                >
                  <Columns className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </Tooltip>

              {/* Sort */}
              <Tooltip content="Sort" placement="bottom">
                <button
                  onClick={() => setShowSortModal(true)}
                  className="p-2 rounded-full text-gray-600 hover:text-[#00bcd4] hover:-translate-y-1 hover:bg-[#00bcd4]/10 transition-all duration-300 ease-out"
                >
                  <ArrowUpDown className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Search - only show if custom header search is disabled and searchable is true */}
          {searchable && !customHeaderSearch && (
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border-b border-gray-300 focus:border-b-2 focus:border-blue-400 outline-none w-full md:w-48"
              />
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      {!isMobileView ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {showSelection && (
                  <th className="w-12 px-3 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </th>
                )}
                {filteredColumns.map((column) => (
                  <th
                    key={column.key}
                    className="group px-4 md:px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => handleHeaderSort(column.key)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="select-none">{column.label}</span>
                      <div className="ml-2 flex-shrink-0">
                        {getSortIndicator(column.key)}
                      </div>
                    </div>
                  </th>
                ))}
                <th className="px-4 md:px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={filteredColumns.length + (showSelection ? 1 : 0) + 1}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No data available
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    {showSelection && (
                      <td className="px-3 py-4">
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(index)}
                          onChange={(e) => handleRowSelect(index, e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </td>
                    )}
                    {filteredColumns.map((column) => (
                      <td key={column.key} className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                        {column.render ? column.render(row[column.key], row, index) : row[column.key]}
                      </td>
                    ))}
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-right text-sm font-medium w-20">
                      <div className="flex items-center justify-start gap-2">
                        <Tooltip content="View">
                          <button
                            onClick={() => onView && onView(row, index)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </Tooltip>
                        <Tooltip content="Edit">
                          <button
                            onClick={() => onEdit && onEdit(row, index)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        </Tooltip>
                        <Tooltip content="Delete">
                          <button
                            onClick={() => onDelete && onDelete(row, index)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        // Mobile view
        <div className="p-4">
          {paginatedData.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              No data available
            </div>
          ) : (
            paginatedData.map((row, index) => (
              <MobileRowCard key={index} row={row} index={index} />
            ))
          )}
        </div>
      )}

      {/* Pagination - Always show when there's data */}
{filteredData.length >= 0 && (
  <div className="px-4 py-1 border-t border-gray-100 bg-white-50">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
      <div className="text-sm text-gray-700">
        Showing {startIndex + 1} to {Math.min(startIndex + pageSize, filteredData.length)} of {filteredData.length} entries
      </div>
      
      {/* Always show pagination controls when there's data, even if just one page */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronLeft className="w-3 h-3" />
        </button>

        <div className="flex gap-1">
          {/* Always show at least page 1, even if there's only one page */}
          {totalPages <= 5 ? (
            // Show all pages if 5 or fewer
            Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`min-w-[2rem] h-6 px-2 text-sm rounded border transition-all duration-200 ${
                  currentPage === pageNum
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {pageNum}
              </button>
            ))
          ) : (
            // Show pagination with ellipsis for more than 5 pages
            <>
              {/* First page */}
              <button
                onClick={() => setCurrentPage(1)}
                className={`min-w-[2rem] h-8 px-2 text-sm rounded border transition-all duration-200 ${
                  currentPage === 1
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                1
              </button>

              {/* Ellipsis if current page is far from start */}
              {currentPage > 3 && <span className="px-2 py-2 text-gray-500">...</span>}

              {/* Current page and surrounding pages */}
              {[
                Math.max(2, currentPage - 1),
                currentPage > 2 && currentPage < totalPages ? currentPage : null,
                Math.min(totalPages - 1, currentPage + 1)
              ].filter(page => page !== null && page > 1 && page < totalPages).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`min-w-[2rem] h-8 px-2 text-sm rounded border transition-all duration-200 ${
                    currentPage === pageNum
                      ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Ellipsis if current page is far from end */}
              {currentPage < totalPages - 2 && <span className="px-2 py-2 text-gray-500">...</span>}

              {/* Last page */}
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`min-w-[2rem] h-8 px-2 text-sm rounded border transition-all duration-200 ${
                  currentPage === totalPages
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
)}

      {/* Modals */}
      <ColumnSelectionModal
        isOpen={showColumnModal}
        onClose={() => setShowColumnModal(false)}
        columns={columns}
        visibleColumns={visibleColumns}
        onToggleColumn={handleColumnToggle}
        onSave={() => setShowColumnModal(false)}
        onReset={() => {
          setVisibleColumns(columns.map(col => col.key));
          setShowColumnModal(false);
        }}
      />

      <SortingModal
        isOpen={showSortModal}
        onClose={() => setShowSortModal(false)}
        columns={columns}
        sortConfig={sortConfig}
        onAddSort={handleAddSort}
        onRemoveSort={handleRemoveSort}
        onSave={() => setShowSortModal(false)}
        onReset={() => {
          setSortConfig([]);
          setShowSortModal(false);
        }}
      />

      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        columns={columns}
        filters={filters}
        onAddFilter={handleAddFilter}
        onRemoveFilter={handleRemoveFilter}
        onSave={() => {
          setCurrentPage(1);
          setShowFilterModal(false);
        }}
        onReset={() => {
          setFilters([]);
          setCurrentPage(1);
          setShowFilterModal(false);
        }}
      />
    </div>
  );
};

export default DataTable;