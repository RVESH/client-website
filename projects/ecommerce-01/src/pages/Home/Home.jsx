import Hero from "../../sections/Hero/Hero";
import Stats from "../../sections/Stats/Stats";
import Categories from "../../sections/Categories/Categories";
import FeaturedProducts from "../../sections/FeaturedProducts/FeaturedProducts";
import Deals from "../../sections/Deals/Deals";
import Services from "../../sections/Services/Services";
import Features from "../../sections/Features/Features";
import Gallery from "../../sections/Gallery/Gallery";
import StoreSlider from "../../sections/Slider/Slider";
import Testimonials from "../../sections/Testimonials/Testimonials";
import Newsletter from "../../sections/Newsletter/Newsletter";
import CTA from "../../sections/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
      <Deals />
      <Services />
      <Features />
      <StoreSlider />
      <Gallery />
      <Testimonials />
      <Newsletter />
      <CTA />
    </>
  );
}