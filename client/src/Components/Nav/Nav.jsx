import React, { useEffect, useState } from 'react';
import './nav.css';
import Logo from '../../assets/images/logo.png';
import Logo1 from '../../assets/images/logo1.png';
import { RiMenu3Fill } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const Nav = ({ isScrolled, ToggleMenu }) => {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation(); // React Router's useLocation

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 30) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "service","project", "training", "careers"];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="header-bg"></div>
      <nav className={`${isScrolled?"scrolled":""}`}>
        <div className="logo">
          <img src={Logo1} alt="logo"></img>
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="nav-right">
          <div className="nav-links">
            <a
              href="/"
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              // onClick={(e) => handleSmoothScroll(e, "home")}
            >
              Home
            </a>


            <div className="dropdown service-dd">
              <Link
                to="/service"
                className={`nav-link dropdown-toggle ${activeSection === "service" ? "active" : ""}`}
                id="serviceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </Link>
              <ul className="dropdown-menu" aria-labelledby="serviceDropdown">
                <li>
                  <Link className="dropdown-item" to="/mechanical">
                    Mechanical Service
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/civil">
                    Civil Service
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/solar">
                    SolarPanel Service
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/training">
                    Training Academy
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/software">
                    Software Development
                  </Link>
                </li>
              </ul>
            </div>


            
            {/* <Link
              to="/service"
              className={`nav-link ${activeSection === "service" ? "active" : ""}`}
            >
              Service
            </Link> */}
            <Link
              to="/Training"
              className={`nav-link ${activeSection === "training" ? "active" : ""}`}
            >
              Training
            </Link>
            <Link
              to="/project"
              className={`nav-link ${activeSection === "project" ? "active" : ""}`}
            >
              Projects
            </Link>
            
            <Link
              to="/careers"
              className={`nav-link ${activeSection === "careers" ? "active" : ""}`}
            >
              Careers
            </Link>
            <a
              href="#about"
              className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              onClick={(e) => handleSmoothScroll(e, "about")}
            >
              About
            </a>
          </div>
        </div>
        <div className="toggler">
          <RiMenu3Fill onClick={(e) => ToggleMenu(e)} />
        </div>
      </nav>
    </>
  );
};

export default Nav;
