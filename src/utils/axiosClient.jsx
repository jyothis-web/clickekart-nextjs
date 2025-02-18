import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://127.0.0.1:8000/api/`, 
  //baseURL: process.env.NEXT_PUBLIC_API_URL, 
  withCredentials: true, // Important for Laravel Sanctum authentication
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
