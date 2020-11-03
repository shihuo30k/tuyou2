import React ,{useEffect,useCallback,useState}from 'react';
import BScroll from '@better-scroll/core';
import { useSelector,useDispatch } from 'react-redux'
import { SubjectContainer ,SubjectLiContainer} from './StyledDestination'
import actionCreator from '../actionCreator'

const SubjectOfRecommend = props => {

  
  const subjectList = useSelector(state => state.getIn(['destination','subjectList']))
  let subjectListShow = subjectList.toJS()
  
  

  const [curSubject, setcurSubject] = useState(0)

  const dispatch = useDispatch()

  useEffect(()=>{
    const wrapper = document.querySelector('.wrapper4')
    new BScroll(wrapper, {
      scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: false, //关闭竖向滚动
    })
    dispatch(actionCreator.loadSubjectDataASync())
    
  },[dispatch])

  const onChangeCurSubject = useCallback((curSubject,i)=>{
    return ()=>{
      setcurSubject(i)

      dispatch(actionCreator.loadSubjectImgDataSync(curSubject))
    }

  },[dispatch])

  return (
    <SubjectContainer>
      <h1>主题推荐</h1>
      <div className="wrapper4">
          <ul className="content">
          {
              Object.keys(subjectListShow ).map((value,i) =>(
              <SubjectLiContainer radius={0.03}  key={i} onClick={onChangeCurSubject(value,i)} className={curSubject === i ? "active" : ''}>{value}</SubjectLiContainer>
              ) )
            }
          </ul>
        </div>
    </SubjectContainer>
  );
};


export default SubjectOfRecommend;