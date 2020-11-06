import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from 'antd-mobile'

import BackIcon from '@a/images/NavBar-Back.svg'
import LikeIcon from '@a/images/NavBar-Like.png'
import RightIcon from '@a/images/NavBar-right.svg'

import {NavBarWrap, FixedContainer} from './StyledNavBar'
export default (props) => {
    const history = useHistory()
    return (
        <FixedContainer>
            <NavBarWrap
            width="0 0 1px 0"
            >
                <NavBar
                mode="light"
                icon = {<img src={BackIcon} alt=""></img>}
                onLeftClick={() => history.goBack()}
                rightContent={[
                    <img src={LikeIcon} alt="" key={1}></img>,
                    <img src={RightIcon} alt="" key={2}></img>
                ]}
                >
                    {props.children}
                </NavBar>
            </NavBarWrap>
        </FixedContainer>
    )
}