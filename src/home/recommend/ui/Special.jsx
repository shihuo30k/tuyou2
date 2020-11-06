import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import BScroll from '@better-scroll/core';
import {SpecialWrap} from './StyledRecommend'

export default (props) => {
    const specialData = props.specialData
    const history = useHistory()
    // console.log(specialData)
    useEffect(() => {
        new BScroll(".specialScroll",{
            scrollX: true,
            preventDefault:false
        })
    })
    return (
        <SpecialWrap>
            <h1>精选专题</h1>
            <div className="specialScroll">
                <ul>
                    {
                        specialData.map(value => {
                            return(
                                <li
                                onClick={() => {history.push('/special_list',{value})}}
                                key= {value.cate}
                                >
                                    <div className="images">
                                        <img src={value.list[0].img} alt=""/>
                                        <p>{value.cate}</p>
                                    </div>
                                    <h2>{value.sign}</h2>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </SpecialWrap>
    )
}