import React from 'react'
import Register from './Register'
import './Contact.css'
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className='pb-5'>
      <div className="training" id='contact'>
        <div className="titles">
            <p className="training-title">Contact Us</p>
            <div className="blue-line"></div>
        </div>
      </div>

      <div className="row">

        <div className="col col-12 col-md-12 col-lg-6 mr">
          <Register />
        </div>

        <div className="col col-12 col-md-12 col-lg-6 map-outer mr">
          <div className="map-box">
          <div className="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.353162888688!2d78.1154992750357!3d11.66936434208918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf148a6528a77%3A0x265969691a79cb8b!2sThe%20SM%20Groups!5e0!3m2!1sen!2sin!4v1736698465989!5m2!1sen!2sin" className='map' title='g-map'></iframe>
          </div>
          <div className="info-section">
              <p className="info-head">Address</p>
              <address>
              30/9, Chettiyar Thottam, Mullai Nagar, <br />
              3,Suramangalam Road,<br />
              Salem - 636005.
              </address>
              <p className="info-head">Enquiry</p>
              
              <div className="contact-det">
                    <p><MdPhoneInTalk className='Contact-icon'/>9486783278</p>
                    <p><IoIosMail className='Contact-icon'/>thesmgroups@gmail.com</p>
              </div>
          </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Contact