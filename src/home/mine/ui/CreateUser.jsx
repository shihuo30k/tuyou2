import React from 'react'

import { CreateUsers } from '../StyledMine'

import NavBarRecommend from '@c/recommend/NavBarRecommend'

import { withRouter } from 'react-router-dom'

import login2 from '@a/images/login-1.svg'
import login8 from '@a/images/login-8.svg'
import login3 from '@a/images/login-3.svg'
import login4 from '@a/images/login-4.svg'


import CheckBox from './CheckBox'

const Login = () => {


    return (
        <CreateUsers>
            <NavBarRecommend></NavBarRecommend>
            <div>
        
        <div className="tou">
            <div className="touxiang">
                <img src={login2} alt=""/>
            </div>
            <form action="">
                <label htmlFor="">
                    <img src={login3} alt=""/>
                    <input type="text" placeholder="手机号码"/>
                </label>
                <label htmlFor="">
                    <img src={login8} alt=""/>
                    <input type="text" placeholder="登录密码" />
                    <p>发送验证码</p>
                </label>
                <label htmlFor="">
                    <img src={login4} alt=""/>
                    <input type="text" placeholder="输入新的登录密码" />
                </label>
                <div className="password">
                    <CheckBox></CheckBox>
                
                </div>
                <button type="submit">确认</button>
                <div className="new">
                </div>
            </form>
        </div>
        </div>
        </CreateUsers>
    )
}

export default withRouter(Login);