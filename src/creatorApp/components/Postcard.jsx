import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSubscription } from "../context/Subscriptioncontext";
import "./PostCard.scss";

const PostCard = ({ title, timestamp, image }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { isSubscribed } = useSubscription();

  // Agar user logged in nahi hai YA subscribed nahi hai, toh post lock rahegi
  const locked = !isLoggedIn || !isSubscribed;

  const handleUnlockClick = () => {
    if (!isLoggedIn) {
      // Step 1: User logged in nahi hai -> Send to Login
      navigate("/creator/login");
    } else if (!isSubscribed) {
      // Step 2: User logged in hai but premium nahi hai -> Send to Subscription
      navigate("/creator/subscription");
    }
  };

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
            {/* "Login to view" hata kar ek premium badge text laga diya hai */}
            <span>Premium Content</span> 
          </div>
        )}
      </div>
      
      <div className="post-card__body">
        <p className="post-card__title">{title}</p>
        <p className="post-card__time">{timestamp}</p>
        
        {locked && (
          <button className="post-card__btn" onClick={handleUnlockClick}>
            Subscribe to View
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCard;