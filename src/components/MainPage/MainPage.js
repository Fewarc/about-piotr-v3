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


    }; 

    return (
        <>
            <div id="mainText" className={`${classes.mainText} ${classes.unselectable}`}>
                About Piotr.
            </div>
            <div id="mainChevron" className={classes.chevron}>
            <Bounce><FontAwesomeIcon  icon={faChevronDown} size="3x" onClick={(e) => toContent(e)}/></Bounce>
            </div>
            <Particles className={classes.particles}/>
        </>
    )
}

export default MainPage;