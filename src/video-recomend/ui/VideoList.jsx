import React from 'react'
import _ from 'lodash'
import { useHistory } from 'react-router-dom'
import {VideoListWrap, ItemListWrap} from './StyledVideo'

export default (props) => {
    const arr = props.videoData
    const resultObj = _.groupBy(arr,'type')
    const types = Object.keys(resultObj)
    const history = useHistory()
    // const data = Object.values(resultObj)
    // console.log(arr)
    return (
        <VideoListWrap>
            {
                types.map((value, index) => {
                    const currentData = _.groupBy(resultObj[value],'name')
                    return (
                        <div key={index}>
                            <h2>{value}</h2>
                            {
                                Object.keys(currentData).map((value, index) => {
                                    // console.log(currentData[value][0].logo)
                                    return (
                                        <div key={index}>
                                            <div className='author'>
                                                <div className='avatar'>
                                                    <img src={currentData[value][0].logo} alt=""/>
                                                </div>
                                                <div className='content'>
                                                    <h3>{value}</h3>
                                                    <p>享受旅游的感觉</p>
                                                </div>
                                                <div className="all">
                                                    {"全部>"}
                                                </div>
                                            </div>
                                            <ItemListWrap 
                                            width="0 0 1px 0"
                                            className="itemList">
                                                {
                                                    currentData[value].map((value, index) => {
                                                        // console.log(value)
                                                        return (
                                                            <li
                                                            onClick={() => {history.push('/video_detail', {value, type:'list'})}} 
                                                            key={index}>
                                                                <div className='listPoster'>
                                                                    <img src={value.poster} alt=""/>
                                                                </div>
                                                                <p className="listTitle">{value.title}</p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                                
                                            </ItemListWrap>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </VideoListWrap>
    )
}