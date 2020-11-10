import React from 'react'


import {
  AuthorWrap,
  AuthorWraper,
  Follow
} from './styledCommunity'

export default function Author(props) {
  // console.log(props.list);
  const history = useHistory()
  const handleClick=()=>{
    console.log(0);
    history.push("/mysubscibe")
  }
  return (
    <>
    <AuthorWraper>
      <div>推荐精华作者</div>
      <div onClick = {handleClick}>如何成为精华作者 &gt;</div>
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
                >+ 关注</Follow>
            </li>
              )
            })
          }
        </ul>
    </AuthorWrap>
    </>
    
  )
}
