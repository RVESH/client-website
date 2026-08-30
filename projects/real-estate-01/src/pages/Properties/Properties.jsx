import PropertySearch from "../../sections/PropertySearch/PropertySearch";

import "./Properties.scss";

export default function Properties() {
  return (
    <div className="north-properties-page">

      <section className="north-properties-page__intro section">
        <div className="page-shell">

          <span className="eyebrow">
            THE COLLECTION
          </span>

          <h1 className="section-title">
            Find a place
            <br />
            that feels right.
          </h1>

          <p>
            A focused selection of homes,
            apartments and private residences.
          </p>

        </div>
      </section>

      <PropertySearch />

    </div>
  );
}