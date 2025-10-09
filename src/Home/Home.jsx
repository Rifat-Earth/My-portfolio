import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Education from '../Components/Education';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Skills/>
            <Projects/>
            <Education/>
            <Contact/>
        </div>
    );
};

export default Home;