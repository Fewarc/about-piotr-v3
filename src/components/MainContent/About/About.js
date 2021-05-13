import React from 'react'
import fadeIn from 'react-animations/lib/fade-in';
import useStyles from './styles.js'

function About() {
    const classes = useStyles();
    
    return (
        <>
            <fadeIn><h1>hello</h1></fadeIn>
        </>
    )
}

export default About;