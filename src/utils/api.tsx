import axios, { AxiosInstance } from 'axios';

const API_URL: string = import.meta.env.VITE_API_BASE_URL;

const API: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {

  return config;
});

export default API;
