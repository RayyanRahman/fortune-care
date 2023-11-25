import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-icon">
          <img
            src="https://demo2.joomshaper.com/2020/fortune/templates/fortune/images/presets/preset1/logo.svg"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="nav-item">
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <li>
              <ScrollLink to="depart" smooth={true} duration={500}>
                Departments
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={500}>
                Services
              </ScrollLink>
            </li>
            <li className="a-tag">
              <ScrollLink to="footer" smooth={true} duration={500}>
                About Us
              </ScrollLink>
            </li>
          </ul>
        </div>

        <button className="contact">
          <ScrollLink to="footer" smooth={true} duration={500}>
            {" "}
            Contact Us
          </ScrollLink>
        </button>
      </div>
    </>
  );
}
export default Navbar;
