import React from 'react'
import {useHistory} from 'react-router-dom'
import SpecialListUi from '../ui/SpecialListUi'

export default (props) => {
    const history = useHistory()
    const data = history.location.state.value
    return(
        <SpecialListUi specialData={data}></SpecialListUi>
    )
}