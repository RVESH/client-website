/*
 * SOUTHBRIDGE V1 — MASTER APP SKELETON
 *
 * ============================================================
 * FIXED ACROSS ALL V1 WEBSITES
 * ============================================================
 *
 * - React application lifecycle
 * - Preloader lifecycle
 * - Loading progress
 * - Font readiness
 * - Critical image readiness
 * - Lazy-image exclusion
 * - Image timeout protection
 * - Minimum loader display time
 * - 100% completion state
 * - HashRouter
 * - Unknown-route fallback
 *
 *
 * ============================================================
 * CHANGE PER WEBSITE
 * ============================================================
 *
 * 1. Page imports
 * 2. Route paths
 * 3. Route components
 * 4. Preloader brand
 *
 *
 * ============================================================
 * DO NOT CHANGE
 * ============================================================
 *
 * The loading engine below is shared across V1 websites.
 *
 * If a website uses another visual preloader:
 *
 * foundations/preloaders/PreloaderXX.jsx
 *                    ↓
 * src/components/Preloader/Preloader.jsx
 *
 * App.js does NOT need to change for the visual design.
 *
 * ============================================================
 */

import { useEffect, useState } from "react";

import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Preloader from "./components/Preloader/Preloader";

/*
 * ============================================================
 * WEBSITE PAGES
 * ============================================================
 *
 * CHANGE THESE IMPORTS PER WEBSITE.
 *
 * Example:
 *
 * import Home from "./pages/Home/Home";
 * import Menu from "./pages/Menu/Menu";
 *
 * ============================================================
 */

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Reservation from "./pages/Reservation/Reservation";
import Contact from "./pages/Contact/Contact";


/*
 * ============================================================
 * PRELOADER CONFIGURATION
 * ============================================================
 *
 * FIXED
 */

const MINIMUM_LOADER_TIME = 900;
const IMAGE_TIMEOUT = 3500;


/*
 * ============================================================
 * UTILITY — WAIT
 * ============================================================
 *
 * FIXED
 */

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}


/*
 * ============================================================
 * UTILITY — WAIT FOR IMAGE
 * ============================================================
 *
 * FIXED
 *
 * Broken images must never permanently block the website.
 */

function waitForImage(image) {
  return new Promise((resolve) => {
    let finished = false;

    const finish = () => {
      if (finished) return;

      finished = true;

      image.removeEventListener("load", finish);
      image.removeEventListener("error", finish);

      resolve();
    };

    if (image.complete) {
      finish();
      return;
    }

    image.addEventListener("load", finish, {
      once: true,
    });

    image.addEventListener("error", finish, {
      once: true,
    });

    window.setTimeout(
      finish,
      IMAGE_TIMEOUT
    );
  });
}


/*
 * ============================================================
 * MASTER APP
 * ============================================================
 */

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);


  /*
   * ==========================================================
   * REAL WEBSITE LOADING CONTROLLER
   * ==========================================================
   *
   * FIXED ACROSS V1
   */

  useEffect(() => {
    let mounted = true;

    const startedAt = performance.now();


    const updateProgress = (value) => {
      if (!mounted) return;

      setProgress((current) =>
        Math.max(
          current,
          Math.min(
            100,
            Math.round(value)
          )
        )
      );
    };


    const prepareSite = async () => {

      /*
       * STEP 1
       * Application started.
       */

      updateProgress(10);


      /*
       * STEP 2
       * DOM ready.
       */

      if (
        document.readyState === "loading"
      ) {
        await new Promise((resolve) => {
          document.addEventListener(
            "DOMContentLoaded",
            resolve,
            {
              once: true,
            }
          );
        });
      }

      updateProgress(30);


      /*
       * STEP 3
       * Fonts.
       *
       * Font failure must never block the site.
       */

      try {
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
      } catch {
        // Never block site because of font failure.
      }

      updateProgress(50);


      /*
       * STEP 4
       * Critical images.
       *
       * Lazy images are intentionally excluded.
       */

      const images = Array.from(
        document.querySelectorAll(
          'img:not([loading="lazy"])'
        )
      );


      if (images.length > 0) {

        const totalImages =
          images.length;

        let loadedImages = 0;


        await Promise.all(
          images.map(
            async (image) => {

              await waitForImage(
                image
              );

              loadedImages += 1;


              const imageProgress =
                50 +
                (
                  loadedImages /
                  totalImages
                ) *
                  40;


              updateProgress(
                imageProgress
              );
            }
          )
        );

      } else {

        updateProgress(90);

      }


      /*
       * STEP 5
       * Minimum loader display time.
       *
       * Prevents flashing on extremely fast devices.
       */

      const elapsed =
        performance.now() -
        startedAt;


      const remaining =
        MINIMUM_LOADER_TIME -
        elapsed;


      if (remaining > 0) {
        await wait(remaining);
      }


      /*
       * STEP 6
       * Website ready.
       */

      updateProgress(100);


      /*
       * Give browser one paint cycle
       * so 100% can actually render.
       */

      await new Promise(
        (resolve) => {
          requestAnimationFrame(
            resolve
          );
        }
      );


      if (mounted) {
        setLoading(false);
      }
    };


    prepareSite();


    return () => {
      mounted = false;
    };

  }, []);


  /*
   * ==========================================================
   * APPLICATION UI
   * ==========================================================
   */

  return (
    <>
      {/* ======================================================
          MASTER PRELOADER
          FIXED
          ====================================================== */}

      {loading && (
        <Preloader
          open={loading}
          progress={progress}
          brand="LUMA"
        />
      )}


      {/* ======================================================
          ROUTER
          ====================================================== */}

      <HashRouter>

        <Routes>

          {/* ================================================
              CHANGE PER WEBSITE
              ================================================ */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/menu"
            element={<Menu />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/reservation"
            element={<Reservation />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />


          {/* ================================================
              FIXED UNKNOWN ROUTE FALLBACK
              ================================================ */}

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

      </HashRouter>
    </>
  );
}

export default App;