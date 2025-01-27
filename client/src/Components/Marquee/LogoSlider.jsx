import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/images/clients/client1.png';
import img2 from '../../assets/images/clients/client2.jpg';
import img3 from '../../assets/images/clients/client3.jpg';
import img4 from '../../assets/images/clients/client4.jpg';
import img5 from '../../assets/images/clients/client5.webp';
import img6 from '../../assets/images/clients/client6.jpg';
import project2 from '../../assets/images/projects/project2.jpg';
import project3 from '../../assets/images/projects/project3.jpg';
import project5 from '../../assets/images/projects/project5.jpg';
import project6 from '../../assets/images/projects/project6.jpeg';
import project7 from '../../assets/images/projects/project7.jpeg';

// Import the react-slick carousel package
import Slider from 'react-slick';

// Import slick carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import './Marquee.css';

const LogoSlider = () => {

  const projectImages = [
    { src: project6, alt: 'Project 1' },
    { src: project7, alt: 'Project 4' },
    { src: project2, alt: 'Project 2' },
    { src: project3, alt: 'Project 3' },
    { src: project5, alt: 'Project 5' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className='LogoSlider'>
      <div className="training">
        <div className="titles">
          <p className="training-title">Our Clients</p>
          <div className="blue-line"></div>
        </div>
      </div>
      <p className="project-description">
        We are proud to collaborate with renowned <span>industry leaders</span> 
        and <span>innovative firms</span> across various sectors. 
        Together, we drive excellence and deliver <span>cutting-edge solutions</span>.
      </p>

      {/* Logo Marquee Slider */}
      <Marquee speed={100} direction='right'>
        <img src={img1} alt="Company Logo 1" title="Company Logo" />
        <img src={img2} alt="Company Logo 2" title="Company Logo" />
        <img src={img3} alt="Company Logo 3" title="Company Logo" />
        <img src={img4} alt="Company Logo 4" title="Company Logo" />
        <img src={img5} alt="Company Logo 5" title="Company Logo" />
        <img src={img6} alt="Company Logo 6" title="Company Logo" />
        <img src={img1} alt="Company Logo 1" title="Company Logo" />
        <img src={img2} alt="Company Logo 2" title="Company Logo" />
        <img src={img3} alt="Company Logo 3" title="Company Logo" />
        <img src={img4} alt="Company Logo 4" title="Company Logo" />
        <img src={img5} alt="Company Logo 5" title="Company Logo" />
        <img src={img6} alt="Company Logo 6" title="Company Logo" />
      </Marquee>

      {/* Project Image Slider */}
      <div className="projects-slider-container" id='project'>
      <div className="training">
        <div className="titles">
          <p className="training-title">Our Projects</p>
          <div className="blue-line"></div>
        </div>
      </div>
      <p className="project-description">
        We serve across various domains including <span>Mechanical</span>, <span>Civil</span>, 
        <span>Software</span>, <span>Electrical</span>, and more. Explore our <span>site</span>, 
        <span>product</span>, and <span>project images</span> showcasing our expertise.
      </p>
        <Slider {...settings}>
          {projectImages.map((project, index) => (
            <div key={index}>
              <img
                src={project.src}  // Correct reference to the imported image
                alt={project.alt}
                className="project-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LogoSlider;
