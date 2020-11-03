import React from 'react'
import {
  QAContent,
  Ellipsis
} from './styledQa'
import eyesvg from '@a/images/eye.svg'
import thumbsvg from '@a/images/thumb.svg'

export default function SelectedQAList(props) {
  return (
    <QAContent>
    {
    props.list && props.list.map(v=>{
      return(
        <li
        key={v.question_views}
        >
          <h2>{v.question_title}</h2>
         { v.answer_image && <h3>
            <img src= "http://yl.charmiot.com/travel_qygbz1/images/demo/u386.jpg"alt=""/>
          </h3>}
          <Ellipsis lc="2">{v.answer_content}
          </Ellipsis>
          <h5>
            <div className='name'>{v.answer_username}
              {
                v.answer_source_type==="1" ? <p>待回答</p> : ''
                
                }
            </div>
            <div className='thumb'>
              <div>
                <p>
                  <img src={eyesvg} alt=""/>
                </p>
                <span>{v.question_views}</span>
              </div>

              <div>
                <p>
                  <img src={thumbsvg} alt=""/>
                </p>
                <span>
                 {v.answer_usenum}
                </span>
              </div>
            </div>
            
          </h5>

        </li>
      )
    })
  }
</QAContent>
  )
}
