import React, { useState } from "react";
import "./App.css";
import ReactPlayer from "react-player/youtube";


function App(){

  const bird1 = new Audio("https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3");

  const bird2 = new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3");
  
  function toggle1(){
    if(bird1.paused){
      bird1.play();
    }else{
      bird1.pause();
    }
  };

  function toggle2(){
    if(bird2.paused){
      bird2.play();
    }else{
      bird2.pause();
    }
  }

  return(
    <div>
      <div>
        <MyVideo />
        <button onClick={toggle1}>Click here</button>
        <button onClick={toggle2}>Click here</button>
      </div>
    </div>
  )
}

const MyVideo = () => {
  return(
    <ReactPlayer url="https://youtu.be/6IBDljy4fos?si=di4ZtCviRG2UyRNN" playing={true} volume={0.5}/>
  )
}

export default App;