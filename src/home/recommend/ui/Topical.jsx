import React, {useEffect, useState} from 'react'
import BScroll from '@better-scroll/core';
import {TopicalWrap} from './StyledRecommend'
export default (props) => {
    const { topicalList } = props
    const [colors] = useState({
        list:[
            '#61c1be',
            '#d361c1',
            '#e47360',
            '#e59d45'
        ]
    })

    useEffect( () => {
        new BScroll('.wrapper', {
            scrollX: true, 
          })
    })

    return (
        <>
            <h2 style={{paddingLeft:".1rem",marginBottom:".1rem",fontSize: ".12rem"}}>今日话题</h2>
            <TopicalWrap className="wrapper">
                <ul className='content'>
                    {
                        topicalList.map((value, key) => {
                            return (
                            <li
                            key={key}
                            style={{backgroundColor: colors.list[key % 4]}}
                            >
                                {value.question_title}
                            </li>
                            )
                        })
                    }
                </ul>
            </TopicalWrap>
        </>
    )
}