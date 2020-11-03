import React from 'react'


import {
  TopicWrap
} from './styledCommunity'

const Topic = (props) => {
  return (
    <TopicWrap className="wrap" >
      <ul className="content" >

        {
          props.list && props.list.map(v =>(
            <li
             key={v.id}
            >
              <div>
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