import "./Contact11.scss";

function Contact11() {
  return (
    <section className="sb-contact-11" aria-labelledby="contact-11-title">
      <div className="sb-contact-11__container">
        <div className="sb-contact-11__intro">
          <span>CONTACT FORM</span>
          <h2 id="contact-11-title">Tell us what you need.</h2>
          <p>
            A short message is enough to start. We will get back to you with
            the next step.
          </p>
        </div>

        <form className="sb-contact-11__form">
          <div className="sb-contact-11__row">
            <label>
              First name
              <input type="text" />
            </label>

            <label>
              Last name
              <input type="text" />
            </label>
          </div>

          <label>
            Email
            <input type="email" />
          </label>

          <label>
            Message
            <textarea rows="6" />
          </label>

          <button type="submit">Send Message →</button>
        </form>
      </div>
    </section>
  );
}

export default Contact11;