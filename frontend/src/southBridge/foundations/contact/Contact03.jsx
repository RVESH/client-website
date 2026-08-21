import "./Contact03.scss";

function Contact03({
  eyebrow = "CONTACT",
  title = "A good conversation can start anywhere.",
  email = "hello@example.com",
  phone = "+91 90000 00000",
  location = "New Delhi / India",
}) {
  return (
    <section className="sb-contact-03" aria-labelledby="contact-03-title">
      <div className="sb-contact-03__container">
        <span>{eyebrow}</span>

        <h2 id="contact-03-title">{title}</h2>

        <div className="sb-contact-03__bottom">
          <div>
            <small>WRITE</small>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          <div>
            <small>CALL</small>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>

          <div>
            <small>VISIT</small>
            <address>{location}</address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact03;