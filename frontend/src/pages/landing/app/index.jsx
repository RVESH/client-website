import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPage from "../landingPage";

import Websites from "../components/Websites/Websites";
import Contact from "../components/Contact/Contact";

const LandingApp = () => {
  return (
    <Routes>
      {/* ============================================================
          LANDING / HOME
         ============================================================ */}

      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* ============================================================
          WEBSITES STORE
         ============================================================ */}

      <Route
        path="/websites"
        element={<Websites />}
      />

      {/* ============================================================
          CONTACT
         ============================================================ */}

      <Route
        path="/contact"
        element={<Contact />}
      />

      {/* ============================================================
          LANDING FALLBACK
         ============================================================ */}

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
  );
};

export default LandingApp;