import Hero from "../../sections/Hero/Hero.jsx";
import Trust from "../../sections/Trust/Trust.jsx";
import Services from "../../sections/Services/Services.jsx";
import WhyChooseUs from "../../sections/Services/WhyChooseUs.jsx";
import Stats from "../../sections/Stats/Stats.jsx";
import Industries from "../../sections/Industries/Industries.jsx";
import Testimonials from "../../sections/Testimonials/Testimonials.jsx";
import TeamPreview from "../../sections/Team/Team.jsx";
import CTA from "../../sections/CTA/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Industries />
      <Testimonials />
      <TeamPreview />
      <CTA />
    </>
  );
}
