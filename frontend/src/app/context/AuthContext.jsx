// src/app/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getMe, logoutUser } from "../../components/auth/api";

const AuthContext = createContext(null);

const ls = {
  getUser:  () => { try { return JSON.parse(localStorage.getItem("auth_user") || "null"); } catch { return null; } },
  getToken: () => localStorage.getItem("auth_token") || null,
  set:      (user, token) => { localStorage.setItem("auth_user", JSON.stringify(user)); localStorage.setItem("auth_token", token); },
  clear:    () => { localStorage.removeItem("auth_user"); localStorage.removeItem("auth_token"); },
};

export const AuthProvider = ({ children }) => {
  const [user,    setUser]    = useState(ls.getUser);
  const [token,   setToken]   = useState(ls.getToken);
  const [loading, setLoading] = useState(!!ls.getToken());

  // Page reload pe token verify karo
  useEffect(() => {
    const t = ls.getToken();
    if (!t) { setLoading(false); return; }
    getMe(t)
      .then(data => { setUser(data.user); localStorage.setItem("auth_user", JSON.stringify(data.user)); })
      .catch(() => { ls.clear(); setUser(null); setToken(null); })
      .finally(() => setLoading(false));
  }, []); // eslint-disable-line

  const login = useCallback((userData, jwtToken) => {
    setUser(userData); setToken(jwtToken); ls.set(userData, jwtToken);
  }, []);

  const logout = useCallback(() => {
    const t = ls.getToken();
    if (t) logoutUser(t).catch(() => {});
    setUser(null); setToken(null); ls.clear();
  }, []);

  const updateUser = useCallback((partial) => {
    setUser(prev => {
      const updated = { ...prev, ...partial };
      localStorage.setItem("auth_user", JSON.stringify(updated));
      return updated;
    });
  }, []);

  if (loading) return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#0a0a0f", color:"#6c63ff", fontFamily:"monospace", fontSize:"13px", letterSpacing:"0.1em" }}>
      ◉ &nbsp;Authenticating…
    </div>
  );

  return (
    <AuthContext.Provider value={{ user, token, login, logout, updateUser, isAuthenticated:!!user, isAdmin:!!user?.is_admin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside <AuthProvider>");
  return ctx;
};

export default AuthContext;