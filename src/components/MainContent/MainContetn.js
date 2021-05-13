import { Container } from '@material-ui/core';
import React from 'react'
import About from './About/About.js';
import useStyles from './styles.js'

function MainContent() {
    const classes = useStyles();
    
    return (
        <>
        <div style={{ height: "1000px"}}>

        </div>
        
        <Container>
            <About />
        </Container>
        </>
    )
}

export default MainContent;