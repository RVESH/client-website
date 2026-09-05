import { useEffect } from 'react'
import Hero from '../../sections/Hero/Hero.jsx'
import Trust from '../../sections/Trust/Trust.jsx'
import FeaturedCourses from '../../sections/FeaturedCourses/FeaturedCourses.jsx'
import Benefits from '../../sections/Benefits/Benefits.jsx'
import TeachingApproach from '../../sections/TeachingApproach/TeachingApproach.jsx'
import MentorSpotlight from '../../sections/MentorSpotlight/MentorSpotlight.jsx'
import Testimonials from '../../sections/Testimonials/Testimonials.jsx'
import Outcomes from '../../sections/Outcomes/Outcomes.jsx'
import CTA from '../../components/CTA/CTA.jsx'

function Home() {
  useEffect(() => {
    document.title = 'Keystone Learning | Structured Courses & Real Mentorship'
  }, [])

  return (
    <>
      <Hero />
      <Trust />
      <FeaturedCourses />
      <Benefits />
      <TeachingApproach />
      <MentorSpotlight />
      <Testimonials />
      <Outcomes />
      <CTA />
    </>
  )
}

export default Home
