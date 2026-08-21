import "./Contact02.scss";

function Contact02({
  eyebrow = "FIND US",
  title = "Come by sometime.",
  address = "42 Market Street, New Delhi",
  hours = "Mon — Sat / 09:00 — 19:00",
  phone = "+91 90000 00000",
  email = "hello@example.com",
}) {
  return (
    <section className="sb-contact-02" aria-labelledby="contact-02-title">
      <div className="sb-contact-02__container">
        <div className="sb-contact-02__map">
          <div className="sb-contact-02__grid" />
          <div className="sb-contact-02__pin">
            <span>●</span>
          </div>
          <div className="sb-contact-02__coordinates">
            <span>28.6139° N</span>
            <span>77.2090° E</span>
          </div>
        </div>

        <div className="sb-contact-02__content">
          <span>{eyebrow}</span>
          <h2 id="contact-02-title">{title}</h2>

          <div className="sb-contact-02__info">
            <div>
              <small>ADDRESS</small>
              <p>{address}</p>
            </div>

            <div>
              <small>HOURS</small>
              <p>{hours}</p>
            </div>

            <div>
              <small>CONTACT</small>
              <a href={`tel:${phone}`}>{phone}</a>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

          <a className="sb-contact-02__link" href="#directions">
            Get Directions ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact02;