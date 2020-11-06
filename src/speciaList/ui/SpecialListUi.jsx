import React from 'react'
import NavBar from '@c/recommend/NavBarRecommend'
import {SpeciaListWrap,NavBarEll,WhiteSpace} from './StyledSpecialList'
import SpecialList from './SpecialList' 

export default (props) => {
    // console.log(props.specialData)
    const {cate, list} = props.specialData
    return (
        <SpeciaListWrap>
            <NavBar>
                <NavBarEll lc={1}>{cate}</NavBarEll>
            </NavBar>
            <WhiteSpace></WhiteSpace>
            <SpecialList list={list}></SpecialList>
        </SpeciaListWrap>
    )
}