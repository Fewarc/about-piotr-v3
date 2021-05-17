import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    eduTitle: {
      color: "white", 

      textAlign: "center",

      fontSize: "calc(2vw + 2vh)",
      fontFamily: "'Lexend Mega', sans-serif",
    },

    eduTitleChevron: {
      
    },

    eduTitleChevronIcon: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    },

    eduTime: {
      color: "white",

      textAlign: "center",

      fontSize: "calc(1vw + 2vh)",
      fontFamily: "'Lato', sans-serif",

      border: "dashed 15px #252526",
    },

    eduDesc: {
      color: "white",

      fontSize: "calc(0.5vw + 1vh)",
      fontFamily: "'Lato', sans-serif",
    },

    eduDescParagraph: {
      color: "white",
      fontSize: "calc(0.5vw + 1.5vh)",
    },

    bounceButton: {
      color: "white",
      marginTop: "10%",
      textAlign: "center",
      marginLeft: "-2%",

      fontSize: "0.75rem",
      fontFamily: "'Lexend Mega', sans-serif",
      cursor: "pointer"

    },
  }));