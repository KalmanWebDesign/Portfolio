import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/thomas-kalman-web-developer-instructional-designer-logo.png'
import underline from '../../assets/instructional-web-design-development-services-deco.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css'

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  const [shrink, setShrink] = useState(false);

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-20rem";
  }

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
      <div className="navbar-placeholder"></div>
      <div className={`navbar ${shrink ? 'shrink' : ''}`}>
        <img src={logo} alt="Thomas Kalman Instructional Design & Web Development logo" />
        <FontAwesomeIcon icon={faBars} onClick={openMenu} className='nav-mob-open' />
        <ul className="nav-menu" ref={menuRef}>
          <FontAwesomeIcon icon={faX} onClick={closeMenu} className="nav-mob-close"/>
          <li><AnchorLink className='anchor-link' href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt="underline for page" /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt="underline for page" /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt="underline for page" /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href="#work"><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} alt="underline for page" /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href="#videos"><p onClick={() => setMenu("videos")}>Tutorials</p></AnchorLink>{menu === "videos" ? <img src={underline} alt="underline for page" /> : <></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} alt="underline for page" /> : <></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Reach Out</AnchorLink></div>
      </div>
    </div>
  )
}

export default Navbar;