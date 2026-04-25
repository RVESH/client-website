import "./Hero.scss";

const Hero = () => (
  <div className="creator-hero">
    <div className="creator-hero__avatar">
      <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop&crop=face" alt="Sarah" />
    </div>
    <h1 className="creator-hero__title">Hi, I'm Sarah</h1>
    <p className="creator-hero__desc">Content Creator &amp; Designer</p>
    <div className="creator-hero__btns">
      <button className="hero-btn hero-btn--outline" onClick={() => alert("Brand enquiry form coming soon!")}>
        Brand Enquiry
      </button>
      <button className="hero-btn hero-btn--pink" onClick={() => alert("Chat coming soon!")}>
        Chat Now
      </button>
    </div>
  </div>
);

export default Hero;