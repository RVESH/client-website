import site from "../data/site";

export function telHref(number = site.contact.phoneDial) {
  return `tel:${number}`;
}

export function whatsappHref(message = site.contact.whatsappMessage, number = site.contact.whatsapp) {
  const clean = number.replace(/[^\d]/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}

export function mailHref(subject = "Enquiry from website") {
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}`;
}

export function directionsHref(location) {
  if (location?.mapsUrl) return location.mapsUrl;
  if (location?.lat && location?.lng) {
    return `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
  }
  return "https://www.google.com/maps";
}

export const instagramHref = site.contact.instagramUrl;
