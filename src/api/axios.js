import axios from "axios";
import { localStorageKeys } from "constantStrings";

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000/api" : "api/";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem(localStorageKeys.userTokenKey);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
