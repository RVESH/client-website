import Hero from "../../sections/Hero/Hero";
import Stats from "../../sections/Stats/Stats";
import FeaturedProperties from "../../sections/FeaturedProperties/FeaturedProperties";
import Neighborhoods from "../../sections/Neighborhoods/Neighborhoods";
import Testimonials from "../../sections/Testimonials/Testimonials";
import BusinessInfo from "../../sections/BusinessInfo/BusinessInfo";
import CTA from "../../sections/CTA/CTA";
import PropertySlider from "../../sections/PropertySlider/PropertySlider";
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProperties />
      <PropertySlider />
      <Neighborhoods />
      <Testimonials />
      <BusinessInfo />
      <CTA />
    </>
  );
}