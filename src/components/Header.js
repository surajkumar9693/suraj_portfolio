import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import resume from "../assets/resume.pdf"

function Header() {
  function mouseHover() {
    window.document.getElementById("resume").innerHTML = "Download"
  }
  function leave() {
    window.document.getElementById("resume").innerHTML = "Resume"
  }
  return (
    <nav>
      <ul>
        <li id='title'>Suraj Portfolio</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/Service">Service</Link>
        </li>
        <li ><a id='resume' onMouseLeave={leave} onMouseOver={mouseHover} href={resume} download="Resume_Suraj_Kumar">Resume</a>
        </li>
      </ul>

    </nav>

  )
}

export default Header
