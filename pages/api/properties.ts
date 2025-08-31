import axios from "axios";

const api = axios.create({
  baseURL: process.env.AIRBNB_LISTING_API || "",
  timeout: 15000,
});

export default api;
