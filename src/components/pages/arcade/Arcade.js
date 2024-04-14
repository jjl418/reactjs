import '../../../App';
import './Arcade.css';
import {Link} from 'react-router-dom';
import creamistryThumbnail from '../../../images/arcade/creamistry-thumbnail.png';
// import React from 'react';

function Arcade() {
    
  return (
    <>
      <div className = 'projects-background-3'>
        <Link to = "/creamistry" className = "game-thumbnail">
          <img src = {creamistryThumbnail} className = "creamistry-thumbnail-img" alt = ""/>
        </Link>
      </div>
    </>
  );
}

export default Arcade;