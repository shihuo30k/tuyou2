
import {get} from '@u/http'
import {LOADVIDEOBANNERS, LOADVIDEODATA} from './actionTypes'


const loadVideoDataSync = (videoList) => {
    return {
        type: LOADVIDEODATA,
        videoList
    }
}

const loadVideoDataAsync = () => {
    return async (dispatch) => {
        let result = await get({
            url:'/api/videolist'
        })
        // console.log(result.data.list)
        dispatch(loadVideoDataSync(result.data.list))
    }
}


const loadVideoBannersSync = (videoBanners) => {
    return {
        type:LOADVIDEOBANNERS,
        videoBanners
    }
}

const loadVideoBannersAsync = () => {
    return async (dispatch) => {
        let result = await get({
            url:'/api/videobanner'
        })
        dispatch(loadVideoBannersSync(result.data.list))
    }
}

export {
    loadVideoBannersAsync,
    loadVideoBannersSync,
    loadVideoDataAsync,
    loadVideoDataSync
}