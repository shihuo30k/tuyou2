
import React, { Component } from 'react';

import Login  from './Login'
import LogWay from './LogWay'

import {
    Loginss
} from '../StyledMine'


class LoginUi extends Component {
    render() {
        return (
            <Loginss>
                <Login></Login>
                <LogWay></LogWay>
            </Loginss>
        );
    }
}

export default LoginUi;