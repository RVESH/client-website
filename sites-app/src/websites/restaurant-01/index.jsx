import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./index.scss";

function Restaurant01() {
  return (
    <div className="restaurant-site">
      <Header />

      <main className="restaurant-site__main">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Restaurant01;