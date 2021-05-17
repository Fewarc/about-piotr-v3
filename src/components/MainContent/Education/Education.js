import {  Grid, Stepper, Step, StepButton} from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import React, { useState } from 'react'
import useStyles from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Pulse from '../../Animations/Pulse.js'


function Education() {
    const classes = useStyles();
    const [activeStep, updateStep] = useState(0);
    const steps = ['Secondary School', 'University'];

const theme = createMuiTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                color: "#252526",
                '&$active': {
                    color: '#00ffa2',
                },
                '&$completed': {
                    color: '#252526',
                },
                
                backgroundColor: "transparent",
                
            },
        },
    },

    palette: {
        text: {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
        }
    }
});

    const handleStep = (step) => () => {
        updateStep(step);
    }

    const toSkills = (e) => {
        e.preventDefault();
        document.getElementById('skillsSection').scrollIntoView({ behavior: 'smooth'});
    };

    const getEduContent = () => {
        switch (activeStep) {
            case 0 :
                return (
                <div style={{ marginTop: "3%" }}>
                    <Fade> {/* this comment has to be here for the animations to work xddddd */}
                        <Grid container justify="center" content="stretch" spacing={4}>
                            <Grid item xs={12} md={4} className={classes.eduTime}>
                                <h1>09.2015 - 06.2018</h1>
                            </Grid>
                            <Grid item xs={12} md={8} className={classes.eduDesc}>
                                <h1>V <p style={{ display: "inline", color: "#00ffa2" }}>High School</p> of chancellor Jan Zamoyski in Dąbrowa Górnicza</h1>
                                <p className={classes.eduDescParagraph}>
                                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Class profile : Mathematics & IT</p>
                                <p className={classes.eduDescParagraph}>
                                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Extended subjects : Math, Computer Science and English<br/></p>
                            </Grid>
                        </Grid>
                    </Fade>
                </div>);

            case 1 :
                return (
                <div style={{ marginTop: "3%" }}>
                    <Fade>
                        <Grid container justify="center" content="stretch" spacing={4}>
                            <Grid item xs={12} lg={4} className={classes.eduTime}>
                                <h1>10.2018 - now</h1>
                            </Grid>
                            <Grid item xs={12} lg={8} className={classes.eduDesc}>
                                <h1>Silesian <p style={{ display: "inline", color: "#00ffa2" }}>University of Technology</p> in Gliwice</h1>
                                <p className={classes.eduDescParagraph}>
                                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Faculty : Automatic Control, Electronic Engineering and Computer Science</p>
                                <p className={classes.eduDescParagraph}>
                                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Field of study : Automatic Control and Robotics<br/></p>
                                <p className={classes.eduDescParagraph}>
                                <FontAwesomeIcon icon={faChevronRight} color="#00ffa2"/>   Specialization : Information technologies<br/></p>
                            </Grid>
                        </Grid>
                    </Fade>
                </div>);
        }
    }

    return (
        <div id="educationSection" style={{ paddingTop: "0%"}}>
            <Grid container justify="center" className={classes.eduTitle}>
                <Grid item >
                    <Fade top big>
                        <h1>Education <FontAwesomeIcon icon={faChevronDown} size="1x" style={{ display: "inline" }} color="#00ffa2" /></h1>
                    </Fade>
                </Grid>
            </Grid>
            <MuiThemeProvider theme={theme}>
                <Stepper alternativeLabel nonLinear activeStep={activeStep} style={{ backgroundColor: "transparent" }}>
                {steps.map((label, index) => {
                return (
                    <Step key={label} completed={false}> 
                        <StepButton
                            onClick={handleStep(index)}
                        >
                            {label}
                        </StepButton>
                    </Step>
                );
                })}
                </Stepper>
            </MuiThemeProvider>
            {getEduContent()}
            <Grid item xs={12} justify="center" className={classes.bounceButton} onClick={(e) => toSkills(e)}>
                <Pulse>
                    <FontAwesomeIcon icon={faChevronDown} style={{ marginRight: "2%" }}></FontAwesomeIcon>
                    SKILLS
                    <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "2%" }}></FontAwesomeIcon>
                </Pulse>
            </Grid>
        </div>
    )
}

export default Education;