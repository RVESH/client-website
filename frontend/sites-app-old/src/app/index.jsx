import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Restaurant01 from "../websites/restaurant-01";

import Home from "../websites/restaurant-01/pages/Home/Home";
import Menu from "../websites/restaurant-01/pages/Menu/Menu";
import About from "../websites/restaurant-01/pages/About/About";
import Reservation from "../websites/restaurant-01/pages/Reservation/Reservation";
import Contact from "../websites/restaurant-01/pages/Contact/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/restaurant-01"
          element={<Restaurant01 />}
        >
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route
            path="reservation"
            element={<Reservation />}
          />
          <Route
            path="contact"
            element={<Contact />}
          />
        </Route>

        <Route
          path="*"
          element={
            <Navigate
              to="/restaurant-01"
              replace
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;