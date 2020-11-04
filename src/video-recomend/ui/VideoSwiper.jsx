import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Carousel } from 'antd-mobile'
import {loadVideoBannersAsync} from '../actionCreator'


export default (props) => {
    const videoBanners = useSelector(state => state.getIn(['video', 'videoBanners']))
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadVideoBannersAsync())
    },[dispatch])
    // console.log(videoBanners)
    return (
        <Carousel
        autoplay={true}
        infinite
        >
            {
                videoBanners && videoBanners.map((value, index) => {
                    return (
                        <img src={value.img} key={index} alt="" onLoad={() => {dispatchEvent(new Event('resize'))}}/>
                    )
                })
            }
        </Carousel>
    )
}