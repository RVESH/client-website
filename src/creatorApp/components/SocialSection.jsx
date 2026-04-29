// components/SocialSection.jsx
import "./SocialSection.scss";

const SocialSection = () => {
  const SOCIALS = [
    { icon: "📸", name: "Instagram", link: "#" },
    { icon: "🐦", name: "Twitter", link: "#" },
    { icon: "▶️", name: "YouTube", link: "#" },
    { icon: "🎵", name: "TikTok", link: "#" },
  ];

  return (
    <div className="social-section">
      <h2 className="social-section__title">Follow My Journey</h2>
      <div className="social-section__grid">
        {SOCIALS.map((s, i) => (
          <a key={i} href={s.link} className="social-card">
            <span className="social-card__icon">{s.icon}</span>
            <span className="social-card__name">{s.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSection;