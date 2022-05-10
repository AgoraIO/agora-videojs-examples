import React from 'react'

import options from './player-options'

class ClassDemo extends React.Component{
    constructor(props){
        super(props)
        this.videoEl = null
        this.player = null
    }
    
    componentDidMount(){
        // console.log(this.videoEl,options);
    }

    componentWillUnmount(){}

    render(){
        return (
            <video className='video-js' ref={(el)=>this.videoEl=el}></video>
        )
    }
}

export default ClassDemo