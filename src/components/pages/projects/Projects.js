import '../../../App';
import './Projects.css';

import next_icon from '../../../images/decor/next_icon.png';
import prev_icon from '../../../images/decor/prev_icon.png';

import chad_thumbnail from '../../../images/project2_images/chad_thumbnail.png';
import mummy_thumbnail from '../../../images/project2_images/mummy_thumbnail.png';
import lady_thumbnail from '../../../images/project2_images/lady_thumbnail.png';
import samurai_thumbnail from '../../../images/project2_images/samurai_thumbnail.png';
import statue_thumbnail from '../../../images/project2_images/statue_thumbnail.png';
import chad_animation from '../../../videos/Animation_Monster1_Final.mp4';
import mummy_animation from '../../../videos/Animation_Monster2_Final.mp4';
import lady_animation from '../../../videos/Animation_Monster3_Final.mp4';
import samurai_animation from '../../../videos/Animation_Monster4_Final.mp4';
import statue_animation from '../../../videos/Animation_Monster5_Final.mp4';
import book_animation from '../../../videos/Book_Monster_Final.mp4';
import p2_video from '../../../videos/Monster_Bartender_demo.mp4';
import bb_concept from '../../../images/project3_images/BB_concept.png';
import laugh_gif from '../../../images/project3_images/BB_laugh.gif';
import sad_gif from '../../../images/project3_images/BB_sad.gif';
import neutral_gif from '../../../images/project3_images/BB_neutral.gif';
import p3_video from '../../../videos/BB_demo.mp4';
import qr_image from '../../../images/project3_images/BB_QR.png';
import p4_video from '../../../videos/Trivia-game_demo.mp4';
import Project1 from './Project1';

import React, { useState } from 'react';



