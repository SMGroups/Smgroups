import React from 'react'
import './Feature.css'
import { FaRegClock } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

const Feature = () => {
  return (
    <div className='Feature-container mt-5'>
    <section className="service">
        <div className="titles">
            <p className="service-title">Why Choose Us ?</p>
            <div className="blue-line"></div>
        </div>
      

    <div className="row feature">

        <div className="col col-12 col-md-6 col-lg-4 feature-box">
            <div className="feature-icon"><FaRegClock /></div>
            <p className="feature-head">Real-Time Expert as Trainers</p>
            <p className="feature-text">At SM Group, you will learn from industry experts eager to share their knowledge with learners. You will also receive personal mentorship from the experts themselves, guiding you throughout your learning journey.</p>
        </div>
        <div className="col col-12 col-md-6 col-lg-4 feature-box">
            <div className="feature-icon"><MdOutlineComputer /></div>
            <p className="feature-head">Live Projects</p>
            <p className="feature-text">At SM Group, you will gain hands-on experience by working on live industry projects, bridging the gap between theoretical learning and practical application, and preparing you for real-world challenges.</p>
        </div>
        <div className="col col-12 col-md-6 col-lg-4 feature-box">
            <div className="feature-icon"><FaRegMoneyBillAlt /></div>
            <p className="feature-head">Affordable Fees</p>
            <p className="feature-text">SM Group offers courses with affordable fees, making high-quality learning accessible to a wider audience. We ensure that you get the best value for your investment in your future.</p>
        </div>
        <div className="col col-12 col-md-6 col-lg-4 feature-box">
            <div className="feature-icon"><FaCertificate /></div>
            <p className="feature-head">Certification</p>
            <p className="feature-text">Upon completion of the program, you will receive certification from SM Group, along with an ISO certification and Skill India certificate. These credentials will enhance your professional profile and boost your career prospects.</p>
        </div>
        <div className="col col-12 col-md-6 col-lg-4 feature-box">
            <div className="feature-icon"><IoDocumentTextOutline /></div>
            <p className="feature-head">Flexibility</p>
            <p className="feature-text">We offer flexible learning options, allowing you to balance your professional and personal commitments. You can choose from various modes such as online, hybrid, and weekend classes based on your convenience.</p>
        </div>
        <div className="col col-12 col-md-6 col-lg-4 feature-box">
            <div className="feature-icon"><FaTrophy /></div>
            <p className="feature-head">Placement Support</p>
            <p className="feature-text">SM Group provides dedicated placement support, helping you secure opportunities with leading companies. Our strong network with top industries ensures that you have access to excellent job prospects after completing the program.</p>
        </div>

    </div>
    </section>
    </div>
  )
}

export default Feature
