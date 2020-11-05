import React from 'react'
// import {useHistory} from 'react-router-dom'
import {
  DetailWrap,
  BorderDiv,
  EllipsisDiv,
  EllipsisP,
  BorderP,
  EllipsisB
} from './questiondetail'
import eyeSvg from '@a/images/eye.svg'
import thumb from '@a/images/thumb.svg'
import likesvg from '@a/images/like.svg'
import dislikesvg from '@a/images/dislike.svg'
import msgsvg from '@a/images/msg.svg'
import quessvg from '@a/images/ques.svg'
export default function Detail(props) {
  // const history = useHistory()
  // console.log(props.detail.list);
  let list = props.detail&&props.detail.list&&props.detail.list.slice(6,10)
  // console.log(list);
  let {answer_content,question_title,answer_username,question_username,question_views,question_renum,source_type,question_date}=props.detail.v
  return (
    <DetailWrap>
      <BorderDiv
          width=' 0 0 1px 0'
          color="#999" className="blank"></BorderDiv>
      <div className="top">
        <span>#中国</span>
        <EllipsisP
        className="title"
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
          <li
           
          >
            <div className="liContent">
              <p className="liP">
                <img src="http://yl.charmiot.com/travel_qygbz1/images/demo/u393.jpg" alt=""/>
              </p>
              <span>{answer_username?answer_username:question_username}</span>
            </div>
            <p className="qaContent">{answer_content?answer_content:question_title}</p>
            <div className="box">
                <BorderP
                  color="#58BC7F"
                  radius=".08"
                >
                  <img src={likesvg} alt=""/>
                  赞同 &nbsp;
                  {question_renum}
                </BorderP>
                <BorderP
                  color="#58BC7F"
                  radius=".08"
                >
                  <img src={dislikesvg} 
                  alt=""/>&nbsp;
                  {source_type}
                </BorderP>
                <BorderP
                  color="#58BC7F"
                  radius=".1"
                >
                  <img src={msgsvg} alt=""/>
                  {question_views}
                </BorderP>
                <span>{question_date&&question_date}</span>
            </div>
          </li>
      </ul>
      <ul className="qaList">
        <h4>相关问题</h4>
        {
          list && list.map((v,i)=>{
            return(
              <li
                key={i}
                // onClick={()=>{history.push("/qadetail",{v,list:props.detail.list})}}
              >
                <div>
                  <img src={quessvg} alt=""/>
                  <EllipsisP
                    lc={1}
                  >{v.question_title}</EllipsisP>
                </div>
                <EllipsisB
                  lc={2}
                >{v.answer_content?v.answer_content:v.question_title}</EllipsisB>
              </li>
            )
          })
        }
      </ul>
      </div>
     
    </DetailWrap>
  )
}
