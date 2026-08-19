import "./Footer10.scss";

function Footer10({
  brand = "ATELIER",
  instagram = "#instagram",
  contact = "mailto:hello@example.com",
}) {
  return (
    <footer className="sb-footer-10">
      <div className="sb-footer-10__container">
        <div className="sb-footer-10__wordmark">{brand}</div>

        <div className="sb-footer-10__meta">
          <a href="#collection">Collection</a>
          <a href="#journal">Journal</a>
          <a href={instagram}>Instagram</a>
          <a href={contact}>Contact</a>
        </div>

        <div className="sb-footer-10__bottom">
          <span>© 2026 {brand}</span>
          <span>New York · Paris · Tokyo</span>
          <a href="#top">↑ Top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer10;