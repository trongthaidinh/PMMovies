"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { axiosClient } from "@/config/axios";

export const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("auth_token");
    delete axiosClient.defaults.headers.common["Authorization"];
  }, []);

  const refreshTokens = useCallback(async () => {
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      if (!refreshToken) throw new Error("No refresh token");

      const response = await axiosClient.post("/auth/refresh", {
        refreshToken,
      });
      const { accessToken, refreshToken: newRefreshToken } = response.data.data;

      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", newRefreshToken);
      axiosClient.defaults.headers.common["Authorization"] =
        `Bearer ${accessToken}`;

      return accessToken;
    } catch (error) {
      logout();
      throw error;
    }
  }, [logout]);

  // Axios interceptor để tự động refresh token
  useEffect(() => {
    const interceptor = axiosClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const accessToken = await refreshTokens();
            originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
            return axiosClient(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosClient.interceptors.response.eject(interceptor);
    };
  }, [refreshTokens]);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("auth_token");
      if (token) {
        try {
          axiosClient.defaults.headers.common["Authorization"] =
            `Bearer ${token}`;
          const response = await axiosClient.get("/auth/me");
          setUser(response.data.user);
        } catch (error) {
          console.error("Auth error:", error);
          localStorage.removeItem("auth_token");
          delete axiosClient.defaults.headers.common["Authorization"];
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await axiosClient.post("/auth/login", {
      email,
      password,
    });
    const { accessToken, refreshToken, user } = response.data.data;

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    axiosClient.defaults.headers.common["Authorization"] =
      `Bearer ${accessToken}`;
    setUser(user);
    return response.data.data;
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
