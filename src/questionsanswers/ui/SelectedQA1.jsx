import React from 'react'

import {
  SelectedQA1Wrap,
  BorderP,
  BorderDiv,

} from './styledQa'

import SelectedQAList from './SelectedQAList'
import Author from '@c/author/Author'
const arr = [
  '中国', '中国', '中国', '中国', '中国','中国',  '中国', '中国','中国',
]
export default function SelectedQA1(props) {

  // console.log(props.questionList.toJS());
  // console.log(props.pageSize);
  const sta =  props.questionList.toJS()
  const state1 = sta && sta.slice(0,2)
  const state2 = sta && sta.slice(2,40)
  // const state3 = state2.slice(2,40)
  return (
    <>
      <SelectedQA1Wrap>
        <BorderDiv className='nations' width="1px 0 0 0">
         {
           arr.map((v,i)=>{
             return(
             <BorderP
             key={i}
             width='1px'
             radius=".04"
             color="#333"
             >{v}</BorderP>
             )
           })
         }
          
        </BorderDiv>
  
        <SelectedQAList
        list = {state1}
        ></SelectedQAList>
    
        <Author list={props.authorList}
        leftTitle = "探路者"
        rightTitle = "更多"
        bnt = "查看问答"
      ></Author>

        <SelectedQAList
        list = {state2}
        ></SelectedQAList>

      

      </SelectedQA1Wrap>
    </>
  )
}
