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

import { reducer as recomindexreducer } from '../recommendnotes/index'
import { 
  reducer as video
} from '../video-recomend/index'

import { reducer as homeSelected } from '../home'

const rootReducer = combineReducers({
    recommend,
    community,
    destination,
    allCountries,
    personalArticles,
    recomindexreducer,
    video,
    homeSelected
})

export default rootReducer