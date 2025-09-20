  // src/services/api.js
  import axios from "axios";

    const API = axios.create({
      baseURL: "http://localhost:3000/api", // backend prefix
    });

/* -------------------- USERS -------------------- */
export const getUsers = () => API.get("/users");
export const addUser = (user) => API.post("/users", user);
export const getUserById = (id) => API.get(`/users/${id}`);
export const updateUser = (id, user) => API.put(`/users/${id}`, user);
export const deleteUser = (id) => API.delete(`/users/${id}`);

/* -------------------- USER DETAILS -------------------- */
export const getUserDetails = (id) => API.get(`/userdetails/${id}`);
export const getAllUserDetails = () => API.get("/userdetails");

/* -------------------- OPERATORS -------------------- */
export const getOperators = () => API.get("/operators");
export const addOperator = (operator) => API.post("/operators", operator);
export const deleteOperator = (id) => API.delete(`/operators/${id}`);

/* -------------------- NAS -------------------- */
export const getNas = () => API.get("/nas");
export const getNasById = (id) => API.get(`/nas/${id}`);
export const addNas = (nas) => API.post("/nas", nas);
export const updateNas = (id, nas) => API.put(`/nas/${id}`, nas);
export const deleteNas = (id) => API.delete(`/nas/${id}`);

/* -------------------- PLANS -------------------- */
export const getPlans = () => API.get("/plans");
export const getPlanById = (id) => API.get(`/plans/${id}`);
export const addPlan = (plan) => API.post("/plans", plan);
export const updatePlan = (id, plan) => API.put(`/plans/${id}`, plan);
export const deletePlan = (id) => API.delete(`/plans/${id}`);

/* -------------------- PLAN GROUPS -------------------- */
export const getPlanGroups = () => API.get("/plangroups");
export const getPlanGroupById = (id) => API.get(`/plangroups/${id}`);
export const addPlanGroup = (planGroup) => API.post("/plangroups", planGroup);
export const updatePlanGroup = (id, planGroup) => API.put(`/plangroups/${id}`, planGroup);
export const deletePlanGroup = (id) => API.delete(`/plangroups/${id}`);

/* -------------------- ZONES -------------------- */
export const getZones = () => API.get("/zones");
export const getZoneById = (id) => API.get(`/zones/${id}`);
export const addZone = (zone) => API.post("/zones", zone);
export const updateZone = (id, zone) => API.put(`/zones/${id}`, zone);
export const deleteZone = (id) => API.delete(`/zones/${id}`);

/* -------------------- INVOICES -------------------- */
export const getInvoices = () => API.get("/invoices");
export const getInvoiceById = (id) => API.get(`/invoices/${id}`);
export const addInvoice = (invoice) => API.post("/invoices", invoice);
export const updateInvoice = (id, invoice) => API.put(`/invoices/${id}`, invoice);
export const deleteInvoice = (id) => API.delete(`/invoices/${id}`);

/* -------------------- RECEIPTS -------------------- */
export const getReceipts = () => API.get("/receipts");
export const addReceipt = (receipt) => API.post("/receipts", receipt);
export const updateReceipt = (id, receipt) => API.put(`/receipts/${id}`, receipt);
export const deleteReceipt = (id) => API.delete(`/receipts/${id}`);

/* -------------------- ONLINE TRANSACTIONS -------------------- */
export const getOnlineTransactions = () => API.get("/online-transactions");
export const addOnlineTransaction = (transaction) =>
  API.post("/online-transactions", transaction);
export const updateOnlineTransaction = (id, transaction) =>
  API.put(`/online-transactions/${id}`, transaction);
export const deleteOnlineTransaction = (id) =>
  API.delete(`/online-transactions/${id}`);

/* -------------------- ONLINE USERS -------------------- */
export const getOnlineUsers = () => API.get("/online-users");
export const addOnlineUser = (user) => API.post("/online-users", user);
export const updateOnlineUser = (id, user) => API.put(`/online-users/${id}`, user);
export const deleteOnlineUser = (id) => API.delete(`/online-users/${id}`);

/* -------------------- RECHARGES / REPORTS -------------------- */
export const getOnlineUsersReport = () => API.get("/reports/online-users");
export const getRechargeSummary = () => API.get("/reports/recharge-summary");
export const getConnectionAttempts = () => API.get("/connection-attempts");
export const getActiveRecords = () => API.get("/active-records"); 
export const getUserReports = () => API.get("/reports/users");
export const getBillingReports = () => API.get("/reports/billing");
export const getComplaintReports = () => API.get("/reports/complaints");
export const getWalletledgers = () => API.get("/reports/walletledgers");

/* -------------------- EMAIL TEMPLATES -------------------- */
export const getEmailTemplateByName = (notifyName) =>
  API.get(`/emailtemplates/byName/${encodeURIComponent(notifyName)}`);

/* -------------------- CONFIGS -------------------- */
export const getAllConfigs = () => API.get("/configs");
export const getConfigById = (id) => API.get(`/configs/${id}`);
export const addConfig = (config) => API.post("/configs", config);
export const updateConfig = (id, config) => API.put(`/configs/${id}`, config);
export const deleteConfig = (id) => API.delete(`/configs/${id}`);

// Specific config operations
export const getMailConfig = () => API.get("/configs/mail/config");
export const getTaxConfig = () => API.get("/configs/tax/config");
export const updateTaxConfig = (config) => API.put("/configs/tax/config", config);
export const getKycConfig = () => API.get("/configs/kyc/config");
export const updateKycConfig = (config) => API.put("/configs/kyc/config", config);
export const getThemeConfig = () => API.get("/configs/theme/config");
export const updateThemeConfig = (config) => API.put("/configs/theme/config", config);
export const getExtraConfig = () => API.get("/configs/extra/config");
export const updateExtraConfig = (config) => API.put("/configs/extra/config", config);
export const getPortalConfig = () => API.get("/configs/portal/config");
export const updatePortalConfig = (config) => API.put("/configs/portal/config", config);
export const getHotspotConfig = () => API.get("/configs/hotspot/config");
export const updateHotspotConfig = (config) => API.put("/configs/hotspot/config", config);
export const getPermissionsConfig = () => API.get("/configs/permissions/config");
export const updatePermissionsConfig = (config) => API.put("/configs/permissions/config", config);

/* -------------------- ADMIN CONFIGURATION -------------------- */
export const getAdminConfiguration = () => API.get("/configs");
export const getAdminConfigurationById = (id) => API.get(`/configs/${id}`);
export const addAdminConfiguration = (adminConfiguration) =>
  API.post("/configs", adminConfiguration);
export const updateAdminConfiguration = (id, data) => {
  return API.put(`/configs/${id}`, data);
};

/* -------------------- TESTING -------------------- */
export const testUserConnection = () => API.get("/users/test");

export default API;