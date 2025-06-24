
import ClothingSection from "./components/ClothingSection"
import ContactSection from "./components/ContactSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/NavBar"
import PaintingSection from './components/PaintingSection'
// App.jsx
import "./App.css";
import HomeSection from "./components/HomeSection"


function App() {

  return (
    <>
   <Navbar />
   <HeroSection/>
   <ClothingSection/>
   <PaintingSection/>\
   <HomeSection/>
   <ContactSection/>
    </>
  )
}

export default App
