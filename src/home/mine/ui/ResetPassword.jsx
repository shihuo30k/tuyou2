import React from 'react'

import { Reset } from '../StyledMine'

import NavBarRecommend from '@c/recommend/NavBarRecommend'

import { withRouter } from 'react-router-dom'

import login8 from '@a/images/login-8.svg'
import login3 from '@a/images/login-3.svg'
import login4 from '@a/images/login-4.svg'

const Login = () => {




    


    return (
        <Reset>
            <NavBarRecommend>重置密码</NavBarRecommend>
            <div>
       
        <div className="tou">
           
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
                
                </div>
                <button type="submit">确认</button>
                <div className="new">
                </div>
            </form>
        </div>
        </div>
        </Reset>
    )
}

export default withRouter(Login);