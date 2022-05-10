import { createRef, useEffect, useRef } from "react";
import videojs from "agora-videojs";
// 已经在index.js入口文件中引入了，不用重复引入
// import 'agora-videojs/dist/style.css'
import options from "./player-options";


/**
 * 关于为什么要是用定时器，是因为useEffect默认情况下会触发两次，这是官方刻意为之，详情可参考 https://github.com/facebook/react/issues/17786
 * 
 * 当然，还有另外一种方法解决，就是在index.js文件中渲染组件的时候，不要使用 `React.StrictMode` 组件进行包裹，这样子`useEffect`就只会被触发一次
 */
function HookDemo() {
  const videoEl = createRef();
  const timer = useRef(null);
  let player = null;
  useEffect(() => {
    timer.current = setTimeout(() => {
      player = videojs(videoEl.current, options);
    }, 500);
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null
      }
      if (player) {
        player.dispose();
        player = null
      }
    };
  }, [videoEl.current]);

  return <video className="video-js" ref={videoEl}></video>;
}

export default HookDemo;
