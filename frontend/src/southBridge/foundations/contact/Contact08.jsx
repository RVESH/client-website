import "./Contact08.scss";

function Contact08() {
  return (
    <section className="sb-contact-08" aria-labelledby="contact-08-title">
      <div className="sb-contact-08__container">
        <div className="sb-contact-08__heading">
          <span>START A PROJECT</span>
          <h2 id="contact-08-title">
            Tell us what you're trying to change.
          </h2>
        </div>

        <div className="sb-contact-08__form">
          <label>
            Your name
            <input type="text" placeholder="Jane Smith" />
          </label>

          <label>
            Email
            <input type="email" placeholder="jane@company.com" />
          </label>

          <label>
            Project type
            <select defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Brand identity</option>
              <option>Website</option>
              <option>Digital product</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Brief
            <textarea rows="5" placeholder="A few words about the project..." />
          </label>

          <button type="submit">
            Send Brief
            <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact08;