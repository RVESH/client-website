import { useState } from "react";

import "./Newsletter.scss";

export default function Newsletter() {
  const [email, setEmail] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="newsletter section">

      <div className="page-shell newsletter__inner">

        <span className="eyebrow">
          STAY CLOSE
        </span>

        <h2>
          New arrivals,
          <br />
          quietly delivered.
        </h2>

        <p>
          Join the list for new
          collections, useful updates
          and occasional offers.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Your email address"
            aria-label="Email address"
            required
          />

          <button type="submit">
            {submitted
              ? "You're In ✓"
              : "Join ↗"}
          </button>

        </form>

      </div>
    </section>
  );
}