import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import About from "../pages/About.jsx";
import Team from "../pages/Team.jsx";
import Contact from "../pages/Contact.jsx";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/team"
            element={<Team />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}