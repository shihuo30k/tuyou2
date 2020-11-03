import React, { useEffect, useState } from 'react';
import {get} from '@u/http'
import JnUi from '../ui/JnRecommend'

export default (props) => {
    const [list, setList] = useState([])
    useEffect(() => {
        const loadData = async () => {
            let res = await get({
                url:'/api/jnguide'
            })
            // console.log(res.data.data)
            setList(res.data.data)
        }
        loadData()
    },[]) 
    return (
        <div style={{height:"100%"}}>
            <JnUi JnGuideList={list}></JnUi>
        </div>
    )
}