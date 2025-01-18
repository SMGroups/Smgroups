import React from 'react';
import './Services.css';
import { FaCheck } from "react-icons/fa6";
import solar1 from '../../assets/images/Service/solar2.jpg';


const SolarService = () => {
  return (
    <>
      <section className="training" id="training">
        <div className="titles">
          <p className="training-title">Solar Energy Solutions</p>
          <p className="training-subtitle">
            Sustainable and innovative solar energy solutions tailored for every need
          </p>
          <div className="blue-line"></div>
        </div>
      </section>

      <div className="row mechanical">
        <div className="col col-12 col-md-12 col-lg-6 mechanical-left">
          <div className="mechanical-left-inner">
            <p className="s-title">Comprehensive Solar Services</p>
            <p className="s-Content">
              <FaCheck className="list-icon" />
              <span>Solar Panel Installation: </span>
              Expertise in designing and installing solar power systems for residential, commercial, and industrial applications.
            </p>
            <p className="s-Content">
              <FaCheck className="list-icon" />
              <span>Energy Optimization: </span>
              Optimized designs ensuring maximum energy production and efficiency.
            </p>
            <p className="s-Content">
              <FaCheck className="list-icon" />
              <span>Maintenance & Repairs: </span>
              Comprehensive maintenance services, including cleaning, performance checks, and repairs to keep your systems running efficiently.
            </p>
            <p className="s-Content">
              <FaCheck className="list-icon" />
              <span>Consulting & Feasibility Studies: </span>
              Helping clients understand their energy needs, assess feasibility, and design custom solar solutions.
            </p>
            <br />
            <p>
              Our solar services are aimed at providing clean, renewable energy solutions that cater to diverse requirements. Whether it’s rooftop installations, ground-mounted solar farms, or hybrid systems, our team ensures every project aligns with environmental goals and maximizes cost savings. Let us empower your transition to sustainable energy today.
            </p>
          </div>
        </div>

        <div className="col col-12 col-md-12 col-lg-6 solar-pic">
            <img src={solar1} alt="3D Planning" />
        </div>

    </div>

      {/* Solar Features Section */}
      <div className="mech-feature">
        <div className="f-box">
          <FaCheck className="f-icon" />
          <p className="f-title">On-Grid & Off-Grid Systems</p>
          <p className="f-des">
            Tailored solutions for both grid-connected and standalone power needs.
          </p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon" />
          <p className="f-title">Solar Batteries & Storage</p>
          <p className="f-des">
            Advanced storage solutions ensuring uninterrupted power supply.
          </p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon" />
          <p className="f-title">Energy Audits</p>
          <p className="f-des">
            In-depth energy audits to optimize system performance and ROI.
          </p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon" />
          <p className="f-title">Custom Solar Solutions</p>
          <p className="f-des">
            Tailored designs and installations to meet unique project needs.
          </p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon" />
          <p className="f-title">Smart Solar Integration</p>
          <p className="f-des">
            Integration with smart home systems for enhanced energy control.
          </p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon" />
          <p className="f-title">Project Management</p>
          <p className="f-des">
            End-to-end project management ensuring timely and quality execution.
          </p>
        </div>
      </div>
    </>
  );
};

export default SolarService;
