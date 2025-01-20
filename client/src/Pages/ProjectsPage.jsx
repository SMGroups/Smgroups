import React from 'react'
import Nav from '../Components/Nav/Nav'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Aside from '../Components/Nav/Aside'
// import LogoSlider from '../Components/Marquee/LogoSlider'
import Contact from '../Components/Contact/Contact'
import ProjectHero from '../Components/Header/ProjectHero'
import Projects from '../Components/ServicePage/Projects'


const ProjectsPage = ({isOpen,ToggleMenu,isScrolled}) => {
  return (
    <div>
        <div className="header-mech"></div>
        <Aside isOpen={isOpen}  ToggleMenu={ToggleMenu}/>
        <Nav isOpen={isOpen} ToggleMenu={ToggleMenu} isScrolled={isScrolled}/>
        <ProjectHero />
        <Projects />
        {/* <LogoSlider /> */}
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default ProjectsPage