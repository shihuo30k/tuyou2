import React from 'react'
import {AdvertisingWrap} from './StyledRecommend'
import image from '@a/images/guanggao.jpg'

export default (props) => {
    return (
        <AdvertisingWrap>
            <div className="image">
                <img src={image} alt=""/>
                <span>广告</span>
            </div>
        </AdvertisingWrap>
    )
}