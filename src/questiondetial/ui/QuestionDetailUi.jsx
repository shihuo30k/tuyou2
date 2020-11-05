import React from 'react'
import NavBarRecommend from '@c/recommend/NavBarRecommend'
import Detail from './Detail'
export default function QuestionDetailUi(props) {
  // console.log(props.detail);
  return (
    <div>
      <NavBarRecommend>问答详情</NavBarRecommend>
      <Detail
        {...props}
      ></Detail>
    </div>
  )
}
