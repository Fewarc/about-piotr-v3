import React from 'react'
import useStyles from './styles.js'
import Fade from 'react-reveal/Fade'
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Pulse from '../../Animations/Pulse.js';

function About() {
    const classes = useStyles();
    
    const toEducation = (e) => {
        e.preventDefault();
        document.getElementById('educationSection').scrollIntoView({ behavior: 'smooth'});
    } 

    return (
        <div id="aboutSection" style={{ paddingTop: "14%", marginLeft: "-5%" }}>
            <Grid container justify="center" alignItems="stretch" spacing={10}>
                <Grid item sm={12} md={5} className={classes.aboutLeft}>
                    <Fade right>
                        <FontAwesomeIcon icon={faChevronRight} size="2x" color="#00ffa2"></FontAwesomeIcon>
                    </Fade>
                    <Fade top big>
                        <h1>Who am I?</h1>
                    </Fade>
                </Grid>
                <Grid item sm={12} md={7} className={classes.aboutRight}>
                    <h1>Hello, I'm <p style={{ display: "inline", color: "#00ffa2" }}>Piotr</p></h1>
                    <p>I'm a third year automatic control and robotics student with specialization of information technologies. 
                    I'm passionate about programming and web development including both back-end and front-end. I love creating
                    web-apps and microprocessor based devices in my spare time.</p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12} md={5} className={classes.bounceButton} onClick={(e) => toEducation(e)}>
                    <Pulse>
                        <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: "2%" }}></FontAwesomeIcon>
                        EDUCATION
                        <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "2%" }}></FontAwesomeIcon>
                    </Pulse>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;