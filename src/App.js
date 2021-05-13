import { Container } from '@material-ui/core';
import React from 'react'
import MainPage from './components/MainPage/MainPage'

function parallax() {
  var s = document.getElementById("mainText");
  var yPos = 0 - window.pageYOffset/5;  
  s.style.top = 50 + yPos + "%"; 
}

window.addEventListener("scroll", function(){
  parallax(); 
});

function App() {
  return (
    <>
      <MainPage />
      
      <div style={{height: "1000px"}}>

      </div>
    </>
  );
}

export default App;
