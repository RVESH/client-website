import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => { logout(); navigate("/creator"); };

  return (
    <div className="creator-header">
      <div className="creator-header__top">
        <span className="creator-header__username">Sarahaf</span>
        <button className="creator-header__install">Install</button>
      </div>
      <div className="creator-header__actions">
        {isLoggedIn ? (
          <button className="btn-outline" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button className="btn-outline" onClick={() => navigate("/creator/login")}>Login</button>
            <button className="btn-primary">Subscribe</button>
            <button className="btn-ghost">Follow</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;