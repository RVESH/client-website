import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { WatchlistProvider } from "./WatchlistContext.jsx";
import { ProgressProvider } from "./ProgressContext.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Home from "../pages/Home/Home.jsx";
import Browse from "../pages/Browse/Browse.jsx";
import MovieDetail from "../pages/MovieDetail/MovieDetail.jsx";
import Watch from "../pages/Watch/Watch.jsx";
import Genres from "../pages/Genres/Genres.jsx";
import CollectionDetail from "../pages/CollectionDetail/CollectionDetail.jsx";
import Journal from "../pages/Journal/Journal.jsx";
import Contact from "../pages/Contact/Contact.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const isWatchPage = pathname.startsWith("/watch/");

  return (
    <WatchlistProvider>
      <ProgressProvider>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ScrollToTop />
        {!isWatchPage && <Header />}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/collections/:id" element={<CollectionDetail />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {!isWatchPage && <Footer />}
      </ProgressProvider>
    </WatchlistProvider>
  );
}
