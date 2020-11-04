import React from 'react'
import {
    Player,
    BigPlayButton,
  } from 'video-react';

import NavBarRecommend from '@c/recommend/NavBarRecommend'
import {VideoDetailWrap, WhiteSpace} from './StyledVideoDetail'

export default (props) => {
    return (
        <VideoDetailWrap>
          <NavBarRecommend></NavBarRecommend>
          <WhiteSpace></WhiteSpace>
          <Player
          poster="https://pic.qyer.com/video/cover/20200916/1600250179253?imageView2/1/w/230/h/130"
          src='https://media.qyer.com/video/source/20200916/1600250267397'
          // autoPlay
          >
            
              <BigPlayButton position="center" />
            
          </Player>
        </VideoDetailWrap>
    )
}