import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import MyWork from '../MyWork/MyWork';
import MyVideos from '../MyVideos/MyVideos';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <MyWork />
            <MyVideos />
        </div>
    )
}

export default Home;