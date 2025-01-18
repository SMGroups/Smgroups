import React from 'react'
import './hero.css'

const TrainingHero = () => {
  return (
    <header className='header' id='home'>
        <div className="content">
            <p className="hero-title">Empower Your Career with Industry-Focused Training</p>
            <p className="hero-subtitle">"Master in-demand skills with hands-on training programs designed for future engineers, developers, and innovators."</p>
            <div className="button-group-hero">
                <a href="#service"><button className='button-one'>Our Services</button></a>
                <a href="#training"><button className='button-two'>Our Trainings</button></a>
            </div>
      </div>
    </header>
  )
}

export default TrainingHero