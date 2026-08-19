import { useState } from "react";
import "./Footer04.scss";

function Footer04({
  brand = "LUMA",
  description = "Simple tools for ambitious teams.",
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setEmail("");
  };

  return (
    <footer className="sb-footer-04">
      <div className="sb-footer-04__container">
        <div className="sb-footer-04__newsletter">
          <div>
            <span>Stay in the loop</span>
            <h2>Useful ideas. No inbox clutter.</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="sb-footer-email">Email address</label>

            <div>
              <input
                id="sb-footer-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />

              <button type="submit" aria-label="Subscribe">
                →
              </button>
            </div>
          </form>
        </div>

        <div className="sb-footer-04__main">
          <div className="sb-footer-04__brand">
            <strong>{brand}</strong>
            <p>{description}</p>
          </div>

          <div className="sb-footer-04__columns">
            <div>
              <h3>Product</h3>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#security">Security</a>
            </div>

            <div>
              <h3>Company</h3>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <h3>Legal</h3>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>

        <div className="sb-footer-04__bottom">
          <span>© 2026 {brand}</span>
          <span>Built for the long run.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer04;