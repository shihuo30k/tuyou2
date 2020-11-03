import {
  get
} from '@u/http'

import {
  SETTOPIC,
  SETTODAYTRAVEL,
  SETPARTNERTRAVEL,
  SETTRAVEL,
  SETAUTHOR,
  SETQALS
} from './actionType'

const setQaLs = qaLs =>{
  return{
    type:SETQALS,
    qaLs
  }
}
const setTopic = topicList => {
  // console.log(topicList);
  return{
    type:SETTOPIC,
    topicList
  }
}
const setTodayTravel = todyTravelList => {
  
  return{
    type:SETTODAYTRAVEL,
    todyTravelList
  }
}
const setPartnerTravel = partnerTravelList => {
  return{
    type:SETPARTNERTRAVEL,
    partnerTravelList
  }
}
const setTravel = travelList => {
  // console.log(travelList);
  return{
    type:SETTRAVEL,
    travelList
  }
}
const setAuthor = authorList => {
  // console.log(travelList);
  return{
    type:SETAUTHOR,
    authorList
  }
}




const setTopicAsync = () => {
  return async (dispatch) => {
     let result =await get({
       url:'/api/topic'
     }) 
     dispatch(setTopic(result.data.data))
  }
}
const setTodayTravelAsync = () => {
  return async (dispatch) => {
     let result =await get({
       url:'/api/topic'
     }) 
     dispatch(setTodayTravel(result.data.list))
  }
}
//今日旅游和游记
const setTravelAsync = () => {
  return async (dispatch) => {
     let result =await get({
       url:'/api/travels'
     })  
     dispatch(setTravel(result.data.data))
  }
}
//结伴旅游
const setPartnerTravelAsync = () => {
  return async (dispatch) => {
     let result =await get({
       url:'/api//inhot'
     })  
    //  console.log(result.data.list);
     dispatch(setPartnerTravel(result.data.list))
  }
}

//作者
const setauthorAsync = () => {
  return async (dispatch) => {
     let result =await get({
       url:'/api//author'
     })  
    //  console.log(result.data.list);
     dispatch(setAuthor(result.data.data))
  }
}

//问答
const setQaLsAsync = () => {
  return async (dispatch) => {
     let result =await get({
       url:'/api//qals'
     })  
    //  console.log(result.data.data);
     dispatch(setQaLs(result.data.data))
  }
}


export default{
  setTopicAsync,
  setTodayTravelAsync,
  setPartnerTravelAsync,
  setTravelAsync,
  setauthorAsync,
  setQaLsAsync
}