function Projects() {
  //Project 2: Monster Bartender
  const [currentIndex3, setCurrentIndex3] = useState(0); //index for mb gameplay list
  const p2_images = [
    require('../../../images/project2_images/mb_menu.png'),
    require('../../../images/project2_images/mb_gameplay.png'),
    require('../../../images/project2_images/mb_recipe.jpg'),
  ];
  const nextP2Image = () => {
    setCurrentIndex3((prevIndex2) => (prevIndex2 === p2_images.length - 1 ? 0 : prevIndex2 + 1));
  };

  const [currentIndex4, setCurrentIndex4] = useState(0); //index for changing p2 characters
  const character_images = [
    require('../../../images/project2_images/chad.png'),
    require('../../../images/project2_images/mummy.png'),
    require('../../../images/project2_images/lady.png'),
    require('../../../images/project2_images/samurai.png'),
    require('../../../images/project2_images/statue.png'),
  ];
  const changeCharacters = (index) => {
    setCurrentIndex4(index);
  };

  //Project 3: Bomb Buddies
  const [currentIndex5, setCurrentIndex5] = useState(0); //index for p3_images list
  const p3_images = [
    require('../../../images/project3_images/BB_menu.png'),
    require('../../../images/project3_images/BB_party_mode.png'),
    require('../../../images/project3_images/BB_drawing_shapes.png'),
    require('../../../images/project3_images/BB_bomb.png'),
    require('../../../images/project3_images/BB_bestbuddies.png'),
    require('../../../images/project3_images/BB_win.png'),
    require('../../../images/project3_images/BB_lose.png'),
  ];
  const nextP3Image = () => {
    setCurrentIndex5((prevIndex) => (prevIndex === p3_images.length - 1 ? 0 : prevIndex + 1));
  };
  //artist credits
  const p3_art_credits = [
    'UI Artist: Dorian Trinh / Menu Art: Devis Lai / Logo Art: Julianne Lee',
    'UI Artist: Dorian Trinh / Thumbnail Art: Annie Holley, Kylie Komori, Devis Lai',
    'Artist: Kylie Komori',
    'UI Artist: Dorian Trinh',
    'UI Artist: Dorian Trinh / Board Art: Boston Moreland',
    'UI Artist: Dorian Trinh',
    'UI Artist: Dorian Trinh',
  ];

  //Project 4: Trivia-Game
  const [currentIndex6, setCurrentIndex6] = useState(0); //index for p1_images list
  const p4_images = [
    require('../../../images/project4_images/Page1.png'),
    require('../../../images/project4_images/Page2.png'),
    require('../../../images/project4_images/Page3.png'),
    require('../../../images/project4_images/Page4.png'),
    require('../../../images/project4_images/Page5.png'),
    require('../../../images/project4_images/Page6.png'),
    require('../../../images/project4_images/Page7.png'),
    require('../../../images/project4_images/Page8.png'),
    require('../../../images/project4_images/Page9.png'),
    require('../../../images/project4_images/Page10.png'),
    require('../../../images/project4_images/Page11.png'),
    require('../../../images/project4_images/Page12.png'),
    require('../../../images/project4_images/Page13.png'),
    require('../../../images/project4_images/Page14.png'),
  ];
  const nextP4Image = () => {
    setCurrentIndex6((prevIndex) => (prevIndex === p4_images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevP4Image = () => {
    setCurrentIndex6((prevIndex) => (prevIndex === 0 ? p4_images.length - 1 : prevIndex - 1));
  };

    return (
      <>
      <div className= 'projects-background'>
        <Project1/>
        <div className = "p2-tab-container">
          <h1 className = "p2-caption">
            Project 2: Monster Bartender
          </h1>
        </div>

        <div className = "p2-tab-layout">
          <button className = 'p2-next-button' onClick= {nextP2Image}>
            <img src = {next_icon} className = "next-icon" alt = ""/>
          </button>

          
          <div className = "p2-snapshot-container">
            <div className = "p2-snapshot-caption-container">
              <h1 className = "p2-snapshot-caption">
                Game Snapshots
              </h1>
            </div>
            <img src = {p2_images[currentIndex3]} className = "p2-image" alt = ""/>
          </div>
          
          <div className = "p2-game-explanation-container">
            <div className = "p2-game-explanation-box">
              <div className = "p2-explanation-caption-box">
                <h1 className = "p1-explanation-caption">
                  Game Explanation
                </h1>
              </div>
              <h1 className = "p2-explanation-text">
                 Monster Bartender is a 2.5D, singleplayer, horror, restaurant serving game.
                 Your job is to serve the correct drink to each customer before they run out patience
                 and kill you. Choosing the wrong speech bubbles can upset the customer,
                 resulting in death. You can use a recipe book to 
                 help aid you, but staring too long will summon a book demon.
              </h1>
            </div>

            <div className = "p2-demo-box">
              <div className = "p2-demo-caption-box">
                <h1 className = "p1-demo-caption">
                  Demo Video
                </h1>
              </div>
              <video src={p2_video} className = "p2-demo-video-box" width="320" height="180" controls="controls" autoplay= {false} />
              <div className= "p2-notes-caption-box">
                <h1 className = "p2-notes-caption">
                  Notes
                </h1>
              </div>
              <div className = "p2-notes-text">
                Monster Bartender was a in-class project assignment.
                Our class teamed up with Berklee Music students to 
                create this game.
                <p/>
                <h1 className = "p2-notes-special-text">Course Name:</h1> 
              </div>
              {/* CTIN 489: Intermediate Game Design and Production */}
              <h1 className = "p2-class-name">
                CTIN 489: Intermediate Game Design and Production
              </h1>
            </div>

            <div className = "p2-credits-box">
              <div className= "p2-credits-caption-box">
                <h1 className = "p2-credits-caption">
                  Credits
                </h1>
              </div>
              <h1 className = "p2-credits-caption-text">
                <h1 className = "p1-credits-role">Artist:</h1> 
                <h1 className = "my-name">Julianne Lee</h1>
                <p/>
                <h1 className = "p1-credits-role">Engineering:</h1> 
                Birdie Barr
                <p/>
                <h1 className = "p1-credits-role">Sound Producer:</h1> 
                Moodin Jang
                <p/>
                <h1 className = "p1-credits-role">Composers:</h1> 
                Johnny Ho
                <p/>
                Diego Gomez
                <p/>
                <h1 className = "p1-credits-role">Sound Designers:</h1>
                Johnny Ho
                <p/>
                Diego Gomez
                <p/>
                Moodin Jang
                <p/>
                Xiaohe Zhao
                <p/>
                <h1 className = "p1-credits-role">Made with:</h1>
                Unity
                <p/>
                <h1 className = "p1-credits-role">Art Softwares:</h1>
                Procreate
                <p/>
              </h1>
            </div>
          </div>
          
          <div className = "p2-character-containers">
            <div className = "p2-character-caption-box">
              <h1 className = "p2-character-caption">
                Characters
              </h1>
            </div>
            <div className = "p2-animation-caption-box">
              <h1 className = "p2-animation-caption">
                Killing Animations
              </h1>
            </div>
            <div className = "character-button-container">
              <button className = "chad-button" onClick = {() => changeCharacters(0)}>
                <img src = {chad_thumbnail} className = "chad-thumbnail" alt = ""/>
              </button>
              <button className = "mummy-button" onClick = {() => changeCharacters(1)}>
                <img src = {mummy_thumbnail} className = "mummy-thumbnail" alt = ""/>
              </button>
              <button className = "lady-button" onClick = {() => changeCharacters(2)}>
                <img src = {lady_thumbnail} className = "lady-thumbnail" alt = ""/>
              </button>
              <button className = "samurai-button" onClick = {() => changeCharacters(3)}>
                <img src = {samurai_thumbnail} className = "samurai-thumbnail" alt = ""/>
              </button>
              <button className = "statue-button" onClick = {() => changeCharacters(4)}>
                <img src = {statue_thumbnail} className = "statue-thumbnail" alt = ""/>
              </button>
            </div>
            <div className = "p2-animation-container">
              <video src={chad_animation} className = "chad-video-box" width="248" height="140" controls="controls" autoplay= {false} />
              <video src={mummy_animation} className = "mummy-video-box" width="248" height="140" controls="controls" autoplay= {false} />
              <video src={lady_animation} className = "lady-video-box" width="248" height="140" controls="controls" autoplay= {false} />
              <video src={samurai_animation} className = "samurai-video-box" width="248" height="140" controls="controls" autoplay= {false} />
              <video src={statue_animation} className = "statue-video-box" width="248" height="140" controls="controls" autoplay= {false} />
              <video src={book_animation} className = "book-video-box" width="248" height="140" controls="controls" autoplay= {false} />
            </div>
            
            <img src = {character_images[currentIndex4]} className = "p2-characters" alt = ""/>
          </div>
        </div>
      
        {/* AGP GAME: BOMB BUDDIES*/}
        <div className = "p3-tab-container-2">
          <div className = "p3-explanation-container">
              <h1 className = "p1-explanation-text">
                Bomb Buddies is a mobile, Jackbox party-esque, co-op game with 
                a series of AR-based mini games. The premise of the game is that
                a hacker forces you and your friends to play a series of mini games 
                so your phone does not "explode". Some mini games include: defusing 
                virtual bombs scattered across your room, answering trivia questions
                with a friend, and tracing provided shapes using the tip of your nose.
              </h1>
              <div className = "p3-explanation-box">
                <h1 className = "p1-explanation-caption">
                  Game Explanation
                </h1>
              </div>
          </div>

          <div className = "p3-demo-container">
            <div className = "p3-demo-box">
              <h1 className = "p1-demo-caption">
                Demo Video
              </h1>
            </div>
            <video src={p3_video} className = "p3-demo-video-box" width="350" height="200" controls="controls" autoplay= {false} />
          </div>

          <div className = "p3-qr-container">
            <div className = "p3-qr-box">
              <h1 className = "p1-demo-caption">
                QR Code
              </h1>
            </div>
            <img src = {qr_image} className = "qr-image" alt = ""/>

            <div className= "bb-link">
              <a href="https://apps.apple.com/us/app/bomb-buddies-usc-games/id6443524416">
                https://apps.apple.com/us/app/bomb-buddies-usc-games/id6443524416
              </a>
            </div>
            
          </div>

          <div className = "p3-credits-container">
            <div className = "p3-credits-box">
              <h1 className = "p1-credits-caption">
                My Role
              </h1>
            </div>

            <h1 className = "p3-credits-caption-text">
              <h1 className = "p1-credits-role">Art Director:</h1> 
              <h1 className = "my-name">Julianne Lee</h1>
              <p/>
              My role as Art Director was to assign tasks, fix artwork to maintain
              consistency, take on tasks that are shorthanded, add assets on unity,
              give feedback to fellow artists, and make routine checkups with the director.
              Bomb Buddies was my senior Capstone Project (Advanced Game Project) at USC.
            </h1>

            <a href="/Bomb Buddies Credits.pdf" download className= "bb-credits">
              Full Credits
            </a>

          </div>
        </div>
        <div className = "p3-tab-container">
          <h1 className = "p2-caption">
            Project 3: Bomb Buddies
          </h1>
        </div>
        <div className = "p3-tab-layout">
          <button className = 'next-button' onClick= {nextP3Image}>
            <img src = {next_icon} className = "next-icon" alt = ""/>
          </button>
          <div className = "mobile-container">
            <img src = {p3_images[currentIndex5]} className = "p3-image" alt = ""/>
          </div>
          <h1 className = "p3-art-credits-text">
            {p3_art_credits[currentIndex5]}
          </h1>
          <h1 className = "concept-text">
              Concept Art
          </h1>
          <img src = {bb_concept} className = "p3-concept" alt = "" />
          <h1 className = "concept-credit">
            Concept Design: Jenny Jiang / Render: Julianne Lee
          </h1>
          <img src = {laugh_gif} className = "laugh-gif" alt = ""/>
          <img src = {sad_gif} className = "sad-gif" alt = ""/>
          <img src = {neutral_gif} className = "neutral-gif" alt = ""/>
          <h1 className = "animation-credit">
            Animation Line Art: Nicole Wang / Render: Julianne Lee
          </h1>
        </div>
        
        <div className = "p4-tab-container">
          <h1 className = "p2-caption">
            Project 4: Trivia Game
          </h1>
        </div>

        <div className = "p4-tab-layout">
          <div className = "p4-credits-container">
            <h1 className = "presentation-caption">
              Credits
            </h1>
          </div>

          <div className = "p4-full-credits-container">
            <h1 className = "p4-explanation-text">
              <h1 className = "p1-credits-role">Engineers:</h1> 
              <h1 className = "my-name">Julianne Lee</h1>
              Aneesh Sanghai
              <p/>
              Unnati Goyal
              <p/>
              Vaibhav Rungta
              <p/>
              Will Wei 
              <p/>
              Yashvi Jaju 


            </h1> 
          </div>

          <div className = "p4-my-role-container">
            <h1 className = "p4-explanation-text">
              <h1 className = "p1-credits-role">Engineer:</h1> 
              <h1 className = "my-name">Julianne Lee</h1>
              My role as an engineer was to code the backend portion of the
              trivia game. I was also in charge of making the UI for the game and the 
              frontend part of the website. Some UI changes I made were adding 
              color to indicate what questions players answered correct or wrong. 
              I also styled the UI buttons. 
            </h1> 
          </div>
          

          <div className = "p4-presentation-role-container">
            <h1 className = "presentation-caption">
              My Role
            </h1>
          </div>  

          <div className = "p4-presentation-caption-container">
            <h1 className = "presentation-caption">
              Presentation
            </h1>
          </div>
          <button className = 'p4-next-button' onClick= {nextP4Image}>
            <img src = {next_icon} className = "next-icon" alt = ""/>
          </button>

          <button className = 'p4-prev-button' onClick= {prevP4Image}>
            <img src = {prev_icon} className = "prev-icon" alt = ""/>
          </button>

          <div className = "presentation-container">
            <img src = {p4_images[currentIndex6]} className = "p4-image" alt = ""/>
          </div>

          <div className = "p4-explanation-box">
            <h1 className = "p4-explanation-text">
              Trivia Game is a react js, web game where players have to answer
              as many correct questions as they can before time runs out. There are 
              two modes on the website: singleplayer and multiplayer. Singleplayer mode
              is for practicing, while multiplayer uses MongoDB to allow two players
              to compete against each other. Players can save their score if they make
              an account.
            </h1> 
          </div>

          <div className = "p4-demo-container">
            <div className = "p4-demo-box">
              <h1 className = "p1-demo-caption">
                Demo Video
              </h1>
            </div>
            <video src={p4_video} className = "p4-demo-video-box" controls="controls" autoplay= {false} />

            <div className = "p4-resources-box">
              <h1 className = "p1-demo-caption">
                Resources
              </h1>
            </div>

            

            <h1 className = "p4-resources-text">
              <h1 className = "p1-credits-role">Repository:</h1> 
              <p/>
              <div className= "resource-link">
                <a href="https://github.com/yashvijaju/trivia-game">
                  https://github.com/yashvijaju/trivia-game
                </a>
              </div>
              <p/>
              <div className = "documentation-box">
                <h1 className = "p1-credits-role">Documentation:</h1> 
              </div>
              <div className = "technical-button-align">
                <a href="/Technical Specifications.pdf" download className= "documentation-button">
                  Technical Specification
                </a>
              </div>

              <div className = "design-button-align">
                <a href="/Design.pdf" download className= "documentation-button">
                  Design Documentation
                </a>
              </div>

              
             
            </h1>
          </div>
        </div>



      </div>
      
      
      
      

      </>
    );
  }
  
  export default Projects;