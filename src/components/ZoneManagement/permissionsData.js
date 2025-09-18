  // … your 134-feature JSON here (all sections + features + permissions)
  export const PERMISSIONS_SECTIONS = [
  {
    "section": "Home",
    "features": [
      {
        "feature": "Dashboard",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Notifications",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Quick Actions",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Widgets Config",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Global Search",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "User Management",
    "features": [
      {
        "feature": "Users List",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "User Details View",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Create User",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Edit User",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Delete User",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Import Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Export Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Bulk Update Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Reset Password",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Suspend User",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Resume User",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Lock User",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Unlock User",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Verify KYC",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Assign Static IP",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Remove Static IP",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "Users List",
    "features": [
      {
        "feature": "Active Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Inactive Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Expired Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Online Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Offline Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Due for Renewal",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Trial Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Corporate Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Retail Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "VIP Users",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "User Session",
    "features": [
      {
        "feature": "Force Logout",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Disconnect Session",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Kick from NAS",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "View Live Session",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Reassign NAS",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Terminate PPPoE",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Radius Interim Update",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "MAC Re-Auth",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Clear DHCP Lease",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Block Device",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Unblock Device",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "User Actions",
    "features": [
      {
        "feature": "Change Plan",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Schedule Plan Change",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Apply Addon",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Remove Addon",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Recharge Wallet",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Refund Wallet",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Generate Invoice",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Waive Charges",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Credit Note",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Debit Note",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Renew Now",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Extend Validity",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Reset MAC",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Reset Quota",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Topup Quota",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "NAS Management",
    "features": [
      {
        "feature": "NAS List",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Add NAS",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Edit NAS",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Delete NAS",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "NAS Health",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "NAS Live Sessions",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "NAS Interfaces",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "NAS Reboot",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "NAS Config Backup",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "NAS Config Restore",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "SNMP Polling",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Ping Monitor",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Port Statistics",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "OLT Management",
    "features": [
      {
        "feature": "OLT List",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Add OLT",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Edit OLT",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Delete OLT",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "OLT Health",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "PON Ports",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Discover ONUs",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Provision ONU",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Deprovision ONU",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Reboot OLT",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Backup OLT Config",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Restore OLT Config",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "Inventory",
    "features": [
      {
        "feature": "Devices List",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Add Device",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Edit Device",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Delete Device",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Stock In",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Stock Out",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Assign Device",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Unassign Device",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "RMA Request",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Approve RMA",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Vendors List",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Add Vendor",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Edit Vendor",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Delete Vendor",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Warehouses",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "Billing",
    "features": [
      {
        "feature": "Invoices List",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Create Invoice",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Edit Invoice",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Cancel Invoice",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Collect Payment",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Record Offline Payment",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Payment Gateways",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Auto Debit",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Late Fees Config",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Tax Setup",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Discount Rules",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Plans & Packages",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Add Plan",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Edit Plan",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Delete Plan",
        "permissions": {
          "Admin": true,
          "Operator": false,
          "User": false,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "Reports",
    "features": [
      {
        "feature": "Usage Report",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Revenue Report",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "User Growth Report",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Churn Report",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "NAS Uptime Report",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "OLT Uptime Report",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Device Inventory Report",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Payment Failure Report",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "GST Report",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Daily Summary",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Custom Report Builder",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      }
    ]
  },
  {
    "section": "CRM & Tickets",
    "features": [
      {
        "feature": "Tickets List",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Create Ticket",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Assign Ticket",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Close Ticket",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Reopen Ticket",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "SLA Config",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Knowledge Base",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Canned Responses",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      },
      {
        "feature": "Customer Notes",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Follow-ups",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": true,
          "Manager": true
        }
      },
      {
        "feature": "Escalations",
        "permissions": {
          "Admin": true,
          "Operator": true,
          "User": false,
          "Manager": true
        }
      }
    ]
  }
];

export const ROLES = [
  "Admin",
  "Operator",
  "User",
  "Manager"
];



