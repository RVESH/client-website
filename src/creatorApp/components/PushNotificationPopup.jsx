// components/PushNotificationPopup.jsx
import { useState, useEffect } from "react";
import "./PushNotificationPopup.scss";

const PushNotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds for a smooth intro
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="push-popup">
      <div className="push-popup__icon">🔔</div>
      <div className="push-popup__content">
        <h4>Never miss an update</h4>
        <p>Get notified when I go live or post!</p>
      </div>
      <div className="push-popup__actions">
        <button className="push-popup__btn push-popup__btn--allow" onClick={() => setIsVisible(false)}>Allow</button>
        <button className="push-popup__btn push-popup__btn--deny" onClick={() => setIsVisible(false)}>✕</button>
      </div>
    </div>
  );
};

export default PushNotificationPopup;