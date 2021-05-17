import React from 'react';
import useStyles from './styles.js';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCode, faUsers, faCodeBranch, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import ProjectItem from './ProjectItem/ProjectItem.js';

function Projects() {
    const classes = useStyles();

    const toHobbies = (e) => {
        e.preventDefault();
        document.getElementById('hobbiesSection').scrollIntoView({ behavior: 'smooth' });
    }

    const projects = [
    {title: '//todo list app', desc: '', tech: ''},
    {title: 'SurveyX - survey delivery', desc: '', tech: ''},
    {title: '', desc: '', tech: ''}];

    const proCarousel = () => {
        return (
            <Carousel>
                {projects.map( (project) => {
                    <ProjectItem project={project} />
                })}
            </Carousel>
        );
    }

    return (
    <div id="projectsSection">
        <Grid container justify="center" className={classes.proTitle}>
            <Grid item >
                <Fade top big>
                    <h1>Projects <FontAwesomeIcon icon={faChevronDown} size="1x" style={{ display: "inline" }} color="#00ffa2" /></h1>
                </Fade>
            </Grid>
        </Grid>
        {proCarousel()}
    </div>);
}

export default Projects;