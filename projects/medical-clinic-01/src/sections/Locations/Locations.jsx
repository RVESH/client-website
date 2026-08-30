import ClinicMap from "../../components/ClinicMap/ClinicMap";
import LocationCard from "../../components/LocationCard/LocationCard";

import { locations } from "../../data/locations";

import "./Locations.scss";

export default function Locations() {
  return (
    <section className="clinic-locations section">
      <div className="page-shell">

        <div className="clinic-locations__heading">
          <span className="eyebrow">
            OUR LOCATIONS
          </span>

          <h2 className="section-title">
            Care, close to you.
          </h2>
        </div>

        <div className="clinic-locations__layout">

          <div className="clinic-locations__map">
            <ClinicMap
              locations={locations}
            />
          </div>

          <div className="clinic-locations__cards">
            {locations.length ? (
              locations.map(
                (location) => (
                  <LocationCard
                    key={location.id}
                    location={location}
                  />
                )
              )
            ) : (
              <div className="clinic-locations__empty">
                <strong>
                  No clinic locations yet.
                </strong>

                <p>
                  Add locations in
                  `src/data/locations.js`.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}