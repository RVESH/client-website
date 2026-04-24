import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSubscription } from "../context/Subscriptioncontext";
import "./PostCard.scss";

const PostCard = ({ title, timestamp, image }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { isSubscribed } = useSubscription();

  const handleClick = () => {
    if (!isLoggedIn) { navigate("/creator/login"); return; }
  };

  const locked = !isLoggedIn || !isSubscribed;

  return (
    <div className="post-card">
      <div className="post-card__img-wrap">
        <img
          src={image}
          alt={title}
          className={locked ? "post-card__img--blur" : ""}
        />
        {locked && (
          <div className="post-card__lock">
            <span>🔒</span>
            <span>Login to View</span>
          </div>
        )}
      </div>
      <div className="post-card__body">
        <p className="post-card__title">{title}</p>
        <p className="post-card__time">{timestamp}</p>
        {locked && (
          <button className="post-card__btn" onClick={handleClick}>
            {!isLoggedIn ? "Login to View" : "Subscribe to View"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCard;