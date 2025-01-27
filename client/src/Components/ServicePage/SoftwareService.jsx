import React from 'react';
import './Services.css';
import { FaCheck } from "react-icons/fa6";
import figma from '../../assets/images/Software/figma.png';
import flutter from '../../assets/images/Software/flutter.png';
import react from '../../assets/images/Software/react.png';
import node from '../../assets/images/Software/node.png';
import java from '../../assets/images/Software/java.png';
import python from '../../assets/images/Software/python.png';
import webDev from '../../assets/images/Service/web.jpg';
import webDesign from '../../assets/images/Service/uiux.jpg';
import androidDev from '../../assets/images/Service/android.jpg';

const SoftwareService = () => {
  return (
    <>
      <section className="training" id="training">
        <div className="titles">
          <p className="training-title">Software Development Services</p>
          <p className="training-subtitle">Innovative and scalable software solutions for modern businesses</p>
          <div className="blue-line"></div>
        </div>
      </section>

      <div className="row mechanical">
  <div className="col col-12 col-md-12 col-lg-6 mechanical-left">
    <div className="mechanical-left-inner">
      <p className="s-title">Web Design & Development</p>
      <p className="s-Content"><FaCheck className="list-icon"/><span>Responsive Web Design: </span>Crafting visually appealing and user-friendly designs that adapt seamlessly to any device.</p>
      <p className="s-Content"><FaCheck className="list-icon"/><span>Full-Stack Development: </span>Providing comprehensive front-end and back-end solutions using the latest frameworks and technologies.</p>
      <p className="s-Content"><FaCheck className="list-icon"/><span>E-commerce Solutions: </span>Building secure and scalable e-commerce platforms tailored to your business needs.</p>
      <p className="s-Content"><FaCheck className="list-icon"/><span>SEO Optimization: </span>Enhancing website visibility and ranking with proven SEO techniques for improved online presence.</p>
      <p className="s-Content"><FaCheck className="list-icon"/><span>API Integration: </span>Seamlessly connecting third-party APIs to enhance functionality and user experience.</p>
      <p className="s-Content"><FaCheck className="list-icon"/><span>Website Maintenance: </span>Offering ongoing support to keep your website updated and running smoothly.</p>
      <p className="s-Content"><FaCheck className="list-icon"/><span>Performance Audits: </span>Identifying and fixing performance bottlenecks for a faster, smoother website experience.</p>
      <p className="s-Content"><FaCheck className="list-icon"/><span>Custom Integrations: </span>Tailoring unique functionalities to suit your specific business needs.</p>
    </div>
  </div>

  <div className="col col-12 col-md-12 col-lg-6 mechanical-right">
    <div>
      <div className="softwares">
        <p className="s-title text-center pb-3">Software Expertise</p>
        <div className="software-box">
          <div className="software">
            <img src={react} alt="Web Design" />
            <p>React</p>
          </div>
          <div className="software">
            <img src={node} alt="Web Development" />
            <p>Node</p>
          </div>
          <div className="software">
            <img src={java} alt="Android Development" />
            <p>Java</p>
          </div>
          <div className="software">
            <img src={python} alt="Android Development" />
            <p>Python</p>
          </div>
          <div className="software">
            <img src={flutter} alt="Android Development" />
            <p>Flutter</p>
          </div>
          <div className="software">
            <img src={figma} alt="Android Development" />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="sheetmetal">
  <h1 className="sheet">Mobile Application Development</h1>
  <div className="row sheet-con">
    <div className="col col-12 col-md-12 col-lg-6">
      <p className="sheet-des">
        From conceptualization to deployment, our mobile application development services deliver feature-rich, scalable, and robust apps for both Android and iOS platforms. We ensure a seamless user experience, optimized performance, and enhanced engagement.
      </p>
      <p className="s-Content"><FaCheck className="list-icon"/>Custom App Development tailored to your business needs.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Cross-Platform Compatibility ensuring wider reach and functionality.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Integration of advanced features such as AI, AR, and analytics.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Rigorous testing for a bug-free and secure app experience.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>User Analytics Integration for tracking app performance and user behavior.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Push Notification Systems to keep users engaged.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Cloud Integration for scalable and seamless app operations.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Post-Launch Support for continuous app improvement and updates.</p>
    </div>
    <div className="col col-12 col-md-12 col-lg-6 mech-pic">
      <img src={androidDev} alt="Android Development" />
    </div>
  </div>
</div>

<div className="sheetmetal">
  <h1 className="sheet">Web Development</h1>
  <div className="row sheet-con">
    <div className="col col-12 col-md-12 col-lg-6 mech-pic">
      <img src={webDev} alt="Web Development" />
    </div>
    <div className="col col-12 col-md-12 col-lg-6 pad-con">
      <p className="sheet-des">
        Our web development services deliver responsive, fast, and secure websites tailored to your business needs. We provide end-to-end development solutions to ensure your online presence is impactful and effective.
      </p>
      <p className="s-Content"><FaCheck className="list-icon"/>Custom Website Development for unique business requirements.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Responsive Design for optimal performance across devices.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Integration of CMS platforms like WordPress, Drupal, and more.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Performance Optimization to improve load times and user experience.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Website Security Implementation to protect user data.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Real-Time Data Integration for dynamic and interactive websites.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Accessibility Compliance to cater to diverse user groups.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Progressive Web App (PWA) Development for an app-like experience.</p>
    </div>
  </div>
</div>

<div className="sheetmetal">
  <h1 className="sheet">UI/UX Design</h1>
  <div className="row sheet-con">
    <div className="col col-12 col-md-12 col-lg-6 pad-con">
      <p className="sheet-des">
        We specialize in creating intuitive and visually appealing UI/UX designs that ensure a seamless and engaging user experience. Our designs are focused on user satisfaction and business goals.
      </p>
      <p className="s-Content"><FaCheck className="list-icon"/>User-Centric Design tailored to meet user expectations and behavior.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Wireframing and Prototyping for clear design visualization.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Interactive Designs for enhanced user engagement.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Design Systems ensuring consistency across all interfaces.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Usability Testing for identifying potential design flaws.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Color Psychology Integration for impactful visual aesthetics.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Accessibility-First Approach to cater to diverse audiences.</p>
      <p className="s-Content"><FaCheck className="list-icon"/>Mobile-First Design Strategy for better responsiveness.</p>
    </div>
    <div className="col col-12 col-md-12 col-lg-6 mech-pic">
      <img src={webDesign} alt="UI/UX Design" />
    </div>
  </div>
</div>





      <div className="mech-feature">
        <div className="f-box">
          <FaCheck className="f-icon"/>
          <p className="f-title">Custom Software Solutions</p>
          <p className="f-des">Tailor-made software designed to meet unique business requirements and workflows.</p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon"/>
          <p className="f-title">UI/UX Design</p>
          <p className="f-des">Creating intuitive and visually appealing interfaces to enhance user engagement.</p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon"/>
          <p className="f-title">Maintenance & Support</p>
          <p className="f-des">Comprehensive support and maintenance to ensure seamless operation and updates.</p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon"/>
          <p className="f-title">Cloud Integration</p>
          <p className="f-des">Secure cloud-based solutions to enhance data accessibility and collaboration.</p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon"/>
          <p className="f-title">E-commerce Development</p>
          <p className="f-des">Building robust e-commerce platforms with integrated payment gateways and analytics.</p>
        </div>
        <div className="f-box">
          <FaCheck className="f-icon"/>
          <p className="f-title">API Development & Integration</p>
          <p className="f-des">Developing and integrating APIs for seamless third-party service integration.</p>
        </div>
      </div>
    </>
  );
};

export default SoftwareService;
