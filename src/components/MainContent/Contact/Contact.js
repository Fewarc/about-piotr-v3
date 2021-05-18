import {  Grid, Button, TextField, Typography} from '@material-ui/core';
import Fade from 'react-reveal/Fade'
import React, { useState } from 'react'
import useStyles from './styles.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pulse from '../../Animations/Pulse.js';

function Contact() {
    const classes = useStyles();
    const [fromData, setData] = useState({
        from_name: '',
        from_mail: '',
        message: ''
    });

    const year = new Date().getFullYear();

    const theme = createMuiTheme({
        palette: {
          primary: {
            main: "#00ffa2",
          },

          secondary: {
              main: "#FFFFFF"
          }
        },
      });

    const handleMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    const toTheTop = (e) => {
        e.preventDefault();
        document.getElementById('mainPage').scrollIntoView({ behavior: 'smooth'});
    };

    return (
        <div id="contactSection">
            <Grid container justify="center" className={classes.contactTitle}>
                <Grid item >
                    <Fade top big>
                        <h1>Contact me <FontAwesomeIcon icon={faChevronDown} size="1x" style={{ display: "inline" }} color="#00ffa2" /></h1>
                    </Fade>
                </Grid>
            </Grid>
            {/* <MuiThemeProvider theme={theme}>
                <Grid container justify="center">
                    <Grid item>
                        <form onClick={(e) => handleMail(e)} noValidate autoComplete="off">
                            <Typography color="secondary" >name / nickname</Typography>
                            <TextField fullWidth value={fromData.from_name} classes={{ root: classes.input }} onChange={(e) => setData({ ...fromData, from_name: e.target.value })} />

                        </form>
                    </Grid>
            </Grid>
            </MuiThemeProvider> */}
            <Grid container justify="center">
                <Grid item className={classes.contact} xs={12}>
                    {/* <h1>Contact me at:</h1> */}
                    <h1>berezkapiotr<p style={{ display: "inline", color: "#00ffa2" }}>@</p>gmail.com</h1>
                </Grid>
            </Grid>
            <Grid item xs={12} justify="center" className={classes.bounceButton} onClick={(e) => toTheTop(e)}>
                <Pulse>
                    <FontAwesomeIcon icon={faChevronUp} style={{ marginRight: "2%" }}></FontAwesomeIcon>
                    TO THE TOP
                    <FontAwesomeIcon icon={faChevronUp} style={{ marginLeft: "2%" }}></FontAwesomeIcon>
                </Pulse>
            </Grid>
            <Grid container justify="center">
                <Grid item className={classes.footer} xs={6} lg={6}>
                    <h4>Ⓒ {year}</h4>
                </Grid>
                <Grid item className={classes.barCode} xs={6} lg={6}> 
                    <h1>about piotr</h1>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact;