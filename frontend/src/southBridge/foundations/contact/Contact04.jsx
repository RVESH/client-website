import "./Contact04.scss";

function Contact04({
  eyebrow = "START A CONVERSATION",
  title = "Tell us what you're building.",
  email = "hello@example.com",
}) {
  return (
    <section className="sb-contact-04" aria-labelledby="contact-04-title">
      <div className="sb-contact-04__grid" aria-hidden="true" />

      <div className="sb-contact-04__container">
        <div className="sb-contact-04__copy">
          <span>{eyebrow}</span>
          <h2 id="contact-04-title">{title}</h2>
          <a href={`mailto:${email}`}>{email} ↗</a>
        </div>

        <form className="sb-contact-04__form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            Work email
            <input type="email" placeholder="you@company.com" />
          </label>

          <label>
            What are you working on?
            <textarea rows="5" placeholder="A short overview..." />
          </label>

          <button type="submit">
            Submit Enquiry
            <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact04;