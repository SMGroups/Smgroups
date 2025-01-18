import React from 'react'
import Nav from '../Components/Nav/Nav'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Aside from '../Components/Nav/Aside'
import LogoSlider from '../Components/Marquee/LogoSlider'
import Contact from '../Components/Contact/Contact'
import SolarService from '../Components/ServicePage/SolarService'
import SolarHero from '../Components/Header/SolarHero'


const SolarPage = ({isOpen,ToggleMenu,isScrolled}) => {
  return (
    <div>
        <div className="header-solar"></div>
        <Aside isOpen={isOpen}  ToggleMenu={ToggleMenu}/>
        <Nav isOpen={isOpen} ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>
        <SolarHero />
        <SolarService />
        <LogoSlider />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default SolarPage