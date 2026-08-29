import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./ShopLayout.scss";

export default function ShopLayout() {
  return (
    <div className="shop-layout">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}