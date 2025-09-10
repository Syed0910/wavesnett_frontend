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
