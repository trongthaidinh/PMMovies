"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { axiosClient } from "@/config/axios";
import { User, AuthContextType } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        setLoading(false);
        return;
      }

      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      
      const response = await axiosClient.get("/auth/me");
      if (response.data.user) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error("Auth check error:", error);
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      delete axiosClient.defaults.headers.common["Authorization"];
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
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

  const login = async (email: string, password: string) => {
    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });

      if (response.data.code === 200) {
        // Set user data
        setUser(response.data.data.user);
        
        // Set authorization header
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data.accessToken}`;

        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };

  const register = async (email: string, password: string, username: string) => {
    try {
      const response = await axiosClient.post("/auth/register", {
        email,
        password,
        username,
      });

      if (response.data.code === 200) {
        // Set user data
        setUser(response.data.data.user);
        
        // Set authorization header
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.data.accessToken}`;

        return response.data;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, loading, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
