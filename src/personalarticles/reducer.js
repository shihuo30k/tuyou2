import {LOADARTICLELIST,LOADCURTAG}  from './actionTypes'

import {fromJS,Map}   from 'immutable'

const defaultState = fromJS(
  {
    articleList: Map([]),
    single:{
      curArticleTag:'全部',
    }
   
  }
)


const reducer = (state = defaultState, action) => {
  switch(action.type) {
      
      case LOADARTICLELIST:
        return state.set('articleList',Map(action.articleList))

      case LOADCURTAG:
        return state.setIn(['single','curArticleTag'], action.curArticleTag)

      // case LOADINHOT:
      //   return state.set('inhotList', Map(action.inhotList))
        
      // case LOADIMGHOT:
      //   return state.setIn(['single','curMonths'], action.curMonths)
      
      // case LOADSUBJECT:
      //   // console.log(action.subjectList)
      //   return state.set('subjectList', Map(action.subjectList))
     
      //   case LOADSUBJECTIMG:
      //     return state.setIn(['single','curSubject'], action.curSubject)
     
      default:
          return state
  }
}

export default reducer