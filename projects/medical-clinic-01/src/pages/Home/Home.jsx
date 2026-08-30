import Hero from "../../sections/Hero/Hero";
import Stats from "../../sections/Stats/Stats";
import Services from "../../sections/Services/Services";
import Doctors from "../../sections/Doctors/Doctors";
import WhyChooseUs from "../../sections/WhyChooseUs/WhyChooseUs";
import Locations from "../../sections/Locations/Locations";
import Testimonials from "../../sections/Testimonials/Testimonials";
import CTA from "../../sections/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Locations />
      <Testimonials />
      <CTA />
    </>
  );
}