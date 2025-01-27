import React from 'react'
import Nav from '../Components/Nav/Nav'
import Hero from '../Components/Header/Hero'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Aside from '../Components/Nav/Aside'
import Vision from '../Components/Vision/Vision'
import Contact from '../Components/Contact/Contact'

import Industries from '../Components/Industries/Industries'
import LogoSlider from '../Components/Marquee/LogoSlider'
import Team from '../Components/Team/Team'

const Home = ({isOpen,ToggleMenu,isScrolled}) => {
  return (
    <div>
        <div className="header-bg"></div>
        <Aside isOpen={isOpen}  ToggleMenu={ToggleMenu}/>
        <Nav isOpen={isOpen}  ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>
        <Hero />
        <Vision />
        <Industries />
        <LogoSlider />
        <About />
        <Team />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home