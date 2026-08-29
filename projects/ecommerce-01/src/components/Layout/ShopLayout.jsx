import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import "./ShopLayout.scss";

function ShopLayout() {
  return (
    <div className="shop-layout">
      <Preloader />

      <Header />

      <main className="shop-layout__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default ShopLayout;