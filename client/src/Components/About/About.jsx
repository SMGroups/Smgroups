import React from 'react'
import './about.css'
import { FaCheckCircle } from "react-icons/fa";


const About = () => {
  return (
    <section className="service" id='about'>
        <div className="titles">
            <p className="service-title">About Us</p>
            <div className="blue-line"></div>
        </div>
        <div className="about row container m-auto mt-5">
            
            <div className="col col-12 col-md-12 col-lg-6">
                <div className="about-left">
                    <p className="about-head">Excellence in Design & Training</p>
                    <p className="about-content">
                    SM Groups is a leading provider of comprehensive design solutions and professional training across mechanical, civil, and software industries. With years of expertise, we deliver excellence through innovative approaches and industry-best practices.
                    </p>
                    <div className="points">
                    <div className="about-point">
                        <div className="about-point-left">
                            <FaCheckCircle className='about-circle'/>
                        </div>
                        <div className="about-point-right">
                            <p className="point-head">Industry Expertise</p>
                            <p className="point-text">Specialized knowledge across multiple sectors</p>
                        </div>
                    </div>
                    <div className="about-point">
                        <div className="about-point-left">
                            <FaCheckCircle className='about-circle'/>
                        </div>
                        <div className="about-point-right">
                            <p className="point-head">Professional Training</p>
                            <p className="point-text">Comprehensive training programs led by experts</p>
                        </div>
                    </div>
                    <div className="about-point">
                        <div className="about-point-left">
                            <FaCheckCircle className='about-circle'/>
                        </div>
                        <div className="about-point-right">
                            <p className="point-head">Innovative Solutions</p>
                            <p className="point-text">Cutting-edge design and implementation</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            <div className="col col-12 col-md-12 col-lg-6">
                <div className="counter">
                    <div className="count-box">
                        <p className="count">
                            10+
                        </p>
                        <p className="count-text">
                            Years Experience
                        </p>
                    </div>
                    <div className="count-box">
                        <p className="count">
                            500+
                        </p>
                        <p className="count-text">
                            Projects Completed
                        </p>
                    </div>
                    <div className="count-box">
                        <p className="count">
                            1000+
                        </p>
                        <p className="count-text">
                            Students Trained
                        </p>
                    </div>
                    <div className="count-box col col-12 col-md-6 col-lg-6">
                        <p className="count">
                            50+
                        </p>
                        <p className="count-text">
                            Expert Trainers
                        </p>
                    </div>
                </div>
            </div>
            

            
        </div>
    </section>
  )
}

export default About