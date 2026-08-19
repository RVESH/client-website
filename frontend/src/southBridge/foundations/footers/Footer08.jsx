import "./Footer08.scss";

function Footer08({
  brand = "LUMA",
  note = "Independent design & technology studio.",
}) {
  return (
    <footer className="sb-footer-08">
      <div className="sb-footer-08__shell">
        <div>
          <a href="#home" className="sb-footer-08__brand">
            {brand}
          </a>
          <p>{note}</p>
        </div>

        <div className="sb-footer-08__links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#top" className="sb-footer-08__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer08;