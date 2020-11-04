import React, {useEffect} from 'react'
import BScroll from '@better-scroll/core';

import {HotVideoWrap} from './StyledVideo'

export default (props) => {
  useEffect( () => {
    new BScroll('.wrapper', {
        scrollX: true, 
      })
  })
    return (
        <div style={{padding:".2rem .1rem", backgroundColor:'#fff'}}>
          <h2 style={{marginBottom:'.2rem'}}>热门精选</h2>
          <HotVideoWrap className="wrapper">
            <ul>
              {
                props.videoData.map((value, index) => {
                  return (
                    <li key={index + value.type}>
                      <div className="poster">
                        <img src={value.poster} alt=""/>
                      </div>
                      <p className='content'>
                        {value.title}
                      </p>
                    </li>
                  )
                })
              }
            </ul>
          </HotVideoWrap>
        </div>
    )
}