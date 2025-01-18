import React from 'react'
import '../Components/Header/hero.css'
import Nav from '../Components/Nav/Nav'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Aside from '../Components/Nav/Aside'
import Contact from '../Components/Contact/Contact'
import CareerHero from '../Components/Header/CareerHero'
import Position from '../Components/Position/Position'

const Careers = ({isOpen,ToggleMenu,isScrolled}) => {
  return (
    <div>
        <div className="header-career"></div>
        <Aside isOpen={isOpen} ToggleMenu={ToggleMenu}/>
        <Nav isOpen={isOpen} ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>
        <CareerHero />
        <Position />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default Careers