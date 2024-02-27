import '../../../App';
import './Project3.css';
import next_icon from '../../../images/decor/next_icon.png';
import bb_concept from '../../../images/project3_images/BB_concept.png';
import laugh_gif from '../../../images/project3_images/BB_laugh.gif';
import sad_gif from '../../../images/project3_images/BB_sad.gif';
import neutral_gif from '../../../images/project3_images/BB_neutral.gif';
import p3_video from '../../../videos/BB_demo.mp4';
import qr_image from '../../../images/project3_images/BB_QR.png';
import React, { useState } from 'react';

function Project3() {
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

  return (
    <>
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
    </>
  );
}

export default Project3;