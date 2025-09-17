import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

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

//*---------------------- configurations ----------------------------- */
export const getAdminConfiguration = () => API.get("/configs");
export const getAdminConfigurationById = (id) => API.get(`/configs/${id}`);
export const addAdminConfiguration = (adminConfiguration) =>
  API.post("/configs", adminConfiguration);
export const updateAdminConfiguration = (id, data) => {
  return API.put(`/configs/${id}`, data);  // remove 'admin' if not in backend
};

/*--------------------------otts------------------------------------*/
 export const getOtts = () => API.get("/otts");


