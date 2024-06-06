import React from 'react'
import './About.css'
import smiling from '../../assets/thomas-kalman-web-developer-instructional-designer-smiling.png'
import decoration from '../../assets/instructional-web-design-development-services-deco.png'

const About = () => {
    return (
        <div id="about" className='about'>
            <div className="spacer"></div>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={decoration} alt="instructional designer and web developer decoration" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={smiling} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced web developer, instructional designer, & multimedia expert.</p>
                        <p>The constant need for solving problems and the challenges that arise drive my passion for design and development. I pride myself on excellent communication and relationship building in order to create a joyful and successful work environment.</p>
                    </div>
                </div>
            </div>
            <div className="about-skills">
                <div>
                    <h3>Web Development</h3>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{ width: "75%" }} /></div>
                    <div className="about-skill"><p>Angular</p><hr style={{ width: "70%" }} /></div>
                    <div className="about-skill"><p>JavaScript & Node.js</p><hr style={{ width: "85%" }} /></div>
                    <div className="about-skill"><p>PHP</p><hr style={{ width: "65%" }} /></div>
                </div>

                <div>
                    <h3>Instructional Design</h3>
                    <div className="about-skill"><p>Storyline</p><hr style={{ width: "80%" }} /></div>
                    <div className="about-skill"><p>Rise</p><hr style={{ width: "75%" }} /></div>
                    <div className="about-skill"><p>Canvas LMS</p><hr style={{ width: "90%" }} /></div>
                    <div className="about-skill"><p>Blackboard LMS</p><hr style={{ width: "90%" }} /></div>
                </div>

                <div>
                    <h3>Multimedia Design</h3>
                    <div className="about-skill"><p>Adobe CC</p><hr style={{ width: "90%" }} /></div>
                    <div className="about-skill"><p>Video Production</p><hr style={{ width: "75%" }} /></div>
                    <div className="about-skill"><p>Graphic Design</p><hr style={{ width: "65%" }} /></div>
                    <div className="about-skill"><p>Scripting</p><hr style={{ width: "60%" }} /></div>
                </div>

            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h2>4+</h2>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h2>20+</h2>
                    <p>Completed Projects</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h2>10+</h2>
                    <p>Happy Clients & Employers</p>
                </div>
            </div>
        </div>
    )
}

export default About