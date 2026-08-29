import {
  Phone,
  MessageCircle,
  MapPin,
  Share2,
} from "lucide-react";

import { site } from "../../data/site";

import "./BusinessActions.scss";

export default function BusinessActions({
  product,
}) {
  const productMessage = product
    ? `Hello, I am interested in ${product.name} priced at ${site.currency}${product.price.toLocaleString(
        "en-IN"
      )}.`
    : "Hello, I would like to know more about NOVA.";

  const handleShare = async () => {
    const shareData = {
      title: product
        ? product.name
        : site.name,
      text: productMessage,
      url: window.location.href,
    };

    try {
      if (
        navigator.share
      ) {
        await navigator.share(
          shareData
        );
        return;
      }

      await navigator.clipboard.writeText(
        window.location.href
      );

      window.alert(
        "Link copied to clipboard."
      );
    } catch {
      // User cancelled share.
    }
  };

  return (
    <div className="business-actions">

      <a
        href={`tel:${site.contact.phone}`}
        className="business-actions__primary"
      >
        <Phone size={16} />
        Call Now
      </a>

      <a
        href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
          productMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>

      <a
        href={site.contact.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MapPin size={16} />
        Directions
      </a>

      <button
        type="button"
        onClick={handleShare}
      >
        <Share2 size={16} />
        Share
      </button>

    </div>
  );
}