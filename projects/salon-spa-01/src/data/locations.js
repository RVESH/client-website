// Single source of truth for studio locations.
// Used to render LocationCard components and SalonMap markers.
//
// Architecture supports three states:
//   - locations = []                -> clean empty state, no markers, no crash
//   - locations = [oneLocation]     -> single card, map centred on that studio
//   - locations = [many...]         -> a card per studio, map fitted to all markers
//
// To test the empty state, set: const locations = [];
const locations = [
  {
    id: "indiranagar",
    name: "Maison Rosette — Indiranagar",
    addressLine1: "12th Main Road, Indiranagar",
    addressLine2: "Bengaluru, Karnataka 560038",
    phoneDisplay: "+91 98450 12345",
    phoneDial: "+919845012345",
    hours: "Tue – Sun, 10:00 AM – 8:00 PM (Closed Mondays)",
    lat: 12.9719,
    lng: 77.6412,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=12.9719,77.6412",
  },
  {
    id: "assagao",
    name: "Maison Rosette — Assagao Atelier",
    addressLine1: "Near Sacred Heart Church, Assagao",
    addressLine2: "Goa 403507",
    phoneDisplay: "+91 98450 67890",
    phoneDial: "+919845067890",
    hours: "Wed – Mon, 11:00 AM – 7:00 PM (Closed Tuesdays)",
    lat: 15.5952,
    lng: 73.7726,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=15.5952,73.7726",
  },
];

export default locations;
