import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'

import Home from '../pages/Home/Home.jsx'
import Treatments from '../pages/Treatments/Treatments.jsx'
import Doctors from '../pages/Doctors/Doctors.jsx'
import About from '../pages/About/About.jsx'
import Contact from '../pages/Contact/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
