import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./css/style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

const LazyAccueil = React.lazy(() => import("./pages/Accueil/Accueil"));
const LazyOffer = React.lazy(() => import("./pages/OfferPage/Offer"));
const LazyContact = React.lazy(() => import("./pages/Contact/Contact"));
const LazyAbout = React.lazy(() => import("./pages/about/About"));
const LazyLegalPage = React.lazy(() => import("./pages/LegalPage/LegalPage"));
const LazyPrivacyPolicy = React.lazy(() =>
  import("./pages/PrivacyPolicy/PrivacyPolicy")
);
const LazyCredits = React.lazy(() => import("./pages/Credits/Credits"));

import GoToTop from "./components/GoToTop/GoToTop";
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./pages/Loading/Loading";

import Test from "./partials/Test";
import PrivacyPopup from "./components/PrivacyPopup/PrivacyPopup";


function App() {
  Aos.init();

  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyAccueil />
            </React.Suspense>
          }
        />

        <Route
          path="/offres"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyOffer />
            </React.Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyContact />
            </React.Suspense>
          }
        />

        <Route
          path="/à-propos"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyAbout />
            </React.Suspense>
          }
        />

        <Route
          path="/legal"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyLegalPage />
            </React.Suspense>
          }
        />

        <Route
          path="/politique"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyPrivacyPolicy />
            </React.Suspense>
          }
        />

        <Route
          path="/credits"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyCredits />
            </React.Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    <PrivacyPopup/>
      <GoToTop />
    </>
  );
}

export default App;
