// Client-editable: company directory. Openings count is derived from
// jobs.js at render time (matched by companyId), so it never drifts.
import { images } from "./images";

export const companies = [
  {
    id: "nimbus-technologies",
    name: "Nimbus Technologies",
    industry: "Software & IT",
    location: "Bengaluru, Karnataka",
    logo: images.coNimbus,
    description:
      "A cloud infrastructure company building developer tools used by over 40,000 engineering teams worldwide.",
  },
  {
    id: "vertex-analytics",
    name: "Vertex Analytics",
    industry: "Data & Analytics",
    location: "Hyderabad, Telangana",
    logo: images.coVertex,
    description:
      "Vertex builds data platforms that help retailers forecast demand and reduce inventory waste.",
  },
  {
    id: "brightpath-health",
    name: "BrightPath Health",
    industry: "Healthcare",
    location: "Mumbai, Maharashtra",
    logo: images.coBrightpath,
    description:
      "A healthcare technology company connecting patients in tier-2 cities with specialist consultations.",
  },
  {
    id: "northwind-logistics",
    name: "Northwind Logistics",
    industry: "Logistics & Supply Chain",
    location: "Patna, Bihar",
    logo: images.coNorthwind,
    description:
      "Northwind runs a regional freight network covering last-mile delivery across eastern India.",
  },
  {
    id: "quantify-finance",
    name: "Quantify Finance",
    industry: "Financial Services",
    location: "Mumbai, Maharashtra",
    logo: images.coQuantify,
    description:
      "A fintech lending platform providing working-capital loans to small and medium businesses.",
  },
  {
    id: "harborline-retail",
    name: "Harborline Retail",
    industry: "Retail & E-commerce",
    location: "Gurugram, Haryana",
    logo: images.coHarborline,
    description:
      "Harborline operates an omnichannel retail brand with 60+ stores and a fast-growing online catalogue.",
  },
  {
    id: "fernway-studio",
    name: "Fernway Studio",
    industry: "Design & Media",
    location: "Remote (India)",
    logo: images.coFernway,
    description:
      "A product design studio partnering with startups to design and ship consumer apps.",
  },
  {
    id: "solstice-energy",
    name: "Solstice Energy",
    industry: "Clean Energy",
    location: "Ahmedabad, Gujarat",
    logo: images.coSolstice,
    description:
      "Solstice designs and installs commercial solar infrastructure across western India.",
  },
];
