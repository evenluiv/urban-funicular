import { Route, Routes } from "react-router-dom"
import Navbar from "./Pages/components/Navbar"
import Blogi from "./Pages/Blogi"
import Kodu from "./Pages/Kodu/index"
import Meist from "./Pages/Meist"
import Hinnakiri from "./Pages/Hinnakiri"
import Galerii from "./Pages/Galerii"
import Kontakt from "./Pages/Kontakt"
import FooterBar from "./Pages/components/FooterBar"
import Footer from "./Pages/components/Footer"

const App = () => {

  return (
    <div className='app bg-pink-100'>
      <Navbar />
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
