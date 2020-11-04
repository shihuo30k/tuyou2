import { fromJS,Map} from "immutable"
import { LOADDATA } from './actiontypes'

const defaultState=fromJS({
    list:Map()
})
const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case LOADDATA:
            return state.set('list',fromJS(action.list))
        default:
            return state
    }
}

export default reducer