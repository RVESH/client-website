import "./Contact10.scss";

function Contact10({
  title = "Visit the studio.",
  address = "17 Studio Lane, Mumbai",
  phone = "+91 90000 00000",
}) {
  return (
    <section className="sb-contact-10" aria-labelledby="contact-10-title">
      <div className="sb-contact-10__container">
        <div className="sb-contact-10__card">
          <span>STUDIO</span>
          <h2 id="contact-10-title">{title}</h2>

          <address>{address}</address>

          <a href={`tel:${phone}`}>{phone}</a>

          <div className="sb-contact-10__hours">
            <span>MON — FRI</span>
            <strong>10:00 — 19:00</strong>
          </div>

          <a className="sb-contact-10__direction" href="#directions">
            Get Directions ↗
          </a>
        </div>

        <div className="sb-contact-10__visual">
          <div className="sb-contact-10__route" />
          <span>A</span>
          <span>B</span>
          <small>17 Studio Lane</small>
        </div>
      </div>
    </section>
  );
}

export default Contact10;