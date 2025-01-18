import React from 'react'
import Nav from '../Components/Nav/Nav'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Aside from '../Components/Nav/Aside'
import LogoSlider from '../Components/Marquee/LogoSlider'
import Contact from '../Components/Contact/Contact'
import MechanicalService from '../Components/ServicePage/MechanicalService'
import MechHero from '../Components/Header/MechHero'


const MechanicalPage = ({isOpen,ToggleMenu,isScrolled}) => {
  return (
    <div>
        <div className="header-mech"></div>
        <Aside isOpen={isOpen}  ToggleMenu={ToggleMenu}/>
        <Nav isOpen={isOpen} ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>
        <MechHero />
        <MechanicalService />
        <LogoSlider />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default MechanicalPage