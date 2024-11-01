import { API_URL } from "@/constants/base";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import qs from "qs";

export const axiosClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  timeout: 15000,
  paramsSerializer: (params: Record<string, any>) =>
    qs.stringify(params, { arrayFormat: "brackets" }),
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

export const axiosServer = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  timeout: 15000,
});

axiosServer.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);
