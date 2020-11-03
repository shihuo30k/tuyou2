import { get } from '@u/http.js'

import {LOADINHOT,LOADIMGHOT,LOADSUBJECT,LOADSUBJECTIMG}  from './actionTypes'

const loadInhotDataSync = inhotList => {
  return {
      type: LOADINHOT,
      inhotList
  }
}

const loadInhotDataAsync = () => {
  return async (dispatch) => {
      let result = await get({
          url:'/api/inhot'
      })
      // console.log(result.data)
      dispatch(loadInhotDataSync(result.data.list))
  }
}

const loadInhotImgDataSync = curMonths => {
  return {
      type: LOADIMGHOT,
      curMonths
  }
}

const loadSubjectDataSync = subjectList => {
  // console.log('000')
  return {
      type: LOADSUBJECT,
      subjectList
  }
}

const loadSubjectDataASync = () => {
  return async (dispatch) => {
      let result = await get({
          url:'/api/subject'
      })
      // console.log(result.data.list)
      dispatch(loadSubjectDataSync(result.data.list))
  }
}

const  loadSubjectImgDataSync = curSubject => {
  return {
      type: LOADSUBJECTIMG,
      curSubject
  }
}
export default {
  loadInhotDataSync,
  loadInhotDataAsync,
  loadInhotImgDataSync,
  loadSubjectDataSync,
  loadSubjectDataASync,
  loadSubjectImgDataSync
}