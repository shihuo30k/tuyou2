
import {get} from '@u/http'
import {LOADVIDEOBANNERS} from './actionTypes'


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
        console.log(result)
    }
}

export {
    loadVideoBannersAsync,
    loadVideoBannersSync
}