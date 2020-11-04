import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
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
  const history = useHistory()
  let sta=props.list&& props.list.toJS().filters
  let hot = sta && sta.hot_place
  // console.log(hot);
  let list = hot && hot.slice(0,16);
const [state, setState] = useState({
  timeShow:false,
  adressShow:false,
  time:'不限',
})
 const handleAdressClick=()=>{
  setState(prestate=>({
    adressShow:!prestate.adressShow
  }))
  }
 const handleTimeClick=()=>{
    setState(prestate=>({
      timeShow:!prestate.timeShow,
      time:prestate.time
    }))
  }
  const handleLiClick = (v) => {
    // console.log(v);
    setState({
      time:v
    })
  }
  const handleClear=()=>{
    history.goBack()
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
        >不限</span>
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

      <div className='pubtime'>
        <ul >
          
          {
            
            state.timeShow && arr.map((v,i)=>{
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
      </div>
    </SelectedWrap>
    <PartnerList
      list={props.list}
    ></PartnerList>
    {state.adressShow ? <AdressWrap>
    
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
