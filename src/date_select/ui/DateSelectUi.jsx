import React from 'react'
import {DateSelectWrap} from './StyledDateSelect'
import Calendar from './Calendar'

export default (props) => {
    const data = props.data
    return (
        <DateSelectWrap>
            <div className="header">
                <p>{data.title}</p>
            </div>
            <Calendar data={data}></Calendar>
        </DateSelectWrap>
    )
}