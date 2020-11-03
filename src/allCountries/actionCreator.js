import { get } from '@u/http.js'

import {LOADCOUNTRIES,LOADCOUNTRY}  from './actionTypes'


const loadAllCountriesSync = countryList => {
  
  return {
      type: LOADCOUNTRIES,
      countryList
  }
}


const loadAllCountriesAsync = () => {
  return async (dispatch) => {
      let result = await get({
          url:'/api/countries'
      })
      console.log(result.data)
      dispatch(loadAllCountriesSync(result.data.data))
  }
}

const loadCurCountrySync = curCountry => {
  return {
      type: LOADCOUNTRY
       ,
      curCountry
  }
}



export default {
  loadAllCountriesSync,
  loadAllCountriesAsync,
  loadCurCountrySync
}