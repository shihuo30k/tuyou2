import {LOADINHOT,LOADIMGHOT,LOADSUBJECT,LOADSUBJECTIMG}  from './actionTypes'

import {fromJS,Map}   from 'immutable'

const defaultState = fromJS(
  {
    inhotList: Map([]),
    subjectList:Map([]),
    single:{
      curMonths:'1月',
      curSubject:'魅力夜色'
    }
   
  }
)


const reducer = (state = defaultState, action) => {
  switch(action.type) {
      case LOADINHOT:
        return state.set('inhotList', Map(action.inhotList))
        
      case LOADIMGHOT:
        return state.setIn(['single','curMonths'], action.curMonths)
      
      case LOADSUBJECT:
        // console.log(action.subjectList)
        return state.set('subjectList', Map(action.subjectList))
     
        case LOADSUBJECTIMG:
          return state.setIn(['single','curSubject'], action.curSubject)
     
      default:
          return state
  }
}

export default reducer