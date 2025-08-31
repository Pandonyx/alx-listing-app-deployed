import axios from "axios";

// Client calls your Next API routes (same origin)
const api = axios.create({
  baseURL: "", // you’ll call: api.get("/api/properties")
  timeout: 15000,
});

export default api;
