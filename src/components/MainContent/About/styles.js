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
      margin: "auto",
      color: "white",
      position: "relative",
      overflow: "hidden",

      fontSize: "4vw",
      fontFamily: "'Lato', sans-serif",

      "&::before" : {
        content: "",
        borderBottom: "1px solid #00ffa2",
        position: "absolute",
        overflow: "hidden",
      }
    }
  }));