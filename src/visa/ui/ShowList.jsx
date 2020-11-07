import React, {useState} from 'react';
import { PullToRefresh } from 'antd-mobile';
import { useSelector} from 'react-redux'
import {ShowListContainer} from './StyledVisa'



const ShowList = props => {

  const [state, setState] = useState( {
    refreshing: false,
    down: true,
    height: document.documentElement.clientHeight,
    pageSize:1,
  })

  const visaList = useSelector(state => state.getIn(['visa','visaList']))

  let visaListShow = visaList.toJS().data

  const curVisaList = useSelector(state => state.getIn(['visa','selected']))
  
  let list=visaListShow && visaListShow.slice(2,8*state.pageSize)
  let list1 =list &&  list.slice(2,40)

  return (
   
        <ShowListContainer>
          <ul>
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

            {
              // (orderData === "综合排序" ? setCurVisaList(visaListShow && visaListShow.sort(compare("price"))) : setCurVisaList(visaListShow && visaListShow.sort(compare("has_sale"))))

              curVisaList.toJS().length === 0 ? 

            ( list1 && list1.map((value)=>{
                return(
                  <li key={value.id}>
                    <div className="imgContainer">
                      <img src={value.pic} alt=""/>
                      <span className="_34lmwXYTdx5aWbX2rPMKGo">{value.hem}</span>
                    </div>
                    <div className="resContent">
                <span className="topshow">{value.title}</span>
                      <p>
                <span className="saled">已售{value.has_sale}件</span>
                <span className="price"><em>{value.price}</em>元起</span>
                      </p>
                    </div>
                  </li>
                )
              })) :(
                curVisaList.toJS() && curVisaList.toJS().map((value)=>{
                  return(
                    <li key={value.id}>
                      <div className="imgContainer">
                        <img src={value.pic} alt=""/>
                        <span className="_34lmwXYTdx5aWbX2rPMKGo">{value.hem}</span>
                      </div>
                      <div className="resContent">
                  <span className="topshow">{value.title}</span>
                        <p>
                  <span className="saled">已售{value.has_sale}件</span>
                  <span className="price"><em>{value.price}</em>元起</span>
                        </p>
                      </div>
                    </li>
                  )
                })
              )
            }
            </PullToRefresh>
          </ul>
        </ShowListContainer>
    
  );
};


export default ShowList;