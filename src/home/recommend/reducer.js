import { 
    LOADBANNERDATA,
    LOADTRAVALDATA, 
    LOADQUESTIONDATA,
    CHANGETRAVALLISTSTATE
} from './actionTypes'
import { Map, List } from 'immutable'

const defaultState = Map({
    bannerList: [],
    travalList: [],
    questionList: List([]),
    travalListState:{
        refreshing: false,
        travalPage:1,
    }
})
const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOADBANNERDATA:
            // console.log(action.bannerList)
            return state.set('bannerList', action.bannerList)
        case LOADTRAVALDATA:
            return state.set('travalList',action.travalList)
        case LOADQUESTIONDATA:
            return state.set('questionList', action.questionList)
        case CHANGETRAVALLISTSTATE:
            return state.set('travalListState', action.travalListState)
        default:
            return state
    }
}

export default reducer