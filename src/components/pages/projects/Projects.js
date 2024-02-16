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
import cat_unknown from '../../../images/projects_images/cat_unknown.png';
import dog_unknown from '../../../images/projects_images/dog_unknown.png';
import rat_unknown from '../../../images/projects_images/rat_unknown.png';
import p1_video from '../../../videos/p1_demo_video.mp4';
import rabbit from '../../../images/projects_images/rabbit2.png';
// import 
// import "98.css";

var img_list = document.querySelector('.p1-image');
var images = ['creamistry_menu.png','creamistry_gameplay1.png', 'creamistry_gameplay2.png'];
var i = 0; //img index

const next = () =>
{
    if(i >= images.length - 1) i = -1;
    i++;
    return changeImage();
    
}

const changeImage = () =>
{
  img_list.setAtrribute('src', '../../../images/projects_images/' + images[i]);
}

function Projects() {
    return (
      <>
      <div className= 'projects-background'>
        <div className = "tab-container-2">

          <div className = "p1-explanation-container">
            <h1 className = "p1-explanation-text">
              Creamistry is a singleplayer, mobile, restaurant
              serving-game. There are a total of 3 levels. At each level,
              a new customer is introduced. Your job is to serve
              each customer the correct order before they become impatient.
              Beware, customers do not speak the same language as you so you will
              need to translate their order using a translation book.
            </h1>
            <div className = "p1-explanation-box">
              <h1 className = "p1-explanation-caption">
                Game Explanation
              </h1>
            </div>
          </div>
          
          <div className = "p1-demo-container">
            <div className = "p1-demo-box">
              <h1 className = "p1-demo-caption">
                Demo Video
              </h1>
            </div>
            
            <video src={p1_video} className = "p1-demo-video-box" width="200" height="350" controls="controls" autoplay="false" />
          </div>

          <div className = "p1-credits-container">
            <div className = "p1-credits-box">
              <h1 className = "p1-credits-caption">
                Credits
              </h1>
            </div>
            <h1 className = "p1-credits-caption-text">
              <h1 className = "p1-credits-role">Art:</h1> 
              Julianne Lee
              <p/>
              <h1 className = "p1-credits-role">Engineering:</h1> 
              Julianne Lee
              <p/>
              <h1 className = "p1-credits-role">Music:</h1> 
              ElvGames (Unity store)
              <p/>
              <h1 className = "p1-credits-role">SFX:</h1> 
              Sourced from Soundsnap
              <p/>
              <h1 className = "p1-credits-role">Made with:</h1>
              Unity
              <p/>
              <h1 className = "p1-credits-role">Art Softwares:</h1>
              Procreate
            </h1>
            <img src = {rabbit} className = "rabbit" alt = ""/>
          </div>
          
          
        </div>
        <div className = "tab-container">
          <div className = "caption-container">
            <h1 className = "img-caption">
              Project 1: Creamistry
            </h1>
          </div>
        </div>
        <div className = "tab-layout">
          {/* <script src = "../projects/P1ImageHandle.js"></script> */}
          <button className = 'next-button' onClick= {next}>
            <img src = {next_icon} className = "next-icon" alt = ""/>
          </button>

          {/* <script src = "../projects/P1ImageHandle.js"></script> */}

          <div className = "p1-container">
            <img src = {creamistry_menu} className = "p1-image" alt= ""/>
          </div>
          <div className = "id-card">
            <img src = {cat} className = "profile" alt = ""/>
            <h1 className = "profile-name">
              Mr. Cat
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
          <div className = "character-list-container">
            <h1 className = "character-caption">
              Characters:
            </h1>
            <div className = "characters-container">
              <button className = "cat-button">
                <img src = {cat_unknown} className = "cat-unknown" alt = ""/>
              </button>
              <button className = "dog-button">
                <img src = {dog_unknown} className = "dog-unknown" alt = ""/>
              </button>
              <button className = "rat-button">
                <img src = {rat_unknown} className = "rat-unknown" alt = ""/>
              </button>
              <div className = "character-divider"/>
              <h1 className = "characters-box-description">
                * hover and click over the above profiles to learn
                more *
              </h1>
            </div>
            
          </div>
        </div>

      
      </div>
      
      
      
      

      </>
    );
  }
  
  export default Projects;