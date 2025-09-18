// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // backend prefix
});

/* -------------------- USERS -------------------- */
export const getUsers = () => API.get("/users");
export const addUser = (user) => API.post("/users", user);

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

/* -------------------- RECHARGES / REPORTS -------------------- */
export const getOnlineUsers = () => API.get("/reports/online-users");
export const getRechargeSummary = () => API.get("/reports/recharge-summary");
export const getConnectionAttempts = () => API.get("/connection-attempts");

/* -------------------- EMAIL TEMPLATES -------------------- */
export const getEmailTemplateByName = (notifyName) =>
  API.get(`/emailtemplates/byName/${encodeURIComponent(notifyName)}`);

/* -------------------- CONFIGS -------------------- */
export const getMailConfig = () => API.get("/configs/mail/config");

export default API;

/* -------------------- CONFIGS -------------------- */
// Generic config operations
export const getAllConfigs = () => API.get("/configs");
export const getConfigById = (id) => API.get(`/configs/${id}`);
export const addConfig = (config) => API.post("/configs", config);
export const updateConfig = (id, config) => API.put(`/configs/${id}`, config);
export const deleteConfig = (id) => API.delete(`/configs/${id}`);

// Specific config operations
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

