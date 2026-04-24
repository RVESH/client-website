import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import ServiceCard from "./components/Servicecard";
import SubscriptionCard from "./components/Subscriptioncard";
import PostCard from "./components/Postcard";
import BottomNav from "./components/Bottomnav";
import "./LandingPage.scss";

const SERVICES = [
  { icon: "📹", title: "Video Call", price: "₹3999", desc: "10 mins 1-on-1 video session to discuss anything you need." },
  { icon: "🎧", title: "Audio Call", price: "₹1999", desc: "10 mins audio consultation tailored specifically for you." },
  { icon: "💬", title: "Chat Session", price: "₹499",  desc: "10 mins priority text chat for quick questions." },
];

const SUBS = [
  { title: "The Premium Membership", desc: "Get direct access to my behind-the-scenes, premium tutorials, and private community.", plan: "1 Month", price: "₹499" },
  { title: "The Premium Membership", desc: "Get direct access to my behind-the-scenes, premium tutorials, and private community.", plan: "3 Months", price: "₹1299" },
];

const POSTS = [
  { title: "Designing my new workspace",       timestamp: "Posted Recently", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=300&h=200&fit=crop" },
  { title: "My updated morning routine",        timestamp: "2 days ago",     image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=300&h=200&fit=crop" },
  { title: "Behind the scenes: Photo shoot",    timestamp: "1 week ago",     image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop" },
  { title: "How I organize my ideas",           timestamp: "2 weeks ago",    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&h=200&fit=crop" },
  { title: "Q&A: Answering your top questions", timestamp: "3 weeks ago",    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" },
  { title: "Exclusive sneak peek at new merch", timestamp: "1 month ago",    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" },
];

const LandingPage = () => (
  <div className="landing-page">
    <Header />
    <Hero />

    <section className="landing-section">
      <Slider
        title="1-on-1 Services"
        items={SERVICES}
        renderItem={(s) => <ServiceCard {...s} />}
      />
    </section>

    <section className="landing-section">
      <Slider
        title="Premium Access"
        items={SUBS}
        renderItem={(s) => <SubscriptionCard {...s} />}
      />
    </section>

    <section className="landing-section">
      <h2 className="section-title">Exclusive Posts</h2>
      <div className="posts-grid">
        {POSTS.map((p, i) => <PostCard key={i} {...p} />)}
      </div>
    </section>

    <div style={{ height: 80 }} />
    <BottomNav />
  </div>
);

export default LandingPage;