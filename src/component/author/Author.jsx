import React from 'react'
import {
  AuthorWrap,
  AuthorWraper,
  Follow
} from './styledAuthor'

export default function Author(props) {
  // console.log(props.list);
  return (
    <>
    <AuthorWraper>
      <div>{props.leftTitle}</div>
      <div>{props.rightTitle} &gt;</div>
    </AuthorWraper> 
    
    <AuthorWrap className="authorWrap">
        
        <ul className='content'>

          {
            props.list && props.list.map(v=>{
              return(
                <li
                  key={v.use_id}
                >
                <h2>
                  <img src={v.picture} alt=""/>
                </h2>
              <h3>{v.nick}</h3>
                <p>{v.grade}</p>
                <Follow
                  color=" #13BE79"
                  radius='.04'
                >+ {props.bnt}</Follow>
            </li>
              )
            })
          }
        </ul>
    </AuthorWrap>
    </>
    
  )
}
