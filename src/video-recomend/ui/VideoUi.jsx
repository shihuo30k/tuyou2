import React from 'react'
import {VideoWrap} from './StyledVideo'
import NavBar from '@c/recommend/NavBarRecommend'
import VideoSwiper from './VideoSwiper'


export default (props) => {
    return (
        <VideoWrap>
            <NavBar>旅游精选视频</NavBar>
            <VideoSwiper></VideoSwiper>
        </VideoWrap>
    )
}