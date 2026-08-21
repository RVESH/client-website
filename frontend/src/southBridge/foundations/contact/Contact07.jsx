import "./Contact07.scss";

function Contact07({
  title = "Stay in touch.",
  image = "/images/contact-07.webp",
}) {
  return (
    <section className="sb-contact-07" aria-labelledby="contact-07-title">
      <div className="sb-contact-07__container">
        <div className="sb-contact-07__image">
          <img src={image} alt="Hotel interior" />
        </div>

        <div className="sb-contact-07__content">
          <span>THE WILLOW HOUSE</span>
          <h2 id="contact-07-title">{title}</h2>

          <div className="sb-contact-07__group">
            <small>ADDRESS</small>
            <address>28 Garden Road, Lisbon</address>
          </div>

          <div className="sb-contact-07__group">
            <small>RESERVATIONS</small>
            <a href="tel:+351000000000">+351 000 000 000</a>
            <a href="mailto:stay@example.com">stay@example.com</a>
          </div>

          <a className="sb-contact-07__button" href="#booking">
            Check Availability ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact07;