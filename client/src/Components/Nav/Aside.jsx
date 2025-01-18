import React from 'react';
import './aside.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const Aside = ({ isOpen, ToggleMenu }) => {
  const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault();  // Prevent default link behavior
    navigate(path); // Navigate to the path
    ToggleMenu(e); // Toggle the sidebar menu
  };

  return (
    <aside id="sidebar" aria-label="Sidebar Navigation" className={`expand ${isOpen ? "active" : ""}`}>
      <div className="cancel">
        <button type="button" aria-label="Close Sidebar">
          <IoClose className="toggler" onClick={ToggleMenu} />
        </button>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/" className="sidebar-link" onClick={(e) => handleNavigation(e, '/')}>
            <i className="fa-solid fa-user"></i>
            <span>Home</span>
          </Link>
        </li>

        <li className="sidebar-item">
          <Link to="/training" className="sidebar-link" onClick={(e) => handleNavigation(e, '/training')}>
            <i className="fa-solid fa-user"></i>
            <span>Training</span>
          </Link>
        </li>

        <li className="sidebar-item">
          <a
            href={"#"}
            className="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            data-bs-target="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="fa-solid fa-rectangle-list"></i>
            <span>Services</span>
          </a>
          <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
            <li className="sidebar-item">
              <Link to="/mechanical" className="sidebar-link" onClick={(e) => handleNavigation(e, '/mechanical')}>
                Design & Fabrication
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/civil" className="sidebar-link" onClick={(e) => handleNavigation(e, '/civil')}>
                Construction
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/training" className="sidebar-link" onClick={(e) => handleNavigation(e, '/training')}>
                Training Academy
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/mechanical" className="sidebar-link" onClick={(e) => handleNavigation(e, '/mechanical')}>
                Design Solution
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/software" className="sidebar-link" onClick={(e) => handleNavigation(e, '/software')}>
                Software Development
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/solar" className="sidebar-link" onClick={(e) => handleNavigation(e, '/solar')}>
                Solar & Engineering
              </Link>
            </li>
          </ul>
        </li>

        <li className="sidebar-item">
          <a
            href={"#"}
            className="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            data-bs-target="#auth2"
            aria-expanded="false"
            aria-controls="auth2"
          >
            <i className="fa-solid fa-circle-info"></i>
            <span>Support</span>
          </a>
          <ul id="auth2" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
            <li className="sidebar-item">
              <Link to="/careers" className="sidebar-link" onClick={(e) => handleNavigation(e, '/careers')}>
                Career
              </Link>
            </li>
            <li className="sidebar-item">
              <a href="#about" className="sidebar-link" >
                About Us
              </a>
            </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <a href="#contact" className="sidebar-link" >
            <i className="fa-solid fa-phone"></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
