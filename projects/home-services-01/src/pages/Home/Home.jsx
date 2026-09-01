import Hero from '../../sections/Hero/Hero';
import Services from '../../sections/Services/Services';
import WhyChooseUs from '../../sections/WhyChooseUs/WhyChooseUs';
import Stats from '../../sections/Stats/Stats';
import Process from '../../sections/Process/Process';
import Projects from '../../sections/Projects/Projects';
import Testimonials from '../../sections/Testimonials/Testimonials';
import CTA from '../../sections/CTA/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Process />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  );
}
