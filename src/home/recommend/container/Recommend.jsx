import React, { Component } from 'react';
import { connect } from 'react-redux'
import {PullToRefresh} from 'antd-mobile'

import { 
    loadBannerDataAsync,
    loadTravalDataAsync,
    loadQuestionDataAsync,
    changeTravalListState,
    loadSpecialDataAsync
} from '../actionCreator'
import RecommendUi from '../ui/RecommendUi'

import nav1 from '@a/images/nav1.svg'
import nav2 from '@a/images/nav2.svg'
import nav3 from '@a/images/nav3.svg'
import nav4 from '@a/images/nav4.svg'
import nav5 from '@a/images/nav5.svg'

@connect(
    (state) => {
        // console.log(state.getIn(['recommend', "specialData"]))
        // console.log(state.getIn(['recommend','travalListState','travalPage']))
        return {
            bannerList: state.getIn(['recommend', 'bannerList']),
            travalList: state.getIn(['recommend', 'travalList']),
            questionList: state.getIn(['recommend','questionList']),
            specialData:state.getIn(['recommend', "specialData"]),
            refreshing:state.getIn(['recommend', 'travalListState', 'refreshing']),
            travalPage:state.getIn(['recommend', 'travalListState', 'travalPage']),
        }
    },
    (dispatch) => ({
        loadBannerData() {
            dispatch(loadBannerDataAsync())
        },
        loadTravalData() {
            dispatch(loadTravalDataAsync())
        },
        loadQuestionData() {
            dispatch(loadQuestionDataAsync())
        },
        changeTraval(action) {
            dispatch(changeTravalListState(action))
        },
        loadSpecialData() {
            dispatch(loadSpecialDataAsync())
        }
    })
)
class Recommend extends Component {
    state = {
        navList:[
            {
                id:1,
                title:'锦囊',
                svg:nav1,
                url:'/jn'
            },
            {
                id:2,
                title:'视频',
                svg:nav2,
                url:'/video'
            },
            {
                id:3,
                title:'问答',
                svg:nav3,
                url:'/qa'
            },
            {
                id:4,
                title:'结伴',
                svg:nav4,
                url:'/pt'
            },
            {
                id:5,
                title:'专栏',
                svg:nav5,
                url:'/section'
            },
        ]
    }
    componentDidMount() {
        this.props.loadBannerData()
        this.props.loadTravalData()
        this.props.loadQuestionData()
        this.props.loadSpecialData()
    }
    componentDidUpdate() {
        // console.log(this.props.bannerList)
        // console.log(this.props.travalList)
    }
    render() {
        return (
            <div>
                <PullToRefresh
                style={{
                    height: document.documentElement.clientHeight,
                    overflow: 'auto',
                }}
                damping={80}
                direction={'up'}
                refreshing={this.props.refreshing}
                onRefresh={() => {
                    this.props.changeTraval({
                        refreshing:true,
                        travalPage:this.props.travalPage + 1
                    })
                }}
                >
                    <RecommendUi
                        bannerList={this.props.bannerList}
                        navList = {this.state.navList}
                        travalList = {this.props.travalList}
                        questionList = {this.props.questionList}
                        specialData = {this.props.specialData}
                    ></RecommendUi>
                </PullToRefresh>
            </div>
        );
    }
}

export default Recommend;