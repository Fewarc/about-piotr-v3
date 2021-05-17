import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    skillsTitle: {
      color: "white", 

      textAlign: "center",

      fontSize: "calc(2vw + 2vh)",
      fontFamily: "'Lexend Mega', sans-serif",

    },

    skillParaghraph: {
      color: "white",
      fontSize: "calc(0.5vw + 1.5vh)",
    },

    skillList: {
      color: "white",

      fontSize: "calc(0.5vw + 1vh)",
      fontFamily: "'Lato', sans-serif",

      textAlign: "center"
    },

    bounceButton: {
      color: "white",
      marginTop: "5%",
      textAlign: "center",
      marginLeft: "-2%",

      fontSize: "0.75rem",
      fontFamily: "'Lexend Mega', sans-serif",
      cursor: "pointer"
    },
  }));