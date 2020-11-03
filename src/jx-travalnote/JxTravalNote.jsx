import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import NavBarRecommend from "@c/recommend/NavBarRecommend"
import {TravalDetail,ContentWrap} from './StyledJxTraval'
import { get } from '@u/http'

@withRouter
class TravalNoteDetail extends Component {
    state = {
        currentPage:{}
    }
    async componentDidMount() {
        const result = await get({
            url:'/api/list'
        })
        const id = this.props.location.state.id
        const currentPage = result.data.list.find(value => {
            return id === value.data.id
        })
        // console.log(currentPage)
        this.setState({
            currentPage
        })
    }
    render () {
        const { data }= this.state.currentPage
        
        return (
            <TravalDetail>
                <NavBarRecommend>精选游记</NavBarRecommend>
                <div className="container">
                    <div className="image">
                        <img src={data ? data.image : ''} alt=""/>
                    </div>
                    <div className="main">
                        <h2>{data ? data.title : ''}</h2>
                        <div className="type">
                            <span>精华</span>
                            <img src="http://yl.charmiot.com/travel_qygbz1/images/%E6%B8%B8%E8%AE%B0/u1049.svg" alt=""/>
                        </div>
                        <div 
                        className="bottom">
                            <div className="avatar">
                                {
                                    data && data.bottom && data.bottom.user && <img src={data.bottom.user.logo} alt=""/>
                                }
                            </div>
                            <div>
                                <div className="name">
                                    <h3>{data && data.bottom && data.bottom.user && data.bottom.user.name }</h3>
                                    <img src="http://yl.charmiot.com/travel_qygbz1/images/%E6%B8%B8%E8%AE%B0/u1040.svg" alt=""/>
                                </div>
                                <p className="num">888回复 | 66回复 | 9999999浏览</p>
                                <span className="date">发布于2020年11-11 18:18</span>
                            </div>
                        </div>
                    </div>
                    <ContentWrap 
                    width="1px 0 0 0"
                    className="content">
                        {data ? data.content : ''}
                    </ContentWrap>
                </div>
            </TravalDetail>
        )
    }
}

export default TravalNoteDetail