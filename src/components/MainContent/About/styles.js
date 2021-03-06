import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    line: {
      width: "85%",
      borderTop: "0px",
      color: "#00ffa2",
      display: "inline"
    },
     
    headerText: {
      display: "table",
      marginLeft: "-2%",
      marginTop: "-10%",
      color: "white",
      textAlign: "center",

      fontSize: "calc(2vw + 2vh)",
      fontFamily: "'Lexend Mega', sans-serif",
    },

    aboutLeft: { 
      color: "white", 

      textAlign: "center",

      fontSize: "calc(2vw + 2vh)",
      fontFamily: "'Lexend Mega', sans-serif",
    },

    aboutRight: {
      color: "white",
      marginTop: "-2%",

      fontSize: "calc(1vw + 2vh)",
      fontFamily: "'Lato', sans-serif",

      border: "dashed 15px #252526",
    },

    bounceButton: {
      color: "white",
      marginTop: "0%",
      textAlign: "center",

      fontSize: "0.75rem",
      fontFamily: "'Lexend Mega', sans-serif",
      cursor: "pointer"

    },

    eduStepper: {
      backgroundColor: "#1e1e1e"
    }
  }));