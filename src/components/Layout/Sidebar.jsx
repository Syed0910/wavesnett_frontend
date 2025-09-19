import React, { useState } from "react";
import {
  Home, Server, Users, CreditCard, AlertCircle, Laptop, BarChart2, Settings,
  HardDrive, Layers, ClipboardList, Box, LogIn, ChevronDown, ChevronRight, Monitor,
  User, Upload, Router, FileText, Receipt, DollarSign, BarChart, List, FileInput,
  Grid, Network, Ticket, UserPlus, Users2, MessageSquare, Mail, Smartphone, Ban,
  Percent, Globe, Database, TrendingUp, Info, Table, Wrench, Shield, Clock,
  Activity, Wifi, MapPin, Lock, Target, Share, Zap
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; // ✅ import theme

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState([""]);
  const { primaryColor } = useTheme(); // ✅ use primary color

  const toggleExpand = (id) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleClick = (item) => {
    if (item.subItems && item.subItems.length > 0) {
      toggleExpand(item.id);
    } else if (item.path) {
      navigate(item.path);
      if (window.innerWidth < 1024) onClose();
    }
  };

  const isActive = (item) => {
    if (item.path === "/dashboard" && location.pathname === "/") return true;
    return (
      location.pathname === item.path ||
      location.pathname.startsWith(item.path + "/")
    );
  };

  // Helper function to get hover color with opacity
  const getHoverColor = () => {
    // Convert hex to RGB and add opacity
    const hex = primaryColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, 0.1)`;
  };
  
  // ✅ Full menuItems restored
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home className="w-5 h-5" />, path: "/dashboard" },

    {
      id: "nas",
      label: "NAS",
      icon: <Server className="w-5 h-5" />,
      subItems: [
        { id: "nas-dashboard", label: "NAS Dashboard", icon: <Monitor className="w-4 h-4" />, path: "/nas/dashboard" },
        { id: "online-users", label: "Online Users", icon: <User className="w-4 h-4" />, path: "/nas/online-users" },
        { id: "dhcp-lease", label: "DHCP Lease", icon: <Upload className="w-4 h-4" />, path: "/nas/dhcp-lease" },
        { id: "cpe-devices", label: "CPE Devices", icon: <Router className="w-4 h-4" />, path: "/nas/cpe-devices" },
      ],
    },

    {
      id: "user",
      label: "User Management",
      icon: <Users className="w-5 h-5" />,
      subItems: [
        { id: "users", label: "Users", icon: <Users2 className="w-4 h-4" />, path: "/user/users" },
        { id: "new-user", label: "New User", icon: <UserPlus className="w-4 h-4" />, path: "/user/new" },
        { id: "bulk-users", label: "Bulk User Lots", icon: <Users className="w-4 h-4" />, path: "/user/bulk" },
      ],
    },

    {
      id: "billing",
      label: "Billing",
      icon: <CreditCard className="w-5 h-5" />,
      subItems: [
        { id: "invoices", label: "Invoices", icon: <FileText className="w-4 h-4" />, path: "/billing/invoices" },
        { id: "receipts", label: "Receipts", icon: <Receipt className="w-4 h-4" />, path: "/billing/receipts" },
        { id: "online-transactions", label: "Online Transaction", icon: <DollarSign className="w-4 h-4" />, path: "/billing/online-transactions" },
        { id: "billing-summary-chart", label: "Billing Summary Chart", icon: <BarChart className="w-4 h-4" />, path: "/billing/billing-summary-chart" },
      ],
    },

    {
      id: "packages",
      label: "Packages",
      icon: <Laptop className="w-5 h-5" />,
      subItems: [
        { id: "base-plans", label: "Base Plans", icon: <List className="w-4 h-4" />, path: "/packages/base" },
        { id: "import-base", label: "Import Base Plans", icon: <FileInput className="w-4 h-4" />, path: "/packages/import-base" },
        { id: "plans", label: "Plans", icon: <Grid className="w-4 h-4" />, path: "/packages/plans" },
        { id: "import-plans", label: "Import Plans", icon: <Upload className="w-4 h-4" />, path: "/packages/import-plans" },
        { id: "plan-group", label: "Plan Group", icon: <Network className="w-4 h-4" />, path: "/packages/plan-group" },
        { id: "vouchers", label: "Vouchers", icon: <Ticket className="w-4 h-4" />, path: "/packages/vouchers" },
      ],
    },

    { id: "complaints", label: "Complaints", icon: <AlertCircle className="w-5 h-5" />, path: "/complaints" },

    {
      id: "reports",
      label: "Reports",
      icon: <BarChart2 className="w-5 h-5" />,
      subItems: [
        { id: "online-users-report", label: "Online Users", icon: <User className="w-4 h-4" />, path: "/reports/online-users" },
        { id: "recharge-summary", label: "Recharge Summary", icon: <CreditCard className="w-4 h-4" />, path: "/reports/recharge-summary" },
        { id: "connection-attempt", label: "Connection Attempt", icon: <Network className="w-4 h-4" />, path: "/reports/connection-attempt" },
        { id: "active-records", label: "Active Records", icon: <Users2 className="w-4 h-4" />, path: "/reports/active-records" },
        { id: "wallet-ledger", label: "Wallet Ledger", icon: <DollarSign className="w-4 h-4" />, path: "/reports/wallet-ledger" },
        { id: "zone-ledger", label: "Zone Acc. Ledger", icon: <Box className="w-4 h-4" />, path: "/reports/zone-ledger" },
        { id: "logs", label: "Logs", icon: <ClipboardList className="w-4 h-4" />, path: "/reports/logs" },
        { id: "operator-logs", label: "Operator Logs", icon: <FileText className="w-4 h-4" />, path: "/reports/operator-logs" },
        { id: "tax-summary", label: "Tax Summary", icon: <Receipt className="w-4 h-4" />, path: "/reports/tax-summary" },
        { id: "sms-status", label: "SMS Status", icon: <MessageSquare className="w-4 h-4" />, path: "/reports/sms-status" },
        { id: "whatsapp-status", label: "Whatsapp Status", icon: <Smartphone className="w-4 h-4" />, path: "/reports/whatsapp-status" },
        { id: "email-status", label: "Email Status", icon: <Mail className="w-4 h-4" />, path: "/reports/email-status" },
        { id: "user-logins", label: "User Logins", icon: <LogIn className="w-4 h-4" />, path: "/reports/user-logins" },
        { id: "disable-users", label: "Disable Users", icon: <Ban className="w-4 h-4" />, path: "/reports/disable-users" },
        { id: "user-discounts", label: "User Discounts", icon: <Percent className="w-4 h-4" />, path: "/reports/user-discounts" },
        { id: "used-ip", label: "Used IP", icon: <Globe className="w-4 h-4" />, path: "/reports/used-ip" },
        { id: "used-data", label: "Used Data", icon: <Database className="w-4 h-4" />, path: "/reports/used-data" },
        { id: "monthly-used-data", label: "Monthly Used Data", icon: <TrendingUp className="w-4 h-4" />, path: "/reports/monthly-used-data" },
        { id: "operator-graph", label: "Operator Graph", icon: <BarChart className="w-4 h-4" />, path: "/reports/operator-graph" },
        { id: "user-info", label: "User Information", icon: <Info className="w-4 h-4" />, path: "/reports/user-info" },
        { id: "all-records-except-close", label: "All Record Except Close", icon: <Table className="w-4 h-4" />, path: "/reports/all-records" }
      ],
    },

    {
      id: "config",
      label: "Configuration",
      icon: <Settings className="w-5 h-5" />,
      subItems: [
        { id: "admin-config", label: "Admin Configuration", icon: <Wrench className="w-4 h-4" />, path: "/config/admin" },
        { id: "changePassword", label: "Change Password", icon: <Lock className="w-4 h-4" />, path: "/config/changePassword" },
      ],
    },

    {
      id: "nas-management",
      label: "NAS Management",
      icon: <HardDrive className="w-5 h-5" />,
      subItems: [
        { id: "nas-config", label: "Nas Configuration", icon: <Monitor className="w-4 h-4" />, path: "/nas-mgmt/config" },
        { id: "nas-main", label: "NAS", icon: <Server className="w-4 h-4" />, path: "/nas-mgmt/nas" },
        { id: "interface", label: "Interface", icon: <Network className="w-4 h-4" />, path: "/nas-mgmt/interface" },
        { id: "ip-address", label: "IP Address", icon: <Globe className="w-4 h-4" />, path: "/nas-mgmt/ip-address" },
        { id: "firewall", label: "Firewall", icon: <Shield className="w-4 h-4" />, path: "/nas-mgmt/firewall" },
        { id: "queue", label: "Queue", icon: <Clock className="w-4 h-4" />, path: "/nas-mgmt/queue" },
        { id: "route", label: "Route", icon: <Router className="w-4 h-4" />, path: "/nas-mgmt/route" },
        { id: "dhcpServer", label: "Dhcp Server", icon: <Server className="w-4 h-4" />, path: "/nas-mgmt/dhcpServer" },
        { id: "ip-pool", label: "IP-Pool", icon: <Database className="w-4 h-4" />, path: "/nas-mgmt/ip-pool" },
        { id: "hotspotServer", label: "Hotspot Server", icon: <Wifi className="w-4 h-4" />, path: "/nas-mgmt/hotspotServer" },
        { id: "hotspotProfile", label: "Hotspot Profile", icon: <User className="w-4 h-4" />, path: "/nas-mgmt/hotspotProfile" },
        { id: "pppoeServer", label: "PPPOE Server", icon: <Settings className="w-4 h-4" />, path: "/nas-mgmt/pppoeServer" },
        { id: "pppoeProfile", label: "PPPOE Profile", icon: <User className="w-4 h-4" />, path: "/nas-mgmt/pppoeProfile" },
        { id: "masquerade", label: "Masquerade", icon: <Share className="w-4 h-4" />, path: "/nas-mgmt/masquerade" },
      ],
    },

    {
      id: "olt-management",
      label: "OLT Management",
      icon: <Layers className="w-5 h-5" />,
      subItems: [
        { id: "olt", label: "OLT", icon: <List className="w-4 h-4" />, path: "/olt-mgmt/olt" },
        { id: "onu-discover", label: "Onu Discover", icon: <Activity className="w-4 h-4" />, path: "/olt-mgmt/onu-discover" },
        { id: "onu-status", label: "Onu Status", icon: <Monitor className="w-4 h-4" />, path: "/olt-mgmt/onu-status" },
        { id: "network", label: "Network", icon: <Network className="w-4 h-4" />, path: "/olt-mgmt/network" },
      ],
    },

    {
      id: "inventory",
      label: "Inventory Management",
      icon: <ClipboardList className="w-5 h-5" />,
      subItems: [
        { id: "inventoryList", label: "Inventory List", icon: <List className="w-4 h-4" />, path: "/inventory/inventoryList" },
        { id: "tr069", label: "Tr069", icon: <Zap className="w-4 h-4" />, path: "/inventory/tr069" },
        { id: "map", label: "Map", icon: <MapPin className="w-4 h-4" />, path: "/inventory/map" },
        { id: "tr069Network", label: "Tr069 Network", icon: <Network className="w-4 h-4" />, path: "/inventory/tr069Network" },
      ],
    },

    {
      id: "zone",
      label: "Zone Management",
      icon: <Box className="w-5 h-5" />,
      subItems: [
        { id: "operators", label: "Operators", icon: <Users2 className="w-4 h-4" />, path: "/zone/operators" },
        { id: "zones", label: "Zones", icon: <Target className="w-4 h-4" />, path: "/zone/zones" },
        { id: "permissions", label: "Permissions", icon: <Lock className="w-4 h-4" />, path: "/zone/permissions" },
      ],
    },

    { id: "active-login", label: "Active Login", icon: <LogIn className="w-5 h-5" />, path: "/active-login" },
  ];

  // ✅ Enhanced renderItem logic with hover effects
  const renderItem = (item) => {
    const expandedItem = expanded.includes(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isItemActive = isActive(item);
    
    return (
      <div key={item.id}>
        <button
          onClick={() => handleClick(item)}
          className={`
            w-full flex items-center justify-between px-4 py-2 rounded-full transition-all duration-200
            hover:scale-105 hover:shadow-md
            ${isItemActive ? "bg-gray-200 shadow-sm" : "hover:bg-opacity-10"}
          `}
          style={{
            color: isItemActive ? primaryColor : undefined,
            backgroundColor: !isItemActive ? 'transparent' : undefined,
          }}
          onMouseEnter={(e) => {
            if (!isItemActive) {
              e.target.style.backgroundColor = getHoverColor();
              e.target.style.color = primaryColor;
            }
          }}
          onMouseLeave={(e) => {
            if (!isItemActive) {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '';
            }
          }}
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
          </div>
          {hasSubItems && (
            <span className="text-gray-500 transition-transform duration-200">
              {expandedItem ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
          )}
        </button>
        {hasSubItems && expandedItem && (
          <div className="ml-8 mt-1 space-y-1">
            {item.subItems.map((sub) => {
              const isSubActive = isActive(sub);
              return (
                <button
                  key={sub.id}
                  onClick={() => handleClick(sub)}
                  className={`
                    w-full flex items-center gap-2 px-2 py-1 text-sm rounded transition-all duration-200
                    hover:scale-105 hover:shadow-sm
                    ${isSubActive ? "bg-gray-200 shadow-sm" : "hover:bg-opacity-10"}
                  `}
                  style={{
                    color: isSubActive ? primaryColor : undefined,
                    backgroundColor: !isSubActive ? 'transparent' : undefined,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubActive) {
                      e.target.style.backgroundColor = getHoverColor();
                      e.target.style.color = primaryColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubActive) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '';
                    }
                  }}
                >
                  {sub.icon}
                  <span className="whitespace-nowrap">{sub.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`${isOpen ? "translate-x-0" : "-translate-x-70"} transform transition-transform duration-300`}
    >
      <div className="bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen flex flex-col">
        {/* Logo and Company Name Section */}
        <div
          className="text-white p-6 flex flex-col items-center"
          style={{ backgroundColor: primaryColor }} // ✅ dynamic color
        >
          <div className="bg-white p-3 rounded-lg mb-3">
            <img
              src="/wavesnett.png"
              alt="WavesNett"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold text-center leading-tight">
            AaniRids Technologies...
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => renderItem(item))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;