import React from 'react'
import videojs from "agora-videojs";
// 已经在index.js入口文件中引入了，不用重复引入
// import 'agora-videojs/dist/style.css'

import options from './player-options'

// 在index.js中，使用`React.StrictMode`组件进行包裹,会导致组件默认渲染两次,所以需要使用定时器
class ClassDemo extends React.Component{
    constructor(props){
        super(props)
        this.videoEl = null
        this.player = null
        this.timer = null
    }
    
    componentDidMount(){
        this.timer = setTimeout(() => {
            this.player = videojs(this.videoEl,options)
        }, 3000);
    }

    componentWillUnmount(){
       if(this.timer){
           clearTimeout(this.timer)
           this.timer = null
       }
       if(this.player){
           this.player.dispose()
           this.player = null
       }
    }

    render(){
        return (
            <video className='video-js' ref={(el)=>this.videoEl=el}></video>
        )
    }
}

export default ClassDemo