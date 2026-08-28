// src/sections/Testimonials/Testimonials.jsx

import "./Testimonials.scss";

function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="page-shell testimonials__inner">
        <span className="eyebrow">A FEW WORDS</span>

        <blockquote>
          “The kind of place where dinner quietly turns into
          the rest of the evening.”
        </blockquote>

        <cite>— A regular at LUMA</cite>
      </div>
    </section>
  );
}

export default Testimonials;