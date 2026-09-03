import Hero from '../../sections/Hero'
import FeaturedVehicles from '../../sections/FeaturedVehicles'
import DealerIntro from '../../sections/DealerIntro'
import WhyUs from '../../sections/WhyUs'
import Services from '../../sections/Services'
import Stats from '../../sections/Stats'
import CTA from '../../sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedVehicles />
      <DealerIntro />
      <WhyUs />
      <Services />
      <Stats />
      <CTA />
    </>
  )
}
