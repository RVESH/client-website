import "./Contact06.scss";

function Contact06({
  title = "Reserve your table.",
  address = "18 Willow Lane, New Delhi",
  phone = "+91 90000 00000",
}) {
  return (
    <section className="sb-contact-06" aria-labelledby="contact-06-title">
      <div className="sb-contact-06__container">
        <div className="sb-contact-06__copy">
          <span>RESERVATIONS</span>
          <h2 id="contact-06-title">{title}</h2>
          <p>
            Join us for seasonal cooking, long evenings and a table worth
            remembering.
          </p>

          <div className="sb-contact-06__details">
            <span>{address}</span>
            <a href={`tel:${phone}`}>{phone}</a>
            <span>Tue — Sat / 18:00 — 23:00</span>
          </div>
        </div>

        <div className="sb-contact-06__actions">
          <a href="#booking">Book a Table</a>
          <a href={`tel:${phone}`}>Call Restaurant</a>
          <a href="#menu">View Menu ↗</a>
        </div>
      </div>
    </section>
  );
}

export default Contact06;