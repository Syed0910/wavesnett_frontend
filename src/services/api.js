import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

// Users APIs
export const getUsers = () => API.get("/users");
export const addUser = (user) => API.post("/users", user);

// UserDetails APIs
export const getUserDetails = (id) => API.get(`/userdetails/${id}`);
export const getAllUserDetails = () => API.get("/userdetails");

// ✅ Operators APIs
export const getOperators = () => API.get("/operators");
export const addOperator = (operator) => API.post("/operators", operator);
export const deleteOperator = (id) => API.delete(`/operators/${id}`);
