import { images } from "./images";

export const properties = [
  {
    id: "villa-01",
    name: "Oak House",
    location: "Golf Course Road, New Delhi",
    type: "Villa",
    status: "Featured",
    price: "₹4.85 Cr",
    bedrooms: 4,
    bathrooms: 4,
    area: "4,280 sq ft",
    image: images.properties.villa01,
    description:
      "A composed contemporary residence designed around light, landscape and generous living.",
    features: [
      "4 Bedrooms",
      "4 Bathrooms",
      "Private Garden",
      "Covered Parking",
    ],
  },

  {
    id: "apartment-01",
    name: "Skyline 17",
    location: "Vasant Vihar, New Delhi",
    type: "Apartment",
    status: "New",
    price: "₹2.75 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,140 sq ft",
    image: images.properties.apartment01,
    description:
      "A refined city residence with expansive views and an architecture-led interior.",
    features: [
      "3 Bedrooms",
      "3 Bathrooms",
      "City Views",
      "Lift Access",
    ],
  },

  {
    id: "house-01",
    name: "Garden House",
    location: "Saket, New Delhi",
    type: "House",
    status: "Featured",
    price: "₹3.40 Cr",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,150 sq ft",
    image: images.properties.house01,
    description:
      "A warm family residence wrapped around a private garden.",
    features: [
      "4 Bedrooms",
      "3 Bathrooms",
      "Private Garden",
      "Family Room",
    ],
  },

  {
    id: "penthouse-01",
    name: "The Upper House",
    location: "Chanakyapuri, New Delhi",
    type: "Penthouse",
    status: "Private",
    price: "₹6.90 Cr",
    bedrooms: 4,
    bathrooms: 5,
    area: "5,120 sq ft",
    image: images.properties.penthouse01,
    description:
      "An elevated residence with expansive terraces and a strong sense of privacy.",
    features: [
      "4 Bedrooms",
      "5 Bathrooms",
      "Private Terrace",
      "Private Lift",
    ],
  },

  {
    id: "villa-02",
    name: "Courtyard 44",
    location: "Noida Sector 44",
    type: "Villa",
    status: "New",
    price: "₹3.95 Cr",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,840 sq ft",
    image: images.properties.villa02,
    description:
      "A modern courtyard villa with generous entertaining spaces.",
    features: [
      "4 Bedrooms",
      "4 Bathrooms",
      "Courtyard",
      "Parking",
    ],
  },

  {
    id: "apartment-02",
    name: "Park Residence",
    location: "Golf Course Extension, Gurgaon",
    type: "Apartment",
    status: "Featured",
    price: "₹2.20 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: "1,980 sq ft",
    image: images.properties.apartment02,
    description:
      "A modern apartment overlooking landscaped greens.",
    features: [
      "3 Bedrooms",
      "3 Bathrooms",
      "Park Views",
      "Club Access",
    ],
  },
];

export function getPropertyById(id) {
  return properties.find(
    (property) => property.id === id
  );
}