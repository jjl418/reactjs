import React, { useState } from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "@fontsource/special-elite";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const isClicked = () => setClicked(!clicked);
  // mobile menu denoted as "MMenu"
  const MMenuClose = () => setClicked(false);

  return (
    <>
        <nav className ="navbar">
            <div className = "navbar-box">
                <Link to= "/" className = "navbar-initials">
                  J Lee
                </Link>
                <div className = "menu-icon" onClick = {isClicked}>
                  {clicked ? <MenuIcon/> : <CloseIcon/>}
                </div>

                {/* to track menu state on mobile version  */}
                <ul className = {clicked ? "nav-menu open" : "nav-menu closed"}>
                  {/* PROJECT LINK */}
                  <li className = "nav-menu-item">
                    <Link to = "/projects" className = "nav-menu-link" onClick = {MMenuClose}>
                      {/* Projects */}
                      <p align= "center"> Projects </p>
                    </Link>
                  </li>
                  {/* ART LINK */}
                  <li className = "nav-menu-item">
                    <Link to = "/art" className = "nav-menu-link" onClick = {MMenuClose}>
                    <p align= "center"> Art </p>
                    </Link>
                  </li>
                  {/* ARCADE LINK */}
                  <li className = "nav-menu-item">
                    <Link to = "/arcade" className = "nav-menu-link" onClick = {MMenuClose}>
                      Arcade
                    </Link>
                  </li>
                  {/* ABOUT LINK */}
                  <li className = "nav-menu-item">
                    <Link to = "/about-me" className = "nav-menu-about" onClick = {MMenuClose}>
                      About Me
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar