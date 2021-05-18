import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    contactTitle: {
        color: "white", 

        textAlign: "center",

        fontSize: "calc(2vw + 2vh)",
        fontFamily: "'Lexend Mega', sans-serif",
    },

    input: {
        color: "white"
    },

    contact: {
        color: "white",

        fontSize: "calc(1vw + 2vh)",
        fontFamily: "'Lato', sans-serif",

        textAlign: "center",

        borderBottom: "dashed 15px #252526",
    },

    footer: {
        color: "white",

        fontSize: "calc(1vw + 1vh)",
        fontFamily: "'Lato', sans-serif",

        textAlign: "right",

        marginTop: "10%",
        paddingRight: "2%"
    },

    barCode: {
        color: "#00ffa2",
        fontFamily: "'Libre Barcode 128 Text', cursive",

        marginTop: "10.5%",
        paddingLeft: "2%"
    },

    bounceButton: {
        color: "white",
        marginTop: "10%",
        textAlign: "center",
  
        fontSize: "0.75rem",
        fontFamily: "'Lexend Mega', sans-serif",
        cursor: "pointer"
      },
  }));