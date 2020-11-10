import React from 'react'

import {
    Logins
} from '../StyledMine'

import Login7 from '@a/images/login-7.png'
import Login5 from '@a/images/login-5.svg'
import Login6 from '@a/images/login-6.svg'

const LogWay = ()=>{
    return(
        <Logins>
           <div className="or">
               <div className="or1">
                   <img src={Login7} alt=""/>
                   <span>OR</span>
                   <img src={Login7} alt=""/>
               </div>
               <div className="way">
                   <div className="way1">
                       <button>
                       <img src={Login5} alt=""/>
                        微信账号登录
                       </button>
                   </div>
                   <div className="way2">
                       <button>
                       <img src={Login6} alt=""/>
                         微博账号登录
                       </button>
                   </div>
               </div>
           </div>
        </Logins>
    )
}


export default LogWay;