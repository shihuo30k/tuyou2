import React from 'react'
import TravalNote from './TravalNote'
import {useSelector} from 'react-redux'

export default (props) => {
    const travalPage = useSelector(state => state.getIn(['recommend','travalListState','travalPage']))
    const travalList = props.travalList.slice(0, travalPage * 5)
    return (
        <div>
                {travalList.map(value => (
                    <TravalNote
                    key={value.data.id}
                    id={value.data.id}
                    title={value.data.title}
                    content={value.data.content}
                    bottom={value.data.bottom}
                    image= {value.data.image}
                    lc={2}
                    ></TravalNote>
                ))}
        </div>
    )
}