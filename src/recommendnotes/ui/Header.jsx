import React, { Component } from 'react'
import { Headercon } from './styledRecomindex'
import { withRouter } from 'react-router-dom'

@withRouter
    class Header extends Component{
    constructor(props){
        super(props)
        this.handlerclick=this.handlerclick.bind(this)
    }
    state={
        leftsrc:'http://yl.charmiot.com/travel_qygbz1/images/%E9%94%A6%E5%9B%8A/u833.svg',
        rightsrc:'http://yl.charmiot.com/travel_qygbz1/images/%E5%9F%8E%E5%B8%82/u960.svg'
        
    }
    handlerclick(){
        this.props.history.goBack();
    }
    render(){
        return(
            <Headercon>
                <img src={this.state.leftsrc} alt="" onClick={this.handlerclick}/>
                <span>精选游记</span>
                <img src={this.state.rightsrc} alt=""/>
            </Headercon>
        )
    }
}

export default Header