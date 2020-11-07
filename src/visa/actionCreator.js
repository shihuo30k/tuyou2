import { get } from '@u/http.js'

import {LOADVISALIST,LOADCURORDER,LOADCURORDERLIST} from './actionTypes'



const loadVisaDataSync = visaList => {
  return {
      type: LOADVISALIST,
      visaList
  }
}

const loadVisaDataAsync = () => {
  return async (dispatch) => {
      let result = await get({
          url:'/api/visa'
      })
      // console.log(result.data)
      dispatch(loadVisaDataSync(result.data))
  }
}


const loadCurShowSync = curOrder => {
  return {
      type: LOADCURORDER,
      curOrder
  }
}


const loadCurShowListSync = selected => {
 
  return {
      type: LOADCURORDERLIST,
      selected
  }
}

export default {
  loadVisaDataSync,
  loadVisaDataAsync,
  loadCurShowSync,
  loadCurShowListSync
}