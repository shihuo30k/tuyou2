import {LOADCOUNTRIES,LOADCOUNTRY}  from './actionTypes'

import {fromJS,Map}  from 'immutable'

const defaultState = fromJS(
  {
    countryList:{},
    single:{
      curCountry:'亚洲',
    }
   
  }
)


const reducer = (state = defaultState, action) => {

  switch(action.type) {

    case LOADCOUNTRIES:

        console.log(Map(action.countryList))
   
        return state.set('countryList', Map(action.countryList))
       
     case LOADCOUNTRY:
     
        return state.setIn(['single','curCountry'], action.curCountry)
      

      // case LOADINHOT:
      //   return state.set('inhotList', Map(action.inhotList))
        
      // case LOADIMGHOT:
      //   return state.setIn(['single','curMonths'], action.curMonths)
      
     
     
      default:
          return state
  }
}

export default reducer