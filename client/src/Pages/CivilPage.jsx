import React from 'react'
import Nav from '../Components/Nav/Nav'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Aside from '../Components/Nav/Aside'
import LogoSlider from '../Components/Marquee/LogoSlider'
import Contact from '../Components/Contact/Contact'
import CivilService from '../Components/ServicePage/CivilService'
import CivilHero from '../Components/Header/CivilHero'


const CivilPage = ({isOpen,ToggleMenu,isScrolled}) => {
  return (
    <div>
        <div className="header-civil"></div>
        <Aside isOpen={isOpen}  ToggleMenu={ToggleMenu}/>
        <Nav isOpen={isOpen} ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>
        <CivilHero />
        <CivilService />
        <LogoSlider />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default CivilPage