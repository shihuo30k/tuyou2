import React, {useEffect} from 'react';
import { useSelector } from 'react-redux'
import BScroll from '@better-scroll/core';
import {AllShowContainer} from './StyledDestination'


const AllShow = props => {
  // const inhotList = useSelector(state => state.destination.inhotList)
  const inhotList = useSelector(state => state.getIn(['destination','inhotList']))
  let inhotListShow = inhotList.toJS()
  // console.log(inhotList)
  // const months = useSelector(state => state.destination.curMonths)
  const months = useSelector(state => state.getIn(['destination','single','curMonths']))

  // console.log(months)
  const inhotImg = inhotListShow[months]
  

  useEffect(()=>{
    const wrapper = document.querySelector('.wrapper1')
    new BScroll(wrapper, {
      scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: false, //关闭竖向滚动
    })
  },[])

  return (
    <AllShowContainer>
      <div className="wrapper1">
          <ul className="content">
            {
               inhotImg && inhotImg.map((value,i) =>
                   (
                  <li key={i+value}>
                    <img src={value.img}  alt=""/>
                  <span>{value.city}</span>
                   </li>
                )
              )
            }
              
            
          </ul>
        </div>
     
    </AllShowContainer>
  )
}



export default AllShow;