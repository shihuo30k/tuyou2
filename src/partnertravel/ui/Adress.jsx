import React from 'react'
import { SearchBar } from 'antd-mobile';
import {
  AdressWrap
} from './styledPartnerTravel'
export default function Adress(props) {
  let state =props.list&& props.list.toJS().filters
  let hot = state && state.hot_place
  console.log(hot);
  let list = hot && hot.slice(0,16)
  return (
    <AdressWrap>
    
      <SearchBar
         placeholder="搜索地点"
         showCancelButton
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
    </AdressWrap>
  )
}
