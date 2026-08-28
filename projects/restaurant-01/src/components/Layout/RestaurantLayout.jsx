import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import "./RestaurantLayout.scss";

function RestaurantLayout() {
  return (
    <div className="restaurant-layout">
      <Preloader />

      <Header />

      <main className="restaurant-layout__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RestaurantLayout;