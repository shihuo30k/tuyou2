import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    Player,
    BigPlayButton,
  } from 'video-react';

import NavBarRecommend from '@c/recommend/NavBarRecommend'
import {VideoDetailWrap, WhiteSpace, VideoFloting} from './StyledVideoDetail'

export default (props) => {
    const history = useHistory()
    const { value } = history.location.state
    console.log(value)

    return (
        <VideoDetailWrap>
          <NavBarRecommend>{value.title}</NavBarRecommend>
          <WhiteSpace></WhiteSpace>
          <Player
          className="player"
          poster={value.img}
          src={value.video_url}
          // autoPlay
          >
              <BigPlayButton position="center" />
          </Player>
          <div className='contain'>
            <div className="content blur" style={{background:`url(${value.img}) center no-repeat`,backgroundSize:'100% 200%'}}>
              <div className="mask"></div>
            </div>
            <VideoFloting 
            width="0 0 1px 0"
            className='floating'>
              <h3>{value.title}</h3>
              <p>{value.content}</p>
              <div className="author">
                <div className="avatar">
                  <img src={value.user.logo} alt=""/>
                </div>
                <div className="desc">
                  <h4>{value.user.name}</h4>
                  <span>{value.user.sign}</span>
                </div>
              </div>
            </VideoFloting>
          </div>
        </VideoDetailWrap>
    )
}