import React from 'react'

import { Logins } from '../StyledMine'

import login1 from '@a/images/login-1.svg'
import login2 from '@a/images/login-2.svg'
import login3 from '@a/images/login-3.svg'
import login4 from '@a/images/login-4.svg'

const Login = () => {
    return (
        <Logins>
        <div className="guanbi">
            <img src={login2} alt=""/>
        </div>
        <div className="tou">
            <div className="touxiang">
                <img src={login1} alt=""/>
            </div>
            <form action="">
                <label htmlFor="">
                    <img src={login3} alt=""/>
                    <input type="text" placeholder="手机号码"/>
                </label>
                <label htmlFor="">
                    <img src={login4} alt=""/>
                    <input type="text" placeholder="登录密码" />
                </label>
                <div className="password">
                <span>忘记密码</span>
                </div>
                <button type="submit">登录</button>
                <div className="new">
                    <span>创建账户</span>
                </div>
            </form>
        </div>
        </Logins>
    )
}

export default Login;