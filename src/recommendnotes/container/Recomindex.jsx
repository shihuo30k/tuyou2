import React,{ useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { loadDataAsync } from '../actioncreator'
import Recomindexui from '../ui/Recomindexui'
// @connect(
//     (state)=>{
//        return {
//            list:state.Recomindex.list
//        }
//     },
//     (dispatch)=>({
//        loadData(){
//            dispatch(loadDataAsync())
//        }
//     })
// )
// class Recomindex extends Component{
//     render(){
//         return(
//             <Recomindexui list={this.props.list}></Recomindexui>
//         )
//     }

//     componentDidMount(){
//         this.props.loadData()
//     }
//     componentDidUpdate(){
//         // console.log(this.props.list)
//     }
// }

// export default Recomindex

const Recomindex=(props)=>{
    
    let state=useSelector(state=>state)
    state=state.getIn(['recomindexreducer','list'])
    state=state.toJS()
    const dispatch=useDispatch()
    useEffect((props)=>{
        dispatch(loadDataAsync())
    },[dispatch])
    return(
         <Recomindexui list={state}></Recomindexui>         
    )
}

export default Recomindex