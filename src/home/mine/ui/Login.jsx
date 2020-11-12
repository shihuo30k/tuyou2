import React,{useCallback, useState} from 'react'

import { Logins } from '../StyledMine'


import { useHistory,withRouter } from 'react-router-dom'

import login1 from '@a/images/login-1.svg'
import login2 from '@a/images/login-2.svg'
import login3 from '@a/images/login-3.svg'
import login4 from '@a/images/login-4.svg'




const Login = ()=>{

    const [textValue, settextValue] = useState('')

    const [PassValue,setPassValue] = useState('')

    let history = useHistory()

    const handlerClick=useCallback(() => {
        return () => {
            history.push('/ResetPassword')
            
        }
    },[history])


    const handleClick = useCallback(() => {
        return () => {
            history.push('/CreateUser')
        }
    },[history])

    // 接收手机号码的值
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

    // 接收密码的值
    const handleChange1 = () => {
        return (e) => {
            // console.log(e.target.value)
            setPassValue(e.target.value)
        }
    }
    console.log(PassValue)

    // 获取input 数据
    const handleSubmit = () => {
        return (e)=>{
            e.preventDefault()
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

    // 关闭登录页面
    const handlerOff = () => {
        return ()=>{
            history.goBack();
        }
    }




    return (
        <Logins>
            <div>
        <div
        className="guanbi"
        onClick={handlerOff()}
        >
            <img src={login2} alt=""/>
        </div>
        <div className="tou">
            <div className="touxiang">
                <img src={login1} alt=""/>
            </div>
            <form 
               onSubmit={handleSubmit()}
            >
                <label htmlFor="" className="label">
                    <img src={login3} alt=""/>
                    <input 
                    type="text" 
                    value={textValue}
                    onChange={handleChange()}
                    placeholder="手机号码"
                    />
                    <span className="dui">√</span>
                    <span className="cuo">×</span>
                </label>
                <label htmlFor="">
                    <img src={login4} alt=""/>
                    <input type="password"
                    className="input1" 
                    placeholder="登录密码"
                    value={PassValue}
                    onChange={handleChange1()}
                     />
                </label>
                <div className="password">
                <span 
                   onClick={handlerClick()}
                >忘记密码</span>
                </div>
                <button>登录</button>
                <div className="new">
                    <span
                       onClick={handleClick()}
                    >创建账户</span>
                </div>
            </form>
        </div>
        </div>
        </Logins>
    )
}

export default withRouter(Login);