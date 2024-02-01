import React, { Suspense } from "react";
import '../../../App';
import './Heading.css';
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Temphead from '../../../model/Temphead';

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
                    <span style = {{fontWeight: 'bold', color: 'white'}}>
                        {text}
                    </span>
                    <span style = {{color: 'white'}}>
                        <Cursor cursorStyle ='|' />
                    </span>
                </h1>
            </div>
        </div>
        {/* <div className = "model-box">
            <ambientLight/>
            <OrbitControls/>
            <Suspense fallback = {null}>
                <Temphead/>
            </Suspense>
        </div> */}
        <Canvas>
                <ambientLight/>
                <OrbitControls/>
                <Suspense fallback = {null}>
                    <Temphead position={[0, 0, 4]} />
                </Suspense>
        </Canvas>
      </>
    );
  }
  
  export default Heading;