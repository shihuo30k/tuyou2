// import React,{  useEffect ,useState} from 'react'
// import { ListView ,Toast} from 'antd-mobile';
// import {
//   useSelector,

// } from 'react-redux'
// import {
//   TravelNotesWrap,
//   BorderLi,
//   Ellipsis
// } from './styledCommunity'
// import Author from './Author'
// import {svg1,svg2} from './svg'
// export default function TravelNotes(props) {

//   const sta = useSelector(state => state.getIn(['recommend','travalList']))
//   // console.log(state);
//   const list1 = sta && sta.slice(0,2)
//   const list2 = sta && sta.slice(2)
//   // console.log(list1);




//   const dataSource = new ListView.DataSource({
//     rowHasChanged: (row1, row2) => row1 !== row2,// 用其进行数据变更的比较 必须这么写
//   });
//   //初始化数据
//   const [state, setState] = useState({
//     dataSource,
//     isLoading: true,
//     height: document.documentElement.clientHeight * 3 / 4,
//   })

//   //给初始化数据 赋值
//   //根据自己的需求赋值 我这个是从父组件传过来的
  
//   useEffect(() => { 

//     console.log("asjkdhfksd");
//     const len = list2.length 
//     if (len <= 0) { // 判断是否已经没有数据了
//       setState({
//         isLoading: false,
//       })
//       Toast.info('没有数据了~', 1)
//       return false
//     }

//     setState({
//       dataSource: state.dataSource.cloneWithRows(list2), 
//       isLoading: false,
//     });
//   },[list2,state.dataSource])

//   //触底触发的函数
//   const onEndReached = (event) => {
//     console.log("到底了啊????");

//   }


//   //可渲染的组件  固定写法   
//   const row = (rowData, sectionID, rowID) => {
//     //rowData里面的数据就是 state.dataSource里面的数据
//     console.log(rowData, rowID);
//     let list1=[]
//     let list2=[]
//     list1.push(rowData && rowData.data)
//     list2.push(rowData && rowData.data)
//     return (
//       <>
//       <TravelNotesWrap>
//           <h2>游记推荐</h2>
//           <ul className='TravelNotesUl'>
  
//             {
//               list1 && list1.map(v=>{
//                 return(
//                   <BorderLi
//                   key={v.data.id}
//                   width='0 0 1px 0'
//                 >
//                   <div className='aa'>
//                     <p>
//                       <img src={v.data.image} alt=""/>
//                     </p>
//                     <Ellipsis
//                       lc={3}
//                     >
//                    {v.data.content}
//                     </Ellipsis>
//                   </div>
//                   <div>
//                     <h3>
//                       <p>
//                         <img src={v.data.bottom.user.logo} alt=""/>
//                       </p>
//                       <i>{v.data.bottom.user.name}</i> &nbsp;|&nbsp;
//                       <em>发布于
//                         <span>{v.data_source.mdd.name}</span>
//                       </em>
//                     </h3>
//                     <h4>
//                       <div>
//                         <p className="svg">
//                           {svg1}
//                         </p>
//                         <span>{v.data_source.pv}</span>
//                       </div>
//                       <div>
//                         <p className="svg">
//                           {svg2}
//                         </p>
//                         <span>{v.data_source.reply_num}</span>
//                       </div>
//                     </h4>
//                   </div>
//                 </BorderLi>
//                 )
//               })
//             }
         
//           </ul>
//       </TravelNotesWrap>
//       <Author list={props.authorList}></Author>
//       <TravelNotesWrap>    
//       <ul className='TravelNotesUl'>
  
//       {
//         list2 && list2.map(v=>{
//           return(
//             <BorderLi
//             key={v.data.id}
//             width='0 0 1px 0'
//           >
//             <div className='aa'>
//               <p>
//                 <img src={v.data.image} alt=""/>
//               </p>
//               <Ellipsis
//                 lc={3}
//               >
//             {v.data.content}
//               </Ellipsis>
//             </div>
//             <div>
//               <h3>
//                 <p>
//                   <img src={v.data.bottom.user.logo} alt=""/>
//                 </p>
//                 <i>{v.data.bottom.user.name}</i> &nbsp;|&nbsp;
//                 <em>发布于
//                   <span>{v.data_source.mdd.name}</span>
//                 </em>
//               </h3>
//               <h4>
//                 <div>
//                   <p className="svg">
//                     {svg1}
//                   </p>
//                   <span>{v.data_source.pv}</span>
//                 </div>
//                 <div>
//                   <p className="svg">
//                     {svg2}
//                   </p>
//                   <span>{v.data_source.reply_num}</span>
//                 </div>
//               </h4>
//             </div>
//           </BorderLi>
//           )
//         })
//       }
  
