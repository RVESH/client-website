import { useEffect } from 'react'
import Hero from '../../sections/Hero/Hero.jsx'
import FeaturedServices from '../../sections/FeaturedServices/FeaturedServices.jsx'
import WhyChooseUs from '../../sections/WhyChooseUs/WhyChooseUs.jsx'
import Process from '../../sections/Process/Process.jsx'
import Trust from '../../sections/Trust/Trust.jsx'
import Testimonials from '../../sections/Testimonials/Testimonials.jsx'
import CTA from '../../sections/CTA/CTA.jsx'

function Home() {
  useEffect(() => {
    document.title = 'Brightside Home Care | Professional Cleaning Services'
  }, [])

  return (
    <>
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <Process />
      <Trust />
      <Testimonials />
      <CTA />
    </>
  )
}

export default Home
