import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import RestaurantLayout from "../components/Layout/RestaurantLayout";

import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import About from "../pages/About/About";
import Reservation from "../pages/Reservation/Reservation";
import Contact from "../pages/Contact/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route element={<RestaurantLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;