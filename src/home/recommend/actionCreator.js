import { List } from 'immutable'
import { get } from '@u/http.js'
import {LOADBANNERDATA, LOADTRAVALDATA, LOADQUESTIONDATA, CHANGETRAVALLISTSTATE } from './actionTypes'

const changeTravalListState = travalListState => {
    return {
        type:CHANGETRAVALLISTSTATE,
        travalListState
    }
}

const loadQuestionDataSync = questionList => {
    return {
        type: LOADQUESTIONDATA,
        questionList
    }
}

const loadQuestionDataAsync = () => {
    return async (dispatch) => {
        let result = await get({
            url:'/api/question'
        })
        
        dispatch(loadQuestionDataSync(List(result.data.data)))
    }
}

const loadTravalDataSync = travalList => {
    return {
        type: LOADTRAVALDATA,
        travalList
    }
}

const loadTravalDataAsync = () => {
    return async (dispatch) => {
        let result = await get({
            url:'/api/list'
        })
        dispatch(loadTravalDataSync(result.data.list))
    }
}


const loadBannerDataSync = bannerList => {
    return {
        type:LOADBANNERDATA,
        bannerList
    }
}

const loadBannerDataAsync = () => {
    return async (dispatch) => {
        let result = await get({
            url:'/api/list'
        })
        dispatch(loadBannerDataSync(result.data.list))
    }
}

export {
    loadBannerDataSync,
    loadBannerDataAsync,
    loadTravalDataSync,
    loadTravalDataAsync,
    loadQuestionDataSync,
    loadQuestionDataAsync,
    changeTravalListState
}