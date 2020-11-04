import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import PartnerTracelUi from '../ui/PartnerTracelUi'
import actionCreator from '../../home/community/actionCreator';
import {
  get
} from '@u/http'


export default function PartnerTravel() {
  const state = useSelector(state => state.getIn(['community','partnerShipList']))
  // console.log(state.toJS());
  const dispatch = useDispatch()
  useEffect(() => {
    
   ( async()=>{
      let result =await get({
        url:'/api/partner'
      })
      // console.log(result.data.data);
      dispatch(actionCreator.setPsl(result.data.data))
    })()
  }, [dispatch])
  return (
    <div>
         <PartnerTracelUi
          list = {state}
         ></PartnerTracelUi>
    </div>
  )
}


