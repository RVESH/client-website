import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Treatments from './pages/Treatments.jsx'
import Doctors from './pages/Doctors.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window.HTMLElement.prototype ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div style={{ padding: '160px 24px 120px', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'Fraunces, serif' }}>Page not found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  )
}
