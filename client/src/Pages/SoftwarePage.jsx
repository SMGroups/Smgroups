import React from 'react'
import Nav from '../Components/Nav/Nav'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Aside from '../Components/Nav/Aside'
import Contact from '../Components/Contact/Contact'
import SoftwareHero from '../Components/Header/SoftwareHero'
import SoftwareService from '../Components/ServicePage/SoftwareService'


const MechanicalPage = ({isOpen,ToggleMenu,isScrolled}) => {
  return (
    <div>
        <div className="header-sw"></div>
        <Aside isOpen={isOpen}  ToggleMenu={ToggleMenu}/>
        <Nav isOpen={isOpen} ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>
        <SoftwareHero />
        <SoftwareService />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default MechanicalPage