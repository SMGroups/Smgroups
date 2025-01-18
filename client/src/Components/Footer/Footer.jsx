import React from 'react'
import logo from '../../assets/images/logo.png'
import './footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className='pt-5'>
      <div className='footer-container'>

      
          <div className="foot-conatiner">
            <p className='foot-head'>CORE SERVICES</p>
            <p><Link to={'/mechanical'} className='foot-body'>Design & Fabrication</Link></p>
            <p><Link to={'/civil'} className='foot-body'>Construction</Link></p>
            <p><Link to={'/mechanical'} className='foot-body'>Design Solution</Link></p>
            <p><Link to={'/software'} className='foot-body'>Software Development</Link></p>
            <p><Link to={'/solar'} className='foot-body'>Solar & Engineering</Link></p>
            <p><Link to={'/training'} className='foot-body'>Training Academy</Link></p>           
          </div>

          <div className="foot-conatiner">
            <p className='foot-head'>TRAINING SERVICES</p>
            <p><Link to={'/training'} className='foot-body'>Internship</Link></p>
            <p><Link to={'/training'} className='foot-body'>Webinar</Link></p>
            <p><Link to={'/training'} className='foot-body'>Workshop</Link></p>
            <p><Link to={'/training'} className='foot-body'>InPlant Training</Link></p>
            <p><Link to={'/training'} className='foot-body'>Guest Lecture</Link></p>
            <p><Link to={'/training'} className='foot-body'>Design Training</Link></p>
            
            
          </div>
        
          <div className="foot-conatiner">
            <p className='foot-head'>COMPANY</p>
            <p><Link to={'#service'} className='foot-body'>Service</Link></p>
            <p><Link to={'/careers'} className='foot-body'>Career</Link></p>
            <p><a href={'#about'} className='foot-body'>About Us</a></p>
            <p><a href={'#contact'} className='foot-body'>Contact Us</a></p>
          </div>
          
          <div className="foot-conatiner faq">
            <p className=' foot-head'>ADDRESS</p>
            <p className='text-start foot-body'>30/9, Chettiyar Thottam, Mullai Nagar, </p>
             <p> 3,Suramangalam Road, </p>
              <p>Salem - 636005 </p>
              <p>PH : 9486783278 </p>
              <p>Mail : thesmgroupsnm@gmail.com</p>
          </div>

        </div>

        <div className="stripe mt-5"></div>

        <div className="cloudi5">
          <div className="cloudi5-left">
            <img src={logo} alt="Logo" />
            <p>We are committed to excellence in everything we do. From the quality of our work to the level of service we provide, we strive for nothing less than perfection.</p>
          </div>
          <div className="cloudi5-right">
            <p className="foot-head">SOCIAL MEDIA</p>
            <p>Follow us on social media to find out the latest updates on our progress</p>
            <div className="icons">
              <a href="https://www.linkedin.com/in/the-sm-groups-nm-33133a33b/"><FaLinkedinIn className='s-icon'/></a>
              <a href="https://www.facebook.com/people/The-SM-Groups/61557614562116/"><FaFacebookF className='s-icon'/></a>
              <a href="https://www.instagram.com/the_smgroups/"><FaInstagram className='s-icon'/></a>
            </div>
          </div>
        </div>

        <div className="copyright p-3 w-100 text-center">
          &copy; SM Groups {new Date().getFullYear()}. All Rights Reserved.
        </div>
    </footer>
  )
}

export default Footer