import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Particles from 'react-particles-js'
import useStyles from './styles.js'
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'

const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`} infinite`;

function MainPage() {
    const classes = useStyles();
    
    const toContent = (e) => {
        e.preventDefault();
        document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }; 

    return (
        <div>
            <div id="mainText" className={`${classes.mainText} ${classes.unselectable}`}>
                About Piotr.
            </div>
            <div id="mainChevron" className={classes.chevron}>
                <Bounce><FontAwesomeIcon  icon={faChevronDown} size="3x" onClick={(e) => toContent(e)}/></Bounce>
            </div>
            <Particles className={classes.particles} params={{
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    }}}}/>
            <Particles className={classes.particles} params={{
                particles: {
                    number: {
                        value: 20,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: '#00ffa2'
                    },
                    line_linked: {
                        enable: true,
                        color: { value: '#00ffa2' }
                    },
                }
            }}/>
        </div>
    )
}

export default MainPage;