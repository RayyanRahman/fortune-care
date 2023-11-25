import React from "react";
import Iframe from 'react-iframe';
import "../Styles/Nearby.css";

function Nearby(){
    return(
        <>
        <div className="nearby-container">
            <div className="doctors-list">
                <div className="doctors">
                    <img src="https://www.svgrepo.com/show/48298/doctor.svg" alt="doctor" />
                    <h3>Dr William Joseph</h3>
                    <p>Cardio Surgeon</p>
                    <p>At California Hospital</p>
                    <div className="call">Consult Online</div>
                </div>
                <div className="doctors">
                    <img src="https://www.svgrepo.com/show/48298/doctor.svg" alt="doctor" />
                    <h3>Dr Thomas Henry</h3>
                    <p>Medicine Specialist</p>
                    <p>At California Hospital</p>
                    <div className="call">Consult Online</div>
                </div>
                <div className="doctors">
                    <img src="https://www.svgrepo.com/show/48298/doctor.svg" alt="doctor" />
                    <h3>Dr Charles Tom</h3>
                    <p>Neuro Surgeon</p>
                    <p>At California Hospital</p>
                    <div className="call">Consult Online</div>
                </div>
            </div>
            <div className="map-div">
            <Iframe
      url="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed"
      width="80%"
      height="50%"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
    />
            </div>
        </div>
        </>
    )
}
export default Nearby;