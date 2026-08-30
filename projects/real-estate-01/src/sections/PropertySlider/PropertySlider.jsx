import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { properties } from "../../data/properties";

import "./PropertySlider.scss";

export default function PropertySlider() {
  const items = properties.slice(0, 4);

  const [active, setActive] = useState(0);

  const current = items[active];

  if (!current) {
    return null;
  }

  const previous = () => {
    setActive((index) =>
      index === 0
        ? items.length - 1
        : index - 1
    );
  };

  const next = () => {
    setActive((index) =>
      index === items.length - 1
        ? 0
        : index + 1
    );
  };

  return (
    <section className="north-property-slider section">
      <div className="page-shell">

        <div className="north-property-slider__header">
          <div>
            <span className="eyebrow">
              FEATURED RESIDENCE
            </span>

            <h2 className="section-title">
              A closer look.
            </h2>
          </div>
        </div>

        <div className="north-property-slider__layout">

          {/* ONE IMAGE ONLY */}
          <div className="north-property-slider__image">

            <img
              key={current.id}
              src={current.image}
              alt={current.name}
            />

            <div className="north-property-slider__controls">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous property"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next property"
              >
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="north-property-slider__image-label">
              <span>
                {current.status}
              </span>
            </div>

          </div>

          {/* INFORMATION PANEL */}
          <div className="north-property-slider__info">

            <span className="north-property-slider__type">
              {current.type}
            </span>

            <h3>
              {current.name}
            </h3>

            <p className="north-property-slider__location">
              {current.location}
            </p>

            <p className="north-property-slider__description">
              {current.description}
            </p>

            <div className="north-property-slider__facts">

              <div>
                <strong>
                  {current.price}
                </strong>

                <span>
                  Price
                </span>
              </div>

              <div>
                <strong>
                  {current.bedrooms}
                </strong>

                <span>
                  Bedrooms
                </span>
              </div>

              <div>
                <strong>
                  {current.area}
                </strong>

                <span>
                  Area
                </span>
              </div>

            </div>

            <Link
              to={`/property/${current.id}`}
              className="north-property-slider__link"
            >
              View property
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

        <div className="north-property-slider__bottom">

          <div className="north-property-slider__count">
            <span>
              {String(active + 1).padStart(2, "0")}
            </span>

            <i />

            <span>
              {String(items.length).padStart(2, "0")}
            </span>
          </div>

          <div className="north-property-slider__dots">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={
                  index === active
                    ? "is-active"
                    : ""
                }
                onClick={() =>
                  setActive(index)
                }
                aria-label={`Show ${item.name}`}
                aria-current={
                  index === active
                    ? "true"
                    : undefined
                }
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}