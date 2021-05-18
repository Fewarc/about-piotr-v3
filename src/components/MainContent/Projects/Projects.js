import React from 'react';
import useStyles from './styles.js';
import Fade from 'react-reveal/Fade';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCode, faUsers, faCodeBranch, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import ProjectItem from './ProjectItem/ProjectItem.js';
import Pulse from '../../Animations/Pulse.js';

function Projects() {
    const classes = useStyles();

    const toHobbies = (e) => {
        e.preventDefault();
        document.getElementById('hobbiesSection').scrollIntoView({ behavior: 'smooth' });
    }

    const projects = [
    {title: '//todo list app', desc: 'Built using: Node.js w/ Express, React.js w/ Redux, MongoDB', github: 'https://github.com/Fewarc/todo-list-app', image: 'https://user-images.githubusercontent.com/56931828/117970149-9ed8bc80-b328-11eb-897b-d2f768ff5896.png'},
    {title: 'This site', desc: 'Built using: React.js', github: 'https://github.com/Fewarc/about-piotr-v3', image: 'https://user-images.githubusercontent.com/56931828/118634773-3465c780-b7d3-11eb-840c-65bd285d32e2.png'},
    {title: 'SurveyX app', desc: 'Built using: AJAX, Java JDBC, OracleDB', github: '', image: ''},
    {title: 'Sorting algorithm visualization', desc: 'Built using: Java', github: '', image: ''}];

    const proCarousel = () => {
        return (
            <Carousel indicators={false} autoPlay={false} navButtonsAlwaysVisible={true} navButtonsProps={{ style: {color: "#00ffa2", background: "transparent"} }}>
                {projects.map( (project) => {
                    return (<ProjectItem key={project.title} project={project} />)
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
        <Grid item xs={12} justify="center" className={classes.bounceButton} onClick={(e) => toHobbies(e)}>
            <Pulse>
                <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: "2%" }}></FontAwesomeIcon>
                HOBBIES
                <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "2%" }}></FontAwesomeIcon>
            </Pulse>
        </Grid>
    </div>);
}

export default Projects;