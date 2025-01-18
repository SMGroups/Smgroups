import React from 'react';
import './Industries.css';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaBuilding, FaCode, FaSolarPanel } from 'react-icons/fa';
import { LuCircleCheckBig } from 'react-icons/lu';
import { GiTeacher } from 'react-icons/gi';
import { RiBrush4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Industries = () => {
  return (
    <section className="service" id="service">
      <div className="titles">
        <p className="service-title">Industries We Serve</p>
        <p className="service-subtitle">
          Our expertise spans across multiple industries, providing comprehensive solutions and training
        </p>
        <div className="blue-line"></div>
      </div>
      <div className="service-boxes row container-fluid">
        {/* Product Development */}
        <div  className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <IoSettingsOutline />
          </div>
          <p className="s-title">Design & Fabrication</p>
          <p className="s-des">End-to-end product development from concept to market. We handle design, testing, and manufacturing.</p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Product Design
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Prototype Creation
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Product Maufacturing
          </p>
          <div className="know"><Link to={"/mechanical"}  className='more-btn'>Know More</Link></div>
        </div>

        {/* Construction */}
        <div  className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <FaBuilding />
          </div>
          <p className="s-title">Construction</p>
          <p className="s-des">Creative and functional interior design solutions for residential and commercial spaces.</p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Infrastructure Design
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Site Planning
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Interior Design
          </p>
          <div className="know"><Link to={"/civil"}  className='more-btn'>Know More</Link></div>
        </div>

        {/* Solar & Engineering */}
        <div  className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <FaSolarPanel />
          </div>
          <p className="s-title">Solar & Engineering</p>
          <p className="s-des">Sustainable energy solutions and engineering services for modern requirements.</p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Solar Panel Installation
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Energy Audits
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Green Engineering Solutions
          </p>
          <div className="know"><Link to={"/solar"}  className='more-btn'>Know More</Link></div>
        </div>

        {/* Design Solutions */}
        <div  className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <RiBrush4Line />
          </div>
          <p className="s-title">Design Solutions</p>
          <p className="s-des">Comprehensive design solutions including graphic design and jewelry design services.</p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Graphic Design
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Jewelry Design
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> 3D Visualization
          </p>
          <div className="know"><Link to={"/mechanical"}  className='more-btn'>Know More</Link></div>
        </div>

        {/* Software Development */}
        <div  className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <FaCode />
          </div>
          <p className="s-title">Software Development</p>
          <p className="s-des">Custom software solutions for businesses of all sizes, from web applications to mobile apps.</p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Web Design & Development
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Android Application
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Digital Marketing
          </p>
          <div className="know"><Link to={"/software"}  className='more-btn'>Know More</Link></div>
        </div>

        {/* Training Academy */}
        <div  className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <GiTeacher />
          </div>
          <p className="s-title">Training Academy</p>
          <p className="s-des">Professional training programs to develop skills in various technical domains.</p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Technical Skills Training
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Leadership Development
          </p>
          <p className="s-content">
            <LuCircleCheckBig className="list-icon" /> Certification Programs
          </p>
          <div className="know"><Link to={"/Training"}  className='more-btn'>Know More</Link></div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
