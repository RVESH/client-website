import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";
import Property from "../pages/Property/Property";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export default function App() {
  return (
    <HashRouter>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/properties"
            element={<Properties />}
          />

          <Route
            path="/property/:propertyId"
            element={<Property />}
          />

          <Route
            path="/about"
            element={<About />}
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