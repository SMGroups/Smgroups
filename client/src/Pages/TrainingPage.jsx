import React from 'react'
import Nav from '../Components/Nav/Nav'
import Service from '../Components/Service/Service'
import Training from '../Components/Training/Training'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Aside from '../Components/Nav/Aside'
import LogoSlider from '../Components/Marquee/LogoSlider'
import Contact from '../Components/Contact/Contact'
import Feature from '../Components/Feature/Feature'
import TrainingHero from '../Components/Header/TrainingHero'


const TrainingPage = ({isOpen,ToggleMenu,isScrolled}) => {
  return (
    <div>
        <div className="header-training"></div>
        <Aside isOpen={isOpen}  ToggleMenu={ToggleMenu}/>
        <Nav isOpen={isOpen} ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>
        <TrainingHero />
        <Service />
        <Training />
        <Feature />
        <LogoSlider />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default TrainingPage