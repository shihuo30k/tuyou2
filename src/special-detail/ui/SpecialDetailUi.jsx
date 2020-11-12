import React from 'react'
import { useHistory } from 'react-router-dom'
import {SpecialDetailWrap} from './StyledSpecialDetail'

import SelectDate from './SelectDate'
import ProductDetail from './ProductDetail'

export default (props) => {
    const data = props.data
    const history = useHistory()
    return (
        <SpecialDetailWrap>
            <div className="banner">
                <img src={data.big_img} alt=""/>
                <div className='top'>
                    <i className='icon-back' onClick={() => {history.goBack()}}></i>
                    <b className='icon-share'></b>
                </div>
            </div>
            <div className="title">
                {data.title}
            </div>
            <div className="priceInfo">
                <span className='price'>{data.num}</span>
                <div className='pright'>
                    <p>浏览3452</p>
                    <p>已售5份</p>
                </div>
            </div>
            <SelectDate data={data}></SelectDate>
            <ProductDetail></ProductDetail>
        </SpecialDetailWrap>
    )
}