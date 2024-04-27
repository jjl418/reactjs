import '../../../App';
import './CreamistryGame.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function CreamistryGame() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/CreamistryGameAssets/creamistry.loader.js",
    dataUrl: "/CreamistryGameAssets/creamistry.data",
    frameworkUrl: "/CreamistryGameAssets/creamistry.framework.js",
    codeUrl: "/CreamistryGameAssets/creamistry.wasm",
  });
  return (
    <>
      <Unity unityProvider={unityProvider} className = "game-containter" />
      <div className = "creamistry-note-container">

      </div>
    </>
  );
}

export default CreamistryGame;