import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    Player,
    BigPlayButton,
  } from 'video-react';

import NavBarRecommend from '@c/recommend/NavBarRecommend'
import {VideoDetailWrap, WhiteSpace, VideoFloting, NavTextWrap} from './StyledVideoDetail'

export default (props) => {
    const history = useHistory()
    const { value, type } = history.location.state
    console.log(type)

    return (
        <VideoDetailWrap>
          <NavBarRecommend>
            <NavTextWrap
            lc={1}
            >
              {type==='banner' ? value.title : value.title}
            </NavTextWrap>
          </NavBarRecommend>
          <WhiteSpace></WhiteSpace>
          <Player
          className="player"
          poster={type==='banner' ? value.img : value.poster}
          src={type==='banner' ? value.video_url : value.video_url}
          // autoPlay
          >
              <BigPlayButton position="center" />
          </Player>
          <div className='contain'>
            <div className="content blur" style={{background:`url(${type==='banner' ? value.img : value.poster}) center no-repeat`,backgroundSize:'100% 200%'}}>
              <div className="mask"></div>
            </div>
            <VideoFloting 
            width="0 0 1px 0"
            className='floating'>
              <h3>{type==='banner' ? value.title : value.title}</h3>
              <p>{type==='banner' ? value.content : value.content}</p>
              <div className="author">
                <div className="avatar">
                  <img src={type==='banner' ? value.user.logo : value.logo} alt=""/>
                </div>
                <div className="desc">
                  <h4>{type==='banner' ? value.user.name : value.name}</h4>
                  <span>{type==='banner' ? value.user.sign : value.sign}</span>
                </div>
              </div>
            </VideoFloting>
          </div>
        </VideoDetailWrap>
    )
}