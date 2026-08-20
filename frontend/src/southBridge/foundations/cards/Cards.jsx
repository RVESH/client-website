import "./Cards.scss";

function Cards() {
  return (
    <main className="sb-cards-showcase">
      <div className="sb-cards-showcase__container">

        <header className="sb-cards-showcase__intro">
          <span>SouthBridge Foundations</span>

          <h1>Card Collection</h1>

          <p>
            A curated collection of modern, premium card patterns designed
            for real-world websites, products and businesses.
          </p>
        </header>

        {/* =====================================================
            01 — PREMIUM SERVICE
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>01</span>
            <h2>Premium Service</h2>
          </div>

          <article className="sb-card sb-card--service">
            <div className="sb-card--service__top">
              <span>01</span>
              <span>↗</span>
            </div>

            <div>
              <h3>Digital Strategy</h3>

              <p>
                Clear positioning, thoughtful planning and a practical
                direction for the next stage of your business.
              </p>
            </div>

            <a href="#service">Explore service</a>
          </article>
        </section>

        {/* =====================================================
            02 — PRODUCT
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>02</span>
            <h2>Product</h2>
          </div>

          <article className="sb-card sb-card--product">
            <div className="sb-card--product__image">
              <img
                src="/images/card-product.webp"
                alt="Premium product"
              />

              <span className="sb-card--product__badge">
                New
              </span>
            </div>

            <div className="sb-card--product__content">
              <span>Collection 06</span>

              <h3>Oak Lounge Chair</h3>

              <div>
                <strong>$680</strong>

                <button type="button" aria-label="Add product">
                  +
                </button>
              </div>
            </div>
          </article>
        </section>

        {/* =====================================================
            03 — PROJECT
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>03</span>
            <h2>Project / Portfolio</h2>
          </div>

          <article className="sb-card sb-card--project">
            <div className="sb-card--project__image">
              <img
                src="/images/card-project.webp"
                alt="Architecture project"
              />
            </div>

            <div className="sb-card--project__content">
              <div>
                <span>Branding / Digital</span>
                <h3>North House</h3>
              </div>

              <span className="sb-card--project__arrow">
                ↗
              </span>
            </div>
          </article>
        </section>

        {/* =====================================================
            04 — EDITORIAL
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>04</span>
            <h2>Editorial</h2>
          </div>

          <article className="sb-card sb-card--editorial">
            <div className="sb-card--editorial__image">
              <img
                src="/images/card-editorial.webp"
                alt="Editorial story"
              />
            </div>

            <div className="sb-card--editorial__content">
              <span>Journal / 12.08.26</span>

              <h3>
                Designing spaces that feel quietly memorable.
              </h3>

              <a href="#read">
                Read story →
              </a>
            </div>
          </article>
        </section>

        {/* =====================================================
            05 — TEAM
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>05</span>
            <h2>Team / Profile</h2>
          </div>

          <article className="sb-card sb-card--team">
            <div className="sb-card--team__image">
              <img
                src="/images/card-team.webp"
                alt="Creative director"
              />
            </div>

            <div className="sb-card--team__content">
              <div>
                <h3>Rishabh Verma</h3>
                <span>Creative Director</span>
              </div>

              <a href="#profile" aria-label="View profile">
                ↗
              </a>
            </div>
          </article>
        </section>

        {/* =====================================================
            06 — TESTIMONIAL
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>06</span>
            <h2>Testimonial</h2>
          </div>

          <article className="sb-card sb-card--testimonial">
            <div className="sb-card--testimonial__mark">
              “
            </div>

            <blockquote>
              The final product feels considered from the first
              interaction to the very last detail.
            </blockquote>

            <div className="sb-card--testimonial__person">
              <div>AM</div>

              <span>
                <strong>Alex Morgan</strong>
                <small>Founder, North Studio</small>
              </span>
            </div>
          </article>
        </section>

        {/* =====================================================
            07 — PRICING
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>07</span>
            <h2>Pricing</h2>
          </div>

          <article className="sb-card sb-card--pricing">
            <span className="sb-card--pricing__label">
              ESSENTIAL
            </span>

            <h3>Starter</h3>

            <p>
              Everything you need to build a strong digital
              foundation.
            </p>

            <div className="sb-card--pricing__price">
              <strong>$49</strong>
              <span>/ month</span>
            </div>

            <ul>
              <li>5 projects</li>
              <li>Unlimited collaborators</li>
              <li>Basic analytics</li>
            </ul>

            <a href="#pricing">Choose plan</a>
          </article>
        </section>

        {/* =====================================================
            08 — RESTAURANT
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>08</span>
            <h2>Restaurant / Menu</h2>
          </div>

          <article className="sb-card sb-card--menu">
            <div className="sb-card--menu__image">
              <img
                src="/images/card-menu.webp"
                alt="Margherita pizza"
              />
            </div>

            <div className="sb-card--menu__content">
              <div>
                <span>WOOD FIRED</span>

                <h3>Margherita</h3>

                <p>
                  San Marzano tomato, mozzarella, basil and
                  extra virgin olive oil.
                </p>
              </div>

              <strong>₹399</strong>
            </div>
          </article>
        </section>

        {/* =====================================================
            09 — HOTEL
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>09</span>
            <h2>Hotel / Property</h2>
          </div>

          <article className="sb-card sb-card--property">
            <div className="sb-card--property__image">
              <img
                src="/images/card-property.webp"
                alt="Luxury hotel room"
              />

              <button type="button" aria-label="Save property">
                ♡
              </button>
            </div>

            <div className="sb-card--property__content">
              <div>
                <span>Lisbon, Portugal</span>

                <h3>
                  The Willow House
                </h3>
              </div>

              <div className="sb-card--property__meta">
                <span>★★★★★</span>
                <strong>€240 / night</strong>
              </div>
            </div>
          </article>
        </section>

        {/* =====================================================
            10 — FEATURE
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>10</span>
            <h2>Feature</h2>
          </div>

          <article className="sb-card sb-card--feature">
            <div className="sb-card--feature__icon">
              ✦
            </div>

            <h3>
              Everything stays beautifully organised.
            </h3>

            <p>
              Keep projects, people and priorities together
              without adding unnecessary complexity.
            </p>

            <a href="#feature">
              Learn more
              <span>↗</span>
            </a>
          </article>
        </section>

        {/* =====================================================
            11 — EVENT
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>11</span>
            <h2>Event</h2>
          </div>

          <article className="sb-card sb-card--event">
            <div className="sb-card--event__date">
              <strong>18</strong>
              <span>AUG</span>
            </div>

            <div className="sb-card--event__content">
              <span>NEW DELHI / 7:00 PM</span>

              <h3>
                The Future of Independent Design
              </h3>

              <p>
                An evening conversation with designers,
                founders and makers.
              </p>

              <a href="#event">
                Reserve your place →
              </a>
            </div>
          </article>
        </section>

        {/* =====================================================
            12 — COURSE
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>12</span>
            <h2>Course</h2>
          </div>

          <article className="sb-card sb-card--course">
            <div className="sb-card--course__top">
              <span>8 WEEK PROGRAM</span>

              <span>INTERMEDIATE</span>
            </div>

            <h3>
              Build Your First Digital Product
            </h3>

            <p>
              A practical program covering strategy, design
              and development from idea to launch.
            </p>

            <div className="sb-card--course__bottom">
              <span>24 lessons</span>
              <strong>₹6,900</strong>
            </div>
          </article>
        </section>

        {/* =====================================================
            13 — MINIMAL LIST
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>13</span>
            <h2>Minimal List</h2>
          </div>

          <article className="sb-card sb-card--list">
            {[
              ["01", "Brand Strategy"],
              ["02", "Digital Design"],
              ["03", "Development"],
              ["04", "Growth"],
            ].map(([number, title]) => (
              <a href={`#${title}`} key={number}>
                <span>{number}</span>

                <strong>{title}</strong>

                <b>↗</b>
              </a>
            ))}
          </article>
        </section>

        {/* =====================================================
            14 — IMAGE OVERLAY
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>14</span>
            <h2>Image Overlay</h2>
          </div>

          <article className="sb-card sb-card--overlay">
            <img
              src="/images/card-overlay.webp"
              alt="Luxury interior"
            />

            <div className="sb-card--overlay__shade" />

            <div className="sb-card--overlay__content">
              <span>FEATURED PROJECT</span>

              <h3>
                House No. 27
              </h3>

              <a href="#project">
                Explore ↗
              </a>
            </div>
          </article>
        </section>

        {/* =====================================================
            15 — BENTO
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>15</span>
            <h2>Bento</h2>
          </div>

          <div className="sb-card sb-card--bento">
            <article className="sb-card--bento__main">
              <span>01 / STRATEGY</span>
              <h3>Clear thinking before beautiful execution.</h3>
              <a href="#strategy">Explore ↗</a>
            </article>

            <article className="sb-card--bento__small">
              <span>02</span>
              <strong>Design</strong>
            </article>

            <article className="sb-card--bento__small sb-card--bento__small--dark">
              <span>03</span>
              <strong>Technology</strong>
            </article>
          </div>
        </section>

        {/* =====================================================
            16 — DARK PREMIUM
        ====================================================== */}

        <section className="sb-card-group">
          <div className="sb-card-group__heading">
            <span>16</span>
            <h2>Dark Premium</h2>
          </div>

          <article className="sb-card sb-card--dark">
            <div className="sb-card--dark__top">
              <span>PRIVATE CLIENT</span>
              <span>16 / 16</span>
            </div>

            <div>
              <h3>
                Built around the details that matter.
              </h3>

              <p>
                A refined experience for brands that expect
                clarity, craft and a little restraint.
              </p>
            </div>

            <a href="#details">
              View details
              <span>↗</span>
            </a>
          </article>
        </section>

      </div>
    </main>
  );
}

export default Cards;