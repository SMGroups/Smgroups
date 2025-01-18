import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Home from "./Pages/Home";
import Careers from "./Pages/Careers";
import TrainingPage from "./Pages/TrainingPage";
import MechanicalPage from "./Pages/MechanicalPage";
import CivilPage from "./Pages/CivilPage";
import SolarPage from "./Pages/SolarPage";
import SoftwarePage from "./Pages/SoftwarePage";


function App() {

  const [isOpen,setIsOpen] = useState(false);
  const [isScrolled,setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        
          if (window.scrollY > 30) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once
      offset: 50,     // Offset value to trigger animation earlier or later
    });
  }, []);
  

  function ToggleMenu(e){
      e.preventDefault();
      setIsOpen(!isOpen);
  }

  return (
    <Routes>
      <Route path="/" element={<Home isOpen={isOpen}  ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>} />
      <Route path="/Careers" element={<Careers isOpen={isOpen}  ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>} />
      <Route path="/Training" element={<TrainingPage isOpen={isOpen}  ToggleMenu={ToggleMenu}/>} isScrolled={isScrolled}/>
      <Route path="/mechanical" element={<MechanicalPage isOpen={isOpen}  ToggleMenu={ToggleMenu}/>} isScrolled={isScrolled}/>
      <Route path="/civil" element={<CivilPage isOpen={isOpen}  ToggleMenu={ToggleMenu}/>} isScrolled={isScrolled}/>
      <Route path="/solar" element={<SolarPage isOpen={isOpen}  ToggleMenu={ToggleMenu}/>} isScrolled={isScrolled}/>
      <Route path="/software" element={<SoftwarePage isOpen={isOpen}  ToggleMenu={ToggleMenu}/>} isScrolled={isScrolled}/>
    </Routes>
  );
}

export default App;
