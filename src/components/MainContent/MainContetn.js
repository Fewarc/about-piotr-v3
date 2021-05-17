import { Container } from '@material-ui/core';
import React from 'react'
import About from './About/About.js';
import Education from './Education/Education.js';
import Skills from './Skills/Skills.js'
import Projects from './Projects/Projects.js'
import Hobbies from './Hobbies/Hobbies.js'
import Contact from './Contact/Contact.js'
import useStyles from './styles.js'

function MainContent() {
    const classes = useStyles();
    
    return (
        <>
        <div style={{ height: "1500px" }}></div> {/* spacer */}
        
        <Container maxWidth="lg">
            <About />
            <div style={{ height: "1500px"}}></div>
            <Education />
            <div style={{ height: "1500px"}}></div>
            <Skills />
            <div style={{ height: "1500px"}}></div>
            <Projects />
            <div style={{ height: "1500px"}}></div>
            <Hobbies />
            <div style={{ height: "1500px"}}></div>
            <Contact />
        </Container>
        </>
    )
}

export default MainContent;