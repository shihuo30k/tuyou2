import React from 'react'

import {useSelector} from 'react-redux'
import {
  useHistory
} from 'react-router-dom';
import {
  TravelWrap
} from './styledCommunity';

export default function Travel(props) {
  const history = useHistory()
  const sta = useSelector(state => state.getIn(['community','travelList']))
    // console.log(sta.toJS());
    let state = sta.toJS()
    let travel = state.travelnote
    // console.log(travel);
    let s = ''
    if(travel){
      
        for(let i=0;i< travel.grade;i++){
          s+='☆'  
          
    }
    }
  return (
    
    <TravelWrap 
      onClick={()=>history.push('/jxtravalnote',{id:"21065959"})}
    >
      <h2>他的游记</h2>
      <div>
        <div>
          <img src={travel && travel.imageurl} alt=""/>
          </div>
        <h3>首页推荐</h3>
        <h4>
          <span>{s}</span>
           精华
        </h4>
        <h5>{travel && travel.title}</h5>
      </div>
    </TravelWrap>
  )
}
