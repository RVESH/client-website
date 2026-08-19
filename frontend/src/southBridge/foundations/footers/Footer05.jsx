import "./Footer05.scss";

function Footer05({
  brand = "FORM",
  links = {
    Shop: ["New Arrivals", "Women", "Men", "Accessories"],
    About: ["Our Story", "Journal", "Stores", "Contact"],
    Help: ["Shipping", "Returns", "FAQ", "Support"],
  },
}) {
  return (
    <footer className="sb-footer-05">
      <div className="sb-footer-05__container">
        <div className="sb-footer-05__brand-row">
          <a href="#home">{brand}</a>
          <span>Designed for everyday living.</span>
        </div>

        <div className="sb-footer-05__links">
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3>{title}</h3>

              {items.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  {item}
                </a>
              ))}
            </div>
          ))}

          <div>
            <h3>Follow</h3>
            <a href="#instagram">Instagram</a>
            <a href="#pinterest">Pinterest</a>
            <a href="#tiktok">TikTok</a>
          </div>
        </div>

        <div className="sb-footer-05__bottom">
          <span>© 2026 {brand}</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer05;