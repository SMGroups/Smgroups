import React from 'react';
import Carousel from 'react-multi-carousel';
import './Team.css'
import { IoIosMail } from "react-icons/io";
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/images/team/hari.jpeg'
import img2 from '../../assets/images/team/sneka.jpeg'

const Team = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="team-container p-4">
        <section className="training" id="training">
        <div className="titles">
          <p className="training-title">Meet Our Team</p>
          <p className="training-subtitle">
            "United by passion, driven by purpose – meet the people who bring our vision to life."
          </p>
          <div className="blue-line"></div>
        </div>
      </section>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        showDots
        arrows={true}
        renderDotsOutside={true}
        customDotListStyle={{ marginTop: '10px' }}
      >

          <div
            className="team-card p-4 text-center"
          >
            <img
              src={img1}
              alt='Hariharan'
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">HARIHARAN L</h3>
            <p className="text-sm text-gray-600">AERONAUTICAL DESIGNER</p>
            <p className="text-sm text-gray-600"><IoIosMail className='icon'/>samjayakaran155@gmail.com</p>
          </div>

          <div
            className="team-card p-4 text-center"
          >
            <img
              src={img2}
              alt='Sneka'
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">SNEKA V</h3>
            <p className="text-sm text-gray-600">TECHNICAL TRAINER</p>
            <p className="text-sm text-gray-600"><IoIosMail className='icon'/>snekav99@gmail.com</p>
          </div>

          <div
            className="team-card p-4 text-center"
          >
            <img
              src={img1}
              alt='Hariharan'
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">SANKAR GANESH</h3>
            <p className="text-sm text-gray-600">FOUNDER & DIRECTOR</p>
            <p className="text-sm text-gray-600"><IoIosMail className='icon'/>thesmgroups@gmail.com</p>
          </div>

      </Carousel>
    </div>
  );
};

export default Team;
