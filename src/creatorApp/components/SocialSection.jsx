// components/SocialSection.jsx
import "./SocialSection.scss";
import insta from "../bank_icon/instagram.png"; // Aapka import

const SocialSection = () => {
  const SOCIALS = [
    // 📸 Emoji ko hata kar <img> tag laga diya
    { icon: <img src={insta} alt="Instagram" style={{ width: "40px", height: "40px", objectFit: "contain" }} />, name: "Instagram", link: "#" },
    // { icon: "🐦", name: "Twitter", link: "#" },
    // { icon: "▶️", name: "YouTube", link: "#" },
    // { icon: "🎵", name: "TikTok", link: "#" },
  ];

  
   
  
  
  return (
    <div className="social-section">
      <h2 className="social-section__title">GET YOUR COSTOMIZED WEBSITE</h2>
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