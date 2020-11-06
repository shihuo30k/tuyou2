import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import SpecialDetailUi from '../ui/SpecialDetailUi'

export default (props) => {
    const [data, setDate] = useState({})
    const {value} = useHistory().location.state
    useEffect(() => {
        setDate(value)
    },[value])
    return (
        <SpecialDetailUi data={data}></SpecialDetailUi>
    )
}