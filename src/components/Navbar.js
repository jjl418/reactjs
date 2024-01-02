import React, { useState } from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
// import {Button} from './Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "@fontsource/special-elite";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const isClicked = () => setClicked(!clicked);
  // mobile menu denoted as "MMenu"
  const MMenuClose = () => setClicked(false);

  // const [active, setActive] = useState(false);
  // const tabActive = () => setActive(!active);

  // function someFunc() {
  //   MMenuClose(); 
  //   tabActive();
  // }

  // const [button, setButton] = useState(true);
  //Function that handles UI changes on Mobile devices
  // const showUI = () => {
  //   if(window.innerWidth <= 960){
  //     setButton(false);
  //   }
  //   else{
  //     setButton(true);
  //   }
  // };

  // window.addEventListener('resize', showUI);

  return (
    <>
        <nav className ="navbar">
            <div className = "navbar-box">
                <Link to= "/" className = "navbar-initials">
                  J Lee
                </Link>
                <div className = "menu-icon" onClick = {isClicked}>
                  {clicked ? <CloseIcon/> : <MenuIcon/>}
                </div>

                {/* to track menu state on mobile version  */}
                <ul className = {clicked ? "nav-menu open" : "nav-menu closed"}>
                  {/* PROJECT LINK */}
                  <li className = "nav-menu-item">
                    <Link to = "/projects" className = "nav-menu-link" onClick = {MMenuClose}>
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
                      <p align= "center"> Arcade </p>
                    </Link>
                  </li>
                  {/* ABOUT LINK */}
                  <li className = "nav-menu-item">
                    <Link to = "/about-me" className = "nav-menu-about" onClick = {MMenuClose}>
                      <p align= "center"> About Me </p>
                    </Link>
                  </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                {/* <Button buttonStyle='btn--outline'>SIGN UP</Button> */}
            </div>
        </nav>
    </>
  );
}

export default Navbar