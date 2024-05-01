// import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import '../../../App';
import './Heading.css';
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Heading() {
    const [text] = useTypewriter({
        words: ["Hi, I'm Julianne Lee"],
        loop: {},
        typeSpeed: 100
    });

    
    return (
      <>
        <div className= "home-background">
            <div className= "message">
                <h1>
                    <span style = {{fontWeight: 'bold'}}>
                        {text}
                    </span>
                    <span style = {{color: 'white'}}>
                        <Cursor cursorStyle ='|' />
                    </span>
                </h1>
            </div>
        </div>
        <Canvas></Canvas>
        
      </>
    );
  }
  
  export default Heading;