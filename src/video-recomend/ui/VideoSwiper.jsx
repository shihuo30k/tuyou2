import React from 'react'
// import {useSelector, useDispatch} from 'react-redux'
import { Carousel } from 'antd-mobile'
// import {loadVideoBannersAsync} from '../actionCreator'


export default (props) => {
    // const videoBanners = useSelector(state => state)
    // console.log(videoBanners)
    return (
        <Carousel
        autoplay={true}
        infinite
        >
            <img src="" alt="" onLoad={() => {dispatchEvent(new Event('resize'))}}/>
            <img src="" alt="" onLoad={() => {dispatchEvent(new Event('resize'))}}/>
            <img src="" alt="" onLoad={() => {dispatchEvent(new Event('resize'))}}/>
            <img src="" alt="" onLoad={() => {dispatchEvent(new Event('resize'))}}/>
        </Carousel>
    )
}