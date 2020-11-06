import React from 'react'
import {useHistory} from 'react-router-dom'
import DateSelectUi from '../ui/DateSelectUi'

export default (props) => {
    const history = useHistory()
    const {data} = history.location.state
    return (
        <DateSelectUi data={data}></DateSelectUi>
    )
}