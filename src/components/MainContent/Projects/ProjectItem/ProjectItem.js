import React from 'react';
import useStyles from './styles.js';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectItem(props) {
    const classes = useStyles();

    const theme = createMuiTheme({
        overrides: {
            MuiCard: {
                root: {
                    borderRadius: "0",
                    border: "dashed 15px #252526",
                }
            },

            MuiButtonBase: {
                root: {
                    CarouselButton31: {
                        backgroundColor: "red"
                    }
                }
            }
        },
    });

    const handleGithub = () => {
        window.open(`${props.project.github}`);
    }

    return (
    <MuiThemeProvider theme={theme}>
        <Card variant="outlined" style={{ backgroundColor: "transparent" }}>
            <CardMedia 
            className={classes.proImage}
            height={200}
            component="img"
            src={`${props.project.image}`}
            />
            <CardContent className={classes.projectDesc}>
                <h1>{props.project.title}</h1>
                <p>{props.project.desc}</p>
                <FontAwesomeIcon 
                className={classes.gitIcon} 
                icon={faGithub} 
                size="5x" 
                color="#00ffa2" 
                onClick={(e) => handleGithub(e)}
                />
            </CardContent>
        </Card>
    </MuiThemeProvider>);
}

export default ProjectItem;