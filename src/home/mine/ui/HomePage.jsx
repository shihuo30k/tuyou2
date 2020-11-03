import React, { Component } from 'react';

import touxiang from '@a/images/touxiang.png'

import {
    Container
} from '../StyledMine'

class HomePage extends Component {
    render() {
        return (
            <Container>
                <div>
                   <ul>
                       <li>
                           <img src={touxiang} alt=""/>
                       </li>
                       <li>
                           浪迹天涯
                           <span>朝九晚五</span>
                       </li>
                       <li>个人主页 {">"}</li>
                   </ul>
                </div>
            </Container>
        );
    }
}

export default HomePage;