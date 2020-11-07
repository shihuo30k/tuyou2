import React, {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import  VisaUi from '../ui/VisaUi'
import actionCreator from '../actionCreator'



const Visa = ()=> {

  const state = useSelector(state => state.get('visa'))
  console.log(state)

  const visaList = useSelector(state => state.getIn(['visa','visaList']))

  let visaListShow = visaList.toJS().data
  console.log(visaListShow)

  
    const compare =(property)=>{
        return function(a,b){
            var value1 = a[property];
            var value2 = b[property];
            return value1 - value2;
        }
    }
  
  const dispatch = useDispatch()

  
 
  useEffect(() => {
    // dispatch(actionCreator.loadCurShowListSync(visaListShow))
    dispatch(actionCreator.loadVisaDataAsync())
    
  }, [dispatch])

  
  const onChangeSort = (e)=> {
    if(e.target.innerHTML==="综合排序"){

      dispatch(actionCreator.loadCurShowListSync(visaListShow && visaListShow.sort(compare("price"))))
    }else{
      dispatch(actionCreator.loadCurShowListSync(visaListShow && visaListShow.sort(compare("has_sale"))))
    }
   
  }
    return (
      <div >
        <VisaUi  changeSortx={onChangeSort}></VisaUi>
      </div>
    )
  
}

export default Visa
