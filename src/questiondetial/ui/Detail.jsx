import React from 'react'
import {
  DetailWrap,
  BorderDiv,
  EllipsisDiv,
  EllipsisP
} from './questiondetail'
import eyeSvg from '@a/images/eye.svg'
import thumb from '@a/images/thumb.svg'
export default function Detail(props) {

  console.log(props.detail);

  let {answer_content,question_title,answer_username,question_username}=props.detail
  return (
    <DetailWrap>
      <BorderDiv
          width=' 0 0 1px 0'
          color="#999" className="blank"></BorderDiv>
      <div className="top">
        <span>#中国</span>
        <EllipsisP
          lc={2}
        >{question_title}</EllipsisP>
        <span>{answer_username?answer_username:question_username}</span>
        <EllipsisDiv 
        lc={3}
        className="content"
          // style={{height:(state.preh)+'rem'}}
        >
          {answer_content?answer_content:question_title}
        </EllipsisDiv>
        <BorderDiv className="btn"
          color="#999"
          radius=".08"
        >
          <p>
            <img src={eyeSvg} alt=""/>
            关注
          </p>
          <span>|</span>
          <p>
            <img src={thumb} alt=""/>
            我来回答
          </p>
        </BorderDiv>
        <h3>全部回答 (88)</h3>
        <ul>
        <li>
          <h2>
            <p>
              <img src="http://yl.charmiot.com/travel_qygbz1/images/demo/u393.jpg" alt=""/>
            </p>
            <span></span>
          </h2>
        </li>
      </ul>
      </div>
     
    </DetailWrap>
  )
}
