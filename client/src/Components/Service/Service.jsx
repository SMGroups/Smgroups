import React from 'react';
import './service.css';
import { IoLaptopOutline } from "react-icons/io5"; // Replaced icon for Technical Training
import { FaBuilding } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa"; // Replaced icon for Webinars and Inplant Training
import { IoSchoolOutline } from "react-icons/io5"; // Replaced icon for Internship
import { LuCircleCheckBig } from "react-icons/lu";

const Service = () => {
  return (
    <section className="service" id="service">
      <div className="titles">
        <p className="service-title">Our Services</p>
        <p className="service-subtitle">Comprehensive solutions across multiple industries, delivering excellence in both design and training.</p>
        <div className="blue-line"></div>
      </div>
      <div className="service-boxes row container-fluid">

        <div className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <IoLaptopOutline />
          </div>
          <p className="s-title">Technical Training</p>
          <p className="s-des">
            Our technical training programs offer skills needed to excel in engineering fields. Learn through hands-on sessions and expert mentorship.
          </p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Mechanical Design</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Electrical Implementation</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Programming Lnaguages</p>
        </div>

        <div className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <IoSchoolOutline />
          </div>
          <p className="s-title">Internship</p>
          <p className="s-des">
            Our internships offer hands-on learning and industry exposure, allowing participants to gain practical skills and real-time experience.
          </p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Practical Experience</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Industry Exposure</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Mentorship and Guidance</p>
        </div>

        <div className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <FaLaptopCode />
          </div>
          <p className="s-title">Inplant Training</p>
          <p className="s-des">
            Gain real-world skills through inplant training with live projects that bridge the gap between theory and industry application.
          </p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Hands-on Learning</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Skill Development</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Real-Time Project Work</p>
        </div>

        <div className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <FaBuilding />
          </div>
          <p className="s-title">Guest Lecture</p>
          <p className="s-des">
            Guest lectures by industry leaders provide valuable insights into the latest trends and practices in engineering and technology.
          </p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Expert Speakers</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Industry Insights</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Knowledge Sharing</p>
        </div>

        <div className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <FaLaptopCode />
          </div>
          <p className="s-title">Webinars</p>
          <p className="s-des">
            Our webinars offer remote learning on industry trends and technologies, providing participants with updated knowledge and interactive Q&A.
          </p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Online Learning Sessions</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Interactive Q&A</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Latest Trends and Technologies</p>
        </div>

        <div className="service-box" data-aos="fade-up">
          <div className="icon-box">
            <IoLaptopOutline />
          </div>
          <p className="s-title">Workshop</p>
          <p className="s-des">
            Our workshops offer intensive learning experiences where participants enhance skills through real-world problem solving.
          </p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Skill Enhancement</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Group Activities</p>
          <p className="s-content"><LuCircleCheckBig className="list-icon" /> Practical Learning</p>
        </div>

      </div>
    </section>
  );
};

export default Service;
