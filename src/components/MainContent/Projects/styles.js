import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    proTitle: {
      color: "white", 

      textAlign: "center",

      fontSize: "calc(2vw + 2vh)",
      fontFamily: "'Lexend Mega', sans-serif",

      marginBottom: "-3%"
    },

    navButtons: {
      backgroundColor: "red"
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