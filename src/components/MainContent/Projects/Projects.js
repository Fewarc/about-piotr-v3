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

    const toHobbies = (e) => {
        e.preventDefault();
        document.getElementById('hobbiesSection').scrollIntoView({ behavior: 'smooth'});
    }

    return (
    <div id="projectsSection">
        xd
    </div>);
}

export default Skills;