import '../../../App';
import './MonsterGame.css';
import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";

function MonsterGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/MonsterGameAssets/monster.loader.js",
    dataUrl: "/MonsterGameAssets/monster.data",
    frameworkUrl: "/MonsterGameAssets/monster.framework.js",
    codeUrl: "/MonsterGameAssets/monster.wasm",
    streamingAssetsUrl: "/MonsterGameAssets/StreamingAssets",
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