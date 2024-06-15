import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./Pages/components/Navbar"
import Blogi from "./Pages/Blogi"
import Kodu from "./Pages/Kodu/index"
import Meist from "./Pages/Meist"
import Hinnakiri from "./Pages/Hinnakiri"
import Galerii from "./Pages/Galerii"
import Kontakt from "./Pages/Kontakt"
import FooterBar from "./Pages/components/FooterBar"
import Footer from "./Pages/components/Footer"
import { useEffect } from "react"
import dreamCatcher from "/src/assets/dreamcatcher.png";
import tribalPattern from "/src/assets/pattern.png"
import React from "react"

const App = () => {

  const location = useLocation();

    useEffect(() => {
        const reloaded = sessionStorage.getItem('reloaded');
        if ((location.pathname === '/blogi' || location.pathname === '/kontakt') && !reloaded) {
            sessionStorage.setItem('reloaded', 'true');
            window.location.reload();
        } else if (location.pathname !== '/blogi' && location.pathname !== '/kontakt') {
            sessionStorage.removeItem('reloaded');
        }
    }, [location]);

  return (
    <div className='app bg-pink-100'>
      <Navbar />
      <div className="flex fixed top-0 tablet:left-0 pl-4 z-0">
        <img src={dreamCatcher} alt="left decoration" />
      </div>
      <div className="tablet:flex fixed hidden top-0 right-0 pr-4 z-0">
        <img src={tribalPattern} alt="right decoration" />
      </div>
      <Routes>
        <Route path="/" element={<Kodu />} />
        <Route path="/blogi" element={<Blogi />} />
        <Route path="/meist" element={<Meist />} />
        <Route path="/hinnakiri" element={<Hinnakiri />} />
        <Route path="/galerii" element={<Galerii />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
      <FooterBar />
    </div>
  )
}

export default App