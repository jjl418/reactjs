import '../../../App';
import './MonsterGame.css';
// import '../../../../monster.framework.js'
import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function MonsterGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../../../../build.loader.js",
    dataUrl: "../../../../build.data",
    frameworkUrl: "../../../../build.framework.js",
    codeUrl: "../../../../build.wasm",
    streamingAssetsUrl: "../../../../StreamingAssets",
  });
  return (
    <>
      <div className = "monster-background">
        <Unity unityProvider={unityProvider} className = "monster-game-containter" />
      </div>
      
    </>
  );
}

export default MonsterGame;