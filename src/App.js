import React, { useState } from "react";
import {Routes, Route, Link} from "react-router-dom";
import "./App.css";
import Contact from "./Contact";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import javaScript from "./assets/javaScript.png";


function App(){
  return(
    <div>
      <h1>Task: Add an image below</h1>
      <img src={javaScript} alt="javaScript Logo" />
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className="nav-item"></Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  )
}

export default App;