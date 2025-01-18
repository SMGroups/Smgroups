import React from 'react';
import './Vision.css';
import img1 from '../../assets/images/3572691.jpg';
import { FaRocket } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

const Vision = () => {
  return (
    <section className="training vm">
      <div className="titles">
        <p className="training-title">SM Groups</p>
        <div className="blue-line"></div>
      </div>
      <div className="vision row container-fluid mt-5 pb-5">
        <div className="col col-md-12 col-lg-6 col-12 styled-img">
          <img src={img1} alt="logo" className="w-100" />
        </div>
        <div className="col col-md-12 col-lg-6 col-12 missions">
          <div className="mission" data-aos="fade-up">
            <p className="vision-title"><FaRocket />&nbsp;Our Vision</p>
            <p className="mission-text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To lead the future of engineering by introducing transformative designs and delivering exceptional industrial projects. We envision a sustainable world shaped by innovative, forward-thinking engineers.
            </p>
          </div>
          <div className="mission" data-aos="fade-up">
            <p className="vision-title"><FaEye />&nbsp;Our Mission</p>
            <p className="mission-text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To equip aspiring engineers with advanced tools, industry knowledge, and real-world experience. We aim to foster innovation and empower individuals to make a meaningful impact in their industries.
            </p>
          </div>
          <div className="mission" data-aos="fade-up">
            <p className="vision-title"><FaHandshake />&nbsp;Our Values</p>
            <p className="mission-text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are driven by excellence, innovation, and integrity. Our commitment to customer satisfaction and sustainable practices defines our approach to every project and partnership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
