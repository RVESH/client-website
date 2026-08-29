import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import ShopLayout from "../components/Layout/ShopLayout";

import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
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
            path="/shop"
            element={<Shop />}
          />

          <Route
            path="/product/:productId"
            element={<Product />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
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