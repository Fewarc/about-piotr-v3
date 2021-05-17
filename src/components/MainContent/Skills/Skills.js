import React from 'react';
import useStyles from './styles.js';
import Fade from 'react-reveal/Fade';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    const classes = useStyles();

    return (
    <div id="skillsSection">
        <Grid container justify="center" className={classes.skillsTitle}>
            <Grid item >
                <Fade top big>
                    <h1>Skills <FontAwesomeIcon icon={faChevronDown} size="1x" style={{ display: "inline" }} color="#00ffa2" /></h1>
                </Fade>
            </Grid>
        </Grid>
        <Grid container justify="center">
            <Grid item xs={12} md={6} lg={3} className={classes.skillList}>
                <h1>Programming</h1>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Javascrip xddddd</p>
            </Grid>
            <Grid item xs={12} md={6} lg={3} className={classes.skillList}>
                <h1>Programming</h1>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Javascrip xddddd</p>
            </Grid>
            <Grid item xs={12} md={6} lg={3} className={classes.skillList}>
                <h1>Programming</h1>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Javascrip xddddd</p>
            </Grid>
            <Grid item xs={12} md={6} lg={3} className={classes.skillList}>
                <h1>Programming</h1>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Javascrip xddddd</p>
            </Grid>
        </Grid>
    </div>);
};


export default Skills;