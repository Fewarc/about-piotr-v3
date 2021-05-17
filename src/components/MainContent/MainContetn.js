import { Container } from '@material-ui/core';
import React from 'react'
import About from './About/About.js';
import Education from './Education/Education.js';
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
        </Container>
        </>
    )
}

export default MainContent;