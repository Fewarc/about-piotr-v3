import React from 'react'
import useStyles from './styles.js'
import Fade from 'react-reveal/Fade'
import { Grid, Typography } from '@material-ui/core';

function About() {
    const classes = useStyles();
    
    return (
        <div id="aboutSection">
            <Fade top big>
                <span className={}> {/** TODO : lines */}
                    <h1 className={classes.headerText}>Who am I?</h1>
                </span>
            </Fade>
        </div>
    )
}

export default About;