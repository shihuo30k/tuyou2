import React from 'react'
import {VideoWrap,WhiteSpace} from './StyledVideo'
import NavBar from '@c/recommend/NavBarRecommend'
import VideoSwiper from './VideoSwiper'
import HotVideo from './HotVideo'
import VideoList from './VideoList'


export default (props) => {
    return (
        <VideoWrap>
            <NavBar>旅游精选视频</NavBar>
            <WhiteSpace></WhiteSpace>
            <VideoSwiper></VideoSwiper>
            <HotVideo
            videoData={props.videoData}
            ></HotVideo>
            <VideoList
            videoData={props.videoData}
            ></VideoList>
        </VideoWrap>
    )
}