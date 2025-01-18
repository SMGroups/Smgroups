import React from 'react'
import './training.css'
import { IoSettingsOutline } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Training = () => {
  return (
    <section className="training" id='training'>
        <div className="titles">
            <p className="training-title">Training Programs</p>
            <p className="training-subtitle">Comprehensive training solutions to enhance your skills and advance your career</p>
            <div className="blue-line"></div>
        </div>
        <div className="training-boxes row container-fluid">
            
                <div className="training-box" data-aos="fade-up">
                    <div className="icon-box">
                        <IoSettingsOutline />
                    </div>
                    <p className="t-title">Mechanical Training</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>AutoCAD</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>SolidWorks</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Catia</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Creo</p>
                </div>
      

            
                <div className="training-box" data-aos="fade-up">
                    <div className="icon-box">
                        <FaBuilding />
                    </div>
                    <p className="t-title">Civil Training</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Vray</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>SketchUp</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Blender</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>AutoCAD Civil 3D</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Rivit</p>
                </div>

                <div className="training-box" data-aos="fade-up">
                    <div className="icon-box">
                        <FaCode />
                    </div>
                    <p className="t-title">EEE & ECE Training</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>ECAD</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>PLC</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>PCB</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Web Design</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>MatLab</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Arcade</p>
                </div>

                <div className="training-box" data-aos="fade-up">
                    <div className="icon-box">
                        <FaCode />
                    </div>
                    <p className="t-title">CSE Training</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Gen AI</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Java FullStack</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Web Development</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Cyber Security</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>UI/UX Design</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Cloud Computing</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Flutter development</p>
                    {/* <p className="t-content"><FaCircleCheck className='list-icon'/>Programming languages <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(c,c++,Python,Java,Javascript)</p> */}
                </div>

                <div className="training-box" data-aos="fade-up">
                    <div className="icon-box">
                        <FaCode />
                    </div>
                    <p className="t-title">BioMedical Training</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>MatLab</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Medical Coding</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>ECG, EMG, EEG</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Echo</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Multipara Monitor</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Abj Analyzer</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Defibrillator</p>
           
                </div>
                
                <div className="training-box" data-aos="fade-up">
                    <div className="icon-box">
                        <FaCode />
                    </div>
                    <p className="t-title">Aeronautical Training</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Catia</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Creo</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>AutoCAD</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Solidworks</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>NX</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Hypermesh</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>Ansys</p>
                    <p className="t-content"><FaCircleCheck className='list-icon'/>3D Experience</p>
                    
           
                </div>
          
            
        </div>
    </section>
  )
}

export default Training