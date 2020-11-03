import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Carousel
} from 'antd-mobile'

import img1 from '@a/images/index1.jpg'
import img2 from '@a/images/index2.jpg'
import img3 from '@a/images/index3.jpg'

import {
    Container,
    GuidePageWrap
} from './StyledGuidPage'

const EnterHome = (props) => {
    let { EnterHomeHandleClick} = props
    return (
        <Container>
            <img src={ img3 } alt=""/>
                <p onClick={EnterHomeHandleClick}>
                    进入首页
                </p>
        </Container>
    )
}

EnterHome.propTypes = {
    EnterHomeHandleClick: PropTypes.func
}

class GuidePage extends Component {
    
    render() {
        return (
            <GuidePageWrap>
                <Carousel
                >
                    <img src={ img1 } alt=""/>
                    <img src={ img2 } alt=""/>
                    <EnterHome {...this.props}></EnterHome>
                </Carousel>
            </GuidePageWrap>
        );
    }
}

export default GuidePage;