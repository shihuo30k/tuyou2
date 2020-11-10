import React from 'react'
import {useHistory} from 'react-router-dom'
import {
  TopicWrap
} from './styledCommunity'

const Topic = (props) => {
  
  const history = useHistory()

 const handleTdClick=()=>{
    history.push("/todaytopic")
  }
  return (
    <TopicWrap className="wrap" >
      <ul className="content" >

        {
          props.list && props.list.map(v =>(
            <li
             key={v.id}
             onClick={handleTdClick}
            >
              <div >
                <h2>今日话题</h2>
                <h3>{v.title}</h3>
                <h4>{v.date}</h4>
              </div>
              <div>
                <img src={v.imageurl} alt=""/>
              </div>
            </li>
          ) )
          }
        </ul>

      </TopicWrap>
  )
}

export default  Topic