/*
 * SOUTHBRIDGE SITES APP — MASTER ROUTER
 *
 * This is the ONLY HashRouter in sites-app.
 *
 * Every website exposes exactly ONE final component:
 *
 * Restaurant01
 * Hotel01
 * Cafe01
 * ...
 */

import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Restaurant01 from "../websites/restaurant-01";
// import Hotel01 from "../websites/hotel-01";
// import Cafe01 from "../websites/cafe-01";

function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Restaurant-01 */}
        <Route
          path="/restaurant-01/*"
          element={<Restaurant01 />}
        />

        {/* Future websites */}

        {/*
        <Route
          path="/hotel-01/*"
          element={<Hotel01 />}
        />

        <Route
          path="/cafe-01/*"
          element={<Cafe01 />}
        />
        */}

        {/* Global fallback */}
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