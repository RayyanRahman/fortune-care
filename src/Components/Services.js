import React from "react";
import "../Styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faCapsules,
  faUserDoctor,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="main-container" id="services">
        <h2>High standard doorstep healthcare services for seniors citizens</h2>
        <div className="services-container">
          <div className="services-items">
            <div className="itemss">
              <Link to="/medicine">
                <FontAwesomeIcon icon={faCapsules} beatFade size="2xl" />

                <h3>Order Medicine</h3>
              </Link>
              <p>
                Make friends with other seniors and never feel alone. Friendship
                and programs.
              </p>
            </div>
            <div className="itemss">
              <Link to="/medicine">
                <FontAwesomeIcon icon={faNotesMedical} beatFade size="2xl" />

                <h3>Medicine Reminder</h3>
              </Link>
              <p>
                Make friends with other seniors and never feel alone. Friendship
                and programs.
              </p>
            </div>
          </div>
          <div className="services-items">
            <div className="itemss">
              <Link to="/nearby">
                <FontAwesomeIcon icon={faUserDoctor} beatFade size="2xl" />

                <h3>Consult Online</h3>
              </Link>
              <p>
                Make friends with other seniors and never feel alone. Friendship
                and programs.
              </p>
            </div>
            <div className="itemss">
              <Link to="/nearby">
                <FontAwesomeIcon icon={faHospital} beatFade size="2xl" />

                <h3>Near By Doctors</h3>
              </Link>
              <p>
                Make friends with other seniors and never feel alone. Friendship
                and programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
