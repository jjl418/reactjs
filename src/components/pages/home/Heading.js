import React from "react";
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
        <div className= "message-box">
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

        
      </>
    );
  }
  
  export default Heading;