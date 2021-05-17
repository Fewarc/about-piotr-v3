import {  Grid, Stepper, Step, StepButton} from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import React, { useState } from 'react'
import useStyles from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import { faGuitar, faHiking, faLaptopCode, faBiking, faMotorcycle, faSwimmer } from '@fortawesome/free-solid-svg-icons';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Pulse from '../../Animations/Pulse.js'


function Hobbies() {
    const classes = useStyles();

    const toContact = (e) => {
        e.preventDefault();
        document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id="hobbiesSection">
            <Grid container justify="center" className={classes.hobbiesTitle}>
                <Grid item >
                    <Fade top big>
                        <h1>Hobbies <FontAwesomeIcon icon={faChevronDown} size="1x" style={{ display: "inline" }} color="#00ffa2" /></h1>
                    </Fade>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={5}>
                <Grid item className={classes.hobby} xs={3}>
                    <FontAwesomeIcon icon={faLaptopCode} size="4x" color="#00ffa2"/>
                    <h1>Programming</h1>
                </Grid>
                <Grid item className={classes.hobby} xs={3}>
                    <FontAwesomeIcon icon={faHiking} size="4x" color="#00ffa2"/>
                    <h1>Hiking</h1>
                </Grid>
                <Grid item className={classes.hobby} xs={3}>
                    <FontAwesomeIcon icon={faGuitar} size="4x" color="#00ffa2"/>
                    <h1>Guitar playing</h1>
                </Grid>
                <Grid item className={classes.hobby} xs={3}>
                    <FontAwesomeIcon icon={faBiking} size="4x" color="#00ffa2"/>
                    <h1>Cycling</h1>
                </Grid>
                <Grid item className={classes.hobby} xs={3}>
                    <FontAwesomeIcon icon={faMotorcycle} size="4x" color="#00ffa2"/>
                    <h1>Motorbikes</h1>
                </Grid>
                <Grid item className={classes.hobby} xs={3}>
                    <FontAwesomeIcon icon={faSwimmer} size="4x" color="#00ffa2"/>
                    <h1>Swimming</h1>
                </Grid>
                <Grid item className={classes.hobby} xs={3}>
                    <FontAwesomeIcon icon={faHeadphonesAlt} size="4x" color="#00ffa2"/>
                    <h1>Music</h1>
                </Grid>
            </Grid>
            <Grid item xs={12} justify="center" className={classes.bounceButton} onClick={(e) => toContact(e)}>
                <Pulse>
                    <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: "2%" }}></FontAwesomeIcon>
                    CONTACT
                    <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "2%" }}></FontAwesomeIcon>
                </Pulse>
            </Grid>
        </div>
    )
}

export default Hobbies;
