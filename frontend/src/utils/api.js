import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
// REQUEST INTERCEPTOR
axiosInstance.interceptors.request.use(
  (config) => {
    //  Get token from cookies or localStorage
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// RESPONSE INTERCEPTOR
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    toast.error(error.response?.data?.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
