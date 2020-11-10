import React,{useState} from 'react'
import { SearchBar } from 'antd-mobile';
import {
  SelectedWrap,
  AdressWrap
} from './styledPartnerTravel'
import PartnerList from './PartnerList'
// import Adress from './Adress'
import svg1 from '@a/images/bottom.svg'
import svg3 from '@a/images/top.svg'
import svg2 from '@a/images/flus.svg'
const arr =['全部','本周末','1周内','1个月内']
export default function Selected(props) {
  let sta=props.list&& props.list.toJS().filters
  let hot = sta && sta.hot_place
  // console.log(props.list.toJS());
  let list = hot && hot.slice(0,16);
const [state, setState] = useState({
  timeShow:false,
  adressShow:false,
  time:'不限',
  adress:'不限',
})
 const handleAdressClick=()=>{
  setState(prestate=>({
    adressShow:!prestate.adressShow,
    time:prestate.time,
    adress:prestate.adress,

  }))
  }
 const handleTimeClick=()=>{
    setState(prestate=>({
      timeShow:!prestate.timeShow,
      time:prestate.time,
      adress:prestate.adress
      
    }))
  }
  const handleLiClick = (v) => {
    // console.log(v);
    setState(prestate=>({
      time:v,
      adress:prestate.adress,
      adressShow:false
    }))
  }
  const handleClear=()=>{
    setState(prestate=>({
      adress:prestate.adress,
      time:prestate.time,
      adressShow:false
    }))
  }
  const handleNaClick = (name)=>{
    setState(prestate=>({
      time:prestate.time,
      adressShow:!prestate.adressShow,
      adress:name,

    }))
  }
  return (
    <>
    <SelectedWrap
      width="0 0 1px 0" 
      color='#ccc'
    >
      <div>
        <span>目的地 --</span>
        <span
          onClick = {handleAdressClick}
        > {state.adress}</span>
        <img src={svg1} alt=""/>
      </div>
      <div  onClick={handleTimeClick}>
        <span>出发时间 --</span>
        <span
         
        >{state.time}</span>
         <img src={state.timeShow ? svg3 : svg1}  alt=""/>
      </div>
      <div className='pub'>
        <img src={svg2} alt=""/>
      </div>

      {state.timeShow && <div className='pubtime'>
        <ul >
          
          {
            
            arr.map((v,i)=>{
             
              return(
                
                <li
                key={i}
                onClick={()=>handleLiClick(v)}
               className= {state.time === v ? "active": ''}
                >
                  {v}
                </li>
              )
            })
          }
        </ul>
      </div>}
    </SelectedWrap>
    <PartnerList
      list={props.list}
    ></PartnerList>
    {state.adressShow ? <AdressWrap
    style={{height:window.innerHeight+100}}
    >
    
    <SearchBar
       placeholder="搜索地点"
       showCancelButton
       onClear={handleClear}
    ></SearchBar>
      <div className="content">
        <p className="hot">热门地点</p>
        <ul>
         {
           list && list.map(v=>{
             return(
              <li
              key={v.id}
              onClick={()=>handleNaClick(v.name)}
              >
              <p>
                <img src={v.cover} alt=""/>
                <b>{v.involve}</b>
              </p>
              
              <span>{v.name}</span>
            </li>
             )
           })
            
          }
        </ul>
      </div>
  </AdressWrap> : ""}
    </>
  )
}
