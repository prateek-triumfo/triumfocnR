import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // adjust to match your backend
});

// Automatically add token from localStorage if available
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
