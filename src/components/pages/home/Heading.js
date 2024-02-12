// import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import '../../../App';
import './Heading.css';
import { useTypewriter, Cursor } from "react-simple-typewriter";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Temphead from '../../../model/Temphead';
// import React, { Suspense } from 'react';

function Heading() {
    const [text] = useTypewriter({
        words: ["Hi, I'm Julianne Lee"],
        loop: {},
        typeSpeed: 100
    });

    // const canvasRef = useRef(null);
    // useEffect(() => {
    // const Canvas = canvasRef.current;
    // const context = Canvas.getContext('2d');
    // Canvas.width = 250;
    // Canvas.height = 400;
    // context.fillRect(0, 0, Canvas.width, Canvas.height);
    //     }, []);
    
    
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
        <Canvas></Canvas>
        {/* <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Suspense fallback = {null}>
                <Temphead position={[5, 0, 0]} scale={[5, 5, 5]}/> 
            </Suspense>
            <OrbitControls enableZoom = {false}/>
        </Canvas> */}
      </>
    );
  }
  
  export default Heading;