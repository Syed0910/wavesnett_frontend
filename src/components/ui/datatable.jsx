import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Eye, Edit, Trash2, Copy, Settings, Columns,
  ArrowUpDown, X, Search, Printer, ChevronLeft, ChevronRight,
  MoreHorizontal, Check, Download, Upload, Plus, Filter,
  FileText, ArrowUp, ArrowDown, Menu
} from 'lucide-react';

// Tooltip Component
const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-y-1/2 mt-2',
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

// Modal Component
const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;
  const sizeClasses = {
    sm: 'max-w-md', md: 'max-w-lg', lg: 'max-w-2xl', xl: 'max-w-4xl'
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
          <div className="p-4 overflow-y-auto max-h-[70vh]">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Column Selection Modal
const ColumnSelectionModal = ({ isOpen, onClose, columns, visibleColumns, onToggleColumn, onSave, onReset }) => (
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

// Sorting Modal
const SortingModal = ({ isOpen, onClose, columns, sortConfig, onAddSort, onRemoveSort, onSave, onReset }) => {
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
            {sortConfig.length === 0 &&
              <p className="text-sm text-gray-500 italic">No sorting rules applied</p>
            }
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Add New Sort Rule:</h4>
          <div className="flex gap-3">
            <select
              value={newSortColumn}
              onChange={e => setNewSortColumn(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="">Choose Columns</option>
              {columns.map(column => (
                <option key={column.key} value={column.key}>{column.label}</option>
              ))}
            </select>
            <select
              value={newSortOrder}
              onChange={e => setNewSortOrder(e.target.value)}
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
const FilterModal = ({ isOpen, onClose, columns, filters, onAddFilter, onRemoveFilter, onSave, onReset }) => {
  const [newFilterColumn, setNewFilterColumn] = useState('');
  const [newFilterOperator, setNewFilterOperator] = useState('contains');
  const [newFilterValue, setNewFilterValue] = useState('');
  const operators = [
    { value: 'contains', label: 'Contains' },
    { value: 'equals', label: 'Equals' },
    { value: 'startsWith', label: 'Starts with' },
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
            {filters.length === 0 &&
              <p className="text-sm text-gray-500 italic">No filters applied</p>
            }
          </div>
        </div>
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Add New Filter:</h4>
          <div className="space-y-3">
            <div className="flex gap-3">
              <select
                value={newFilterColumn}
                onChange={e => setNewFilterColumn(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">Choose Column</option>
                {columns.map(column => (
                  <option key={column.key} value={column.key}>{column.label}</option>
                ))}
              </select>
              <select
                value={newFilterOperator}
                onChange={e => setNewFilterOperator(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {operators.map((op) => (
                  <option key={op.value} value={op.value}>{op.label}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={newFilterValue}
                onChange={e => setNewFilterValue(e.target.value)}
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

// Actions Cell
const ActionsCell = ({ actions, row, index }) => (
  <div className="flex items-center justify-end gap-2">
    {actions.map((action) =>
      action.show !== false && (
        <Tooltip key={action.label} content={action.label}>
          <button
            onClick={() => action.onClick(row, index)}
            className={action.color || ''}
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            {action.icon}
          </button>
        </Tooltip>
      )
    )}
  </div>
);

// Mobile Actions Cell
const MobileActionsCell = ({ actions, row, index }) => (
  <div className="flex items-center justify-end gap-2 mt-2 border-t pt-2">
    {actions.map((action) =>
      action.show !== false && (
        <Tooltip key={action.label} content={action.label}>
          <button
            onClick={() => action.onClick(row, index)}
            className={action.color || ''}
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            {action.icon}
          </button>
        </Tooltip>
      )
    )}
  </div>
);

// PrintComponent: Table print utility
const PrintComponent = ({ data, columns, title }) => {
  const handlePrint = () => {
    const printContent = `
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
            th { background-color: #f5f5f5; font-weight: bold; }
            .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666; }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${title}</h1>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>
          <table>
            <thead>
              <tr>
                ${columns.filter(col => col.key !== 'actions').map(col => 
                  `<th>${col.label}</th>`
                ).join('')}
              </tr>
            </thead>
            <tbody>
              ${data.map(row => `
                <tr>
                  ${columns.filter(col => col.key !== 'actions').map(col => 
                    `<td>${row[col.key] || ''}</td>`
                  ).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="footer">
            <p>Total Records: ${data.length}</p>
          </div>
          <div class="no-print" style="margin-top: 20px; text-align: center;">
            <button onclick="window.print()" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
              Print Now
            </button>
            <button onclick="window.close()" style="padding: 10px 20px; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 10px;">
              Close
            </button>
          </div>
        </body>
      </html>
    `;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
  };
  return (
    <Tooltip content="Print">
      <button
        onClick={handlePrint}
        className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <Printer className="w-4 h-4" />
      </button>
    </Tooltip>
  );
};

const DataTable = ({
  title,
  data = [],
  columns = [],
  toolbar,
  pageSize = 10,
  searchable = true,
  showSelection = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState(columns.map(col => col.key));
  const [sortConfig, setSortConfig] = useState([]);
  const [filters, setFilters] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  // Modals
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Responsive
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobileView(width < 768);
      setIsTabletView(width >= 768 && width < 1280);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Sorting logic
  const handleHeaderSort = (columnKey) => {
    const existingSortIndex = sortConfig.findIndex(sort => sort.column === columnKey);
    if (existingSortIndex >= 0) {
      const newSortConfig = [...sortConfig];
      newSortConfig[existingSortIndex] = {
        column: columnKey,
        direction: sortConfig[existingSortIndex].direction === 'asc' ? 'desc' : 'asc'
      };
      setSortConfig(newSortConfig);
    } else {
      setSortConfig([...sortConfig, { column: columnKey, direction: 'asc' }]);
    }
  };

  // Filtering/search logic
  const filteredData = useMemo(() => {
    let result = [...data];
    if (searchTerm) {
      result = result.filter(row =>
        Object.values(row).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    filters.forEach(filter => {
      result = result.filter(row => {
        const value = String(row[filter.column] || '').toLowerCase();
        const filterValue = filter.value.toLowerCase();
        switch (filter.operator) {
          case 'contains': return value.includes(filterValue);
          case 'equals': return value === filterValue;
          case 'startsWith': return value.startsWith(filterValue);
          case 'endsWith': return value.endsWith(filterValue);
          case 'greater': return parseFloat(value) > parseFloat(filterValue);
          case 'less': return parseFloat(value) < parseFloat(filterValue);
          default: return true;
        }
      });
    });
    if (sortConfig.length > 0) {
      result.sort((a, b) => {
        for (const sort of sortConfig) {
          const aVal = a[sort.column];
          const bVal = b[sort.column];
          if (aVal < bVal) return sort.direction === 'asc' ? -1 : 1;
          if (aVal > bVal) return sort.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return result;
  }, [data, searchTerm, filters, sortConfig]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  // Selection logic
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

  // Export/copy/print logic
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

  // Column visibility
  const handleToggleColumn = (columnKey) => {
    if (visibleColumns.includes(columnKey)) {
      setVisibleColumns(visibleColumns.filter(col => col !== columnKey));
    } else {
      setVisibleColumns([...visibleColumns, columnKey]);
    }
  };

  const handleResetColumns = () => {
    setVisibleColumns(columns.map(col => col.key));
  };

  // Sorting
  const handleAddSort = (column, direction) => {
    setSortConfig([...sortConfig, { column, direction }]);
  };

  const handleRemoveSort = (index) => {
    const newSortConfig = [...sortConfig];
    newSortConfig.splice(index, 1);
    setSortConfig(newSortConfig);
  };

  const handleResetSort = () => {
    setSortConfig([]);
  };

  // Filtering
  const handleAddFilter = (filter) => {
    setFilters([...filters, filter]);
  };

  const handleRemoveFilter = (index) => {
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters([]);
  };

  // Action buttons configuration
  const defaultActions = [
    {
      label: 'View',
      icon: <Eye className="w-4 h-4" />,
      onClick: (row, index) => console.log('View row:', row, index),
      color: 'text-blue-600 hover:text-blue-800'
    },
    {
      label: 'Edit',
      icon: <Edit className="w-4 h-4" />,
      onClick: (row, index) => console.log('Edit row:', row, index),
      color: 'text-green-600 hover:text-green-800'
    },
    {
      label: 'Delete',
      icon: <Trash2 className="w-4 h-4" />,
      onClick: (row, index) => console.log('Delete row:', row, index),
      color: 'text-red-600 hover:text-red-800'
    }
  ];

  // Get actions from columns or use defaults
  const actionsColumn = columns.find(col => col.key === 'actions');
  const actions = actionsColumn ? actionsColumn.actions || defaultActions : defaultActions;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Toolbar */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <div className="flex flex-wrap items-center gap-2">
            {searchable && (
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            )}

            {/* Mobile menu button */}
            {isMobileView && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 border border-gray-300 rounded-lg"
              >
                <Menu className="w-4 h-4" />
              </button>
            )}

            {!isMobileView && (
              <>
                <Tooltip content="Filter">
                  <button
                    onClick={() => setShowFilterModal(true)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Filter className="w-4 h-4" />
                  </button>
                </Tooltip>
                <Tooltip content="Sort">
                  <button
                    onClick={() => setShowSortModal(true)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <ArrowUpDown className="w-4 h-4" />
                  </button>
                </Tooltip>
                <Tooltip content="Columns">
                  <button
                    onClick={() => setShowColumnModal(true)}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Columns className="w-4 h-4" />
                  </button>
                </Tooltip>
                <Tooltip content="Export">
                  <button
                    onClick={handleExport}
                    className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </Tooltip>
                <PrintComponent
                  data={filteredData}
                  columns={columns.filter(col => col.key !== 'actions')}
                  title={title}
                />
                {toolbar}
              </>
            )}
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileView && mobileMenuOpen && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => setShowFilterModal(true)}
              className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
            >
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button
              onClick={() => setShowSortModal(true)}
              className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
            >
              <ArrowUpDown className="w-4 h-4" />
              <span>Sort</span>
            </button>
            <button
              onClick={() => setShowColumnModal(true)}
              className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
            >
              <Columns className="w-4 h-4" />
              <span>Columns</span>
            </button>
            <button
              onClick={handleExport}
              className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>
            <PrintComponent
              data={filteredData}
              columns={columns.filter(col => col.key !== 'actions')}
              title={title}
            />
            {toolbar && (
              <div className="col-span-2">
                {toolbar}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Table */}
      {!isMobileView ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {showSelection && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                    />
                  </th>
                )}
                {columns
                  .filter(column => column.key !== 'actions' && visibleColumns.includes(column.key))
                  .map(column => (
                    <th
                      key={column.key}
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                      onClick={() => handleHeaderSort(column.key)}
                    >
                      <div className="flex items-center gap-1">
                        <span>{column.label}</span>
                        {sortConfig.find(sort => sort.column === column.key) && (
                          sortConfig.find(sort => sort.column === column.key).direction === 'asc' ?
                            <ArrowUp className="w-3 h-3" /> :
                            <ArrowDown className="w-3 h-3" />
                        )}
                      </div>
                    </th>
                  ))}
                {actions.length > 0 && (
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedData.length > 0 ? (
                paginatedData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    {showSelection && (
                      <td className="px-4 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(index)}
                          onChange={(e) => handleRowSelect(index, e.target.checked)}
                          className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                        />
                      </td>
                    )}
                    {columns
                      .filter(column => column.key !== 'actions' && visibleColumns.includes(column.key))
                      .map(column => (
                        <td key={column.key} className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                          {column.render ? column.render(row) : row[column.key]}
                        </td>
                      ))}
                    {actions.length > 0 && (
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                        <ActionsCell actions={actions} row={row} index={index} />
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td 
                    colSpan={
                      columns.filter(col => col.key !== 'actions' && visibleColumns.includes(col.key)).length + 
                      (showSelection ? 1 : 0) + 
                      (actions.length > 0 ? 1 : 0)
                    } 
                    className="px-4 py-8 text-center text-sm text-gray-500"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        // Mobile card view
        <div className="p-4 space-y-4">
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                {showSelection && (
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={(e) => handleRowSelect(index, e.target.checked)}
                      className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
                    />
                    <span className="ml-2 text-sm text-gray-500">Select</span>
                  </div>
                )}
                <div className="space-y-3">
                  {columns
                    .filter(column => column.key !== 'actions' && visibleColumns.includes(column.key))
                    .map(column => (
                      <div key={column.key} className="flex flex-col">
                        <span className="text-xs font-medium text-gray-500 uppercase">{column.label}</span>
                        <span className="text-sm text-gray-900">
                          {column.render ? column.render(row) : row[column.key]}
                        </span>
                      </div>
                    ))}
                </div>
                {actions.length > 0 && (
                  <MobileActionsCell actions={actions} row={row} index={index} />
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-sm text-gray-500">
              No data found
            </div>
          )}
        </div>
      )}

      {/* Pagination */}
      <div className="px-4 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-700 mb-4 sm:mb-0">
          Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
          <span className="font-medium">{Math.min(startIndex + pageSize, filteredData.length)}</span> of{' '}
          <span className="font-medium">{filteredData.length}</span> results
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1.5 border rounded-md text-sm font-medium ${
                  currentPage === pageNum
                    ? 'border-cyan-600 bg-cyan-600 text-white'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modals */}
      <ColumnSelectionModal
        isOpen={showColumnModal}
        onClose={() => setShowColumnModal(false)}
        columns={columns.filter(col => col.key !== 'actions')}
        visibleColumns={visibleColumns}
        onToggleColumn={handleToggleColumn}
        onSave={() => setShowColumnModal(false)}
        onReset={handleResetColumns}
      />
      <SortingModal
        isOpen={showSortModal}
        onClose={() => setShowSortModal(false)}
        columns={columns.filter(col => col.key !== 'actions')}
        sortConfig={sortConfig}
        onAddSort={handleAddSort}
        onRemoveSort={handleRemoveSort}
        onSave={() => setShowSortModal(false)}
        onReset={handleResetSort}
      />
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        columns={columns.filter(col => col.key !== 'actions')}
        filters={filters}
        onAddFilter={handleAddFilter}
        onRemoveFilter={handleRemoveFilter}
        onSave={() => setShowFilterModal(false)}
        onReset={handleResetFilters}
      />
    </div>
  );
};

export default DataTable;
