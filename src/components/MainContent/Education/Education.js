import {  Grid, Stepper, Step, StepButton} from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import React, { useState } from 'react'
import useStyles from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'


function Education() {
    const classes = useStyles();
    const [activeStep, updateStep] = useState(0);
    const steps = ['Highscool', 'University'];

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

    return (
        <div id="educationSection" style={{ paddingTop: "0%"}}>
            <Grid container justify="center" className={classes.eduTitle}>
                <Grid item style={{ paddingRight: "5%" }}>
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
            
        </div>
    )
}

export default Education;