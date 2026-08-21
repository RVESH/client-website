import "./Contact09.scss";

function Contact09({
  title = "Need a hand?",
  support = "support@example.com",
}) {
  return (
    <section className="sb-contact-09" aria-labelledby="contact-09-title">
      <div className="sb-contact-09__container">
        <div className="sb-contact-09__intro">
          <span>SUPPORT</span>
          <h2 id="contact-09-title">{title}</h2>
          <p>
            Browse the help centre or send us a message. Our team is here
            to help you keep moving.
          </p>
        </div>

        <div className="sb-contact-09__actions">
          <a href="#help">
            <span>01</span>
            <div>
              <strong>Help Centre</strong>
              <small>Answers to common questions.</small>
            </div>
            <b>↗</b>
          </a>

          <a href={`mailto:${support}`}>
            <span>02</span>
            <div>
              <strong>Contact Support</strong>
              <small>{support}</small>
            </div>
            <b>↗</b>
          </a>

          <a href="#status">
            <span>03</span>
            <div>
              <strong>System Status</strong>
              <small>Check current availability.</small>
            </div>
            <b>↗</b>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact09;