import React,{useState} from 'react'

import { Reset } from '../StyledMine'

import NavBarRecommend from '@c/recommend/NavBarRecommend'

import { withRouter } from 'react-router-dom'

import login8 from '@a/images/login-8.svg'
import login3 from '@a/images/login-3.svg'
import login4 from '@a/images/login-4.svg'

const Login = () => {

    const [textValue, settextValue] = useState('')

    const [PassValue,setPassValue] = useState('')

    const [YanZheng,setYanZheng] = useState('')

    // console.log(YanZheng)
    // console.log(textValue)
    // console.log(PassValue)

    const handleChange = () => {
        return (e) => {
            settextValue(e.target.value)
            let p=phoneFun(textValue)
            let s=document.querySelector('.dui');
            let y=document.querySelector('.cuo')
            if(p){
                s.style.display="block";
                y.style.display="none";
            }else{
                s.style.display="none";
                y.style.display="block";
            }
        }
    }


    const handleChange1 = () => {
        return (e) => {
            setPassValue(e.target.value)
        }
    }


    const handleChange2 = () => {
        return (e) => {
            setYanZheng(e.target.value)
        }
    }


    function phoneFun(phones){
        var myreg = /^[1][3,4,5,7,8,9][0-9]{8}$/;
        if (!myreg.test(phones)) {
          return false;
        } else {
          return true;
        }
    }

    


    return (
        <Reset>
            <NavBarRecommend>重置密码</NavBarRecommend>
            <div>
       
        <div className="tou">
           
            <form action="">
                <label htmlFor="">
                    <img src={login3} alt=""/>
                    <input type="text" placeholder="手机号码" value={textValue}
                    onChange={handleChange()}/>
                    <span className="dui">√</span>
                    <span className="cuo">×</span>
                </label>
                <label htmlFor="">
                    <img src={login8} alt=""/>
                    <input type="text" placeholder="登录密码" value={YanZheng} onChange={handleChange2()}/>
                    <p>发送验证码</p>
                </label>
                <label htmlFor="">
                    <img src={login4} alt=""/>
                    <input type="password" placeholder="输入新的登录密码" value={PassValue}
                    onChange={handleChange1()}/>
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