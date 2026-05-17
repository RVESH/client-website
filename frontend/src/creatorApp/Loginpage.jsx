import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]     = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) { setError("Please fill all fields"); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Invalid email"); return; }
    login(email);
    navigate("/creator");
  };

  return (
    <div className="creator-login">
      <div className="creator-login__card">
        <div className="creator-login__logo">Sarahaf</div>
        <h1 className="creator-login__title">Welcome back</h1>
        <p className="creator-login__sub">Sign in to access exclusive content</p>

        {error && <div className="creator-login__error">⚠ {error}</div>}

        <form onSubmit={handleLogin} className="creator-login__form">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(""); }}
            className="creator-login__input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => { setPassword(e.target.value); setError(""); }}
            className="creator-login__input"
          />
          <button type="submit" className="creator-login__btn">Login</button>
        </form>

        <p className="creator-login__back" onClick={() => navigate("/creator")}>
          ← Back to home
        </p>
      </div>
    </div>
  );
};

export default LoginPage;