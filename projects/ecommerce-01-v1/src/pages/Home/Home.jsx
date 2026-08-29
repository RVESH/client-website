import Hero from "../../sections/Hero/Hero";
import Stats from "../../sections/Stats/Stats";
import Categories from "../../sections/Categories/Categories";
import FeaturedProducts from "../../sections/FeaturedProducts/FeaturedProducts";
import Benefits from "../../sections/Benefits/Benefits";
import Gallery from "../../sections/Gallery/Gallery";
import Testimonials from "../../sections/Testimonials/Testimonials";
import CTA from "../../sections/CTA/CTA";
import BusinessInfo from "../../sections/BusinessInfo/BusinessInfo";
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedProducts />
      <Benefits />
      <Gallery />
      <Testimonials />
      <CTA />
      <BusinessInfo />
    </>
  );
}