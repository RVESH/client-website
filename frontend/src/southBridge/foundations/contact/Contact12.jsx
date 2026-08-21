import "./Contact12.scss";

function Contact12({
  email = "hello@example.com",
  phone = "+91 90000 00000",
}) {
  return (
    <section className="sb-contact-12" aria-labelledby="contact-12-title">
      <div className="sb-contact-12__container">
        <article className="sb-contact-12__main">
          <span>CONTACT</span>
          <h2 id="contact-12-title">Let's make the next step simple.</h2>
          <a href={`mailto:${email}`}>
            {email}
            <b>↗</b>
          </a>
        </article>

        <article className="sb-contact-12__item">
          <span>01 / PHONE</span>
          <a href={`tel:${phone}`}>{phone}</a>
        </article>

        <article className="sb-contact-12__item sb-contact-12__item--accent">
          <span>02 / OFFICE</span>
          <address>
            42 Market Street
            <br />
            New Delhi
          </address>
        </article>

        <article className="sb-contact-12__item sb-contact-12__item--dark">
          <span>03 / HOURS</span>
          <strong>Mon — Sat</strong>
          <small>09:00 — 19:00</small>
        </article>
      </div>
    </section>
  );
}

export default Contact12;