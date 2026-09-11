import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPage from "../landingPage";

import Websites from "../components/Websites/Websites";
import Contact from "../components/Contact/Contact";
import Navbar from "../components/Navbar/Navbar";

const LandingPageWithNavbar = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
    </>
  );
};

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

const LandingApp = () => {
  return (
    <Routes>
      {/* ============================================================
          HOME
          LandingPage already uses the landing design.
         ============================================================ */}

      <Route
        path="/"
        element={<LandingPageWithNavbar />}
      />

      {/* ============================================================
          WEBSITES STORE
          Shared main navbar
         ============================================================ */}

      <Route
        path="/websites"
        element={
          <LandingPageLayout>
            <Websites />
          </LandingPageLayout>
        }
      />

      {/* ============================================================
          CONTACT
          Shared main navbar
         ============================================================ */}

      <Route
        path="/contact"
        element={
          <LandingPageLayout>
            <Contact />
          </LandingPageLayout>
        }
      />

      {/* ============================================================
          FALLBACK
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