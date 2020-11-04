import { LOADDATA } from './actiontypes'
import { get } from "@u/http.js"
const loadersync=(list)=>{
    return{type:LOADDATA,list}
}

const loadDataAsync=()=>{
    return async(dispatch)=>{
        let result=await get({
            url:"/api/recomindex"
        })
        dispatch(loadersync(result.data))
    }
}

export{
    loadersync,
    loadDataAsync
}