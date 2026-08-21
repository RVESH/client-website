import "./Contact01.scss";

function Contact01({
  eyebrow = "GET IN TOUCH",
  title = "Let's talk about what's next.",
  description =
    "Tell us a little about your project, your business, or what you are trying to solve.",
  email = "hello@example.com",
  phone = "+91 90000 00000",
  address = "New Delhi, India",
}) {
  return (
    <section className="sb-contact-01" aria-labelledby="contact-01-title">
      <div className="sb-contact-01__container">
        <div className="sb-contact-01__copy">
          <span>{eyebrow}</span>
          <h2 id="contact-01-title">{title}</h2>
          <p>{description}</p>

          <div className="sb-contact-01__details">
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
            <address>{address}</address>
          </div>
        </div>

        <form className="sb-contact-01__form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
            />
          </label>

          <button type="submit">
            Send Message
            <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact01;