import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'

import actionCreator from '../actionCreator'

import  DestinationUi  from '../ui/DestinationUi'

const Destination = (props)=> {

  // const state = useSelector(state => state.destination)
  const state = useSelector(state => state.get('destination'))
 
  // console.log(state)

  const dispatch = useDispatch()
 
  useEffect(() => {

    dispatch(actionCreator.loadInhotDataAsync())

    dispatch(actionCreator.loadSubjectDataASync())

  }, [dispatch])


        return (
          <div>
            <DestinationUi
              inhotList={state.inhotList}
            ></DestinationUi>
          </div>
        );
    
}

export default Destination;