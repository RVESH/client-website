import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Restaurant01 from "../websites/restaurant-01/index.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/restaurant-01/*"
          element={<Restaurant01 />}
        />

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