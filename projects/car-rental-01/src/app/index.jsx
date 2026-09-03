import { RouterProvider, useRouter } from './router.jsx'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Home from '../pages/Home/Home.jsx'
import Fleet from '../pages/Fleet/Fleet.jsx'
import About from '../pages/About/About.jsx'
import Locations from '../pages/Locations/Locations.jsx'
import Contact from '../pages/Contact/Contact.jsx'

const routes = {
  '/': Home,
  '/fleet': Fleet,
  '/about': About,
  '/locations': Locations,
  '/contact': Contact,
}

function Pages() {
  const { path } = useRouter()
  const PageComponent = routes[path] || Home
  return <PageComponent />
}

function App() {
  return (
    <RouterProvider>
      <Header />
      <main>
        <Pages />
      </main>
      <Footer />
    </RouterProvider>
  )
}

export default App
