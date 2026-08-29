import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import ShopLayout from "../components/Layout/ShopLayout";

import Home from "../pages/Home/Home";
import Collection from "../pages/Collection/Collection";
import Product from "../pages/Product/Product";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<ShopLayout />}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/collection"
            element={<Collection />}
          />

          <Route
            path="/product/:productId"
            element={<Product />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />
        </Route>

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
    </HashRouter>
  );
}