import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    particles: {
        position: "absolute",
        height: "100vh",
        width: "100vw"
    },
    
    mainText: {
        display: "table",
        margin: "auto",

        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -70%)",

        fontSize: "7vw",
        fontFamily: "'Lexend Mega', sans-serif",

        color: "white",
    },

    chevron: {
        display: "table",
        margin: "auto",

        position: "absolute",
        top: "70%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1",

        color: "#00ffa2",

        '&:hover': {
            cursor: "pointer",
        },

        animation: `chevronAnimation 3s infinite`,
    },

    "@keyframe chevronAnimation": {
        "0%": {
            transform: "translateY(-100%)"
        },

        "100%": {
            transform: "translateY(0)",
            color: "black"
        }
    },

    unselectable: {
        userSelect: "none",
    }
  }));