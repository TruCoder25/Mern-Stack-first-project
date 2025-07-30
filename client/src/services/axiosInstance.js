import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // your backend base URL
  withCredentials: true,
  timeout: 10000, // 10 seconds
});

export default axiosInstance;
