import React from "react";
import "../Styles/Footer.css";

function Footer(){
    return(
        <>
        <div className="footer-container" id="footer">
            <div className="footer-items">
                <h2>How it works</h2>
                    <a href="">About</a>
                    <a href="">Events</a>
                    <a href="">Gallery</a>
                    <a href="">Services</a>
            </div>
            <div className="footer-items">
                <h2>Features</h2>
                    <a href="">Core Features</a>
                    <a href="">Full Features</a>
                    <a href="">Exclusive Features</a>
                    <a href="">Features Lists</a>
            </div>
            <div className="footer-items">
                <h2>Resources</h2>
                    <a href="">FAQ</a>
                    <a href="">Support</a>
                    <a href="">Form</a>
            </div>
            <div className="footer-itemss">
                <h2>News Letters</h2>
                <p>Subscribe to out newsletter to get updates</p>
                <input type="Email" />
                <button>Subscribe</button>
                <div className="footer-icons">
      <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg" alt="Facebook" />
      <img src="https://images.vexels.com/media/users/3/137380/isolated/lists/1b2ca367caa7eff8b45c09ec09b44c16-instagram-icon-logo.png" alt="Instagram" />
      <img src="https://www.svgrepo.com/show/42543/twitter.svg" alt="Twitter" />
    </div>
            </div>

        </div>
        </>
    )
}

export default Footer;