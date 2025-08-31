import axios from "axios";

export const providerApi = axios.create({
  baseURL: process.env.AIRBNB_LISTING_API!,
  timeout: 15000,
  headers: {
    // adjust to your provider; RapidAPI example:
    "X-RapidAPI-Key": process.env.AIRBNB_API_KEY!,
    "X-RapidAPI-Host": process.env.AIRBNB_API_HOST!,
  },
});
