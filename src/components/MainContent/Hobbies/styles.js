import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    hobbiesTitle: {
      color: "white", 

      textAlign: "center",

      fontSize: "calc(2vw + 2vh)",
      fontFamily: "'Lexend Mega', sans-serif",
    },

    hobby: {
      color: "white",

      fontSize: "calc(0.5vw + 1vh)",
      fontFamily: "'Lato', sans-serif",

      textAlign: "center"
    },

    bounceButton: {
      color: "white",
      marginTop: "5%",
      textAlign: "center",

      fontSize: "0.75rem",
      fontFamily: "'Lexend Mega', sans-serif",
      cursor: "pointer"
    },
  }));