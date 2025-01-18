import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <header className='header' id='home'>
        <div className="content">
            <p className="hero-title">Transform Ideas into Reality with SM Groups</p>
            <p className="hero-subtitle">"From groundbreaking designs to seamless digital solutions, we empower businesses to achieve excellence in engineering, manufacturing, and innovation."</p>
            <div className="button-group-hero">
                <a href="#service"><button className='button-one'>Our Services</button></a>
                <a href="#contact"><button className='button-two'>Contct Us</button></a>
            </div>
      </div>
    </header>
  )
}

export default Hero