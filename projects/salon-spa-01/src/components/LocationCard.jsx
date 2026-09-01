import "./LocationCard.scss";
import Button from "./Button.jsx";
import { directionsHref, whatsappHref, telHref } from "../utils/actions";

function LocationCard({ location }) {
  const { name, addressLine1, addressLine2, hours, phoneDisplay } = location;

  return (
    <article className="location-card">
      <h3 className="location-card__name">{name}</h3>
      <p className="location-card__address">
        {addressLine1}
        <br />
        {addressLine2}
      </p>
      {hours && <p className="location-card__hours">{hours}</p>}
      {phoneDisplay && <p className="location-card__phone">{phoneDisplay}</p>}

      <div className="location-card__actions">
        <Button href={directionsHref(location)} variant="secondary" size="sm">
          Directions
        </Button>
        <Button href={telHref(location.phoneDial)} variant="ghost" size="sm">
          Call
        </Button>
        <Button
          href={whatsappHref(undefined, location.phoneDial)}
          variant="ghost"
          size="sm"
        >
          WhatsApp
        </Button>
      </div>
    </article>
  );
}

export default LocationCard;
