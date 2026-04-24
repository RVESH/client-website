import { useNavigate, useLocation } from "react-router-dom";
// import "./BottomNav.scss";

const BottomNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const tabs = [
    { label: "Home", icon: "🏠", path: "/creator" },
    { label: "Chat", icon: "💬", path: "/creator/chat" },
    { label: "Lock", icon: "🔒", path: "/creator/subscription" },
  ];

  return (
    <div className="bottom-nav">
      {tabs.map(tab => (
        <button
          key={tab.path}
          className={`bottom-nav__tab${pathname === tab.path ? " bottom-nav__tab--active" : ""}`}
          onClick={() => navigate(tab.path)}
        >
          <span className="bottom-nav__icon">{tab.icon}</span>
          <span className="bottom-nav__label">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;