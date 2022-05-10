import { createRef, useEffect } from "react";
import options from './player-options'

function HookDemo() {
  const videoEl = createRef();
  useEffect(() => {
    console.log(videoEl.current,options);
  }, [videoEl.current]);

  return <video className="video-js" ref={videoEl}></video>;
}

export default HookDemo;
