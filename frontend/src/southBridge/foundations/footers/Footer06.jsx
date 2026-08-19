import "./Footer06.scss";

function Footer06({
  brand = "LA CASA",
  address = "42 Market Street, Boston",
  phone = "+1 617 555 0182",
  hours = ["Mon–Thu · 5:00 PM – 10:00 PM", "Fri–Sat · 5:00 PM – 11:00 PM"],
}) {
  return (
    <footer className="sb-footer-06">
      <div className="sb-footer-06__container">
        <div className="sb-footer-06__brand">
          <span>{brand}</span>
          <small>Kitchen · Wine · Gatherings</small>
        </div>

        <div className="sb-footer-06__details">
          <div>
            <h3>Find us</h3>
            <p>{address}</p>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
          </div>

          <div>
            <h3>Hours</h3>
            {hours.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div>
            <h3>Explore</h3>
            <a href="#menu">Menu</a>
            <a href="#reservations">Reservations</a>
            <a href="#story">Our Story</a>
          </div>
        </div>

        <div className="sb-footer-06__bottom">
          <span>© 2026 {brand}</span>

          <div>
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer06;