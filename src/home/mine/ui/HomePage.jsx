import React, { useCallback } from 'react';


import { useHistory,withRouter } from 'react-router-dom'

import touxiang from '@a/images/touxiang.png'

import {
    Container
} from '../StyledMine'



const HomePage = () =>  {
    let history = useHistory()

    const handleClick=useCallback(() => {
        return () => {
            history.push('/Login')
            
        }
    },[history])
        return (
            <Container>
                <div>
                   <ul>
                       <li>
                           <img src={touxiang} alt=""/>
                       </li>
                       <li
                          onClick={handleClick()}
                       >
                           点击登录
                           {/* <span>朝九晚五</span> */}
                       </li>
                       <li>个人主页 {">"}</li>
                   </ul>
                </div>
            </Container>
        );
    }


export default withRouter(HomePage);