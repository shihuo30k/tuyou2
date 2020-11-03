import React, {useEffect} from 'react'
import BScroll from '@better-scroll/core';
import {SpecialWrap} from './StyledRecommend'

export default (props) => {
    const specialList = props.travalList.slice(3, 9)
    useEffect(() => {
        new BScroll(".specialScroll",{
            scrollX: true,
        })
    })
    return (
        <SpecialWrap>
            <h1>精选专题</h1>
            <div className="specialScroll">
                <ul>
                    {
                        specialList.map(value => {
                            return(
                                <li
                                key= {value.data.id}
                                >
                                    <div className="images">
                                        <img src={value.data.image} alt=""/>
                                    <p>锦鲤养成计划</p>
                                    </div>
                                    <h2>打卡赢大礼</h2>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </SpecialWrap>
    )
}