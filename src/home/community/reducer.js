import {
  SETTOPIC,
  SETTODAYTRAVEL,
  SETPARTNERTRAVEL,
  SETTRAVEL,
  SETAUTHOR,
  SETQALS
} from './actionType'
import {
  Map,List,fromJS
} from 'immutable';
const defaultState = fromJS({
  topicList:[],
  todyTravelList:[],
  partnerTravelList:{},
  travelList:{},
  authorList:[],
  qaLs:[]
})

const reducer  = (state=defaultState,action) => {
  switch (action.type) {
    case SETTOPIC:
      return state.set('topicList',List(action.topicList))
    case SETTODAYTRAVEL:
      return{
        ...state,
        todyTravelList:action.todyTravelList
      }
    case SETPARTNERTRAVEL:
      return state.set('partnerTravelList',Map(action.partnerTravelList))
      
    case SETTRAVEL:
      return state.set('travelList',Map(action.travelList))
    
    case SETAUTHOR:
      return state.set('authorList',List(action.authorList))
    
    case SETQALS :
      return state.set('qaLs',List(action.qaLs))
    default:
      return state
  } 
}

export default reducer