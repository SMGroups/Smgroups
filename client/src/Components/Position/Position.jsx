import React from "react";
import "./Position.css";

const Position = () => {
  return (
    <>
      <section className="training vm">
        <div className="titles">
          <p className="training-title">Open Positions</p>
          <div className="blue-line"></div>
        </div>
      </section>

      <div className="availables">
        <div className="available">
          <p className="role">
            Welder, Civil Engineers -Site Engineers & Design Engineers Solar
            Technicians
          </p>
          <div className="available-title">Skills</div>
          <ul>
            <li><p className="Skills">Diploma or Graduate in relevant fields</p></li>
            <li><p className="Skills">Technical expertise and problem-solving abilities.</p></li>
          </ul>

          <div className="available-title">Experience</div>
          <ul>
            <li><p className="experience"> Both freshers and experienced professionals are welcome to apply.</p></li>
          </ul>

          <div className="available-title">Description</div>
          <ul><li><p className="description">
          We are excited to expand our dynamic team and invite talented professionals to join us in various roles, including Welder, Civil Engineers (Site Engineers & Design Engineers), and Solar Technicians. We are seeking individuals who are passionate about their fields and ready to grow with us.
          </p></li></ul>

          <div className="available-title">Responsibilities</div>
          <ul>
            <li><p className="description">Collaborate on innovative projects and ensure timely execution.</p></li>
            <li><p className="description">Contribute to design, development, and site operations.</p></li>
            <li><p className="description">Maintain quality standards and safety measures.</p></li>
          </ul>


          <div className="apply-con">
          <a href="https://forms.gle/zizUdVAJTuxE9qoA6" className="apply" target="_blank" rel="noreferrer">
            Apply Now
          </a>
          </div>
        </div>

        <div className="available">
          <p className="role">Graphic Designer</p>
          <div className="available-title">Skills</div>
          <ul>
            <li><p className="skills">Proficiency in graphic design tools and software</p></li>
            <li><p className="skills">A creative mindset with attention to detail</p></li>
            <li><p className="skills">Ability to adapt and learn new techniques quickly</p></li>
            <li><p className="skills">Strong teamwork and communication skills</p></li>
          </ul>
          
          <div className="available-title">Experience</div>
          <ul>
            <li><p className="experience">Fresh graduates are also Apply</p></li>
          </ul>
          <div className="available-title">Description</div>
          <ul>
            <li><p className="description">
            We are seeking a creative and motivated Junior Graphic Designer with
            a strong willingness to learn and grow in the field of design. As a
            beginner in the industry, you will have the opportunity to
            collaborate with senior designers and contribute to various design
            projects. You will work on creating visually appealing and engaging
            designs across digital and print media while continuously adapting
            to new design trends and technologies.
          </p></li>
          </ul>
          <div className="apply-con">
          <a href="https://forms.gle/zizUdVAJTuxE9qoA6" className="apply" target="_blank"  rel="noreferrer">
            Apply Now
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Position;
