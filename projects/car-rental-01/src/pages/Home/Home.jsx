import { useEffect } from 'react'
import Hero from '../../sections/Hero/Hero.jsx'
import FeaturedFleet from '../../sections/FeaturedFleet/FeaturedFleet.jsx'
import WhyChooseUs from '../../sections/WhyChooseUs/WhyChooseUs.jsx'
import HowItWorks from '../../sections/HowItWorks/HowItWorks.jsx'
import Trust from '../../sections/Trust/Trust.jsx'
import Testimonials from '../../sections/Testimonials/Testimonials.jsx'
import CTA from '../../sections/CTA/CTA.jsx'

function Home() {
  useEffect(() => {
    document.title = 'Auric Motors | Premium Car Rental'
  }, [])

  return (
    <>
      <Hero />
      <FeaturedFleet />
      <WhyChooseUs />
      <HowItWorks />
      <Trust />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home
