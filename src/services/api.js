// app.js
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

/* -------------------- RECHARGES -------------------- */
export const getOnlineUsers = () => API.get("/reports/online-users"); // online users
export const getRechargeSummary = () => API.get("/reports/recharge-summary");

/* -------------------- EMAIL TEMPLATES -------------------- */
export const getEmailTemplateByName = (notifyName) =>
  API.get(`/emailtemplates/byName/${encodeURIComponent(notifyName)}`);


/* -------------------- CONFIGS -------------------- */
export const getMailConfig = () => API.get("/configs/mail/config");

export default API;
