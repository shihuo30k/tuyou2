import { get } from '@u/http.js'

import {LOADARTICLELIST,LOADCURTAG}  from './actionTypes'

const loadArticleListSync = articleList => {
  return {
      type: LOADARTICLELIST,
      articleList
  }
}

const loadArticleListAsync = () => {
  return async (dispatch) => {
      let result = await get({
          url:'/api/article'
      })
      // console.log(result.data)
      dispatch(loadArticleListSync(result.data))
  }
}

const loadCurArticleSync = curArticleTag => {
  return {
      type: LOADCURTAG,
      curArticleTag
  }
}

export default {
  loadArticleListSync, 
  loadArticleListAsync,
  loadCurArticleSync
}