import './Home.scss'
import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import vg from "../assets/suraj.png"
import fb from "../assets/fb.png"
import li from "../assets/li.png"
import insta from "../assets/insta.png"
import github from "../assets/github.png"


function Home() {
  const navigate=useNavigate();

  return (
    <div id="profile">

  <div class="wrapper">
    <div class="img-area">
      <div class="inner-area">
        <img src={vg} alt=""/>
      </div>
    </div>
    <div class="name">Suraj kumar</div>
    <div id="typewrite">
    <Typewriter
  
  onInit={(typewriter)=> {

 setInterval(()=>{
  typewriter
   
  .typeString("Hello My name is suraj kumar,")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I am a full-stack web developer.")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Welcome to my portfolio.")
  .pauseFor(1000)
  .deleteAll()
  .start()

 },2000)
  }}
  />
    </div>
    <div class="about">Follow me on</div>
    <div class="social-icons">
     
      <a href="https://www.facebook.com/suraj.yadavanshi.7568" target="noopener" class="fb"><img src={fb}/></a>
      <a href="https://www.linkedin.com/in/suraj-kumar-yadav-63a880246/" target="noopener" class="twitter"><img src={li}/></a>
      <a href="https://www.instagram.com/yadavanshi_suraj/" target="noopener" class="insta"><img src={insta}/></a>
      <a href="https://github.com/surajkumar9693" target="noopener" class="github"><img src={github}/></a>
    </div>
    <div class="buttons">
      <button id="btnmsg"  class="msg" onClick={()=>{navigate('/Contact')}}>Message</button>
    <button id="btnhome"  class="home" onClick={()=>{navigate('/Portfolio')}}>Portfolio</button>
    </div>
  </div>
    </div>
  )
}



export default Home
