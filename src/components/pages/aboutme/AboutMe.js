import '../../../App';
import './AboutMe.css';
import my_face from '../../../images/about_me/me.jpg';
import pixelheart2 from '../../../images/decor/pixelheart.png';
import linkedinlogo from '../../../images/about_me/LI-In-Bug.png';
import githublogo from '../../../images/about_me/github-mark-white.png';
// import React from 'react';

function AboutMe() {
    
  return (
    <>
      <div className = 'projects-background-4'>
        <div className = 'my-profile-container'>
          <div className = 'my-id-card'> 
            <img src = {my_face} className = 'my-id-image' alt = ""/>
            <h1 className = "my-id-name">
              Julianne Lee
            </h1>
            <img src = {pixelheart2} className = "id-logo" alt= ""/>
            <h1 className = "my-profile-content">
              Major: CS Games
              <p/>
              Specialization: Tech Art
              <p/>
              Class of 2024 (USC Viterbi)
              <p/>
              GPA: 3.38
            </h1>
            <h1 className = "my-profile-content-2">
              Languages: C++, C#, C, Java, Javascript, CSS, HTML
              <p/>
              Proficient in: Unity, Procreate, Photoshop, Maya
              <p/>
              Hobbies: Drawing, Gaming
              <p/>
            </h1>
          </div>

          <div className = "more-info-container">
            <div className = "more-info-caption-box">
              <h1 className = "more-info-caption">
                About Me
              </h1>
            </div>
            
            <h1 className = "more-info-text">
              Hi, I'm Julianne Lee and I am an aspiring game developer
              at USC. I am majoring in CS Games, while getting a specialization
              in Tech Art. I am trilingual (English, Korean, and Chinese).
            </h1>
          </div>

          <div className = "contact-container">
            <div className = "contact-caption-box">
              <h1 className = "more-info-caption">
                Contact Info
              </h1>
            </div>
            <h1 className = "contact-info-text">
              <h1 className = "contact-special-text">Email: </h1> 
              juliannejisulee@gmail.com
              <h1 className = "contact-special-text">USC Email (active till 2025):</h1> 
              jlee3932@usc.edu
              <h1 className = "contact-special-text">LinkedIn:</h1> 
            </h1>

            <div className = "linkedin-logo-container">
              <img src = {linkedinlogo} className = "linkedin-logo-img" alt = ""/>
            </div>

            <div className = "github-logo-container">
              <img src = {githublogo} className = "github-logo-img" alt = ""/> 
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;