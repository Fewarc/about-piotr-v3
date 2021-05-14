import {  Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import React from 'react'
import useStyles from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Education() {
    const classes = useStyles();
    
    return (
        <div id="educationSection" style={{ paddingTop: "0%"}}>
            <Grid container justify="center" className={classes.eduTitle}>
                <Grid item style={{ paddingRight: "5%" }}>
                    <Fade top big>
                        <h1>Education <FontAwesomeIcon icon={faChevronDown} size="1x" style={{ display: "inline" }} /></h1>
                    </Fade>
                </Grid>
                <Grid item className={classes.eduTitleChevron}>
                    <Fade left>
                        
                    </Fade>
                </Grid>
            </Grid>
        </div>
    )
}

export default Education;