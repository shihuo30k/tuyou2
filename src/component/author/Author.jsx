import React from 'react'
import {
  NavLink,
  useHistory
} from 'react-router-dom'
import {
  AuthorWrap,
  AuthorWraper,
  Follow
} from './styledAuthor'

export default function Author(props) {
  const history = useHistory()
  // console.log(props.list);
  return (
    <>
    <AuthorWraper>
      <div>{props.leftTitle}</div>
      <NavLink to="/mysubscibe"> <div>{props.rightTitle} &gt;</div></NavLink>
    </AuthorWraper> 
    
    <AuthorWrap className="authorWrap">
        
        <ul className='content'>

          {
            props.list && props.list.map(v=>{
              return(
                <li
                  key={v.use_id}
                  onClick={()=>history.push('/pa')}
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
