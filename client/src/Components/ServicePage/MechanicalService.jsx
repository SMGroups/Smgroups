import React from 'react'
import './Services.css'
import { FaCheck } from "react-icons/fa6";
import autoCAD from '../../assets/images/Software/ac.png'
import sw from '../../assets/images/Software/sw.png'
import creo from '../../assets/images/Software/creo.png'
import catia from '../../assets/images/Software/catia.jpeg'
import mech1 from '../../assets/images/Service/mech1.jpeg'

const MechanicalService = () => {
  return (
    <>
    <section className="training" id='training'>
        <div className="titles">
            <p className="training-title">Mechanical Design Services</p>
            <p className="training-subtitle">Innovative solutions for complex mechanical engineering challenges</p>
            <div className="blue-line"></div>
        </div>
    </section>
    <div className="row mechanical">
        
        <div className="col col-12 col-md-12 col-lg-6 mechanical-left">
            <div className='mechanical-left-inner'>
                <p className="s-title">CAD Design & 3D Modeling</p>
                <p className="s-Content"><FaCheck className='list-icon'/><span>Software Mastery: </span>Proficient in industry-leading tools like AutoCAD, SolidWorks, Revit, Creo, and CATIA, ensuring every design meets the highest standards.</p>
                <p className="s-Content"><FaCheck className='list-icon'/><span>3D Modeling & Drafting: </span>From concept to creation, we specialize in detailed 3D modeling and accurate drafting tailored to your requirements.</p>
                <p className="s-Content"><FaCheck className='list-icon'/><span>Planning & Analysis: </span>Offering comprehensive project planning, feasibility studies, and simulation-based performance evaluations to optimize your designs.</p>
                <p className="s-Content"><FaCheck className='list-icon'/><span>Manufacturing Excellence: </span>Providing end-to-end solutions, including prototyping, tooling, and production planning, to bring your ideas to life.</p>
                <br />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We pride ourselves on our versatility and capability to handle all types of mechanical engineering projects, no matter the complexity or scale. Whether it’s conceptualizing a new design, reverse engineering existing components, or delivering turnkey solutions, we have the skills and resources to meet your needs. Our expertise spans across industries, enabling us to undertake projects in automotive, aerospace, industrial machinery, consumer goods, and more.</p>
            </div>
        </div>

        <div className="col col-12 col-md-12 col-lg-6 mechanical-right">
            <div>
                <div className="softwares">
                    <p className="s-title text-center pb-3">Software Expertise</p>
                    <div className="software-box">
                        <div className="software">
                            <img src={autoCAD} alt="AutoCAD" />
                            <p>AutoCAD</p>
                        </div>
                        <div className="software">
                            <img src={sw} alt="AutoCAD" />
                            <p>SolidWorks</p>
                        </div>
                        <div className="software">
                            <img src={catia} alt="AutoCAD" />
                            <p>catia</p>
                        </div>
                        <div className="software">
                            <img src={creo} alt="AutoCAD" />
                            <p>creo</p>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    </div>



    {/* SheetMetal Design Content */}

    <div className="sheetmetal">
        <h1 className="sheet">Sheet Metal Product Design</h1>
        <div className="row sheet-con">
            <div className="col col-12 col-md-12 col-lg-6">
                <p className="sheet-des">
                Our expertise in sheet metal product design allows us to transform your ideas into precise, functional designs with meticulous attention to detail. From initial concepts and rough sketches to comprehensive engineering drawings and realistic 3D models, we ensure every aspect of the design is optimized for performance, manufacturability, and cost-effectiveness. Leveraging advanced tools and techniques, we streamline workflows, enhance design efficiency, and accelerate modification lead times, all while refining aesthetics to improve usability and visual appeal. Our innovative and tailored solutions deliver high-quality outcomes that meet the highest industry standards.</p>
                <p className="s-Content"><FaCheck className='list-icon'/>Minimize product and fabrication costs through efficient design services.</p>
                <p className="s-Content"><FaCheck className='list-icon'/>Convert CAD designs into 3D visualizations for better understanding and review of the finished product.</p>
                <p className="s-Content"><FaCheck className='list-icon'/>Accelerate lead times for product modifications in sheet metal fabrication.</p>
                <p className="s-Content"><FaCheck className='list-icon'/>Optimize designs for cost reduction, ensuring first-time quality, enhanced usability, and improved visual appeal.</p>
            </div>
            <div className="col col-12 col-md-12 col-lg-6 mech-pic">
                <img src={mech1} alt="hi" />
            </div>
        </div>


    </div>

    <div className="mech-feature">
        <div className="f-box">
            <FaCheck className='f-icon'/>
            <p className="f-title">Architectural Metal Product Design</p>
            <p className="f-des">We craft innovative architectural metal designs that blend functionality with aesthetics, catering to various applications and industry standards.</p>
        </div>
        <div className="f-box">
            <FaCheck className='f-icon'/>
            <p className="f-title">Fire Protection & Metal Equipment Design</p>
            <p className="f-des">Our designs for fire protection systems and specialized metal equipment ensure reliability, safety, and compliance with the highest industry standards.</p>
        </div>
        <div className="f-box">
            <FaCheck className='f-icon'/>
            <p className="f-title">Fabricated Metal Design</p>
            <p className="f-des">From concept to completion, we excel in designing fabricated metal components that are both robust and efficient for diverse applications.</p>
        </div>
        <div className="f-box">
            <FaCheck className='f-icon'/>
            <p className="f-title">Alloy Product Design</p>
            <p className="f-des">We deliver exceptional designs for alloy products, focusing on durability, performance, and customization to suit unique requirements.</p>
        </div>
        <div className="f-box">
            <FaCheck className='f-icon'/>
            <p className="f-title">Metal Furniture Product Design</p>
            <p className="f-des">Our team designs metal furniture that combines modern aesthetics with structural strength, offering a perfect balance of style and functionality.</p>
        </div>
        <div className="f-box">
            <FaCheck className='f-icon'/>
            <p className="f-title">Bill of Materials (BOM)</p>
            <p className="f-des">We provide detailed and accurate Bill of Materials (BOM) documentation to ensure streamlined production processes and cost-effective project execution.</p>
        </div>
    </div>

    </>
    
  )
}

export default MechanicalService