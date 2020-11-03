import React,{useEffect} from 'react'

import {
  useDispatch,
  useSelector
} from 'react-redux'
import {
  PartnerTravelWrap,
  PartnerTravelFllow,
  TagWrap
} from './styledCommunity';
import actionCreator from '../actionCreator'
export default function PartnerTravel() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(actionCreator.setPartnerTravelAsync())
  }, [dispatch])

  const sta = useSelector(state => state.getIn(['community','partnerTravelList']))

   const state= sta.toJS()['1月']
  //  console.log(state);
    

  return (
    <PartnerTravelWrap>
      <div className='top'>
        <h3>结伴旅行</h3>
        <PartnerTravelFllow
          color='#13be79'
          radius='.2'
        >+ 找旅伴</PartnerTravelFllow>
      </div>

      <div className='Partnerwrap'>
        <ul className='content' >

          {
            state && state.map(v=>{
              return(
                <li
                  key={v.city}
                >
                  <div>
                    <p>
                      <img src={v.img}alt=""/>
                    </p>
                    <h3>
                      <TagWrap
                        color='#fff'
                      >曼谷</TagWrap>
                      <TagWrap>清迈</TagWrap>
                      <TagWrap>普吉岛</TagWrap>
                      <TagWrap>巴提娜</TagWrap>
                    </h3>
                    <h4>
                     {v.city}
                    </h4>
                    <h5>
                      平均出游7天
                    </h5>
                    
                  </div>
                  <div>
                    <p>1171人正在结伴 &gt;</p>
                  </div>
                 
                </li>
              )
            })
          }
         
        </ul>

      </div>
    </PartnerTravelWrap>
  )
}
