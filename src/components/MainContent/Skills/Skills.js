import React from 'react';
import useStyles from './styles.js';
import Fade from 'react-reveal/Fade';
import Pulse from '../../Animations/Pulse.js';
import Slide from 'react-reveal/Fade';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCode, faUsers, faCodeBranch, faThumbtack } from '@fortawesome/free-solid-svg-icons';

function Skills() {
    const classes = useStyles();

    const toProjects = (e) => {
        e.preventDefault();
        document.getElementById('projectsSection').scrollIntoView({ behavior: 'smooth'});
    }

    return (
    <div id="skillsSection">
        <Grid container justify="center" className={classes.skillsTitle}>
            <Grid item >
                <Fade top big>
                    <h1>Skills <FontAwesomeIcon icon={faChevronDown} size="1x" style={{ display: "inline" }} color="#00ffa2" /></h1>
                </Fade>
            </Grid>
        </Grid>
        <Grid container justify="center" spacing={4}>
            <Grid item xs={12} md={6} lg={3} className={classes.skillList}>
            <FontAwesomeIcon icon={faCode} size="4x" color="#00ffa2"/>
                <Slide top cascade>
                    <h1>Languages</h1>
                </Slide>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Javascript</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Java</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   C++</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   HTML</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   CSS</p>
            </Grid>
            <Grid item xs={12} md={6} lg={3} className={classes.skillList}>
            <FontAwesomeIcon icon={faCodeBranch} size="4x" color="#00ffa2"/>
                <Slide top cascade>
                    <h1>Technologies</h1>
                </Slide>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Knowledge of design patterns e.g. MVC</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Knowledge of Git</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Experience using NPM</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Experience using Material-ui components</p>
            </Grid>
            <Grid item xs={12} md={6} lg={3} className={classes.skillList}>
            <FontAwesomeIcon icon={faUsers} size="4x" color="#00ffa2"/>
                <Slide top cascade>
                    <h1>Soft skills</h1>
                </Slide>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Peacefulness</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Teamwork skills</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Organized</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Effective search for information online </p>
            </Grid>
            <Grid item xs={12} md={6} lg={3} className={classes.skillList}>
            <FontAwesomeIcon icon={faThumbtack} size="4x" color="#00ffa2"/>
                <Slide top cascade>
                    <h1>Other</h1>
                </Slide>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Polish language - native</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   English language - C1</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Knowledge of Adobe software e.g. Lightroom</p>
                <p className={classes.skillParaghraph}>
                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Driver licence</p>
            </Grid>
        </Grid>
        <Grid item xs={12} className={classes.bounceButton} onClick={(e) => toProjects(e)}>
            <Pulse>
                <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: "2%" }}></FontAwesomeIcon>
                PROJECTS
                <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "2%" }}></FontAwesomeIcon>
            </Pulse>
        </Grid>
    </div>);
};

export default Skills;