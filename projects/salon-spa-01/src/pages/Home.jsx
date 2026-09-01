import Hero from "../sections/Hero.jsx";
import FeaturedServices from "../sections/FeaturedServices.jsx";
import WhyChooseUs from "../sections/WhyChooseUs.jsx";
import TeamPreview from "../sections/TeamPreview.jsx";
import Gallery from "../sections/Gallery.jsx";
import Locations from "../sections/Locations.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import CTA from "../sections/CTA.jsx";
import SalonSlider  from "../components/SalonSlider/SalonSlider.jsx";
function Home() {
  return (
    <>
      <Hero />
      <SalonSlider />
      <FeaturedServices />
      <WhyChooseUs />
      <TeamPreview />
      <Gallery />
      <Locations />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;
