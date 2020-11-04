import React,{useState} from 'react'
import {
  QAContent,
  Ellipsis
} from './styledQa'
import {PullToRefresh} from 'antd-mobile'
import eyesvg from '@a/images/eye.svg'
import thumbsvg from '@a/images/thumb.svg'

export default function SelectedQAList(props) {

  const [state, setState] = useState( {
    refreshing: false,
    down: true,
    height: document.documentElement.clientHeight,
    pageSize:1,
  })
  // console.log(props.list.slice(0,5*state.pageSize))
  let list=props.list.slice(2,8*state.pageSize)
  let list1 = list.slice(2,40)
  // console.log(state.pageSize);

  return (
    <div>
      <PullToRefresh
          style={{
            height: state.height,
            overflow: 'auto',
          }}
          damping={40}
          direction={'up'}
          refreshing={state.refreshing}
          onRefresh={() => {
            setState(prevState=>({ refreshing: true ,
            pageSize:prevState.pageSize+1
            }));
           
          }}

          >
    <QAContent>
    {
    list1 &&  list1.map(v=>{
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
</PullToRefresh>
</div>
  )
}
