import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Carousel } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import {loadVideoBannersAsync} from '../actionCreator'


export default (props) => {
    const videoBanners = useSelector(state => state.getIn(['video', 'videoBanners']))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadVideoBannersAsync())
    },[dispatch])
    const history = useHistory()
    // console.log(videoBanners)
    return (
        <Carousel
        autoplay={true}
        infinite
        >
            {
                videoBanners && videoBanners.map((value, index) => {
                    return (
                        <img src={value.img} key={index} alt="" onClick={() => {history.push('/video_detail', {value, type:'banner'})}} onLoad={() => {dispatchEvent(new Event('resize'))}}/>
                    )
                })
            }
        </Carousel>
    )
}