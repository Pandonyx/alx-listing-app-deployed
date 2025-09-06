import axios from "axios";

// Axios instance for calling our Next.js API routes (same origin)
const api = axios.create({
  baseURL: "",
  timeout: 15000,
});

export default api;

