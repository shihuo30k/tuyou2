import React, { useState ,useCallback,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {PersonalArticlesContainer,TopTitleContainer} from './StyledPersonal.js'
import actionCreator from '../actionCreator'

const  PersonalArticles = (props) => {

  const [curTags, setCurTags] = useState(1)
  const [curSubscribeState, setCurSubscribeState] = useState(true)

  const dispatch = useDispatch()

  const state = useSelector(state => state.get('personalArticles'))
 
  const curTag = useSelector(state => state.getIn(['personalArticles','single','curArticleTag']))
  console.log(curTag)

  const stateX = state.toJS()
  const list = stateX.articleList.data
  
 
  const tagSum = []
  list && list.reduce((p,v,i) =>{
    return  v.content.map((value,i)=>{
      
      return tagSum.push(value)
    })
  },[])

  let showArticleList=[]

  if(curTag === "全部"){

    list && list.reduce((p,v,i) =>{
      return  v.content.map((value,i)=>{
        return showArticleList.push(value)              
      })
    },[])
    
  }else{

    let showArticleListx = list && list.filter(function(item){
          
      return item.tag === curTag
    })
    showArticleList = showArticleListx[0].content
    
  }
  
  // const showArticleList = list && list.filter(function(item){
          
  //   return item.tag === curTag
  // })
  console.log(showArticleList)


  useEffect(() => {

    dispatch(actionCreator.loadArticleListAsync())

  }, [dispatch])
  
  const changeCurState = useCallback(
    ()=>{
      setCurSubscribeState(!curSubscribeState)
    }
    ,[curSubscribeState]
  )

  const onChangeCurTag = useCallback(
    (i,curArticleTag)=>{
      return ()=>{

          setCurTags(i)
          dispatch(actionCreator.loadCurArticleSync(curArticleTag))
          
      }
    },[dispatch]
  )

    return (
      <PersonalArticlesContainer>
        <TopTitleContainer width="0 0 1PX 0" className="topTitle">
          <svg t="1603952459060"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2076" ><path d="M967.111111 455.111111v113.777778H170.666667V455.111111z" fill="#3fcd90" p-id="2077"></path><path d="M477.866667 955.733333L34.133333 517.688889l443.733334-443.733333 79.644444 79.644444-364.088889 364.088889 364.088889 358.4z" fill="#3fcd90" p-id="2078"></path></svg>
          <span>芬兰</span>
          <svg t="1604125626549"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1841" width="200" height="200"><path d="M189.882182 596.782545c-64.162909 0-116.363636-52.224-116.363636-116.363636 0-64.162909 52.200727-116.363636 116.363636-116.363636s116.363636 52.200727 116.363636 116.363636C306.245818 544.535273 254.045091 596.782545 189.882182 596.782545zM189.882182 410.577455c-38.493091 0-69.818182 31.325091-69.818182 69.818182s31.325091 69.818182 69.818182 69.818182 69.818182-31.325091 69.818182-69.818182S228.375273 410.577455 189.882182 410.577455zM517.12 596.782545c-64.139636 0-116.363636-52.224-116.363636-116.363636 0-64.162909 52.224-116.363636 116.363636-116.363636 64.186182 0 116.363636 52.200727 116.363636 116.363636C633.483636 544.535273 581.306182 596.782545 517.12 596.782545zM517.12 410.577455c-38.493091 0-69.818182 31.325091-69.818182 69.818182s31.325091 69.818182 69.818182 69.818182 69.818182-31.325091 69.818182-69.818182S555.613091 410.577455 517.12 410.577455zM834.117818 596.782545c-64.139636 0-116.363636-52.224-116.363636-116.363636 0-64.162909 52.224-116.363636 116.363636-116.363636 64.186182 0 116.363636 52.200727 116.363636 116.363636C950.481455 544.535273 898.304 596.782545 834.117818 596.782545zM834.117818 410.577455c-38.493091 0-69.818182 31.325091-69.818182 69.818182s31.325091 69.818182 69.818182 69.818182 69.818182-31.325091 69.818182-69.818182S872.610909 410.577455 834.117818 410.577455z" p-id="1842" fill="#bfbfbf"></path></svg>
        </TopTitleContainer>
       
        <div className="column">
            <div className="personal">
                <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=160197141,3589208486&fm=26&gp=0.jpg" alt=""/>
                <span className="personalName">王大宣</span>
                <span className="personalContent">
                用更轻快的方式，介绍旅行中的小故事，所见所闻
                和内心感受，将更多见闻分享传递给更多人
                </span>
                <div className="subscribe" onClick={changeCurState}>
                 {curSubscribeState  ?(<div><svg t="1604305684160"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2081" width="200" height="200"><path d="M740.828151 485.179145 538.820344 485.179145 538.820344 283.185664c0-14.81645-11.989055-26.820855-26.820855-26.820855-14.769378 0-26.790156 12.004405-26.790156 26.820855l-0.013303 201.99348L283.200502 485.179145c-14.801101 0-26.820855 12.019755-26.820855 26.820855 0 14.81645 12.019755 26.819832 26.820855 26.819832l201.991434 0-0.013303 201.994504c0 14.800078 12.051477 26.821879 26.820855 26.821879 14.8318 0 26.820855-12.021801 26.820855-26.821879L538.820344 538.819832l201.979154 0c14.8318 0 26.820855-12.003382 26.820855-26.819832S755.631298 485.179145 740.828151 485.179145z" p-id="2082" fill="#6fd9ac"></path></svg>
                  <span>订阅专栏</span></div> ) : (<div><svg  className="active" t="1604309218371"  viewBox="0 0 1466 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2085" width="14" height="14"><path d="M535.770344 1017.621782c-51.025747 0-102.051494-19.134655-140.320804-63.782184L19.134655 539.255403C-6.378218 513.742529 0 475.473219 25.512874 449.960345s63.782184-19.134655 89.295057 6.378219l376.314885 414.584195c25.512874 25.512874 63.782184 25.512874 89.295057 6.378218l6.378218-6.378218L1326.669424 22.619714c25.512874-25.512874 63.782184-31.891092 89.295057-6.378219 25.512874 25.512874 31.891092 63.782184 6.378219 89.295058L676.091149 953.839598l-12.756437 12.756437c-38.26931 31.891092-82.916839 51.025747-127.564368 51.025747z" p-id="2086" fill="#6fd9ac"></path></svg>
                  <span>已订阅</span></div> )}
                 
                </div>
                <p>888888订阅</p>
                <div className="personalTags">
                   <ul>
    <li className={curTags === 1 ? "active" : ''} onClick={onChangeCurTag(1,"全部")}>全部<span>{tagSum.length}</span></li>
                     {
                       list && list.map((value,i)=>{
                         
                       return( <li key={i} className={curTags === i+2 ? "active" : ''} onClick={onChangeCurTag(i+2,value.tag)}>#{value.tag}<span>{value.content.length}</span></li>)
                       })
                     }
                    
                   </ul>
                </div>
            </div>
            <div className="allArticles">
                <div className="allArticlesTitle">全部文章</div>
                <ul>

                  {
                    showArticleList.map((value,i)=>{
                      return(
                        <li key={i}>
                        <img src={value.imageurl} alt=""/>
                      <span className="articleContent">{value.content}</span>
                        <div className="bottomTips">
                      <span className="userName">{value.username}</span> · 
                      <span className="publicDate">{value.publictime}</span>
                            <span className="showLike"><svg t="1604310618959" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3935" width="200" height="200"><path d="M889.610161 413.465514l-162.748986-0.903157c42.267772-169.793614-6.863997-308.699241-74.781443-369.210796-32.333039-28.901041-67.917446-37.932616-97.360381-24.746516-24.565885 11.018522-53.828188 41.003352-53.828189 122.106897 0 157.510672-92.302699 268.418416-116.868583 273.114835l-244.575057-0.541894c-70.265655 0-127.345211 57.079555-127.345211 127.34521v341.754807c0 70.265655 57.079555 127.345211 127.345211 127.345211h592.290703c42.267772 0 146.49215-8.309049 198.875287-84.896807 43.17093-63.040395 81.826072-348.438173 85.980596-380.59058l0.180632-3.612631c0.180632-70.085024-56.898924-127.164579-127.164579-127.164579zM66.291762 882.565532V540.810725c0-40.280826 32.694302-73.155759 73.15576-73.155759h76.226495V955.54066H139.447522c-40.280826 0-73.155759-32.694302-73.15576-72.975128z m819.525137 11.741048c-37.932616 55.27324-120.481214 61.23408-154.078674 61.23408H283.591462V467.654966h92.302699c16.618098 2.709473 34.86188-3.431999 54.00882-18.424414 52.021873-40.461457 125.177633-162.748986 125.177633-308.51861 0-46.241665 11.741048-68.098077 21.67578-72.433233 8.850944-3.973893 23.662727 1.986947 38.835774 15.534309 50.034927 44.615982 104.40501 173.948139 49.312401 347.535015l-11.199154 35.223144 235.543483 1.26442c39.738931 0 72.252602 31.971776 73.155759 71.349444-15.353678 117.410478-49.673664 315.924502-76.587758 355.121539z" p-id="3936" fill="#707070"></path></svg>1718</span>
                        </div>
                      </li>
                      )
                    })
                  }
              
                </ul>
            </div>
        </div>
      </PersonalArticlesContainer>
    )
  }


export default PersonalArticles
