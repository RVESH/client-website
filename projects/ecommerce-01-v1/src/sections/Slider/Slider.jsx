import Slider from "../../components/Slider/Slider";

import { images } from "../../data/images";

export default function StoreSliderSection() {
  const slides = [
    {
      id: 1,
      eyebrow: "NEW SEASON",
      title: "The essentials, refined.",
      text: "Simple silhouettes and dependable materials.",
      image: images.gallery[0],
      alt: "NOVA collection",
    },
    {
      id: 2,
      eyebrow: "NOVA EDIT",
      title: "Objects worth keeping.",
      text: "A focused selection for everyday life.",
      image: images.gallery[1],
      alt: "NOVA lifestyle",
    },
    {
      id: 3,
      eyebrow: "EVERYDAY",
      title: "Made to live with.",
      text: "Useful pieces designed for daily routines.",
      image: images.gallery[2],
      alt: "NOVA everyday collection",
    },
    {
      id: 4,
      eyebrow: "DETAILS",
      title: "Less noise. Better choices.",
      text: "Thoughtful materials and timeless forms.",
      image: images.gallery[3],
      alt: "NOVA product details",
    },
  ];

  return (
    <section className="section">
      <div className="page-shell">
        <Slider slides={slides} />
      </div>
    </section>
  );
}