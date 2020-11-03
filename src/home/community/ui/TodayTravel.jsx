import React from 'react'
import {useSelector} from 'react-redux'
import {
  useHistory
} from 'react-router-dom'
import {
  TodayTravelWrap,
  Follow,
  TagWrap
} from './styledCommunity';

export default function TodayTravel() {

    const sta = useSelector(state => state.getIn(['community','travelList']))
    // console.log(state.toJS());
    let state = sta.toJS()
    const history = useHistory()
  return ( 

    <TodayTravelWrap onClick ={() => history.push("/pa")}>
      <h2>今日旅游er</h2>
      <h4>
        <div className="left">
          <p>
            <img src={state.imageurl} alt=""/>
          </p>
        </div>
        <div className='right'>
          <p>
            <span>{state.nikename}</span>
            <Follow
              color='#13BE79'
              radius='.15'
            >+ 关注</Follow>
          </p>
          <h3>{state.info}</h3>
          <div className='tag'>
            <TagWrap
              color='#F19736'
            >旅游精华作者</TagWrap>
            <TagWrap
            color='#1abc9c'
            
            >人文旅行</TagWrap>
            <TagWrap
            color='#ff5918'
            >印度深度游</TagWrap>
            <TagWrap
            color='#5f96ff'
            >攻略控</TagWrap>
          </div>

        </div>
        
      </h4>

      {/* {
        props.list && props.list.map(v=>(
        <div
        key={v.id}
        >{v.title}</div>
        ))
      } */}
    </TodayTravelWrap>
  )
}
