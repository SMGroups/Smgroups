import React from 'react';
import Carousel from 'react-multi-carousel';
import './Team.css'
import { IoIosMail } from "react-icons/io";
import 'react-multi-carousel/lib/styles.css';
import img1 from '../../assets/images/team/hari.jpeg'
import img2 from '../../assets/images/team/sneka.jpeg'
import img3 from '../../assets/images/team/guberan.jpeg'
import img4 from '../../assets/images/team/sankar.jpeg'

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
          <div className="blue-line mb-4" ></div>
          <p className="project-description">
            "United by passion, driven by purpose – meet the people who bring our vision to life."
          </p>
        </div>
      </section>
      <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        showDots
        arrows={false}
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
            <h5 className="text-lg font-semibold">HARIHARAN L</h5>
            <p className="text-sm text-gray-600">DESIGN DESIGNER</p>
            <p className="text-sm text-gray-600 mail"><IoIosMail className='icon'/>samjayakaran155@gmail.com</p>
          </div>

          <div
            className="team-card p-4 text-center"
          >
            <img
              src={img2}
              alt='Sneka'
              className="mx-auto mb-4"
            />
            <h5 className="text-lg font-semibold">SNEKA V</h5>
            <p className="text-sm text-gray-600">SOFTWARE TRAINER</p>
            <p className="text-sm text-gray-600 mail"><IoIosMail className='icon'/>snekav99@gmail.com</p>
          </div>

          <div
            className="team-card p-4 text-center"
          >
            <img
              src={img3}
              alt='GUBERAN'
              className="mx-auto mb-4"
            />
            <h5 className="text-lg font-semibold">GUBERAN S.M</h5>
            <p className="text-sm text-gray-600">DESIGN ENGINEER</p>
            <p className="text-sm text-gray-600 mail"><IoIosMail className='icon'/>thesmgroups@gmail.com</p>
          </div>

          <div
            className="team-card p-4 text-center"
          >
            <img
              src={img4}
              alt='Hariharan'
              className="mx-auto mb-4"
            />
            <h5 className="text-lg font-semibold">SANKARGANESH</h5>
            <p className="text-sm text-gray-600">FOUNDER & DIRECTOR</p>
            <p className="text-sm text-gray-600  mail"><IoIosMail className='icon'/>thesmgroups@gmail.com</p>
          </div>

      </Carousel>
    </div>
  );
};

export default Team;
