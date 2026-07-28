import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../api/auth.api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = useCallback((user) => {
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  }, []);

const refreshUser = useCallback(async () => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    setLoading(false);
    return;
  }

  try {
    const response = await getCurrentUser(token);
    setUser(response.data);
  } catch {
    logout();
  } finally {
    setLoading(false);
  }
}, [logout]);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isLoggedIn: !!user,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);