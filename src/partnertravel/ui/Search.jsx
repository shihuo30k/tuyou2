import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from 'antd-mobile'

import BackIcon from '@a/images/NavBar-Back.svg'


import {SearchWrap} from './styledPartnerTravel'
const Search= (props) => {
    const history = useHistory()
    return (
        <SearchWrap>
            <NavBar
            mode="light"
            icon = {<img src={BackIcon} alt=""></img>}
            onLeftClick={() => history.goBack()}
            rightContent="我的结伴"
            >
                {props.children}
            </NavBar>
        </SearchWrap>
    )
}
export default Search