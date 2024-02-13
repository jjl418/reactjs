// import React, { Suspense } from "react";
import '../../../App';
import './Projects.css';
import creamistry_menu from '../../../images/projects_images/creamistry_menu.png';
import cat from '../../../images/projects_images/cat.png';
import mint_icecream from '../../../images/projects_images/mint_icecream.png';
import chocolate_icecream from '../../../images/projects_images/chocolate_icecream.png';
import strawberry_icecream from '../../../images/projects_images/strawberry_icecream.png';
import vanilla_icecream from '../../../images/projects_images/vanilla_icecream.png';
import next_icon from '../../../images/decor/next_icon.png';
import "98.css";

function Projects() {
    

    
    
    return (
      <>
      <div className= 'projects-background'>
        <button aria-label="next">
          
        </button>
        {/* <button onClick = {() =>} */}
        <div className = "tab-container">
          <div className = "caption-container">
            <h1 className = "img-caption">
              Project 1
            </h1>
          </div>
        </div>
        <div className = "tab-layout">
          <div className = "p1-container">
            <img src = {creamistry_menu} className = "p1-image" alt= ""/>
          </div>
          <div className = "id-card">
            {/* <div className = "profile">
            </div> */}
            <img src = {cat} className = "profile" alt = ""/>
            <h1 className = "profile-name">
              Mr. cat
            </h1>
            <h1 className = "profile-content">
              {/* role: customer */}
              role: customer
              gender: male
              appears: all levels
              difficulty: easy
            </h1>
            <div className = "id-logo-container">
              <img src = {mint_icecream} className = "mint" alt = ""/>
              <img src = {strawberry_icecream} className = "strawberry" alt = ""/>
              <img src = {vanilla_icecream} className = "vanilla" alt = ""/>
              <img src = {chocolate_icecream} className = "chocolate" alt = ""/>
              <img src = {mint_icecream} className = "mint" alt = ""/>
              <img src = {strawberry_icecream} className = "strawberry" alt = ""/>
            </div>
          </div>
        </div>
      </div>
      
      
      
      

      </>
    );
  }
  
  export default Projects;