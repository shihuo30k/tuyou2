import { combineReducers } from 'redux-immutable'

import {
    reducer as recommend
} from '../home/recommend'
import {
  reducer as community
} from '../home/community'

import {
  reducer as destination
} from '../home/destination/index'

import  {reducer as allCountries} from '../allCountries/index'

import {reducer as personalArticles} from '../personalarticles/index'

const rootReducer = combineReducers({
    recommend,
    community,
    destination,
    allCountries,
    personalArticles
})

export default rootReducer