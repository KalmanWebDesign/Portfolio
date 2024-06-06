import React from 'react';
import './Hero.css';
import proPic from '../../assets/thomas-kalman-web-developer-instructional-designer2.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id="home" className='hero'>
            <div className="spacer"></div>
            {/* hero image */}
            <img src={proPic} alt="thomas kalman web developer instructional designer" />
            <h1><span>I'm Thomas Kalman,</span> a full stack web developer, instructional designer, & multimedia expert.</h1>
            <p>4+ years of experience. This portfolio website showcases my work and was meticulously crafted using cutting-edge technologies, including React for the frontend and Node.js for the backend, ensuring a seamless and dynamic user experience. </p>

            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Reach Out</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero;