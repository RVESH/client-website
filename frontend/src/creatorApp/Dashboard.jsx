import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { useSubscription } from "./context/Subscriptioncontext";
import Header from "./components/Header";
import PostCard from "./components/Postcard";
import BottomNav from "./components/Bottomnav";
import "./Dashboard.scss";

const POSTS = [
  { title: "Designing my new workspace",       timestamp: "Posted Recently", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&h=200&fit=crop" },
  { title: "My updated morning routine",        timestamp: "2 days ago",     image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=300&h=200&fit=crop" },
  { title: "Behind the scenes: Photo shoot",    timestamp: "1 week ago",     image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop" },
  { title: "How I organize my ideas",           timestamp: "2 weeks ago",    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&h=200&fit=crop" },
];

const Dashboard = () => {
  const navigate  = useNavigate();
  const { user }  = useAuth();
  const { isSubscribed } = useSubscription();

  return (
    <div className="creator-dash">
      <Header />

      <div className="creator-dash__content">
        <p className="creator-dash__welcome">Welcome, {user?.name} 👋</p>

        {!isSubscribed ? (
          <div className="creator-dash__locked">
            <div className="creator-dash__star">⭐</div>
            <h2>Unlock Premium Content</h2>
            <p>Subscribe to get access to all exclusive posts, behind-the-scenes content, and early updates.</p>
            <button className="creator-dash__sub-btn" onClick={() => navigate("/creator/subscription")}>
              Subscribe to unlock
            </button>
          </div>
        ) : (
          <div>
            <div className="creator-dash__premium-badge">⭐ Premium Content</div>
            <div className="posts-grid">
              {POSTS.map((p, i) => <PostCard key={i} {...p} />)}
            </div>
          </div>
        )}
      </div>

      <div style={{ height: 80 }} />
      <BottomNav />
    </div>
  );
};

export default Dashboard;