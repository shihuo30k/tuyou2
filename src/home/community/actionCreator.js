import {
  get
} from '@u/http'

import {
  SETTOPIC,
  SETTODAYTRAVEL,
  SETPARTNERTRAVEL,
  SETTRAVEL,
  SETAUTHOR,
  SETQALS,
  SETPRTNERSHIP,
  SETNEWSELECTED
} from './actionType'
//最新精华
const setNewSelected = newSelectedList =>{
  return{
    type:SETNEWSELECTED,
    newSelectedList
  }
}
//结伴
const setPsl = partnerShipList =>{
  return{
    type:SETPRTNERSHIP,
    partnerShipList
  }
}
//问答
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
       url:'/api/inhot'
     })  
    //  console.log(result.data.list);
     dispatch(setPartnerTravel(result.data.list))
  }
}

//作者
const setauthorAsync = () => {
  return async (dispatch) => {
     let result =await get({
       url:'/api/author'
     })  
    //  console.log(result.data.list);
     dispatch(setAuthor(result.data.data))
  }
}

//问答
const setQaLsAsync = () => {
  return async (dispatch) => {
     let result =await get({
       url:'/api/qals'
     })  
    //  console.log(result.data.data);
     dispatch(setQaLs(result.data.data))
  }
}
//旅伴
const setPaetnerAsync = () => {
  return async (dispatch) => {
     let result =await get({
       url:'/api/partner'
     })  
     dispatch(setPsl(result.data.data))
    //  console.log(result.data);
    //  dispatch(setQaLs(result.data.data))
  }
}


export default{
  setQaLs,
  setAuthor,
  setPsl,
  setTopicAsync,
  setTodayTravelAsync,
  setPartnerTravelAsync,
  setTravelAsync,
  setauthorAsync,
  setQaLsAsync,
  setPaetnerAsync,
  setNewSelected
}