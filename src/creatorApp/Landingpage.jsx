// pages/Landingpage.jsx
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import ServiceCard from "./components/Servicecard";
import SubscriptionCard from "./components/Subscriptioncard";
import PostCard from "./components/Postcard";
import BottomNav from "./components/Bottomnav";
import EventCard from "./components/EventCard";
import SocialSection from "./components/SocialSection";
import PushNotificationPopup from "./components/PushNotificationPopup";
import "./LandingPage.scss";

const SERVICES = [
  { icon: "📹", title: "Video Call", price: "₹3999", desc: "10 mins 1-on-1 video session to discuss anything you need." },
  { icon: "🎧", title: "Audio Call", price: "₹1999", desc: "10 mins audio consultation tailored specifically for you." },
  { icon: "💬", title: "Chat Session", price: "₹499",  desc: "10 mins priority text chat for quick questions." },
];

const SUBS = [
  { title: "The Premium Membership", desc: "Direct access to behind-the-scenes, premium tutorials, and private community.", plan: "1 Month", price: "₹499" },
  { title: "The VIP Membership", desc: "Direct access to behind-the-scenes, premium tutorials, and private community.", plan: "3 Months", price: "₹1299" },
];

const EVENTS = [
  { title: "Live Q&A Masterclass", date: "Oct 25", time: "8:00 PM", price: "₹999", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop" },
];

const POSTS = [
  { title: "Designing my new workspace",       timestamp: "Posted Recently", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&h=200&fit=crop" },
  { title: "My updated morning routine",        timestamp: "2 days ago",     image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=300&h=200&fit=crop" },
  { title: "Behind the scenes: Photo shoot",    timestamp: "1 week ago",     image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <PushNotificationPopup />
      <Header />
      <Hero />

      <section className="landing-section">
        <Slider title="1-on-1 Services" items={SERVICES} renderItem={(s) => <ServiceCard {...s} />} />
      </section>

      <section className="landing-section">
        <Slider title="Premium Access" items={SUBS} renderItem={(s) => <SubscriptionCard {...s} />} />
      </section>

      <section className="landing-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="posts-grid">
          {EVENTS.map((e, i) => <EventCard key={i} {...e} />)}
        </div>
      </section>

      <section className="landing-section">
        <h2 className="section-title">Exclusive Posts</h2>
        <div className="posts-grid">
          {POSTS.map((p, i) => <PostCard key={i} {...p} />)}
        </div>
      </section>

      <SocialSection />

      {/* NEW: Legal Footer */}
      <footer className="landing-footer">
        <div className="landing-footer__links" onClick={() => navigate("/terms")}>
          <span>Terms of Service</span>
          <span className="dot">•</span>
          <span>Privacy Policy</span>
          <span className="dot">•</span>
          <span>Refunds</span>
        </div>
        <p className="landing-footer__copy">© {new Date().getFullYear()} Sarahaf. All rights reserved.</p>
      </footer>

      <div style={{ height: 100 }} /> {/* Padding for BottomNav */}
      <BottomNav />
    </div>
  );
};

export default LandingPage;