import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import MenuPage from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/Reservation";
// import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<Reservation />} />
        {/* <Route path="/contact" element={<Contact />} /> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;