import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/thomas-kalman-web-developer-instructional-designer-logo.png'
// import underline from '../../assets/instructional-web-design-development-services-deco.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import './HomeOnlyNav.css'

const HomeOnlyNav = () => {

  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  })


  return (
    <div>
      <div className="navbar-placeholder-homeonly"></div>
      <div className={`navbar-homeonly ${shrink ? 'shrink' : ''}`}>
        <img src={logo} alt="Thomas Kalman Instructional Design & Web Development logo" />
        
          <Link to="/">Home</Link>
        
      </div>
    </div>
  )
}

export default HomeOnlyNav;