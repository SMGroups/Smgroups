import React from 'react'
import './Services.css'
import { FaCheck } from "react-icons/fa6";
import autocadCivil from '../../assets/images/Software/ac.png';
import sketchUp from '../../assets/images/Software/su.png';
import revitCivil from '../../assets/images/Software/revit.png';
import civil1 from '../../assets/images/Service/civil1.jpg';

const CivilService = () => {
  return (
    <>
      <section className="training" id="training">
        <div className="titles">
          <p className="training-title">Civil Design Services</p>
          <p className="training-subtitle">Comprehensive Solutions for Modern Infrastructure Development</p>
          <div className="blue-line"></div>
        </div>
      </section>

      <div className="row mechanical">
        <div className="col col-12 col-md-12 col-lg-6 mechanical-left">
          <div className="mechanical-left-inner">
            <p className="s-title">Planning & Design</p>
            <p className="s-Content"><FaCheck className='list-icon' /><span>Conceptual Planning:</span> From initial concepts to final designs, we excel in creating layouts that maximize efficiency and functionality.</p>
            <p className="s-Content"><FaCheck className='list-icon' /><span>Structural Design:</span> Offering precise structural calculations and design services to ensure stability and safety.</p>
            <p className="s-Content"><FaCheck className='list-icon' /><span>Site Analysis:</span> Conducting detailed site evaluations and feasibility studies for optimal design and construction solutions.</p>
            <p className="s-Content"><FaCheck className='list-icon' /><span>Sustainable Design:</span> Implementing eco-friendly solutions that align with modern sustainability standards.</p>
            <br />
            <p> 
              Our civil services encompass a wide range of expertise, from detailed site planning and advanced design strategies to efficient construction management. 
              Whether you need residential, commercial, or industrial solutions, we provide tailor-made services to meet your unique requirements. 
              Our team employs the latest tools and technology to deliver results that combine durability, aesthetics, and cost-effectiveness, making your vision a reality.
            </p>
          </div>
        </div>

        <div className="col col-12 col-md-12 col-lg-6 mech-right">
          <div>
            <div className="softwares">
              <p className="s-title text-center pb-3">Software Expertise</p>
              <div className="software-box">
                <div className="software">
                  <img src={autocadCivil} alt="AutoCAD" />
                  <p>AutoCAD</p>
                </div>
                <div className="software">
                  <img src={sketchUp} alt="SketchUp" />
                  <p>SketchUp</p>
                </div>
                <div className="software">
                  <img src={revitCivil} alt="Revit" />
                  <p>Revit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Planning Content */}
      <div className="sheetmetal">
        <h1 className="sheet">3D Planning and Visualization</h1>
        <div className="row sheet-con">
          <div className="col col-12 col-md-12 col-lg-6">
            <p className="plan-des">
              Our advanced 3D planning services provide clients with a clear visualization of their projects before construction begins. Using cutting-edge software, we create realistic and interactive 3D models to enhance understanding, streamline decision-making, and ensure precision at every stage.
            </p>
            <p className="s-Content"><FaCheck className='list-icon' />Convert 2D layouts into immersive 3D models for better insights and reviews.</p>
            <p className="s-Content"><FaCheck className='list-icon' />Optimize designs to reduce construction costs and improve material utilization.</p>
            <p className="s-Content"><FaCheck className='list-icon' />Enable clients to explore designs with detailed renders and walkthroughs.</p>
          </div>
          <div className="col col-12 col-md-12 col-lg-6 civil-pic">
            <img src={civil1} alt="3D Planning" />
          </div>
        </div>
      </div>

      {/* Civil Features */}
      <div className="mech-feature">
        <div className="f-box">
          <FaCheck className='f-icon' />
          <p className="f-title">Architectural Design</p>
          <p className="f-des">Innovative architectural solutions that blend functionality with visual appeal for residential and commercial projects.</p>
        </div>
        <div className="f-box">
          <FaCheck className='f-icon' />
          <p className="f-title">Urban Planning</p>
          <p className="f-des">Comprehensive urban planning services for sustainable and well-structured developments.</p>
        </div>
        <div className="f-box">
          <FaCheck className='f-icon' />
          <p className="f-title">Construction Management</p>
          <p className="f-des">Efficient management of construction projects, ensuring timelines, budgets, and quality standards are met.</p>
        </div>
        <div className="f-box">
          <FaCheck className='f-icon' />
          <p className="f-title">Interior Design</p>
          <p className="f-des">Creative interior design services that elevate spaces with style and functionality.</p>
        </div>
        <div className="f-box">
          <FaCheck className='f-icon' />
          <p className="f-title">Landscape Design</p>
          <p className="f-des">Eco-friendly and aesthetically pleasing landscape designs tailored to your outdoor space requirements.</p>
        </div>
        <div className="f-box">
          <FaCheck className='f-icon' />
          <p className="f-title">Bill of Materials (BOM)</p>
          <p className="f-des">Accurate and detailed BOM documentation to streamline construction and project execution.</p>
        </div>
      </div>
    </>
  );
}

export default CivilService;
