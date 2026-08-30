import {
  MapPin,
  MessageCircle,
  Phone,
  Share2,
} from "lucide-react";

import { site } from "../../data/site";

import "./PropertyActions.scss";

export default function PropertyActions({
  property,
}) {
  const message = property
    ? `Hello, I am interested in ${property.name} in ${property.location}.`
    : "Hello, I would like to know more about your properties.";

  const share = async () => {
    try {
      await navigator.share({
        title:
          property?.name || site.name,
        text: message,
        url: window.location.href,
      });
    } catch {
      try {
        await navigator.clipboard.writeText(
          window.location.href
        );
      } catch {
        // Clipboard unavailable.
      }
    }
  };

  return (
    <div className="property-actions">

      <a
        href={`tel:${site.phone}`}
        className="property-actions__primary"
      >
        <Phone size={15} />
        Call
      </a>

      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          message
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={15} />
        WhatsApp
      </a>

      <a
        href={site.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin size={15} />
        Directions
      </a>

      <button
        type="button"
        onClick={share}
      >
        <Share2 size={15} />
        Share
      </button>

    </div>
  );
}