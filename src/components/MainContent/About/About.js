import React from 'react'
import useStyles from './styles.js'
import Fade from 'react-reveal/Fade'
import { Typography } from '@material-ui/core';

function About() {
    const classes = useStyles();
    
    return (
        <div id="aboutSection">
            <Fade top big>
                <div>
                    <hr className={classes.line}></hr>
                    <Typography>Who am I?</Typography>
                    <hr className={classes.line}></hr>
                </div>
            </Fade>
        </div>
    )
}

export default About;