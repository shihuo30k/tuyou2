import {LOADVISALIST,LOADCURORDER,LOADCURORDERLIST}  from './actionTypes'
import {fromJS,Map,List}   from 'immutable'

const defaultState = fromJS(
  {
    visaList: Map([]),
    selected: List([]),
    single:{
      curOrder:'综合排序',
    }
   
  }
)


const reducer = (state = defaultState, action) => {
  switch(action.type) {
      case LOADVISALIST:
        return state.set('visaList', Map(action.visaList))
        
      case LOADCURORDER:
        return state.setIn(['single','curOrder'], action.curMonths)

      case LOADCURORDERLIST:
     
        return state.set('selected', List(action.selected))

      default:
          return state
  }
}

export default reducer