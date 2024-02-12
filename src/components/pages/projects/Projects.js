// import React, { Suspense } from "react";
import '../../../App';
import './Projects.css';
import creamistry_menu from '../../../images/projects/creamistry_menu.png';

function Projects() {
    

    
    
    return (
      <>
      <div className = "img-container">
        <div className = "caption-container">
          <h1 className = "img-caption">
            Project 1
          </h1>
        </div>
      </div>
        <div className = "img-layout">
          <div className = "img-border">
            <img src = {creamistry_menu} className = "project1" alt= ""/>
          </div>
        </div>
      
      
      

      </>
    );
  }
  
  export default Projects;