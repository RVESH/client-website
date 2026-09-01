import "./Locations.scss";
import locations from "../data/locations";
import LocationCard from "../components/LocationCard.jsx";
import SalonMap from "../components/SalonMap.jsx";

function Locations() {
  return (
    <section className="section locations">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Find us</span>
          <h2>{locations.length > 1 ? "Our studios" : "Our studio"}</h2>
        </div>

        {locations.length === 0 ? (
          <div className="locations__empty">
            <p>We're not announcing studio addresses yet — reach out and we'll share details directly.</p>
          </div>
        ) : (
          <div className="locations__grid">
            <div className="locations__cards">
              {locations.map((loc) => (
                <LocationCard key={loc.id} location={loc} />
              ))}
            </div>
            <SalonMap locations={locations} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Locations;
