import React from 'react'
import {
  AllSelectedTagWrap,
  BorderLi
} from './styledAllSelected'
export default function List(props) {
  // console.log(Object.keys(props.arr));
  return (
    <AllSelectedTagWrap>
      {
        Object.keys(props.arr).map((v,i) =>{
          // console.log(v);
          return (
            <div 
              key={i}
            >
        <h2>线路交通</h2>
        <ul>
          {
            props.arr[v].map((v,i)=>{
              return(
                <BorderLi
                  color="rgba(31,32,35,.2)"
                  radius=".02"
                  key={i}
                >
                 {v}
                </BorderLi>
              )
            })
          }
        </ul>
      </div>
      )
          
        } )
        }
    </AllSelectedTagWrap>
  )
}
