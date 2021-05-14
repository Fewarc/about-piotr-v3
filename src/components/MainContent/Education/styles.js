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
    }
  }));