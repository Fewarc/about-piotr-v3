import { Fade } from '@material-ui/core';
import React from 'react'
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components'
import useStyles from './styles.js'

function About() {
    const classes = useStyles();
    
    return (
        <>
            <Fade in timeout={1000}>
                <h1>hello</h1>
            </Fade>
        </>
    )
}

export default About;