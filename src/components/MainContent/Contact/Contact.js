import {  Grid, Stepper, Step, StepButton} from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import React, { useState } from 'react'
import useStyles from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Pulse from '../../Animations/Pulse.js'


function Contact() {
    const classes = useStyles();

    return (
        <div id="contactSection">
            <Grid container justify="center" className={classes.contactTitle}>
                <Grid item >
                    <Fade top big>
                        <h1>Contact me <FontAwesomeIcon icon={faChevronDown} size="1x" style={{ display: "inline" }} color="#00ffa2" /></h1>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;