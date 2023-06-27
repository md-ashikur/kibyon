import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.css';
import Aos from "aos";
import "aos/dist/aos.css";

import Contact from "./pages/Contact/Contact";
import LegalPage from "./pages/LegalPage/LegalPage";
import About from './pages/about/About';
import Footer from './components/Footer/Footer';
import Offer from './pages/OfferPage/Offer';
import Accueil from './pages/Accueil/Accueil';
import VideoTest from './pages/VideoTesting/VideoTest';
import VideoOnScroll from './pages/VideoTesting/VideoOnScroll';
import Testing from './pages/VideoTesting/Testing';
import HSecFour from './partials/accueil/HSection4/HSecFour';
import OSecThree from './partials/offerPage/OSection3/OSecThree';

function App() {
  Aos.init();
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
       
        <Route path="/" element={<VideoTest/>} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/legal" element={<LegalPage />} />


        <Route path="/video" element={<VideoTest />} />
        <Route path="/test" element={<VideoOnScroll />} />
        <Route path="/t" element={<OSecThree />} />
        <Route path="/tt" element={<HSecFour />} />

       
       
        <Route path="" element={<Footer/>} />
      </Routes>
    </>
  );
}

export default App;
