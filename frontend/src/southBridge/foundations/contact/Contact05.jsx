import "./Contact05.scss";

function Contact05({
  title = "We're here to help.",
  email = "support@example.com",
  phone = "+91 90000 00000",
}) {
  return (
    <section className="sb-contact-05" aria-labelledby="contact-05-title">
      <div className="sb-contact-05__container">
        <div className="sb-contact-05__heading">
          <span>CONTACT & SUPPORT</span>
          <h2 id="contact-05-title">{title}</h2>
        </div>

        <div className="sb-contact-05__grid">
          <article>
            <span>EMAIL</span>
            <a href={`mailto:${email}`}>{email}</a>
            <p>We usually reply within one business day.</p>
          </article>

          <article>
            <span>PHONE</span>
            <a href={`tel:${phone}`}>{phone}</a>
            <p>Monday to Friday / 09:00 — 18:00.</p>
          </article>

          <article>
            <span>OFFICE</span>
            <address>
              42 Market Street
              <br />
              New Delhi, India
            </address>
            <a href="#directions">Directions ↗</a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact05;