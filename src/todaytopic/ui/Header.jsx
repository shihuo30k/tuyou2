import  React from 'react'
import { useHistory } from "react-router-dom"
import { Headercon } from './styledtodaytopic'

const Header=(props)=>{
    const history=useHistory()
    const handlerclick=()=>{
        history.goBack()
    }
    return(
        <Headercon>
            <div className="left" onClick={handlerclick}>
                <img src="http://yl.charmiot.com/travel_qygbz1/images/%E9%94%A6%E5%9B%8A/u833.svg" alt=""/>
            </div>
            <span>今日话题</span>
            <div className="right">
                <img src="http://yl.charmiot.com/travel_qygbz1/images/%E6%B8%B8%E8%AE%B0/u982.png" alt=""/>
                <img src="http://yl.charmiot.com/travel_qygbz1/images/%E5%9F%8E%E5%B8%82/u960.svg" alt=""/>
            </div>
        </Headercon>
    )
}

export default Header