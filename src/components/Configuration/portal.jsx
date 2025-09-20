import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { getAllConfigs, updateThemeConfig, updateExtraConfig, updatePortalConfig, updateHotspotConfig, updatePermissionsConfig } from "../../services/api";

const Portal = () => {
  const { theme, toggleTheme, primaryColor, setPrimaryColor } = useTheme();
  
  // State for all configurations
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [configs, setConfigs] = useState({});
  
  // Individual config states
  const [themeConfig, setThemeConfig] = useState({
    selectedTheme: 5,
    minSidebar: false,
    primaryColor: "#06b6d4"
  });
  
  const [extraConfig, setExtraConfig] = useState({
    autoMacBinding: true,
    userFields: {
      customerName: true,
      email: true,
      contactNumber: true,
      installationAddressLine1: true,
      installationCity: false
    },
    newUserTerms: '',
    passwordConfig: {
      defaultPassword: "Custom",
      customPassword: "WavesNett123",
      disablePassword: false,
      userInvoiceTaxable: true,
      userKycRequired: false,
      autoDeleteInactiveUsers: false
    }
  });

  const [portalConfig, setPortalConfig] = useState({
    setOwnZone: true,
    clientPortalUrl: "ac.aanirids.com"
  });

  const [hotspotConfig, setHotspotConfig] = useState({
    orderBy: "",
    sortBy: ""
  });

  const [permissions, setPermissions] = useState({
    dashboard: true,
    userDetail: true,
    changePassword: true,
    sessionLog: true,
    invoiceList: true,
    receiptList: true,
    traffic: true,
    customerSupport: true,
    rechargeList: true,
    recharge: true,
    voucherRecharge: true,
    wifiSSID: false,
    wifiPassword: false
  });

  const themeColors = [
    "#f44236", "#ea1e63", "#f8591e", "#673ab7",
    "#3f51b5", "#2196f3", "#03a9f5", "#00bcd5",
    "#009788", "#4cb050", "#8bc24a", "#cddc39",
    "#ffeb3c", "#fcc207", "#ff9700", "#fe581c",
    "#795547", "#607d8b"
  ];

  // Fetch configurations from API
  const fetchConfigs = async () => {
    try {
      setLoading(true);
      const response = await getAllConfigs();
      const data = response.data;
      setConfigs(data);
      
      // Parse and set individual configs
      data.forEach(config => {
        if (config.value) {
          try {
            const parsedValue = JSON.parse(config.value);
            switch (config.name) {
              case 'themeConfig':
                const newThemeConfig = { ...themeConfig, ...parsedValue };
                setThemeConfig(newThemeConfig);
                // Update global theme context with saved primary color
                if (parsedValue.primaryColor) {
                  setPrimaryColor(parsedValue.primaryColor);
                }
                break;
              case 'extraConfig':
                setExtraConfig(prev => ({ ...prev, ...parsedValue }));
                break;
              case 'portalConfig':
                setPortalConfig(prev => ({ ...prev, ...parsedValue }));
                break;
              case 'hotspotConfig':
                setHotspotConfig(prev => ({ ...prev, ...parsedValue }));
                break;
              case 'permissionsConfig':
                setPermissions(prev => ({ ...prev, ...parsedValue }));
                break;
            }
          } catch (e) {
            console.error(`Error parsing ${config.name}:`, e);
          }
        }
      });
    } catch (err) {
      setError(err.message);
      console.error('Error fetching configs:', err);
    } finally {
      setLoading(false);
    }
  };

  // Save configuration to API
  const saveConfig = async (configName, configData) => {
    try {
      // Use specific update functions for different config types
      let response;
      switch (configName) {
        case 'themeConfig':
          response = await updateThemeConfig(configData);
          break;
        case 'extraConfig':
          response = await updateExtraConfig(configData);
          break;
        case 'portalConfig':
          response = await updatePortalConfig(configData);
          break;
        case 'hotspotConfig':
          response = await updateHotspotConfig(configData);
          break;
        case 'permissionsConfig':
          response = await updatePermissionsConfig(configData);
          break;
        default:
          throw new Error(`Unknown config type: ${configName}`);
      }
      
      // Refresh configs after save
      await fetchConfigs();
      return true;
    } catch (err) {
      console.error('Error saving config:', err);
      setError(err.message);
      return false;
    }
  };

  useEffect(() => {
    fetchConfigs();
  }, []);

  // Update CSS variables for global theming
  useEffect(() => {
    document.body.style.setProperty("--primary", primaryColor);
    document.body.style.setProperty("--primary-rgb", hexToRgb(primaryColor));
    
    // Update theme config when primary color changes
    const newThemeConfig = { ...themeConfig, primaryColor, selectedTheme: getColorIndex(primaryColor) };
    setThemeConfig(newThemeConfig);
    
    // Auto-save theme changes
    if (!loading) {
      saveConfig('themeConfig', newThemeConfig);
    }
  }, [primaryColor]);

  // Helper functions
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "6, 182, 212";
  };

  const getColorIndex = (color) => {
    return themeColors.findIndex(c => c === color) !== -1 ? themeColors.findIndex(c => c === color) : 5;
  };

  // Handlers
  const handleThemeColorChange = async (color, index) => {
    // Update primary color in theme context
    setPrimaryColor(color);
    
    // Update local theme config
    const newThemeConfig = { 
      ...themeConfig, 
      selectedTheme: index, 
      primaryColor: color 
    };
    setThemeConfig(newThemeConfig);
    
    // Save to database
    await saveConfig('themeConfig', newThemeConfig);
    
    // Apply CSS variables immediately
    document.body.style.setProperty("--primary", color);
    document.body.style.setProperty("--primary-rgb", hexToRgb(color));
    document.body.style.setProperty("--primary-hover", color + "dd");
    document.body.style.setProperty("--primary-light", color + "20");
  };

  const handleMinSidebarToggle = async () => {
    const newThemeConfig = { ...themeConfig, minSidebar: !themeConfig.minSidebar };
    setThemeConfig(newThemeConfig);
    await saveConfig('themeConfig', newThemeConfig);
  };

  const handleAutoMacBindingToggle = async () => {
    const newExtraConfig = { ...extraConfig, autoMacBinding: !extraConfig.autoMacBinding };
    setExtraConfig(newExtraConfig);
    await saveConfig('extraConfig', newExtraConfig);
  };

  const handleUserFieldChange = async (field) => {
    const newUserFields = {
      ...extraConfig.userFields,
      [field]: !extraConfig.userFields[field]
    };
    const newExtraConfig = { ...extraConfig, userFields: newUserFields };
    setExtraConfig(newExtraConfig);
    await saveConfig('extraConfig', newExtraConfig);
  };

  const handlePasswordConfigChange = async (field, value) => {
    const newPasswordConfig = {
      ...extraConfig.passwordConfig,
      [field]: value
    };
    const newExtraConfig = { ...extraConfig, passwordConfig: newPasswordConfig };
    setExtraConfig(newExtraConfig);
    await saveConfig('extraConfig', newExtraConfig);
  };

  const handleNewUserTermsChange = async (value) => {
    const newExtraConfig = { ...extraConfig, newUserTerms: value };
    setExtraConfig(newExtraConfig);
    await saveConfig('extraConfig', newExtraConfig);
  };

  const handlePortalConfigChange = async (field, value) => {
    const newPortalConfig = { ...portalConfig, [field]: value };
    setPortalConfig(newPortalConfig);
    await saveConfig('portalConfig', newPortalConfig);
  };

  const handleHotspotConfigChange = async (field, value) => {
    const newHotspotConfig = { ...hotspotConfig, [field]: value };
    setHotspotConfig(newHotspotConfig);
    await saveConfig('hotspotConfig', newHotspotConfig);
  };

  const handlePermissionChange = async (permission) => {
    const newPermissions = {
      ...permissions,
      [permission]: !permissions[permission]
    };
    setPermissions(newPermissions);
    await saveConfig('permissionsConfig', newPermissions);
  };

  const selectAllPermissions = async () => {
    const allSelected = Object.values(permissions).every(val => val === true);
    const newPermissions = {};
    Object.keys(permissions).forEach(key => {
      newPermissions[key] = !allSelected;
    });
    setPermissions(newPermissions);
    await saveConfig('permissionsConfig', newPermissions);
  };

  const handleApplyTheme = async () => {
    await saveConfig('themeConfig', themeConfig);
    alert('Theme configuration saved successfully!');
  };

  const handleApplyExtra = async () => {
    await saveConfig('extraConfig', extraConfig);
    alert('Extra configuration saved successfully!');
  };

  const handleApplyPermissions = async () => {
    await saveConfig('permissionsConfig', permissions);
    alert('Permissions configuration saved successfully!');
  };

  if (loading) {
    return (
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 h-screen overflow-y-auto flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading configurations...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 h-screen overflow-y-auto flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={fetchConfigs}
            className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white px-4 py-2 rounded-md"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 h-screen overflow-y-auto">
      {/* Add dynamic CSS styles for theming */}
      <style jsx>{`
        :global(:root) {
          --primary: ${primaryColor};
          --primary-rgb: ${hexToRgb(primaryColor)};
          --primary-hover: ${primaryColor}dd;
          --primary-light: ${primaryColor}20;
        }
        
        /* Dynamic theming for all interactive elements */
        :global(.btn-primary) {
          background-color: var(--primary) !important;
        }
        
        :global(.btn-primary:hover) {
          background-color: var(--primary-hover) !important;
        }
        
        :global(.text-primary) {
          color: var(--primary) !important;
        }
        
        :global(.border-primary) {
          border-color: var(--primary) !important;
        }
        
        :global(.ring-primary) {
          --tw-ring-color: var(--primary) !important;
        }
        
        :global(.bg-primary-light) {
          background-color: var(--primary-light) !important;
        }
        
        /* Sidebar theming */
        :global(.sidebar-item:hover) {
          background-color: var(--primary-light);
          color: var(--primary);
        }
        
        :global(.sidebar-item.active) {
          background-color: var(--primary);
          color: white;
        }
        
        /* Navbar theming */
        :global(.navbar-brand) {
          color: var(--primary);
        }
        
        :global(.navbar-item:hover) {
          color: var(--primary);
        }
        
        /* Form elements theming */
        :global(input[type="checkbox"]:checked) {
          background-color: var(--primary);
          border-color: var(--primary);
        }
        
        :global(input[type="radio"]:checked) {
          background-color: var(--primary);
          border-color: var(--primary);
        }
        
        :global(select:focus, input:focus, textarea:focus) {
          border-color: var(--primary);
          --tw-ring-color: var(--primary);
        }
        
        /* Button hover effects */
        :global(button:hover) {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(var(--primary-rgb), 0.3);
        }
      `}</style>
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
              onClick={() => handleThemeColorChange(color, index)}
              className={`w-12 h-12 rounded-lg relative transition-all duration-200 hover:scale-110 ${
                (themeConfig.primaryColor || primaryColor) === color ? "ring-2 ring-offset-2 ring-[var(--primary)] scale-110" : ""
              }`}
              style={{ backgroundColor: color }}
            >
              {(themeConfig.primaryColor || primaryColor) === color && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-6 mb-4">

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={themeConfig.minSidebar}
              onChange={handleMinSidebarToggle}
              className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] transition">
              Mini Sidebar
            </span>
          </label>
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={handleApplyTheme}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-2 rounded-md font-medium transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            SAVE
          </button>
          <button 
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-2 rounded-md font-medium transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            DESIGN DASHBOARD
          </button>
        </div>
      </div>

      {/* Extra Config Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Extra Config</h2>

        <div className="mb-6">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={extraConfig.autoMacBinding}
              onChange={handleAutoMacBindingToggle}
              className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Auto MAC Binding</span>
          </label>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Select field that you want to required in new user creation
          </h3>
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">User Info</div>

          <div className="flex flex-wrap gap-3 mb-4">
            {[
              { key: 'customerName', label: 'Customer Name' },
              { key: 'email', label: 'Email' },
              { key: 'contactNumber', label: 'Contact Number' },
              { key: 'installationAddressLine1', label: 'Installation Address Line 1' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleUserFieldChange(key)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  extraConfig.userFields[key]
                    ? 'bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600'
                }`}
              >
                {label} {extraConfig.userFields[key] && '×'}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleUserFieldChange('installationCity')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition ${
              extraConfig.userFields.installationCity
                ? 'bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600'
            }`}
          >
            Installation City {extraConfig.userFields.installationCity && '×'}
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">New User Terms</h3>
          <textarea
            value={extraConfig.newUserTerms}
            onChange={(e) => handleNewUserTermsChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md h-16 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Enter new user terms..."
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Default Password
            </label>
            <select
              value={extraConfig.passwordConfig.defaultPassword}
              onChange={(e) => handlePasswordConfigChange('defaultPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="Custom">Custom</option>
              <option value="Auto">Auto Generate</option>
              <option value="Mobile">Mobile Number</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Default Password
            </label>
            <input
              type="text"
              value={extraConfig.passwordConfig.customPassword}
              onChange={(e) => handlePasswordConfigChange('customPassword', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {[
            { key: 'disablePassword', label: 'Disable Password' },
            { key: 'userInvoiceTaxable', label: 'User invoice will taxable' },
            { key: 'userKycRequired', label: 'User kyc required' },
            { key: 'autoDeleteInactiveUsers', label: 'Auto Delete Inactive Users' }
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={extraConfig.passwordConfig[key]}
                onChange={(e) => handlePasswordConfigChange(key, e.target.checked)}
                className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
            </label>
          ))}
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={handleApplyExtra}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-2 rounded-md font-medium transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            APPLY
          </button>
          <button 
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
          >
            API TOKEN
          </button>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
          >
            ALL USER RESET PASSWORD
          </button>
        </div>
      </div>

      {/* Portal Access Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Portal Access</h2>

        <div className="mb-4">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Default portal urls are as below</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Client portal - <span className="text-[var(--primary)]">https://wavesnett.phpradius.com</span>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Zone Portal - <span className="text-[var(--primary)]">https://wavesnett.phpradius.com/admin</span>
          </p>
        </div>

        <div className="mb-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={portalConfig.setOwnZone}
              onChange={(e) => handlePortalConfigChange('setOwnZone', e.target.checked)}
              className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Set your own zone and client portal url</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Client and zone portal url
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={portalConfig.clientPortalUrl}
              onChange={(e) => handlePortalConfigChange('clientPortalUrl', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <Globe size={16} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Hotspot Plan Order Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Hotspot Plan Order</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Order By
            </label>
            <select
              value={hotspotConfig.orderBy}
              onChange={(e) => handleHotspotConfigChange('orderBy', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="">Select Order By</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="duration">Duration</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sort By
            </label>
            <select
              value={hotspotConfig.sortBy}
              onChange={(e) => handleHotspotConfigChange('sortBy', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="">Select Sort By</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Client Portal Page Permission Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Client Portal Page Permission</h2>
          <button
            onClick={selectAllPermissions}
            className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-4 py-1 rounded-md font-medium text-sm transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            style={{ backgroundColor: 'var(--primary)' }}
          >
            SELECT ALL
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { key: 'dashboard', label: 'Dashboard' },
            { key: 'userDetail', label: 'User Detail' },
            { key: 'changePassword', label: 'Change Password' },
            { key: 'sessionLog', label: 'Session Log' },
            { key: 'invoiceList', label: 'Invoice list' },
            { key: 'receiptList', label: 'Receipt List' },
            { key: 'traffic', label: 'Traffic' },
            { key: 'customerSupport', label: 'Customer Support [CMS]' },
            { key: 'rechargeList', label: 'Recharge List' },
            { key: 'recharge', label: 'Recharge' },
            { key: 'voucherRecharge', label: 'Voucher Recharge' }
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={permissions[key]}
                onChange={() => handlePermissionChange(key)}
                className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
            </label>
          ))}
        </div>

        <div className="flex space-x-6 mb-6">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={permissions.wifiSSID}
              onChange={() => handlePermissionChange('wifiSSID')}
              className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Wifi SSID</span>
          </label>
          
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={permissions.wifiPassword}
              onChange={() => handlePermissionChange('wifiPassword')}
              className="w-4 h-4 border-gray-300 rounded accent-[var(--primary)]"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Wifi Password</span>
          </label>
        </div>

        <button 
          onClick={handleApplyPermissions}
          className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-2 rounded-md font-medium transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
          style={{ backgroundColor: 'var(--primary)' }}
        >
          APPLY
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>PHP Radius © 2025</p>
        <p className="text-right">v3.72.69</p>
      </div>
    </main>
  );
};

export default Portal;