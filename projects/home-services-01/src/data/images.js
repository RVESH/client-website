const images = {
  hero: "/images/hero01.jpg",

  aboutShop: "/images/interior01.jpg",

  home: [
    "/images/home01.jpg",
    "/images/home02.jpg",
  ],

  serviceKitchen: "/images/interior01.jpg",
  serviceElectrical: "/images/work01.jpg",
  servicePlumbing: "/images/work02.jpg",
  servicePainting: "/images/interior02.jpg",
  serviceOutdoor: "/images/work03.jpg",
  serviceHandyman: "/images/interior03.jpg",

  projectKitchen1: "/images/project01.jpg",
  projectKitchen1Before: "/images/work01.jpg",

  projectBath1: "/images/project02.jpg",
  projectBath1Before: "/images/work02.jpg",

  projectDeck1: "/images/project03.jpg",

  projectElectrical1: "/images/home01.jpg",

  projectPainting1: "/images/home02.jpg",
  projectPainting1Before: "/images/work03.jpg",

  projectPlumbing1: "/images/interior03.jpg",

  projects: [
    "/images/project01.jpg",
    "/images/project02.jpg",
    "/images/project03.jpg",
  ],

  work: [
    "/images/work01.jpg",
    "/images/work02.jpg",
    "/images/work03.jpg",
  ],

  interiors: [
    "/images/interior01.jpg",
    "/images/interior02.jpg",
    "/images/interior03.jpg",
  ],
};

export const getImage = (value) => {
  if (!value) return "";

  if (
    typeof value === "string" &&
    value.startsWith("/images/")
  ) {
    return value;
  }

  const resolved = String(value)
    .split(".")
    .reduce(
      (obj, part) => obj?.[part],
      images
    );

  return typeof resolved === "string"
    ? resolved
    : "";
};

export default images;