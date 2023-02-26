import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import resume from "../assets/resume.pdf"
import { FaBars, FaTimes } from "react-icons/fa"

function Header() {
  function mouseHover() {
    window.document.getElementById("resume").innerHTML = "Download"
  }
  function leave() {
    window.document.getElementById("resume").innerHTML = "Resume"
  }
  const [click, setClick] = useState(false)
  const handleClick = () => {
      setClick(!click)
  }
  const [color, setColor] = useState(false);
  const changeColor = () => {
      if (window.scrollY >= 100) {
          setColor(true)
      } else {
          setColor(false)
      }
  };
  window.addEventListener("scroll", changeColor)
  return (
    <div className={color ? "Header Header-bg" : "Header"}>
      <ul>
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
      <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#fff" }} />)}
            </div>
    </div>

  )
}

export default Header
