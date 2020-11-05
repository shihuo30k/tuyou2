import React ,{useEffect}from 'react'
import {
  useDispatch,useSelector
} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {
  SelectedQA1Wrap,
  BorderP,
  BorderDiv,
  QAContent,
  Ellipsis
} from './styledQa'
import eyesvg from '@a/images/eye.svg'
import thumbsvg from '@a/images/thumb.svg'
import actionCreator from '../../home/community/actionCreator';
import {
  get
} from '@u/http'

import SelectedQAList from './SelectedQAList'
import Author from '@c/author/Author'
const arr = [
  '中国', '中国', '中国', '中国', '中国','中国',  '中国', '中国','中国',
]
export default function SelectedQA1(props) {
  const history = useHistory()
const dispatch = useDispatch()
const state = useSelector(state => state.getIn(['community','qaLs']))
const authorList= useSelector(state => state.getIn(['community','authorList']))
useEffect(() => {

   (async() =>{
    let result =await get({
      url:'/api/qals'
    })
    dispatch(actionCreator.setQaLs(result.data.data))
  })()

 
}, [dispatch])
useEffect(() => {

  (async() =>{
    let result =await get({
      url:'/api/author'
    })
    dispatch(actionCreator.setAuthor(result.data.data))
  })()
 
}, [dispatch])
const handleClick = (v)=>{
  history.push("/qadetail",v)
}
    // console.log(state.toJS());
  // console.log(props.questionList.toJS());
  // console.log(props.pageSize);
 
  const sta =  state.toJS()
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
  
        <QAContent>
    {
    state1 &&  state1.map(v=>{
      return(
        <li
        key={v.question_views}
        onClick={()=>handleClick(v)}
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
    
        <Author list={authorList}
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
