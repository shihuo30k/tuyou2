import React, {useEffect,useState ,useCallback} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import BScroll from '@better-scroll/core';
import {InHot ,LiContainer}  from './StyledDestination'
import actionCreator from '../actionCreator'

const CurrentHot = (props)=> {
  // const inhotList = useSelector(state => state.destination.inhotList)

  const inhotList = useSelector(state => state.getIn(['destination','inhotList']))
  // console.log(inhotList.toJS())
  let inhotListShow = inhotList.toJS()
  const dispatch = useDispatch()

  const [curMonths, setcurMonths] = useState(0)

  useEffect(()=>{
    const wrapper = document.querySelector('.wrapperx')
    new BScroll(wrapper, {
      scrollX: true, 
      click: true,  
      scrollY: false,
    })
  },[])

  const onChangeCurLI = useCallback((months,i)=>{
    return ()=>{
      setcurMonths(i)
      dispatch(actionCreator.loadInhotImgDataSync(months))
    }

  },[dispatch])
 
    return (
      <InHot>
        <h1>当季热门</h1>
        <div className="wrapperx">
          <ul className="content">
            {
              Object.keys(inhotListShow).reverse().map((value,i) =>(
              <LiContainer radius={0.03}  key={i} onClick={onChangeCurLI(value,i)} className={curMonths === i ? "active" : ''}>{value}</LiContainer>
              ) )
            }
          </ul>
        </div>
      </InHot>
    );
  
}

export default CurrentHot;