import {Map} from 'immutable'
import {LOADVIDEOBANNERS, LOADVIDEODATA} from './actionTypes'

const defaultState = Map({
    videoBanners:[],
    videoList:[]
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOADVIDEOBANNERS:
            return state.set('videoBanners', action.videoBanners)
        case LOADVIDEODATA:
            return state.set('videoList', action.videoList)
        default:
            return state
    }
}

export default reducer