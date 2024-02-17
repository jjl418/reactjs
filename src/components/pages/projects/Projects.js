import '../../../App';
import './Projects.css';
import mint_icecream from '../../../images/project1_images/mint_icecream.png';
import chocolate_icecream from '../../../images/project1_images/chocolate_icecream.png';
import strawberry_icecream from '../../../images/project1_images/strawberry_icecream.png';
import vanilla_icecream from '../../../images/project1_images/vanilla_icecream.png';
import next_icon from '../../../images/decor/next_icon.png';
import cat_unknown from '../../../images/project1_images/cat_unknown.png';
import dog_unknown from '../../../images/project1_images/dog_unknown.png';
import rat_unknown from '../../../images/project1_images/rat_unknown.png';
import p1_video from '../../../videos/p1_demo_video.mp4';
import rabbit from '../../../images/project1_images/rabbit2.png';
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
import React, { useState } from 'react';



function Projects() {

  const [currentIndex, setCurrentIndex] = useState(0); //index for p1_images list
  const p1_images = [
    require('../../../images/project1_images/creamistry_menu.png'),
    require('../../../images/project1_images/creamistry_gameplay1.png'),
    require('../../../images/project1_images/creamistry_gameplay2.png'),
    require('../../../images/project1_images/next_level.png'),
    require('../../../images/project1_images/win.png'),
    require('../../../images/project1_images/lose.png'),
    require('../../../images/project1_images/tutorial1.png'),
    require('../../../images/project1_images/tutorial2.png'),
    require('../../../images/project1_images/tutorial3.png'),
  ];
  const nextP1Image = () => {
    setCurrentIndex((prevIndex) => (prevIndex === p1_images.length - 1 ? 0 : prevIndex + 1));
  };

  const [currentIndex2, setCurrentIndex2] = useState(0); //index for changing p1 character profiles
  const profile_images = [
    require('../../../images/project1_images/cat.png'),
    require('../../../images/project1_images/dog.png'),
    require('../../../images/project1_images/rat.png'),
  ];
  const profile_alias = [
    'Mr. Cat',
    'Ms. Dog',
    'Mr. Rat',
  ];
  const profile_info = [
    'role: customer gender: male appears: all lvls difficulty: easy',
    'role: customer gender: female appears: lvls 2-3 difficulty: medium',
    'role: customer gender: male appears: lvl 3 difficulty: hard',
  ];
  const changeProfile = (index) => {
    setCurrentIndex2(index);
  };

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
    // Add more image URLs as needed
  ];
  const changeCharacters = (index) => {
    setCurrentIndex4(index);
  };

    return (
      <>
      <div className= 'projects-background'>
        <div className = "p1-tab-container-2">
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
            
            <video src={p1_video} className = "p1-demo-video-box" width="200" height="350" controls="controls" autoplay= {false} />
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
        <div className = "p1-tab-container">
          <div className = "p1-caption-container">
            <h1 className = "p1-caption">
              Project 1: Creamistry
            </h1>
          </div>
        </div>
        <div className = "p1-tab-layout">
          <button className = 'next-button' onClick= {nextP1Image}>
            <img src = {next_icon} className = "next-icon" alt = ""/>
          </button>


          <div className = "p1-container">
            {/* <img src = {creamistry_menu} className = "p1-image" alt= ""/> */}
            <img src = {p1_images[currentIndex]} className = "p1-image" alt = ""/>
          </div>
          <div className = "id-card">
            {/* <img src = {cat} className = "profile" alt = ""/> */}

            <img src = {profile_images[currentIndex2]} className = "profile" alt = ""/>

            <h1 className = "profile-name">
              {profile_alias[currentIndex2]}
            </h1>
           
            <h1 className = "profile-content">
              {profile_info[currentIndex2]}
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
              <button className = "cat-button" onClick = {() => changeProfile(0)}>
                <img src = {cat_unknown} className = "cat-unknown" alt = ""/>
              </button>
              <button className = "dog-button" onClick = {() => changeProfile(1)}>
                <img src = {dog_unknown} className = "dog-unknown" alt = ""/>
              </button>
              <button className = "rat-button" onClick = {() => changeProfile(2)}>
                <img src = {rat_unknown} className = "rat-unknown" alt = ""/>
              </button>
              <div className = "character-divider"/>
              <h1 className = "characters-box-description">
                * hover and click over the character silhouettes to learn
                more *
              </h1>
            </div>
            
          </div>
        </div>

        <div className = "p2-tab-container">
          <h1 className = "p2-caption">
            Project 2: Monster Bartender
          </h1>
        </div>
        <div className = "p2-tab-layout">
          <button className = 'next-button2' onClick= {nextP2Image}>
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
      </div>
      
      
      
      

      </>
    );
  }
  
  export default Projects;