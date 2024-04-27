import '../../../App';
import './Arcade.css';
import {Link} from 'react-router-dom';
import creamistryThumbnail from '../../../images/arcade/creamistry-thumbnail.png';
import monsterThumnmail from '../../../images/arcade/monster-thumbnail.png';
import pixelConsole from '../../../images/arcade/pixel-console.png';
// import React from 'react';

function Arcade() {
    
  return (
    <>
      <div className = 'projects-background-3'>
        <h1 className = 'page-title'>Arcade
          <img src = {pixelConsole} className = "console-img" alt = ""/>
        </h1>
        {/* <img src = {pixelConsole} className = "console-img" alt = ""/> */}
        <Link to = "/creamistry" className = "game-thumbnail">
          <img src = {creamistryThumbnail} className = "creamistry-thumbnail-img" alt = ""/>
        </Link>
        <Link to = "/monsterbartender" className = "game-thumbnail">
          <img src = {monsterThumnmail} className = "monster-thumbnail-img" alt = ""/>
        </Link>
      </div>
    </>
  );
}

export default Arcade;