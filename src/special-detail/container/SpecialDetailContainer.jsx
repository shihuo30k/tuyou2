import React from 'react'
import {useHistory} from 'react-router-dom'
import SpecialDetailUi from '../ui/SpecialDetailUi'

export default (props) => {
    const {value} = useHistory().location.state
    console.log(value)
    return (
        <SpecialDetailUi data={value}></SpecialDetailUi>
    )
}