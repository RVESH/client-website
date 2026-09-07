import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

/* ================================================================
   LANDING APP
   ================================================================ */

import LandingApp from "../pages/landing/app";

/* ================================================================
   OTHER APPLICATIONS / PROJECT AREAS
   ================================================================ */

import { Data } from "../data/data.jsx";

import LoginPage from "../components/auth/LoginPage";
import SignupPage from "../components/auth/SignupPage";
import ForgotPassword from "../components/auth/ForgotPassword";

import CreatorApp from "../creatorApp/CreatorApp";

import * as pages from "../pages";

/* ================================================================
   SOUTHBRIDGE FOUNDATION / DEMO COMPONENTS
   ================================================================ */

import {
  Header,
  Footer,
  Hero,
  About,
  CTA,
  Gallery,
  Testimonial,
  FAQ,
  Newsletter,
  Modal,
  Preloader,
  Slider,
} from "../southBridge";

import {
  Buttons,
  Sections,
  Services,
  Cards,
  Stats,
  Features,
  Process,
} from "../southBridge/foundations";


function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>

          {/* ========================================================
              LANDING APP
              ========================================================

              IMPORTANT:
              LandingApp internally handles:

              /
              /websites
              /contact

              ======================================================== */}

          <Route
            path="/*"
            element={<LandingApp />}
          />

          {/* ========================================================
              AUTHENTICATION
              ======================================================== */}

          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/signup"
            element={<SignupPage />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          {/* ========================================================
              DATA
              ======================================================== */}

          <Route
            path="/data"
            element={<Data />}
          />

          {/* ========================================================
              PROTECTED APPLICATION
              ======================================================== */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <pages.Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <pages.AdminPanel />
              </ProtectedRoute>
            }
          />

          {/* ========================================================
              CREATOR APP
              ======================================================== */}

          <Route
            path="/creator/*"
            element={<CreatorApp />}
          />

          {/* ========================================================
              SOUTHBRIDGE FOUNDATION / COMPONENT PREVIEWS
              ======================================================== */}

          <Route
            path="/header"
            element={<Header />}
          />

          <Route
            path="/footer"
            element={<Footer />}
          />

          <Route
            path="/hero"
            element={<Hero />}
          />

          <Route
            path="/buttons"
            element={<Buttons />}
          />

          <Route
            path="/sections"
            element={<Sections />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/cards"
            element={<Cards />}
          />

          <Route
            path="/cta"
            element={<CTA />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/testimonial"
            element={<Testimonial />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />

          <Route
            path="/newsletter"
            element={<Newsletter />}
          />

          <Route
            path="/stats"
            element={<Stats />}
          />

          <Route
            path="/features"
            element={<Features />}
          />

          <Route
            path="/process"
            element={<Process />}
          />

          <Route
            path="/modals"
            element={<Modal />}
          />

          <Route
            path="/preloaders"
            element={<Preloader />}
          />

          <Route
            path="/sliders"
            element={<Slider />}
          />

          {/* ========================================================
              GLOBAL FALLBACK
              ======================================================== */}

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;