//       </ul>     
//       </TravelNotesWrap>  
//       </>
//     )
//    };




  
  

//   return (
//     <ListView

//       dataSource={state.dataSource}  //dataSource依赖的数据
//       renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
//         {state.isLoading ? 'Loading...' : 'Loaded'}
//       </div>)}


//       renderRow={row} //用于渲染方法  固定写法

//       style={{
//         height: state.height,
//         overflow: 'auto',
//       }}
//     pageSize={4}
//     onScroll={() => { console.log('滚动了'); }}
//     scrollRenderAheadDistance={500}
//     onEndReached={onEndReached}
//     onEndReachedThreshold={10}
//   />
//   )
// }
import React from 'react'
import {
  useSelector
} from 'react-redux'
import {
  TravelNotesWrap,
  BorderLi,
  Ellipsis
} from './styledCommunity'
import {PullToRefresh} from 'antd-mobile'

import Author from './Author'
import {svg1,svg2} from './svg'
export default function TravelNotes(props) {

  const state = useSelector(state => state.getIn(['recommend','travalList']))
  // console.log(state);
  const list1 = state && state.slice(0,2)
  const list2 = state && state.slice(2,5)
  // console.log(list1);


  
  
  return (
    <>
    
    <TravelNotesWrap>
        <h2>游记推荐</h2>
        <ul className='TravelNotesUl'>

          {
            list1 && list1.map(v=>{
              return(
                <BorderLi
                key={v.data.id}
                width='0 0 1px 0'
              >
                <div className='aa'>
                  <p>
                    <img src={v.data.image} alt=""/>
                  </p>
                  <Ellipsis
                    lc={3}
                  >
                 {v.data.content}
                  </Ellipsis>
                </div>
                <div>
                  <h3>
                    <p>
                      <img src={v.data.bottom.user.logo} alt=""/>
                    </p>
                    <i>{v.data.bottom.user.name}</i> &nbsp;|&nbsp;
                    <em>发布于
                      <span>{v.data_source.mdd.name}</span>
                    </em>
                  </h3>
                  <h4>
                    <div>
                      <p className="svg">
                        {svg1}
                      </p>
                      <span>{v.data_source.pv}</span>
                    </div>
                    <div>
                      <p className="svg">
                        {svg2}
                      </p>
                      <span>{v.data_source.reply_num}</span>
                    </div>
                  </h4>
                </div>
              </BorderLi>
              )
            })
          }
       
        </ul>
    </TravelNotesWrap>
    <Author list={props.authorList}></Author>





    <PullToRefresh
                style={{
                    height: document.documentElement.clientHeight,
                    overflow: 'auto',
                }}
                damping={80}
                direction={'up'}
                refreshing={this.props.refreshing}
                onRefresh={() => {
                    this.props.changeTraval({
                        refreshing:true,
                        travalPage:this.props.travalPage + 1
                    })
                }}
                >
            <TravelNotesWrap>    
            <ul className='TravelNotesUl'>

            {
              list2 && list2.map(v=>{
                return(
                  <BorderLi
                  key={v.data.id}
                  width='0 0 1px 0'
                >
                  <div className='aa'>
                    <p>
                      <img src={v.data.image} alt=""/>
                    </p>
                    <Ellipsis
                      lc={3}
                    >
                  {v.data.content}
                    </Ellipsis>
                  </div>
                  <div>
                    <h3>
                      <p>
                        <img src={v.data.bottom.user.logo} alt=""/>
                      </p>
                      <i>{v.data.bottom.user.name}</i> &nbsp;|&nbsp;
                      <em>发布于
                        <span>{v.data_source.mdd.name}</span>
                      </em>
                    </h3>
                    <h4>
                      <div>
                        <p className="svg">
                          {svg1}
                        </p>
                        <span>{v.data_source.pv}</span>
                      </div>
                      <div>
                        <p className="svg">
                          {svg2}
                        </p>
                        <span>{v.data_source.reply_num}</span>
                      </div>
                    </h4>
                  </div>
                </BorderLi>
                )
              })
            }

            </ul>     
            </TravelNotesWrap>  
    </PullToRefresh>
    </>
  )
}
