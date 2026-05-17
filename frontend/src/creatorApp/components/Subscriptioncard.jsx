import { useNavigate } from "react-router-dom";
import "./SubscriptionCard.scss";

const SubscriptionCard = ({ title, desc, price, plan }) => {
  const navigate = useNavigate();
  return (
    <div className="sub-card">
      <div className="sub-card__img">
        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=140&fit=crop" alt="creator" />
      </div>
      <div className="sub-card__body">
        <h3 className="sub-card__title">{title}</h3>
        <p className="sub-card__tagline">Unlock all exclusive content</p>
        <p className="sub-card__desc">{desc}</p>
        <div className="sub-card__plan">{plan} - {price}</div>
        <button className="sub-card__btn" onClick={() => navigate("/creator/subscription")}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;