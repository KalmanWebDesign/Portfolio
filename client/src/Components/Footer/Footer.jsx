import React from 'react';
import './Footer.css';
import footerLogo from '../../assets/thomas-kalman-web-developer-instructional-designer-logo.png';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footerLogo} alt="Thomas Kalman Instructional Design & Web Development logo" />

                </div>
                <div className="footer-top-right">
                    {/* <div className="footer-email-input">
                        <FontAwesomeIcon icon={faEnvelope} /> 
                        <p>kalmanwebdesign@gmail.com</p>
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div> */}
                    <p>I'm a fullstack developer & Instructional Designer with 4+ years of experience.</p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© Thomas Kalman. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <Link to="/terms-of-service">Terms of Service</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;